import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  FormArray,
  ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';

import {
  targetStore,
  isUndefined,
  isFunction,
  isPrimitive,
  stringify,
  directMapper,
  PropMetadata,
  PropertyContainer,
  MapperFactory,
  PoClassPropertyMap,
  SerializeMapper,
  DualKeyMap,
  DeserializeMapper,
  DirectDeserializeMapper,
  PlainObjectMapper
} from '@tdm/core/tdm';

import { FormModelMetadata, FormPropMetadata } from './metadata/index';

export type DeserializableForm = FormGroup | FormArray;

export class NgFormsDeserializeMapper extends DirectDeserializeMapper {
  readonly raw: boolean = true;

  constructor(public formGroup: DeserializableForm, sourceType: any, plainMapper?: PlainObjectMapper) {
    super(formGroup.value, sourceType, plainMapper);
  }

  getIdentity(): string {
    // TODO: Move to the global store, so logic can change without bugs.
    return this.formGroup.get(this.identity).value;
  }

  getKeys(): string[] {
    // we don't care about excluded `FormPropMetadata` because they will not get here since the serializer
    // will not include them, it should be a closed loop.
    const controls = this.formGroup.controls;
    return Object.keys(controls).filter( k => controls[k].dirty);
  }

  getValue(key: string, prop?: PropMetadata): any {
    const control = this.formGroup.get(key);
    if (prop && !(control instanceof FormControl) ) {
      let value = (<any> control).getRawValue();
      const rel = this.getRelationQuery(prop, value);
      if (rel) {
        value = rel;
      }

      if (targetStore.hasTarget(prop.type.ref)) {
        return this.getCache(prop.type.ref, value) || this.deserialize(<any> control, prop);
      } else {
        const formModel = targetStore.getMetaFor(this.sourceType, FormModelMetadata, true);
        const formProp = formModel && (formModel.getProp(prop.name as string) || FormPropMetadata.EMPTY);
        if (formProp && formProp.flatten) {
          return this.deserializeFlattened(<any> control, key, formProp.flatten);
        }
      }
    }
    // if we are here, no prop or no prop type registered
    const value = control.value;
    return typeof value === 'object'
      ? this.plainMapper.deserialize(value)
      : value
    ;
  }

  protected deserialize(value: DeserializableForm, prop: PropMetadata): any {
    const mapper = this.ref
      ? new NgFormsChildDeserializeMapper(value, prop.type.ref, this.existing)
      : directMapper.deserializer(value, prop.type.ref)
    ;

    return targetStore.deserialize(mapper, this.ref ? this.ref[prop.name] : undefined);
  }

  protected deserializeFlattened(control: DeserializableForm,
                                 controlKey: string,
                                 props: { [keys: string]: FormPropMetadata },
                                 result?: any): any {
    if (!result) {
      result = {};
    }
    const keys = Object.keys(props);
    for (let key of keys) {
      const childCtrl = control.get(key);
      const p = props[key];
      let value: any = keys; // keys is unique so it can never be set from the outside.
      if (p.flatten) {
        if (childCtrl.dirty) {
          value = this.deserializeFlattened(<any> childCtrl, key, p.flatten, result[key]);
        }
      } else if (childCtrl.dirty) {
        value = true;
      } else if (p.hasOwnProperty('defaultValue') && p.defaultValue === control.get(key).value) {
        value = true;
      }
      switch (value) {
        case keys:
          break;
        case true:
          result[key] = control.get(key).value;
          break;
        default:
          if (result[key]) {
            Object.assign(result[key], value);
          } else {
            result[key] = value;
          }
          break;
      }
    }
    return result;
  }
}

export class NgFormsChildDeserializeMapper extends NgFormsDeserializeMapper {
  constructor(formGroup: DeserializableForm, sourceType: any, protected existing: DualKeyMap<any, string, any>) {
    super(formGroup, sourceType);
  }
}

export class NgFormsSerializeMapper extends SerializeMapper {
  protected cache: Map<any, any>;

  serialize(container: PropertyContainer): any {
    if (!this.cache) {
      this.cache = new Map<any, any>();
    }

    if (Array.isArray(this.source)) {
      return this.serializeCollection(this.source, container);
    } else {
      return this.serializeObject(this.source, container);
    }
  }

