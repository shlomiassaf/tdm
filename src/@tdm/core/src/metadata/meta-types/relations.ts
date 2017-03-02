import {
  MapExt,
  RelationMetadataArgs,
  MetaFactoryInstance, // leave to satisfy angular compiler
  DecoratorInfo,
  BaseMetadata,
  metaFactoryFactory,
  registerFactory
} from '@tdm/transformation';


export type BelongsToMetadataArgs = RelationMetadataArgs;

export interface OwnsMetadataArgs<T> {
  foreignKey: keyof T;
}

export class BelongsToMetadata extends BaseMetadata {

  foreignKey: string;

  constructor(obj: BelongsToMetadataArgs, info: DecoratorInfo) {
    super(info);

    this.foreignKey = obj.foreignKey || info.name as any;
  }

  static metaFactory = metaFactoryFactory<BelongsToMetadataArgs, BelongsToMetadata>(BelongsToMetadata);

  static register = registerFactory<BelongsToMetadata>();

  static extend(from: Map<PropertyKey, BelongsToMetadata>, to: Map<PropertyKey, BelongsToMetadata> | undefined): Map<PropertyKey, BelongsToMetadata> {
    return to
      ? MapExt.mergeInto(to, from)
      : new Map<PropertyKey, BelongsToMetadata>(from.entries())
      ;
  }
}


export class OwnsMetadata extends BaseMetadata {
  foreignKey: string;

  constructor(obj: OwnsMetadataArgs<any>, info: DecoratorInfo) {
    super(info);

    this.foreignKey = obj.foreignKey;
  }

  static metaFactory = metaFactoryFactory<OwnsMetadataArgs<any>, OwnsMetadata>(OwnsMetadata);

  static register = registerFactory<OwnsMetadata>();

  static extend(from: Map<PropertyKey, OwnsMetadata>, to: Map<PropertyKey, OwnsMetadata> | undefined): Map<PropertyKey, OwnsMetadata> {
    return to
      ? MapExt.mergeInto(to, from)
      : new Map<PropertyKey, OwnsMetadata>(from.entries())
      ;
  }
}

export type Relationship = BelongsToMetadata | OwnsMetadata;
export type RelationshipType = 'belongsTo' | 'hasMany' | 'hasOne';
