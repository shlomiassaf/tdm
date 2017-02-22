import { ResourceMetadataArgs, ResourceMetadata, Deserializer, MapperFactory } from '@tdm/core';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  deserializer?: () => Deserializer<any>;
}

export class MockResourceMetadata implements ResourceMetadata {
  name: string;
  endpoint: string;
  deserializer?: () => Deserializer<any>;
  noBuild: boolean;
  mapper: MapperFactory;

  constructor(obj: MockResourceMetadataArgs) {
    Object.assign(this, obj);
  }

  static DEFAULTS: MockResourceMetadataArgs = {
    endpoint: undefined
  };

  static VALIDATE(obj: MockResourceMetadataArgs): void {
    if (!obj.endpoint) {
      throw new Error('Resource endpoint is mandatory.');
    }
  }
}

