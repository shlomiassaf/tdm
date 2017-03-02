import { MapperFactory } from '@tdm/transformation';
import { ResourceMetadataArgs, Deserializer } from '@tdm/core';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  endpoint: string;
  deserializer?: () => Deserializer<any>;
}

export class MockResourceMetadata implements ResourceMetadataArgs {
  name: string;
  endpoint: string;
  deserializer?: () => Deserializer<any>;
  noBuild: boolean;
  mapper: MapperFactory;

  constructor(obj: MockResourceMetadataArgs) {
    Object.assign(this, obj);
  }

}

