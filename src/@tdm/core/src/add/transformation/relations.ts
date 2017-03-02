import {
  Constructor,
  TargetStoreEvents,
  RelationMetadataArgs, // leave to satisfy angular compiler
  targetStore,
  registerEvent,
  PropMetadata,
  decoratorFactory
} from '@tdm/transformation';
import {
  BelongsToMetadata,
  BelongsToMetadataArgs,
  OwnsMetadata,
  OwnsMetadataArgs
} from '../../metadata/meta-types/relations';


function onCreateMetadata(target: Constructor<any>, relClass: typeof BelongsToMetadata | typeof OwnsMetadata) {
  const meta = targetStore.getTargetMeta(target);

  const identity = meta.getIdentityKey();
  if (identity) {
    meta.getCreateProp(identity);
  }

  meta.getValues(relClass).forEach(relation => {
    // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
    const prop = meta.getCreateProp(relation.decoratorInfo);
    prop.setCoreRelationship(relation);

    // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create one if not there)
    if (relation.name !== relation.foreignKey) {
      meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
    }
  });
}

registerEvent(TargetStoreEvents.onCreateMetadata, (target: Constructor<any>) => onCreateMetadata(target, BelongsToMetadata));
registerEvent(TargetStoreEvents.onCreateMetadata, (target: Constructor<any>) => onCreateMetadata(target, OwnsMetadata));

/**
 * @propertyDecorator instance
 * @param def
 */
export const BelongsTo = decoratorFactory<BelongsToMetadataArgs>(PropMetadata, true);


/**
 * @propertyDecorator instance
 * @param def
 */
export const Owns = decoratorFactory<OwnsMetadataArgs<any>>(PropMetadata, true);


