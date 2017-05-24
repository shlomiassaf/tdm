import { tdm } from '@tdm/core';
import { decoratorFactories } from '@tdm/data';
import {
  HttpResourceMetadataArgs,
  HttpActionMetadata,
  UrlParamMetadata
} from './metadata';

import { HttpAdapter } from './core';

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
