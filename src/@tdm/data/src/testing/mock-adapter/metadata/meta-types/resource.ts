import { tdm } from '@tdm/core';
import { ResourceMetadataArgs } from '@tdm/data';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  endpoint: string;
}

export class MockResourceMetadata implements ResourceMetadataArgs {
  name: string;
  endpoint: string;
  noBuild: boolean;
  mapper: tdm.MapperFactory;

  constructor(obj: MockResourceMetadataArgs) {
    Object.assign(this, obj);
  }

}

