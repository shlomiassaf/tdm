import { FormGroup, FormControl, AbstractControl, Validators, FormArray } from '@angular/forms';


import {
  MapperFactory,
  DeserializeMapper,
  DirectDeserializeMapper,
  SerializeMapper,
  PropertyContainer,
  PoClassPropertyMap,
  PlainSerializer,
  isUndefined,
  stringify,
  isPrimitive,
  isFunction,
  directMapper,
  targetStore,
  PropMetadata
} from '@tdm/transformation';
import '@tdm/transformation/add/mapping';

import { FormPropMetadata } from './decorators';

export class NgFormsDeserializeMapper extends DirectDeserializeMapper {
  readonly raw: boolean = true;
}


export class NgFormsSerializeMapper extends SerializeMapper {
  protected cache: Map<any, any>;
  private plainSer = new PlainSerializer();

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

  protected serializeObject(obj: any, container: PropertyContainer): FormGroup  {
    const formModel = targetStore.getClassProp(container.target, 'formModel');

    if (!formModel) {
      throw new Error(`Target '${stringify(container.target)}' is not a registered FormModel`)
    }

    const data: FormGroup = new FormGroup({}, formModel.validator, formModel.asyncValidator);

    const cb = (prop: PoClassPropertyMap) => {
      const meta = prop.prop;

      /*
        Decorated by @Prop, @FormProp or both.
        FormPropMetadataArgs.exclude is not true.
       */
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
      if (targetStore.hasTarget(meta.type)) {
        ctrl = this.serializeChild(meta, value);
      } else {
        if (isPrimitive(value)) {
          ctrl = new FormControl(value || '');
        } else {
          ctrl = this.serializePlain(value);
        }
      }

      if (formProp.validators) {
        if (ctrl.validator) {
          ctrl.setValidators(Validators.compose([...formProp.validators, ctrl.validator]))
        } else {
          ctrl.setValidators(formProp.validators);
        }
      }

      if (formProp.asyncValidators) {
        if (ctrl.asyncValidator) {
          ctrl.setValidators(Validators.compose([...formProp.asyncValidators, ctrl.asyncValidator]))
        } else {
          ctrl.setAsyncValidators(formProp.asyncValidators);
        }
      }

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

  protected serializeChild(meta: PropMetadata, obj: any): FormGroup | FormArray {
    return targetStore.serialize(meta.type as any, new NgFormsChildSerializeMapper(obj, this.cache));
  }

  protected serializePlain(obj: any): FormGroup | FormArray {
    if (Array.isArray(obj)) {
      return new FormArray(obj.map( o => this.serializePlain(o)));
    }
    const data: FormGroup = new FormGroup({});
    const serialized = this.plainSer.serialize(obj);

    Object.keys(serialized)
      .forEach( key => {
        const value = serialized[key];
        if (isPrimitive(value)) {
          data.addControl(key, new FormControl(value || ''));
        } else {
          data.addControl(key, this.serializePlain(value));
        }
      });

    return data;
  }

  protected serializeCollection(arr: any[], container: PropertyContainer): FormArray {
    return new FormArray(arr.map( s => this.serializeObject(s, container)));
  }

}

export class NgFormsChildSerializeMapper extends NgFormsSerializeMapper {
  constructor(source: any, protected cache: any /*Map<string, Map<any, any>> */) {
    super(source);
  }
}



export const ngFormsMapper: MapperFactory = {
  serializer(source: any): NgFormsSerializeMapper {
    return new NgFormsSerializeMapper(source);
  },
  deserializer(source: any, sourceType: any): DeserializeMapper {
    return directMapper.deserializer(source, sourceType) as any;
  }
};
