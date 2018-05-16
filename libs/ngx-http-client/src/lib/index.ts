import '@tdm/core';

export { Params } from './utils/match-pattern';

export {
  UrlParamMetadataArgs,
  HttpResourceMetadataArgs,
  HttpActionMetadataArgs,
  HttpActionMethodType
} from './metadata';

export {
  TrailingSlashesStrategy,
  BaseHttpConfig,
  HttpActionOptions
} from './core';

export { HttpAction, UrlParam, HttpResource } from './decorators';

// TODO: solve this circular dependency hell
export { NgDAO } from './register';

export { HttpDefaultConfig } from './http-default-config';
export { HttpClientResourceModule } from './module';

export {
  ActiveRecord,
  TypeOfActiveRecord,
  ActiveRecordCollection,
  HttpActiveRecord,
  HttpActiveRecordStatic
} from './active-record';
