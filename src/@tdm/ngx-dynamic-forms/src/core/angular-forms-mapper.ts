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
  DeserializeMapper,
  DirectDeserializeMapper,
  PlainObjectMapper
} from '@tdm/core/tdm';

import { FormModelMetadata, FormPropMetadata } from './metadata/index';

export class NgFormsDeserializeMapper extends DirectDeserializeMapper {
  readonly raw: boolean = true;
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

      if (formProp.exclude) {
        return;
      }

      let value = isFunction(formProp.transform)
        ? formProp.transform(obj[prop.cls])
        : obj[prop.cls]
      ;

      if (isUndefined(value)) {
        value = formProp.defaultValue;
      }

      let ctrl: AbstractControl;
      if (formProp.childForm === true && value) {
        ctrl = targetStore.hasTarget(meta.type.ref)
          ? this.serializeChild(meta, value)
          : this.serializePlain(value)
        ;
      } else {
        ctrl = new FormControl(value);
      }

      const validators = this.getValidators(formProp);
      validators[0] && ctrl.setValidators(validators[0]);
      validators[1] && ctrl.setAsyncValidators(validators[1]);

      data.addControl(prop.obj, ctrl);

    };

    // don't care if @Excluded was set, if @Prop there we check it
    container.forEachRaw(obj ? Object.keys(obj) : [], cb);


    const idKey = targetStore.getIdentityKey(container.target);
    if (idKey !== targetStore.getIdentityKey(container.target, 'outgoing')) {
      delete data[idKey];
    }

    return data;
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
            ? new FormControl(value || '')
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
