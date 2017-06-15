import { FormGroup } from '@angular/forms';

import { targetStore, DualKeyMap, Constructor, TargetMetadata, PropMetadata, directMapper } from '@tdm/core/tdm';

import { NgFormsSerializeMapper, NgFormsDeserializeMapper } from './angular-forms-mapper';


class NgFormsBoundDeserializeMapper extends NgFormsDeserializeMapper {

  protected deserialize(value: any, prop: PropMetadata): any {
    const mapper = this.ref
      ? new NgFormsChildDeserializeMapper(value, prop.type.ref, this.existing)
      : directMapper.deserializer(value, prop.type.ref)
    ;

    return targetStore.deserialize(mapper, this.ref ? this.ref[prop.name] : undefined);
  }
}

export class NgFormsChildDeserializeMapper extends NgFormsDeserializeMapper {
  constructor(source: any, sourceType: any, protected existing: DualKeyMap<any, string, any>) {
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
  private meta: TargetMetadata;

  constructor(private readonly type: Constructor<any>, public readonly instance: T) {
    this.meta = targetStore.getTargetMeta(type);
  }

  serialize(): FormGroup {
    return this.fg = this.meta.serialize(new NgFormsSerializeMapper(this.instance));
  }

  deserialize(): T {
    this.meta.deserialize(new NgFormsBoundDeserializeMapper(this.fg.getRawValue(), this.type), this.instance);
    return this.instance;
  }
}
