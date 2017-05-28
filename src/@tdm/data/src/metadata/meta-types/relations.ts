import { tdm, RelationMetadataArgs } from '@tdm/core';

export type BelongsToMetadataArgs = RelationMetadataArgs;

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

function extend(from: Map<PropertyKey, BelongsToMetadata>, to: Map<PropertyKey, BelongsToMetadata> | undefined): Map<PropertyKey, BelongsToMetadata> {
  return to
    ? tdm.MapExt.mergeInto(to, from)
    : new Map<PropertyKey, BelongsToMetadata>(from.entries())
    ;
}

@tdm.MetaClass<BelongsToMetadataArgs, BelongsToMetadata>({
  allowOn: ['member'],
  extend
})
export class BelongsToMetadata extends tdm.BaseMetadata {
  foreignKey: string;

  constructor(obj: BelongsToMetadataArgs | undefined, info: tdm.DecoratorInfo) {
    super(info);
    this.foreignKey = (obj && obj.foreignKey) || info.name as any;
  }
}

@tdm.MetaClass<OwnsMetadataArgs<any>, OwnsMetadata>({
  allowOn: ['member'],
  extend
})
export class OwnsMetadata extends BelongsToMetadata { }

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';
