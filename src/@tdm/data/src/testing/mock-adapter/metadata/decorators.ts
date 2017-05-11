import { decoratorFactory, targetStore, MetaFactoryInstance } from '@tdm/core';
import { decoratorFactories as df } from '@tdm/data';

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
  targetStore.getAdapter(MockAdapter).addAction(meta);
};
