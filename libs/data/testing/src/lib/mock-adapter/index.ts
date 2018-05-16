export {
  MockResource,
  MockResourceMetadata,
  MockResourceMetadataArgs,
  MockAction,
  MockActionMetadataArgs
} from './metadata';

export { MockAdapter, BaseMockConfig, MockActionOptions } from './core';

// TODO: solve this circular dependency hell
import { MockDao } from './core/mock-dao';
import { targetStore } from '@tdm/core/tdm';
import { MockAdapter } from './core';
import { MockActionMetadata, MockResourceMetadata } from './metadata';
targetStore.registerAdapter(MockAdapter, {
  actionMetaClass: MockActionMetadata,
  DAOClass: MockDao,
  resourceMetaClass: MockResourceMetadata
});

export { ActiveRecord } from './mixin-factory';
