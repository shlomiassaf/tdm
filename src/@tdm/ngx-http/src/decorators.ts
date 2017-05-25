import { tdm } from '@tdm/core';

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
export const HttpAction = tdm.MetaClass.get(HttpActionMetadata).createDecorator();

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const UrlParam = tdm.MetaClass.get(UrlParamMetadata).createDecorator(true);



// FOR AOT
// export const HttpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);
const httpResource = tdm.MetaClass.get(HttpResourceMetadata).createResourceDecorator(HttpAdapter);

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
