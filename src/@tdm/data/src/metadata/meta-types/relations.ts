import { tdm, RelationMetadataArgs } from '@tdm/core';
import { MetaFactoryInstance } from '@tdm/core/tdm'; // leave for angular AOT compiler.

export type BelongsToMetadataArgs = RelationMetadataArgs;

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

export class BelongsToMetadata extends tdm.BaseMetadata {

  foreignKey: string;

  constructor(obj: BelongsToMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);

    this.foreignKey = obj.foreignKey || info.name as any;
  }

  static metaFactory = tdm.metaFactoryFactory<BelongsToMetadataArgs, BelongsToMetadata>(BelongsToMetadata);

  static register = tdm.registerFactory<BelongsToMetadata>();

  static extend(from: Map<PropertyKey, BelongsToMetadata>, to: Map<PropertyKey, BelongsToMetadata> | undefined): Map<PropertyKey, BelongsToMetadata> {
    return to
      ? tdm.MapExt.mergeInto(to, from)
      : new Map<PropertyKey, BelongsToMetadata>(from.entries())
      ;
  }
}


export class OwnsMetadata extends tdm.BaseMetadata {
  foreignKey: string;

  constructor(obj: OwnsMetadataArgs<any>, info: tdm.DecoratorInfo) {
    super(info);

    this.foreignKey = obj.foreignKey;
  }

  static metaFactory = tdm.metaFactoryFactory<OwnsMetadataArgs<any>, OwnsMetadata>(OwnsMetadata);

  static register = tdm.registerFactory<OwnsMetadata>();

  static extend(from: Map<PropertyKey, OwnsMetadata>, to: Map<PropertyKey, OwnsMetadata> | undefined): Map<PropertyKey, OwnsMetadata> {
    return to
      ? tdm.MapExt.mergeInto(to, from)
      : new Map<PropertyKey, OwnsMetadata>(from.entries())
      ;
  }
}

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';
