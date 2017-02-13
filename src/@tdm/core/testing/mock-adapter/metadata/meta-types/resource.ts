import { ResourceMetadataArgs, Deserializer } from '@tdm/core';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  deserializer?: () => Deserializer<any>;
}

export class MockResourceMetadata {
  endpoint: string;
  identity: string;
  deserializer?: () => Deserializer<any>;

  constructor(obj: MockResourceMetadataArgs) {
    Object.assign(this, obj);
  }

  static DEFAULTS: MockResourceMetadataArgs = {
    endpoint: undefined,
    identity: undefined
  };

  static VALIDATE(obj: MockResourceMetadataArgs): void {
    if (!obj.endpoint) {
      throw new Error('Resource endpoint is mandatory.');
    }
  }
}

