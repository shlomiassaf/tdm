export {
  MockResource,
  MockResourceMetadata,
  MockResourceMetadataArgs,
  MockAction,
  MockActionMetadataArgs
} from './metadata';

export {
  MockAdapter,
  BaseMockConfig,
  MockActionOptions
} from './core';

// TODO: solve this circular dependency hell
import { MockDao } from './core/mock-dao';
import { tdm } from '@tdm/core';
import { MockAdapter } from './core';
import { MockActionMetadata, MockResourceMetadata } from './metadata';
tdm.targetStore.registerAdapter(MockAdapter, {
  actionMetaClass: MockActionMetadata,
  DAOClass: MockDao,
  resourceMetaClass: MockResourceMetadata
});


export { MockMixin } from './mixin-factory';
