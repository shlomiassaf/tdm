import { decoratorFactory, targetStore, MetaFactoryInstance } from '@tdm/transformation';
import { decoratorFactories as df } from '@tdm/core';

import {
  MockResourceMetadataArgs,
  MockActionMetadataArgs,
  MockActionMetadata
} from './meta-types';

import { MockAdapter } from '../core';


export const MockResource = df.resource<MockResourceMetadataArgs>(MockAdapter);
export const MockAction = decoratorFactory<MockActionMetadataArgs>(MockActionMetadata);


// HttpAdapter in action module will create circular dependency.
MockActionMetadata.register = function register(meta: MetaFactoryInstance<MockActionMetadata>): void {
  targetStore.getAdapterStore(MockAdapter).meta.addAction(meta);
};
