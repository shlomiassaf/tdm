import { tdm } from '@tdm/core';
import { MetaClassInstanceDetails } from '@tdm/core/tdm'; // leave for angular AOT compiler.
import { ResourceMetadataArgs, ResourceMetadata } from '@tdm/data';

import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';

export interface HttpResourceMetadataArgs extends ResourceMetadataArgs, BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;
}

function factory(this: tdm.MetaClassMetadata<HttpResourceMetadataArgs, HttpResourceMetadata>,
                 metaArgs: HttpResourceMetadataArgs,
                 target: Object,
                 info: tdm.DecoratorInfo): tdm.MetaClassInstanceDetails<HttpResourceMetadataArgs, HttpResourceMetadata> {
  return {
    info,
    target: <any>target,
    metaClassKey: <any>tdm.ClassMetadata,
    metaPropKey: 'ngxHttpResource',
    metaValue: new HttpResourceMetadata(metaArgs, info)
  };
}

@tdm.MetaClass<HttpResourceMetadataArgs, HttpResourceMetadata>({
  allowOn: ['class'],
  factory
})
export class HttpResourceMetadata extends ResourceMetadata implements HttpResourceMetadataArgs {
  /**
   * The url for this resource.
   * This property does not extend from a base type.
   */
  endpoint: string;
  urlParams?: Params;
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  trailingSlashes?: TrailingSlashesStrategy;

  constructor(obj: HttpResourceMetadataArgs, info: tdm.DecoratorInfo) {
    super(obj, info);
    Object.assign(this, obj);
  }

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
