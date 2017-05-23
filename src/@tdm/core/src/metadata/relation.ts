import {
  MapExt,
  BaseMetadata,
  DecoratorInfo,
  MetaFactoryInstance, // leave to satisfy angular compiler
  metaFactoryFactory,
  registerFactory
} from '../fw';

export interface RelationMetadataArgs {
  /**
   * The foreign key (property name) that points to the id of the resource belonged to.
   * If not set, the current property name is used.
   *
   * For example, on a Customer object, if the foreign key is customerId and you would like to use
   * the "customer" property, set the foreignKey to "customerId"
   */
  foreignKey?: string;
}

export class RelationMetadata extends BaseMetadata {

  foreignKey: string;

  constructor(obj: RelationMetadataArgs | undefined, info: DecoratorInfo)  {
    super(info);

    this.foreignKey = obj && obj.foreignKey || info.name as any;
  }

  static allowOn = <any>['member'];

  static metaFactory = metaFactoryFactory<RelationMetadataArgs, RelationMetadata>(RelationMetadata);

  static register = registerFactory<RelationMetadata>();

  static extend(from: Map<PropertyKey, RelationMetadata>, to: Map<PropertyKey, RelationMetadata> | undefined): Map<PropertyKey, RelationMetadata> {
    return to
      ? MapExt.mergeInto(to, from)
      : new Map<PropertyKey, RelationMetadata>(from.entries())
    ;
  }
}
