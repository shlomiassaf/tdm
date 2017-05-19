import { decoratorFactory } from '@tdm/core';
import { decoratorFactories } from '@tdm/data';

import {
  SeqResourceMetadataArgs,
  SeqActionMetadataArgs,
  SeqActionMetadata
} from './metadata';

import { SeqAdapter } from './core';

/**
 * @propertyDecorator both
 * @param def
 */
export const SeqAction = decoratorFactory<SeqActionMetadataArgs>(SeqActionMetadata);

export const SeqResource = decoratorFactories.resource<SeqResourceMetadataArgs>(SeqAdapter);
