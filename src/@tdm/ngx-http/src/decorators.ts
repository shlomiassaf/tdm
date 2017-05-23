import { tdm } from '@tdm/core';
import { decoratorFactories } from '@tdm/data';
import {
  HttpResourceMetadataArgs,
  HttpActionMetadataArgs,
  HttpActionMetadata,
  UrlParamMetadataArgs,
  UrlParamMetadata
} from './metadata';

import { HttpAdapter } from './core';

/**
 * @propertyDecorator both
 * @param def
 */
export const HttpAction = tdm.decoratorFactory<HttpActionMetadataArgs>(HttpActionMetadata);

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const UrlParam = tdm.decoratorFactory<string | UrlParamMetadataArgs>(UrlParamMetadata, true);



// FOR AOT
// export const HttpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);
const httpResource = decoratorFactories.resource<HttpResourceMetadataArgs>(HttpAdapter);

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
