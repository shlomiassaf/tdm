import { MapperFactory } from '@tdm/transformation';
import { ResourceMetadataArgs } from '@tdm/core';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  endpoint: string;
}

export class MockResourceMetadata implements ResourceMetadataArgs {
  name: string;
  endpoint: string;
  noBuild: boolean;
  mapper: MapperFactory;

  constructor(obj: MockResourceMetadataArgs) {
    Object.assign(this, obj);
  }

}