  protected serializeObject(obj: any, container: PropertyContainer): FormGroup {
    const formModel = targetStore.getMetaFor(container.target, FormModelMetadata, true);

    if (!formModel) {
      throw new Error(`Target '${stringify(container.target)}' is not a registered FormModel`);
    }

    const data: FormGroup = new FormGroup({}, formModel.validator, formModel.asyncValidator);

    const cb = (prop: PoClassPropertyMap) => {
      const meta = prop.prop;

      if (!meta) {
        return;
      }
      const formProp = formModel.getProp(meta.name as string) || FormPropMetadata.EMPTY;
      const ctrl = this.createControl(formProp, obj[prop.cls], prop.prop);
      if (ctrl) {
        data.addControl(prop.obj, ctrl);
      }
    };

    // don't care if @Excluded was set, if @Prop there we check it
    container.forEachRaw(obj ? Object.keys(obj) : [], cb);

    const idKey = targetStore.getIdentityKey(container.target);
    if (idKey !== targetStore.getIdentityKey(container.target, 'outgoing')) {
      delete data[idKey];
    }

    return data;
  }

  protected createControl(formProp: FormPropMetadata, value: any, prop?: PropMetadata): AbstractControl | undefined {
    if (formProp.exclude) {
      return;
    }

    if (isFunction(formProp.transform)) {
      value = formProp.transform(value);
    }

    if (isUndefined(value)) {
      value = formProp.defaultValue;
    }

    let ctrl: AbstractControl;
    if (prop && formProp.childForm === true && value) {
      ctrl = targetStore.hasTarget(prop.type.ref)
        ? this.serializeChild(prop, value)
        : this.serializePlain(value)
      ;
    } else if (formProp.flatten) {
      value = this.plainMapper.serialize(value) || {};
      ctrl = new FormGroup({});
      Object.keys(formProp.flatten)
        .forEach(key => {
          const flattenedControl = this.createControl(formProp.flatten[key], value[key]);
          if (flattenedControl) {
            (ctrl as FormGroup).addControl(key, flattenedControl);
          }
        });
    } else {
      ctrl = new FormControl(value);
    }

    const validators = this.getValidators(formProp);
    validators[0] && ctrl.setValidators(validators[0]);
    validators[1] && ctrl.setAsyncValidators(validators[1]);

    return ctrl;
  }

  protected getValidators(formProp: FormPropMetadata): [ValidatorFn | null, AsyncValidatorFn | null] {
    const sync: ValidatorFn[] = formProp.validators
      ? formProp.validators.slice()
      : []
    ;

    if (formProp.required === true) {
      sync.push(Validators.required);
    }

    const async = formProp.asyncValidators &&  formProp.asyncValidators.length > 0
      ? Validators.composeAsync(formProp.asyncValidators)
      : null
    ;

    return [sync.length > 0 ? Validators.compose(sync) : null, async];
  }

  protected serializeChild(meta: PropMetadata, obj: any): FormGroup | FormArray {
    return targetStore.serialize(meta.type.ref as any, new NgFormsChildSerializeMapper(obj, this.cache, this.plainMapper));
  }

  protected serializePlain(obj: any): FormGroup | FormArray {
    let data: FormGroup | FormArray;
    if (Array.isArray(obj)) {
      data = new FormArray(obj.map(o => this.serializePlain(o)));
    } else {
      data = new FormGroup({});
      const serialized = this.plainMapper.serialize(obj);

      Object.keys(serialized)
        .forEach(key => {
          const value = serialized[key];
          let ctrl = isPrimitive(value)
            ? new FormControl(value)
            : this.serializePlain(value)
          ;
          (data as FormGroup).addControl(key, ctrl);
        });
    }
    return data;
  }

  protected serializeCollection(arr: any[], container: PropertyContainer): FormArray {
    return new FormArray(arr.map(s => this.serializeObject(s, container)));
  }

}

export class NgFormsChildSerializeMapper extends NgFormsSerializeMapper {
  constructor(source: any, protected cache: any /*Map<string, Map<any, any>> */, plainMapper: PlainObjectMapper) {
    super(source, plainMapper);
  }
}

export const ngFormsMapper: MapperFactory = {
  serializer(source: any, plainMapper?: PlainObjectMapper): NgFormsSerializeMapper {
    return new NgFormsSerializeMapper(source, plainMapper);
  },
  deserializer(source: any, sourceType: any, plainMapper?: PlainObjectMapper): DeserializeMapper {
    return directMapper.deserializer(source, sourceType, plainMapper) as any;
  }
};
