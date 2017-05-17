import { Constructor, targetStore } from '@tdm/core';

import { BelongsToMetadata, OwnsMetadata } from '../metadata';

targetStore.on
  .createMetadata((target: Constructor<any>) => {
    const meta = targetStore.getTargetMeta(target);

    const identity = meta.getIdentityKey();
    if (identity) {
      meta.getCreateProp(identity);
    }

    [BelongsToMetadata, OwnsMetadata].forEach( relClass => {
      meta.getValues(relClass).forEach(relation => {
        // Its possible to set @Relation() without @Prop(), so make sure to create one if not set by the user.
        const prop = meta.getCreateProp(relation.decoratorInfo);
        prop.setCoreRelationship(relation);

        // if the fk is a different key, attach a reference to the foreign key PropMetadata (and create one if not there)
        if (relation.name !== relation.foreignKey) {
          meta.getCreateProp(relation.foreignKey).foreignKeyOf = prop;
        }
      });
    });
  });


