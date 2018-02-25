import { MetaClass, ModelMetadataArgs } from '@tdm/core/tdm';

import {
  MockResourceMetadata,
  MockActionMetadata,
  MockResourceMetadataArgs, // MockResourceMetadataArgs - leave to satisfy angular compiler
  MockActionMetadataArgs    // MockActionMetadataArgs - leave to satisfy angular compiler
} from './meta-types';

import { MockAdapter } from '../core';

export const MockResource = MetaClass.get(MockResourceMetadata).createResourceDecorator(MockAdapter);
export const MockAction = MetaClass.decorator(MockActionMetadata);
