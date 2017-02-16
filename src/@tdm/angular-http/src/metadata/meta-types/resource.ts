import { ResourceMetadataArgs, Deserializer, ResourceMetadata, MapperFactory } from '@tdm/core';
import { Response } from '@angular/http';

import { Params } from '../../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../../core/interfaces';

export interface HttpResourceMetadataArgs extends ResourceMetadataArgs, BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;

  deserializer?: () => Deserializer<Response>;
}

export class HttpResourceMetadata implements ResourceMetadata {
  name: string;

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
  deserializer?: () => Deserializer<Response>;
  mapper: MapperFactory;

  constructor(obj: HttpResourceMetadataArgs) {
    Object.assign(this, obj);
  }

  static DEFAULTS: HttpResourceMetadataArgs = {
    endpoint: undefined
  };

  static VALIDATE(obj: HttpResourceMetadataArgs): void {
    if (!obj.endpoint) {
      throw new Error('Resource endpoint is mandatory.');
    }
  }
}

