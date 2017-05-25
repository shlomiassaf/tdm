import { tdm } from '@tdm/core';
import { ResourceMetadataArgs, ResourceMetadata } from '@tdm/data';

export interface MockResourceMetadataArgs extends ResourceMetadataArgs {
  endpoint: string;
}

export function noop() {}

@tdm.MetaClass<ResourceMetadataArgs, MockResourceMetadata>({
  allowOn: ['class'],
  register: <any>noop
})
export class MockResourceMetadata extends ResourceMetadata implements ResourceMetadataArgs {
  endpoint: string;

  constructor(obj: MockResourceMetadataArgs, info: tdm.DecoratorInfo) {
    super(obj, info);
    this.endpoint = obj.endpoint;
  }

}

