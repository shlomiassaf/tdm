import {
  ModelMetadataArgs,
  ModelMetadata,
  MetaClass
} from '@tdm/core/tdm';
import { BaseLocalForageConfig } from '../core/interfaces';

export interface LocalForageResourceMetadataArgs extends ModelMetadataArgs, BaseLocalForageConfig {

}

@MetaClass<LocalForageResourceMetadataArgs, LocalForageResourceMetadata>({
  inherit: ModelMetadata
})
export class LocalForageResourceMetadata extends ModelMetadata implements LocalForageResourceMetadataArgs {

}
