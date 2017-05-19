import { MapperFactory, decoratorInfo, ClassMetadata, MetaFactoryInstance, registerFactory } from '@tdm/core';
import { ResourceMetadataArgs } from '@tdm/data';


import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';

export interface HttpResourceMetadataArgs extends ResourceMetadataArgs, BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;
}

export class HttpResourceMetadata implements HttpResourceMetadataArgs {
  /**
   * The url for this resource.
   * This property does not extend from a base type.
   */
  endpoint: string;
  urlParams?: Params;
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  trailingSlashes?: TrailingSlashesStrategy;
  noBuild: boolean;
  mapper: MapperFactory;

  constructor(obj: HttpResourceMetadataArgs) {
    Object.assign(this, obj);
  }

  static metaFactory(metaArgs: HttpResourceMetadataArgs, target: Function): MetaFactoryInstance<HttpResourceMetadata> {
    const info = decoratorInfo(target);
    return {
      info,
      target,
      metaClassKey: ClassMetadata,
      metaPropKey: 'ngxHttpResource',
      metaValue: new HttpResourceMetadata(metaArgs)
    } as any
  }

  static register = registerFactory<HttpResourceMetadata>();
}

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    ngxHttpResource: HttpResourceMetadata;
  }
}

declare module '@tdm/core/metadata/class-metadata' {
  interface ClassMetadata {
    ngxHttpResource: HttpResourceMetadata;
  }
}