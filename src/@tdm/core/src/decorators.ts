import { Constructor, MetaClass } from './fw';
import { targetStore, ExcludeMetadata, ExcludeMetadataArgs, PropMetadata, PropMetadataArgs, RelationMetadata, RelationMetadataArgs } from './metadata';

targetStore.on
  .processType( (target: Constructor<any>) => {
    const meta = targetStore.getTargetMeta(target);
    meta.getValues(RelationMetadata)
      .forEach( relation => {
        // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
        const prop = meta.getCreateProp(relation.decoratorInfo);
        prop.setRelationship(relation);

        // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create one if not there)
        if (relation.name !== relation.foreignKey) {
          meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
        }
      });
  });

/**
 * @propertyDecorator instance
 * @param def
 */
export const Prop = MetaClass.get(PropMetadata).createDecorator(true);

/**
 * @propertyDecorator instance
 * @param def
 */

export function Exclude(metaArgs?: ExcludeMetadataArgs): (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any {
  return exclude(metaArgs) as any;
}
export const exclude: (metaArgs?: ExcludeMetadataArgs) => (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any
  = <any>MetaClass.get(ExcludeMetadata).createDecorator(); // for Angular AOT


/**
 * @propertyDecorator instance
 * @param def
 */
export const Relation = MetaClass.get(RelationMetadata).createDecorator(true);

/**
 * @propertyDecorator instance
 */
export function Identity(): Function {
  return (target: Object, key: PropertyKey) => {
    targetStore.getTargetMeta(<any>target.constructor).model().identity = key;
  }
}
