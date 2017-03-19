import {
  Constructor,
  TargetStoreEvents,
  targetStore,
  registerEvent
} from '@tdm/transformation';

import { BelongsToMetadata, OwnsMetadata } from '../../metadata';


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

registerEvent('onCreateMetadata', (target: Constructor<any>) => onCreateMetadata(target, BelongsToMetadata));
registerEvent('onCreateMetadata', (target: Constructor<any>) => onCreateMetadata(target, OwnsMetadata));


