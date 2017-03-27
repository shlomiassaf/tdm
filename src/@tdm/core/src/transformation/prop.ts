import { RelationMetadata, PropMetadata, isFunction } from '@tdm/transformation';
import { BelongsToMetadata, OwnsMetadata, RelationshipType } from '../metadata';
import { Validator } from '../fw';

declare module '@tdm/transformation/metadata/prop' {
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
    this.rel = this.typedArray ? 'hasMany': 'hasOne';
  }
};

PropMetadata.onInit((prop, metaArgs) => {
  prop.validation = Array.isArray(metaArgs.validation)
    ? metaArgs.validation.slice()
    : metaArgs.validation && isFunction(metaArgs.validation.validate) ? [metaArgs.validation] : []
  ;
});
