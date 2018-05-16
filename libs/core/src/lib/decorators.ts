import {
  Constructor,
  MetaClass,
  targetStore,
  TypeMetadata,
  ExcludeMetadata,
  ExcludeMetadataArgs,
  PropMetadata,
  RelationMetadata,
  TypeDefinition, // leave for angular AOT compiler.
  PropMetadataArgs, // leave for angular AOT compiler.
  RelationMetadataArgs // leave for angular AOT compiler.
} from '@tdm/core/tdm';

targetStore.on.processType((target: Constructor<any>) => {
  const meta = targetStore.getTargetMeta(target);
  meta.getValues(RelationMetadata).forEach(relation => {
    // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
    const prop = meta.getCreateProp(relation.decoratorInfo);
    prop.setRelationship(relation);

    // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create 1 if not there)
    if (relation.name !== relation.foreignKey) {
      meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
    }
  });
});

/**
 * @propertyDecorator instance
 * @param def
 */
export const Prop = MetaClass.decorator(PropMetadata, true);

/** @internal */
export let exclude: any = {};
exclude = MetaClass.decorator(ExcludeMetadata, true, 'classPropMethod'); // for Angular AOT

/**
 * @propertyDecorator instance
 */
export function Exclude(
  metaArgs?: ExcludeMetadataArgs
): (
  target: Object | Function,
  key?: TdmPropertyKey,
  desc?: PropertyDescriptor
) => any {
  return exclude(metaArgs) as any;
}

/**
 * @propertyDecorator instance
 * @param def
 */
export const Relation = MetaClass.decorator(RelationMetadata, true);

/**
 * @propertyDecorator instance
 * @param def
 */
export const Type = MetaClass.decorator(TypeMetadata);

/**
 * @propertyDecorator instance
 */
export function Identity(): Function {
  return (target: Object, key: TdmPropertyKey) => {
    targetStore.getTargetMeta(<any>target.constructor).model().identity = key;
  };
}
