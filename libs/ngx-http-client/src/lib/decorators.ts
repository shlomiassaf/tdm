import { MetaClass, getBaseClass, targetStore } from '@tdm/core/tdm';

import { HttpAdapter } from './core';
import {
  HttpResourceMetadata,
  HttpResourceMetadataArgs,
  HttpActionMetadata,
  UrlParamMetadata,
  HttpActionMetadataArgs, // HttpActionMetadataArgs - leave to satisfy angular compiler
  UrlParamMetadataArgs // UrlParamMetadataArgs - leave to satisfy angular compiler
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
const httpResource = MetaClass.get(
  HttpResourceMetadata
).createResourceDecorator(HttpAdapter);

/**
 * @classDecorator
 * @param def
 */
export function HttpResource(def: HttpResourceMetadataArgs): (target) => any {
  if (!def.endpoint) {
    throw new Error('Resource endpoint is mandatory.');
  }

  // apply logic to set a default skip when not set, if the base class has no registered HttpAdapter then defer.
  if (def.hasOwnProperty('skip')) {
    return httpResource(def);
  } else {
    return target => {
      const baseClass = getBaseClass(target);
      if (!baseClass || baseClass === Object) {
        def.skip = true;
      } else {
        const tMeta = targetStore.getTargetMeta(baseClass);
        if (tMeta && tMeta.hasAdapter(HttpAdapter)) {
          def.skip = true;
        }
      }
      return httpResource(def)(target);
    };
  }
}
