import { tdm, ModelMetadataArgs } from '@tdm/core';

export interface MockResourceMetadataArgs extends ModelMetadataArgs {
  endpoint: string;
}

@tdm.MetaClass<MockResourceMetadataArgs, MockResourceMetadata>({
  inherit: tdm.ModelMetadata
})
export class MockResourceMetadata extends tdm.ModelMetadata implements MockResourceMetadataArgs {
  endpoint: string;
}
