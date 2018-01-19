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
  Constructor,
  TypeMetadata,
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
import { objectToForm } from '../utils';

export type DeserializableForm = FormGroup | FormArray;

export class NgFormsDeserializeMapper extends DirectDeserializeMapper {
  readonly raw: boolean = true;
  protected formModel: FormModelMetadata | undefined;

  constructor(public formGroup: DeserializableForm, sourceType: any, plainMapper?: PlainObjectMapper) {
    super(formGroup.value, sourceType, plainMapper);
    this.formModel = targetStore.getMetaFor(sourceType, FormModelMetadata, true);
  }

  getIdentity(): string {
    // TODO: Move to the global store, so logic can change without bugs.
    if (this.identity) {
      return this.formGroup.get(this.identity).value;
    }
  }

  getKeys(): string[] {
    // we don't care about excluded `FormPropMetadata` because they will not get here since the serializer
    // will not include them, it should be a closed loop.
    const controls = this.formGroup.controls;
    if (this.formGroup instanceof FormArray) {
      return [];
    } else {
      return Object.keys(controls).filter( k => controls[k].dirty);
    }
  }

  getValue(key: string, prop?: PropMetadata): any {
    const control = this.formGroup.get(key);
    if (control instanceof FormArray) {
      const formProp = (this.formModel && this.formModel.getProp(key as string)) || FormPropMetadata.EMPTY;
      // TODO: we can omit this, maybe protect against but rtType should ne set at this point.
      if (!formProp.rtType && prop && prop.type) {
        formProp.rtType = prop.type;
      }
      return this.parseFormArray(control, key, formProp);
    } else if (control instanceof FormGroup) {
      /* NOTE:
         Normally we would check for shared instances (relations) in the cache to prevent circular reference between 2
         models that reference each other, however, a form value (root object) can not share the same instance
         on 2 nodes within it's graph as it will cause infinite rendering of controls as forms are not built for this.

         If, for any reason, this is required in the future, this code should ne added:

         if (prop) {
           const rel = this.getRelationQuery(prop, value);
           if (rel) { value = rel; }
         }

         And:
         this.getCache(type.ref, value) || this.deserialize(<any> control, prop);
      */

      const formProp = (this.formModel && this.formModel.getProp(key as string)) || FormPropMetadata.EMPTY;
      // TODO: we can omit this, maybe protect against but rtType should ne set at this point.
      if (!formProp.rtType && prop && prop.type) {
        formProp.rtType = prop.type;
      }
      return this.parseFormGroup(control, key, formProp);
    } else {
      return control.value;
    }
  }

  protected parseFormArray(control: FormArray, key: string, formProp: FormPropMetadata): any {
    if (formProp.flatten) {
      return this.deserializeFlattened(control, formProp, key);
    } else {
      const value = [];
      for (let c of control.controls) {
        if (c instanceof FormArray) {
          value.push(this.parseFormArray(c, key, formProp));
        } else if (c instanceof FormGroup) {
          value.push(this.parseFormGroup(c, key, formProp));
        } else {
          value.push(c.value);
        }
      }
      return value;
    }
  }

  protected parseFormGroup(c: FormGroup, key: string, formProp: FormPropMetadata): any {
    const type = formProp.rtType;
    if (formProp.flatten) {
      return this.deserializeFlattened(c, formProp, key);
    } else if (type && targetStore.hasTarget(type.ref)) {
      return this.deserialize(c, type);
    } else {
      return this.plainMapper.deserialize(c.getRawValue());
    }
  }

  protected deserialize(value: DeserializableForm, prop: TypeMetadata): any;
  protected deserialize(value: DeserializableForm, prop: PropMetadata): any;
  protected deserialize(value: DeserializableForm, prop: PropMetadata | TypeMetadata): any {
    const type: TypeMetadata = prop instanceof TypeMetadata ? prop : prop.type;
    const mapper = this.ref
      ? new NgFormsDeserializeMapper(value, type.ref)
      : directMapper.deserializer(value, type.ref)
    ;
    return targetStore.deserialize(mapper);
  }

