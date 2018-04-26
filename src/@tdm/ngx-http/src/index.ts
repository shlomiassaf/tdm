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

export { httpDefaultConfig, HttpDefaultConfig } from './http-default-config';
export { HttpResourceModule } from './module';

export { ActiveRecord, ActiveRecordCollection, HttpActiveRecord, HttpActiveRecordStatic } from './active-record';
