import { tdm, PropMetadataArgs, Constructor } from '@tdm/core';
import { BelongsToMetadata, OwnsMetadata, RelationshipType } from '../metadata';
import { Validator } from '../fw';

declare module '@tdm/core/metadata/prop' {
  interface PropMetadataArgs {
    validation?: Validator | Validator[];
  }

  interface PropMetadata {
    rel: RelationshipType;
    validation: Validator[];
    setCoreRelationship(rel: BelongsToMetadata | OwnsMetadata): void;
  }
}

tdm.PropMetadata.prototype.setCoreRelationship = function(rel: BelongsToMetadata | OwnsMetadata): void {
  this.setRelationship(new tdm.RelationMetadata({foreignKey: rel.foreignKey}, rel.decoratorInfo));

  if (rel instanceof BelongsToMetadata) {
    this.rel = 'belongsTo';
  } else {
    this.rel = this.type.isArray ? 'hasMany': 'hasOne';
  }
};

tdm.targetStore.on
  .metaInit(tdm.PropMetadata)
  .run((target: Constructor<any>, prop: tdm.PropMetadata, metaArgs?: PropMetadataArgs) => {
    if (!metaArgs) {
      metaArgs = {};
    }

    prop.validation = Array.isArray(metaArgs.validation)
      ? metaArgs.validation.slice()
      : metaArgs.validation && tdm.isFunction(metaArgs.validation.validate) ? [metaArgs.validation] : []
    ;
  });
