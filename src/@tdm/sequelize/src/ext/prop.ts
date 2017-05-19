import { PropMetadata } from '@tdm/core';
import * as seq from 'sequelize';

declare module '@tdm/core/metadata/prop' {
  interface PropMetadataArgs {
    seqCol?: seq.DefineAttributeColumnOptions;
  }

  interface PropMetadata {
    seqCol: seq.DefineAttributeColumnOptions;
  }
}


PropMetadata.onInit((prop, metaArgs) => {
  prop.seqCol = metaArgs.seqCol;
});
