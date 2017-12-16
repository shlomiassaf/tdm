import {FormGroup} from '@angular/forms';
import {
  targetStore,
  Constructor,
  PlainObjectMapper,
  TargetMetadata
} from '@tdm/core/tdm';

import { DeserializableForm, NgFormsSerializeMapper, NgFormsDeserializeMapper } from './angular-forms-mapper';
import { FormPropMetadata } from './metadata/index';

class NgFormsBoundDeserializeMapper extends NgFormsDeserializeMapper {

  constructor(public formGroup: DeserializableForm,
              sourceType: any,
              public instance: any,
              plainMapper?: PlainObjectMapper) {
    super(formGroup.value, sourceType, plainMapper);
  }

  protected deserializeFlattened(control: DeserializableForm,
                                 controlKey: string,
                                 props: { [keys: string]: FormPropMetadata },
                                 result?: any): any {
    return super.deserializeFlattened(control, controlKey, props, this.instance[controlKey]);
  }
}

/**
 * An instance of NgFormsSerializeMapper and NgFormsDeserializeMapper bound to the same type & instance.
 * This is a helper class for easy form management where one can use the same object to serialize
 * and deserialize the model while keeping a reference to the model data.
 */
export class NgFormsBoundMapper<T> {
  private fg: FormGroup;
  private meta: TargetMetadata;

  constructor(private readonly type: Constructor<any>, public readonly instance: T) {
    this.meta = targetStore.getTargetMeta(type);
  }

  serialize(): FormGroup {
    return this.fg = this.meta.serialize(new NgFormsSerializeMapper(this.instance));
  }

  deserialize(): T {
    this.meta.deserialize(new NgFormsBoundDeserializeMapper(this.fg, this.type, this.instance), this.instance);
    return this.instance;
  }
}
