import { decoratorFactories as df } from '@tdm/core';

import {
  MockResourceMetadataArgs,
  MockActionMetadataArgs,
} from './meta-types';

import { MockAdapter } from '../core';


export const MockResource = df.resource<MockResourceMetadataArgs>(MockAdapter);
export const MockAction = df.action<MockActionMetadataArgs>(MockAdapter);


