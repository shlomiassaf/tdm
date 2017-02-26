import {
  BaseMetadata,
  DecoratorInfo,
  MetaFactoryInstance,
  decoratorInfo
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

  static metaFactory(metaArgs: RelationMetadataArgs, target: Object | Function, key: PropertyKey, desc: PropertyDescriptor): MetaFactoryInstance {
    const info = decoratorInfo(target, key, desc);

    return {
      info,
      metaClassKey: RelationMetadata,
      metaPropKey: info.name,
      metaValue: new RelationMetadata(metaArgs, info)
    }
  }
}
