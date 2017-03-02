import { decoratorFactory } from '@tdm/transformation';
import { ActionMetadataArgs, ExtendActionMetadata } from '../../metadata';

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const ExtendAction = decoratorFactory<Partial<ActionMetadataArgs<any>>>(ExtendActionMetadata);
