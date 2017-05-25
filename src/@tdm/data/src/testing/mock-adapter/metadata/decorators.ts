import { tdm } from '@tdm/core';

import {
  MockResourceMetadata,
  MockActionMetadata,
  MockResourceMetadataArgs, // MockResourceMetadataArgs - leave to satisfy angular compiler
  MockActionMetadataArgs    // MockActionMetadataArgs - leave to satisfy angular compiler
} from './meta-types';

import { MockAdapter } from '../core';


export const MockResource = tdm.MetaClass.get(MockResourceMetadata).createResourceDecorator(MockAdapter);
export const MockAction = tdm.MetaClass.get(MockActionMetadata).createDecorator();
