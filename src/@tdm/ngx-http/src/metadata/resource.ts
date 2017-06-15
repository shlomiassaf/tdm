import {
  ModelMetadataArgs,
  ModelMetadata,
  MetaClass
} from '@tdm/core/tdm';
import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';

export interface HttpResourceMetadataArgs extends ModelMetadataArgs, BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;
}

@MetaClass<HttpResourceMetadataArgs, HttpResourceMetadata>({
  inherit: ModelMetadata
})
export class HttpResourceMetadata extends ModelMetadata implements HttpResourceMetadataArgs {
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
