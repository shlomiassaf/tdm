import { tdm } from '@tdm/core';
import { decoratorFactories as df } from '@tdm/data';

import {
  MockResourceMetadataArgs,
  MockActionMetadata
} from './meta-types';

import { MockAdapter } from '../core';


export const MockResource = df.resource<MockResourceMetadataArgs>(MockAdapter);
export const MockAction = tdm.MetaClass.get(MockActionMetadata).createDecorator();
