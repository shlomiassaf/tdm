import { MetaClass } from '@tdm/core/tdm';

import { HttpAdapter } from './core';
import {
  HttpResourceMetadata,
  HttpResourceMetadataArgs,
  HttpActionMetadata,
  UrlParamMetadata,
  HttpActionMetadataArgs,   // HttpActionMetadataArgs - leave to satisfy angular compiler
  UrlParamMetadataArgs      // UrlParamMetadataArgs - leave to satisfy angular compiler
} from './metadata';

/**
 * @propertyDecorator both
 * @param def
 */
export const HttpAction = MetaClass.decorator(HttpActionMetadata);

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const UrlParam = MetaClass.decorator(UrlParamMetadata, true);



// FOR AOT
// export const HttpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);
const httpResource = MetaClass.get(HttpResourceMetadata).createResourceDecorator(HttpAdapter);

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
