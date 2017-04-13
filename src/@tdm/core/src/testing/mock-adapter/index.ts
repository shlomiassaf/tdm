export {
  MockResource,
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
import { targetStore } from '@tdm/transformation/metadata';
import { MockAdapter } from './core';
import { MockActionMetadata } from './metadata';
targetStore.registerAdapter(MockAdapter, {
  actionMetaClass: MockActionMetadata,
  DAOClass: MockDao
});


export { MockMixin } from './mixin-factory';
