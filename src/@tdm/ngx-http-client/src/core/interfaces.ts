import { ActionOptions } from '@tdm/data';
import { Params } from '../utils/match-pattern';


export type TrailingSlashesStrategy = 'ignore' | 'force' | 'strip';

export interface BaseHttpConfig {
  /**
   * Optional set of pre-bound parameters all actions in this resource.
   *
   * `urlParams` can be set on multiple metadata declarations, the list below describes the precedence
   * 1st is highest:
   *
   *   1. Action metadata
   *   2. Resource Metadata
   *   3. Global configuration
   *
   * Note that `urlParams` declared in **metadata** decorators are not merged, they are replaced.
   *
   * In addition, ad-hoc `urlParams` can be supplied with the `HttpActionOptions` action method parameter [ user.create(options) ]
   * ad-hoc `urlParams` are **merged** into the resolved value of metadata `urlParams`.
   * ad-hoc `urlParams` with an `undefined` value are considered a delete instruction.
   *
   * @optional
   * @default undefined
   */
  urlParams?: Params;

  /**
   * An object containing any HTTP headers that you want to pre-populate your Headers object with.
   *
   * `headers` can be set on multiple metadata declarations, the list below describes the precedence
   * 1st is highest:
   *
   *   1. Action metadata
   *   2. Resource Metadata
   *   3. Global configuration
   *
   * > Note that `headers` declared in **metadata** decorators are not merged, they are replaced.
   *
   * In addition, ad-hoc `headers` can be supplied with the `HttpActionOptions` action method parameter [ user.create(options) ]
   * ad-hoc `headers` are **merged** into the resolved value of metadata `headers`.
   * ad-hoc ``headers`` with an `undefined` value are considered a delete instruction.
   * @optional
   * @default undefined
   */
  headers?: { [key: string]: any };

  /**
   * Set the XMLHttpRequest.withCredentials property.
   *
   * @See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
   *
   * `withCredentials` can be set on multiple metadata declarations, the list below describes the precedence
   * 1st is highest:
   *
   *   1. Action metadata
   *   2. Resource Metadata
   *   3. Global configuration
   *
   *
   * In addition, ad-hoc `withCredentials` can be supplied with the `HttpActionOptions` action method parameter [ user.create(options) ]
   *
   * @optional
   * @default globalConfig.withCredentials
   */
  withCredentials?: boolean;

  /**
   * Trailing slashes strategy to use.
   *
   *   - **ignore**: leave calculated URL as is.
   *   - **force**:  ensure the calculated URL ens with a trailing slash
   *   - **strip**: remove all trailing slashes from the calculated URL
   *
   * `trailingSlashes` can be set on multiple metadata declarations, the list below describes the precedence
   * 1st is highest:
   *
   *   1. Action metadata
   *   2. Resource Metadata
   *   3. Global configuration
   *
   *
   * In addition, ad-hoc `trailingSlashes` can be supplied with the `HttpActionOptions` action method parameter [ user.create(options) ]
   *
   * @optional
   * @default globalConfig.trailingSlashes
   */
  trailingSlashes?: TrailingSlashesStrategy;
}


export interface HttpActionOptions extends BaseHttpConfig, ActionOptions {

}
