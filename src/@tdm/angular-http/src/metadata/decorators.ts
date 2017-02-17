import { decoratorFactories as df, isString, metadataFactory } from '@tdm/core';

import {
  HttpResourceMetadataArgs,
  HttpActionMetadataArgs,
  UrlParamMetadataArgs,
  UrlParamMetadata
} from './meta-types';

import { HttpAdapter } from '../core';


export function UrlParamsDecorator(urlParam: string | UrlParamMetadataArgs, propertyKey: PropertyKey): any {
  const urlParamsMeta: UrlParamMetadataArgs = {};

  if (!urlParam) {
    Object.assign(urlParamsMeta, {urlTemplateParamName: name});
  } else if (isString(urlParam)) {
    Object.assign(urlParamsMeta, {urlTemplateParamName: urlParam});
  } else {
    Object.assign(urlParamsMeta, urlParam);
  }

  return metadataFactory(UrlParamMetadata, urlParamsMeta, propertyKey);
}


// FOR AOT
// export const HttpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);
const httpResource = df.resource<HttpResourceMetadataArgs>(HttpAdapter);

/**
 * @classDecorator
 * @param def
 */
export function HttpResource(def: HttpResourceMetadataArgs): (target) => any {
  return httpResource(def) as any;
}

/**
 * @propertyDecorator both
 */
export const HttpAction = df.action<HttpActionMetadataArgs>(HttpAdapter);
/**
 * @propertyDecorator instance
 * @param def
 */
export const UrlParam = <(def?: string | UrlParamMetadataArgs) => PropertyDecorator> df.storeFor(HttpAdapter, UrlParamMetadata, UrlParamsDecorator);
