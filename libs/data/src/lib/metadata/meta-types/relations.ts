import {
  RelationMetadataArgs,
  MetaClass,
  RelationMetadata
} from '@tdm/core/tdm';

export type BelongsToMetadataArgs = RelationMetadataArgs;

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

@MetaClass<BelongsToMetadataArgs, BelongsToMetadata>({
  inherit: RelationMetadata
})
export class BelongsToMetadata extends RelationMetadata {}

@MetaClass<OwnsMetadataArgs<any>, OwnsMetadata>({
  inherit: RelationMetadata
})
export class OwnsMetadata extends RelationMetadata {}

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';
