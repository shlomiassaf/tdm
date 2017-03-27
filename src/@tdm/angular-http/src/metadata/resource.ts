import { MapperFactory } from '@tdm/transformation';
import { ResourceMetadataArgs } from '@tdm/core';


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
}

