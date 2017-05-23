import { tdm } from '@tdm/core';
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
    this.rel = this.typedArray ? 'hasMany': 'hasOne';
  }
};

tdm.PropMetadata.onInit((prop, metaArgs) => {
  prop.validation = Array.isArray(metaArgs.validation)
    ? metaArgs.validation.slice()
    : metaArgs.validation && tdm.isFunction(metaArgs.validation.validate) ? [metaArgs.validation] : []
  ;
});
