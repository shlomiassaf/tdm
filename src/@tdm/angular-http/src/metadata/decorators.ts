import { decoratorFactory, targetStore, MetaFactoryInstance } from '@tdm/transformation';
import { decoratorFactories as df} from '@tdm/core';

import {
  HttpResourceMetadataArgs,
  HttpActionMetadataArgs,
  HttpActionMetadata,
  UrlParamMetadataArgs,
  UrlParamMetadata
} from './meta-types';

import { HttpAdapter } from '../core';

/**
 * @propertyDecorator both
 * @param def
 */
export const HttpAction = decoratorFactory<HttpActionMetadataArgs>(HttpActionMetadata);

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const UrlParam = decoratorFactory<string | UrlParamMetadataArgs>(UrlParamMetadata, true);


// FOR AOT
// export const HttpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);
const httpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);

/**
 * @classDecorator
 * @param def
 */
export function HttpResource(def: HttpResourceMetadataArgs): (target) => any {
  if (!def.endpoint) {
    throw new Error('Resource endpoint is mandatory.');
  }
  return httpResource(def) as any;
}

// HttpAdapter in action module will create circular dependency.
HttpActionMetadata.register = function register(meta: MetaFactoryInstance<HttpActionMetadata>): void {
  targetStore.getAdapterStore(HttpAdapter).meta.addAction(meta);
};
