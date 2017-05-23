import { FormGroup } from '@angular/forms';

import { tdm, Constructor, directMapper } from '@tdm/core';
import '@tdm/core/add/mapping';

import { NgFormsSerializeMapper, NgFormsDeserializeMapper } from './angular-forms-mapper';


class NgFormsBoundDeserializeMapper extends NgFormsDeserializeMapper {

  protected deserialize(value: any, prop: tdm.PropMetadata): any {
    const mapper = this.ref
      ? new NgFormsChildDeserializeMapper(value, prop.type, this.existing)
      : directMapper.deserializer(value, prop.type)
    ;

    return tdm.targetStore.deserialize(mapper, this.ref ? this.ref[prop.name] : undefined);
  }
}

export class NgFormsChildDeserializeMapper extends NgFormsDeserializeMapper {
  constructor(source: any, sourceType: any, protected existing: tdm.DualKeyMap<any, string, any>) {
    super(source, sourceType);
  }
}


/**
 * An instance of NgFormsSerializeMapper and NgFormsDeserializeMapper bound to the same type & instance.
 * This is a helper class for easy form management where one can use the same object to serialize
 * and deserialize the model while keeping a reference to the model data.
 */
export class NgFormsBoundMapper<T> {
  private fg: FormGroup;
  private meta: tdm.TargetMetadata;

  constructor(private readonly type: Constructor<any>, public readonly instance: T) {
    this.meta = tdm.targetStore.getTargetMeta(type);
  }

  serialize(): FormGroup {
    return this.fg = this.meta.serialize(new NgFormsSerializeMapper(this.instance));
  }

  deserialize(): T {
    this.meta.deserialize(new NgFormsBoundDeserializeMapper(this.fg.getRawValue(), this.type), this.instance);
    return this.instance;
  }
}
