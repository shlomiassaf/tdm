import {
  isFunction,
  PropMetadataArgs,
  Constructor,
  PropMetadata,
  RelationMetadata,
  targetStore
} from '@tdm/core/tdm';

import { BelongsToMetadata, OwnsMetadata, RelationshipType } from '../metadata';
import { Validator } from '../fw';

declare module '@tdm/core/tdm/src/metadata/prop' {
  interface PropMetadataArgs {
    validation?: Validator | Validator[];
  }

  interface PropMetadata {
    rel: RelationshipType;
    validation: Validator[];
    setCoreRelationship(rel: BelongsToMetadata | OwnsMetadata): void;
  }
}

PropMetadata.prototype.setCoreRelationship = function(rel: BelongsToMetadata | OwnsMetadata): void {
  this.setRelationship(new RelationMetadata({foreignKey: rel.foreignKey}, rel.decoratorInfo));

  if (rel instanceof BelongsToMetadata) {
    this.rel = 'belongsTo';
  } else {
    this.rel = this.type.isArray ? 'hasMany': 'hasOne';
  }
};

targetStore.on
  .metaInit(PropMetadata)
  .run((target: Constructor<any>, prop: PropMetadata, metaArgs?: PropMetadataArgs) => {
    if (!metaArgs) {
      metaArgs = {};
    }

    prop.validation = Array.isArray(metaArgs.validation)
      ? metaArgs.validation.slice()
      : metaArgs.validation && isFunction(metaArgs.validation.validate) ? [metaArgs.validation] : []
    ;
  });