  /**
   * Deserialize a control with ad-hoc "flatten" instruction of property to form control mappings.
   * Flattening can only be done on complex objects so `control` must be a FormArray or FormGroup.
   *
   * `resultOrKey` is used to provide an existing value to merge the deserialized data into.
   * You can also provide a string/number that used as a key to retrieve the value from an existing instance.
   *
   * When `resultOrKey` resolves to a NON-PRIMITIVE TRUTHY value (i.e. object/array) the deserializer will merge the
   * value of the DIRTY controls into the object at `resultOrKey`. This means that when a `resultOrKey` is supplied only
   * the dirty controls are evaluated and merged, a lazy approach.
   *
   * When `resultOrKey` resolves to a primitive value (i.e. not an object/array) or a falsy value (e.g. null/undefined)
   * a new object is created and the deserializer will merge all of the controls, DIRTY and NOT DIRTY, into the newly
   * created object.
   *
   * This base implementation of `deserializeFlattened` does not support key (string/number) retrieval as there is no
   * model instance attached to the deserializer and so it will treat them as falsy values.
   * Derived classes might use this option and override `deserializeFlattened` so they can re-call it after retreiving
   * the actual value using the key.
   *
   * @param {DeserializableForm} control The form control to deserialize, only FormArray or FormGroup
   * @param {FormPropMetadata} formProp The FormPropertyMetadata instance for the property.
   * @param {string | number | any} resultOrKey
   */
  protected deserializeFlattened(control: DeserializableForm,
                                 formProp: FormPropMetadata,
                                 resultOrKey?: string | number | any): any {
    if (control instanceof FormArray) {
      const { controls } = control;
      const result = [];
      for (let i = 0, len = controls.length; i < len; i++) {
        const c = controls[i];
        if (c instanceof FormArray || c instanceof FormGroup) {
          // we send null when c might be array, but when c is FormArray the result is force set to []
          // null is also used to force serialization of all controls, not only the dirty one's.
          result.push(this.deserializeFlattened(c, formProp, null));
        } else {
          result.push(c.value);
        }
      }
      return result;
    } else {
      const forceSerialize = isPrimitive(resultOrKey) || !resultOrKey;
      // this method does not support string/number in `resultOrKey`
      const result: any = forceSerialize ? {} : resultOrKey;

      const props = formProp.flatten;
      const keys = Object.keys(props);
      for (let key of keys) {
        const childCtrl = control.get(key);
        const p = props[key];
        let value: any = keys; // keys is unique so it can never be set from the outside.
        if (p.flatten) {
          if (forceSerialize || childCtrl.dirty) {
            value = this.deserializeFlattened(<any> childCtrl, p, result[key]);
          }
        } else if (forceSerialize || childCtrl.dirty) {
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
}

// tslint:disable-next-line
export class NgFormsSerializeMapper extends SerializeMapper {
  protected cache: Map<any, any>;
  protected formModel: FormModelMetadata | undefined;

  serialize(container: PropertyContainer): any {
    this.formModel = targetStore.getMetaFor(container.target, FormModelMetadata, true);
    if (!this.formModel) {
      throw new Error(`Target '${stringify(container.target)}' is not a registered FormModel`);
    }

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
    const data: FormGroup = new FormGroup({}, this.formModel.validator, this.formModel.asyncValidator);

    const cb = (prop: PoClassPropertyMap) => {
      const meta = prop.prop;

      if (!meta) {
        return;
      }
      const formProp = this.formModel.getProp(meta.name as string) || FormPropMetadata.EMPTY;
      if (!formProp.rtType) {
        formProp.rtType = meta.type;
      }
      const ctrl = this.createControl(formProp, obj ? obj[prop.cls] : undefined);
      if (ctrl) {
        data.addControl(prop.obj, ctrl);
      }
    };

    // don't care if @Excluded was set, if @Prop there we check it
    container.forEachRaw(obj ? Object.keys(obj) : [], cb);

    const idKey = targetStore.getIdentityKey(container.target);
    if (data.get(idKey) && idKey !== targetStore.getIdentityKey(container.target, 'outgoing')) {
      data.removeControl(idKey);
    }

    return data;
  }

  /**
   * Create a form control from a [[FormPropMetadata]] instance.
   * @param {FormPropMetadata} formProp
   * @param value
   * @param {boolean} ignoreArray If true, treats the type as non-array, even if the type information says it is an
   * array. `ignoreArray` is ignored if `value` is an array instance by itself.
   * `ignoreArray` is used when the same [[FormPropMetadata]] decorating a property of type Array<T> is used
   * recursively, first time for the array value and then n times (array length) for the items in the array. The actual
   * type for each item is that [[FormPropMetadata]].
   */
  protected createControl(formProp: FormPropMetadata, value: any, ignoreArray?: boolean): AbstractControl | undefined {
    if (formProp.exclude) {
      return;
    }

    if (isFunction(formProp.transform)) {
      value = formProp.transform(value);
    }

    if (isUndefined(value)) {
      value = formProp.defaultValue;
    }

    const { rtType } = formProp;
    const isArray = Array.isArray(value) || ( ignoreArray ? false : rtType && rtType.isArray );
    let ctrl: AbstractControl;

    if (formProp.childForm === true && rtType && rtType.ref) {
      const hasTarget = targetStore.hasTarget(rtType.ref);
      if (isArray) {
        ctrl = new FormArray([]);
        if (Array.isArray(value)) {
          for (let item of value) {
            (ctrl as FormArray).push(hasTarget ? this.serializeChild(rtType, item) : objectToForm(item));
          }
        }
      } else {
        ctrl = hasTarget ? this.serializeChild(rtType, value) : objectToForm(value);
      }
    } else if (formProp.flatten) {
      value = value ? this.plainMapper.serialize(value) : (isArray ? [] : {});
      if (isArray) {
        ctrl = new FormArray([]);
        for (let item of value) {
          (ctrl as FormArray).push(this.createControl(formProp, item, true));
        }
      } else {
        ctrl = this.createFlatten(formProp.flatten, value);
      }
    } else {
      if (isArray) {
        ctrl = new FormArray([]);
        if (Array.isArray(value)) {
          for (let item of value) {
            (ctrl as FormArray).push(new FormControl(item));
          }
        }
      } else {
        ctrl = new FormControl(value);
      }
    }

    const validators = this.getValidators(formProp);
    if (validators[0]) {
      ctrl.setValidators(validators[0]);
    }
    if (validators[1]) {
      ctrl.setAsyncValidators(validators[1]);
    }

    return ctrl;
  }

  protected createFlatten(flatten: { [key: string]: FormPropMetadata }, value: any): FormGroup {
    const ctrl = new FormGroup({});
    const keys = Object.keys(flatten);
    for (let key of keys) {
      const flattenedControl = this.createControl(flatten[key], value[key]);
      if (flattenedControl) {
        (ctrl as FormGroup).addControl(key, flattenedControl);
      }
    }
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

  protected serializeChild(type: TypeMetadata, obj: any): FormGroup | FormArray {
    return targetStore.serialize(type.ref as any, new NgFormsChildSerializeMapper(obj, this.cache, this.plainMapper));
  }

  protected serializeCollection(arr: any[], container: PropertyContainer): FormArray {
    return new FormArray(arr.map(s => this.serializeObject(s, container)));
  }

  /**
   * Creates a form control based on metadata of a given property in a given model.
   * If a value is provided the form control will be populated with the value.
   *
   * You can provide a string (`prop`) representing the property name, OR if you want to create a control for a property
   * in a nested object (Only for `@FormProp` declarations with `flatten` expressions OR `childForm` set to true) you
   * you can provide a tuple a tuple with 2 values the first value is a string representing the
   * property name at the root level (exposed property that `@FormProp` decorates), the second value is a dot notation
   * path to the nested property within the flatten expression / Child model.
   *
   * For example, in the following flatten expression:
   *
   * ```ts
   * @FormProp({
   *   flatten: Object.assign({}, basicFlatten, {
   *     additional: {
   *       flatten: {
   *         work: { }
   *       }
   *     }
   *   })
   * })
   * myProp: any;
   * ```
   * If we want to get the control for `work` the path will be: ` ['myProp', 'additional.work'] `
   *
   * > When using a deep path and providing a `value`, the value should be the value to be assign at the resolved path
   * and not the root value, i.e. the value is not evaluated with each step in the path.
   *
   * Make sure not to include array index references within a deep path expression, think of type structure as one
   * without arrays.
   *
   * NOTE: Array's are NOT SUPPORTED by design.
   * This function DOES NOT support arrays, if a given property is an Array<T> the returned form will be T.
   * Make sure not to send an array instance with `value`.
   *
   * Why?
   * The purpose of this function is to create form controls to be added to FormArrays.
   * These can be empty controls or populated with a given `value`.
   * To support all features (e.g. "flatten") and allow empty form controls array are not supported because a property
   * with type Array<T> and no values in the array will return an empty FormArray.
   *
   * If you want to create a FormArray control simple call createControl for each item in the array and add it to the
   * FormArray:
   *
   * ```ts
   * new FormArray(items.map( item => createControl(MyType, 'myProp', item) ));
   * ```
   */
  static createControl<T, Z>(type: Z & Constructor<T>,
                             prop: keyof T | [keyof T, string],
                             value?: any): FormGroup | FormControl | FormControl {
    if (Array.isArray(value)) {
      throw new Error('provided value is an array instance which is not allowed.');
    }
    const path: string[] = Array.isArray(prop) ? [prop[0], ...prop[1].split('.')] : [prop];

    const formModel = targetStore.getMetaFor(type, FormModelMetadata, true);
    if (!formModel) {
      throw new Error(`Target '${stringify(type)}' is not a registered FormModel`);
    }

    const key = path.shift();
    let formProp = formModel.getProp(key);
    if (!formProp) {
      throw new Error(`Target '${stringify(type)}' does not have a PropForm decorator for property ${key}`);
    }
    let typeMeta = formProp.rtType;
    if (!typeMeta) {
      const propMeta = targetStore.getMetaFor(type, PropMetadata, key);
      formProp.rtType = typeMeta = propMeta.type;
    }

    /*  At this point there are several scenarios:
          1. `prop` is a non-deep property path (e.g. "myProp")
             This is the simple scenario, we just create the control for the type & form metadata resolved from
             the property. If the [[FormMetadata]] instance is a childForm or a flatten expression it will be handled
             by the serializer.

          2. `prop` is a deep, property path (e.g. "myProp.nest.value.somewhere")
              This is a bit more complex and depends on the [[FormMetadata]] configuration.

                - When [[FormMetadata.childForm]] is `true`:

                  We need to extract the type and call [[NgFormsSerializeMapper#createControl]] again (static method)
                  with the new type and a new path, the new path is a left-shift of the current path.
                  Example: Given the mode/resource `MyModel`, when resolving path "myProp.nest.value.somewhere"
                           where "myProp" is a known model/resource `MyOtherModel` we first call:
                              - `NgFormsSerializeMapper.createControl(MyModel, ['myProp', 'vnest.value.somewhere']);`
                           inside [[NgFormsSerializeMapper.createControl]] we detect `myProp` has `childForm: true` and
                           that it's type is a known model/resource `MyOtherModel` so we recursively call:
                           `NgFormsSerializeMapper.createControl(MyOtherModel, ['nest', 'value.somewhere'], value);`

                - When [[FormMetadata.flatten]] is set:

                  We resolve the deep path to get the [[FormMetadata]] it points to (if path is invalid we throw).
                  Once we get the [[FormMetadata]] instance we use it to get the control.

     */
    if (path.length > 0) {
      if (formProp.childForm) {
        if (!targetStore.hasTarget(typeMeta.ref)) {
          // tslint:disable-next-line
          throw new Error(`Error trying deep access with a "childForm" found in path section "${key}", "${typeMeta.ref}" is not a registered model`);
        }
        return NgFormsSerializeMapper.createControl(typeMeta.ref, [path.shift(), path.join('.')], value);
      } else if (formProp.flatten) {
        while (formProp.flatten && path.length > 0) {
          formProp = formProp.flatten[path.shift()];
        }
        if (path.length > 0) {
          throw new Error(`Error trying deep access to a flatten expression ${(prop as string[]).join('.')}`);
        }
      }
    }

    return <any> new NgFormsSerializeMapper(undefined).createControl(formProp, value, true);
  }
}

// tslint:disable-next-line
export class NgFormsChildSerializeMapper extends NgFormsSerializeMapper {
  constructor(source: any, protected cache: any /*Map<string, Map<any, any>> */, plainMapper: PlainObjectMapper) {
    super(source, plainMapper);
  }
}

export const ngFormsMapper: MapperFactory = {
  serializer(source: any, plainMapper?: PlainObjectMapper): NgFormsSerializeMapper {
    return new NgFormsSerializeMapper(source, plainMapper);
  },
  deserializer(source: DeserializableForm, sourceType: any, plainMapper?: PlainObjectMapper): DeserializeMapper {
    return new NgFormsDeserializeMapper(source, sourceType, plainMapper);
  }
};
