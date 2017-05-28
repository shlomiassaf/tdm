import { tdm, ModelMetadataArgs } from '@tdm/core';

import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';

export interface HttpResourceMetadataArgs extends ModelMetadataArgs, BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;
}

@tdm.MetaClass<HttpResourceMetadataArgs, HttpResourceMetadata>({
  inherit: tdm.ModelMetadata
})
export class HttpResourceMetadata extends tdm.ModelMetadata implements HttpResourceMetadataArgs {
  /**
   * The url for this resource.
   * This property does not extend from a base type.
   */
  endpoint: string;
  urlParams?: Params;
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  trailingSlashes?: TrailingSlashesStrategy;
}
