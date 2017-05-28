import { tdm, RelationMetadataArgs } from '@tdm/core';

export type BelongsToMetadataArgs = RelationMetadataArgs;

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

@tdm.MetaClass<BelongsToMetadataArgs, BelongsToMetadata>({
  inherit: tdm.RelationMetadata
})
export class BelongsToMetadata extends tdm.RelationMetadata { }

@tdm.MetaClass<OwnsMetadataArgs<any>, OwnsMetadata>({
  inherit: tdm.RelationMetadata
})
export class OwnsMetadata extends tdm.RelationMetadata { }

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';
