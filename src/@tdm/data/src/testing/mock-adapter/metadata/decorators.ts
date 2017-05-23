import { tdm } from '@tdm/core';
import { decoratorFactories as df } from '@tdm/data';

import {
  MockResourceMetadataArgs,
  MockActionMetadataArgs,
  MockActionMetadata
} from './meta-types';

import { MockAdapter } from '../core';


export const MockResource = df.resource<MockResourceMetadataArgs>(MockAdapter);
export const MockAction = tdm.decoratorFactory<MockActionMetadataArgs>(MockActionMetadata);


// HttpAdapter in action module will create circular dependency.
MockActionMetadata.register = function register(meta: tdm.MetaFactoryInstance<MockActionMetadata>): void {
  tdm.targetStore.getAdapter(MockAdapter).addAction(meta);
};
