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
import { HttpDao } from './core/http-dao';
import { targetStore } from '@tdm/transformation/metadata';
import { HttpAdapter } from './core';
import { HttpActionMetadata } from './metadata';
targetStore.registerAdapter(HttpAdapter, {
  actionMetaClass: HttpActionMetadata,
  daoClass: HttpDao
});

export { httpDefaultConfig, HttpDefaultConfig } from './http-default-config';
export { HttpResourceModule } from './module';

export { ARMixin, ActiveRecordCollection, HttpActiveRecord, HttpActiveRecordStatic } from './active-record';
