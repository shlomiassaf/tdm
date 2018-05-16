import { MetaClass, ModelMetadata, ModelMetadataArgs } from '@tdm/core/tdm';

export interface MockResourceMetadataArgs extends ModelMetadataArgs {
  endpoint: string;
}

@MetaClass<MockResourceMetadataArgs, MockResourceMetadata>({
  inherit: ModelMetadata
})
export class MockResourceMetadata extends ModelMetadata
  implements MockResourceMetadataArgs {
  endpoint: string;
}
