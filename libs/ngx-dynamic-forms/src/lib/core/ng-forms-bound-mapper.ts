import { FormGroup } from '@angular/forms';
import {
  targetStore,
  isString,
  isNumber,
  Constructor,
  PlainObjectMapper,
  TargetMetadata
} from '@tdm/core/tdm';

import {
  DeserializableForm,
  NgFormsSerializeMapper,
  NgFormsDeserializeMapper
} from './angular-forms-mapper';
import { FormPropMetadata } from './metadata/index';

/**
 * A FormGroup/FormArray deserializer bound to a specific instance.
 *
 */
class NgFormsBoundDeserializeMapper extends NgFormsDeserializeMapper {
  constructor(
    public formGroup: DeserializableForm,
    sourceType: any,
    public instance: any,
    plainMapper?: PlainObjectMapper
  ) {
    super(formGroup, sourceType, plainMapper);
  }

  /**
   * Overrides the base class method to set the result from the instance when `resultOrKey` is a string or a number.
   * Note that it will set the result from the root object, which means that only 1st level properties can be used and
   * deep references to nested object are not supported.
   * This should have no effect since the base implementation of `deserializeFlattened`, when calling itself, provides
   * the `resultOrKey`
   */
  protected deserializeFlattened(
    control: DeserializableForm,
    formProp: FormPropMetadata,
    resultOrKey?: string | number | any
  ): any {
    if (isString(resultOrKey) || isNumber(resultOrKey)) {
      resultOrKey = this.instance[resultOrKey];
    }
    return super.deserializeFlattened(control, formProp, resultOrKey);
  }
}

/**
 * An instance of NgFormsSerializeMapper and NgFormsDeserializeMapper bound to the same type & instance.
 * This is a helper class for easy form management where one can use the same object to serialize
 * and deserialize the model while keeping a reference to the model data.
 */
// tslint:disable-next-line
export class NgFormsBoundMapper<T> {
  private fg: FormGroup;
  private meta: TargetMetadata;

  constructor(
    private readonly type: Constructor<any>,
    public readonly instance: T,
    formGroup?: FormGroup
  ) {
    this.meta = targetStore.getTargetMeta(type);
    if (formGroup) {
      this.fg = formGroup;
    }
  }

  serialize(): FormGroup {
    return (this.fg = this.meta.serialize(
      new NgFormsSerializeMapper(this.instance)
    ));
  }

  deserialize(): T {
    this.meta.deserialize(
      new NgFormsBoundDeserializeMapper(this.fg, this.type, this.instance),
      this.instance
    );
    return this.instance;
  }
}
