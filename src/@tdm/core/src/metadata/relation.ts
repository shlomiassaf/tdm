import {
  MapExt,
  BaseMetadata,
  DecoratorInfo,
  MetaClass,
  MetaClassMetadata
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


function extend(from: Map<PropertyKey, RelationMetadata>, to: Map<PropertyKey, RelationMetadata> | undefined): Map<PropertyKey, RelationMetadata> {
  return to
    ? MapExt.mergeInto(to, from)
    : new Map<PropertyKey, RelationMetadata>(from.entries())
    ;
}

@MetaClass<RelationMetadataArgs, RelationMetadata>({
  allowOn: ['member'],
  extend
})
export class RelationMetadata extends BaseMetadata {

  foreignKey: string;

  constructor(obj: RelationMetadataArgs | undefined, info: DecoratorInfo)  {
    super(info);

    this.foreignKey = obj && obj.foreignKey || info.name as any;
  }

}

// to make it easy on generics later
// declare module '../fw/metadata-framework/meta-class' {
//   module MetaClass {
//     function get(target: typeof RelationMetadata): MetaClassMetadata<RelationMetadataArgs, RelationMetadata>;
//   }
// }