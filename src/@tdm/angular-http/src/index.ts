export { Params } from './utils/match-pattern';

export {
  UrlParam,
  UrlParamMetadataArgs,
  HttpResource,
  HttpResourceMetadataArgs,
  HttpAction,
  HttpActionMetadataArgs,
  HttpActionMethodType
} from './metadata';

export {
  TrailingSlashesStrategy,
  BaseHttpConfig,
  HttpActionOptions
} from './core';

export { RestMixin } from './mixin-factory';
export { httpDefaultConfig, HttpDefaultConfig } from './http-default-config';
export { ActiveRecordCollection } from './base-http-resource';
export { HttpResourceModule } from './module';
