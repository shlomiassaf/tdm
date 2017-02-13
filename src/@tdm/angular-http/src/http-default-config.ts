import { BaseHttpConfig, TrailingSlashesStrategy } from "./core/interfaces";
import { Params } from "./utils/match-pattern";

export class HttpDefaultConfig implements BaseHttpConfig {
  /**
   * Optional set of pre-bound parameters all actions in this resource.
   *
   * @optional
   * @default {}
   */
  urlParams: Params = {} as any;

  /**
   * An object containing any HTTP headers that you want to pre-populate your Headers object with.
   *
   * @optional
   * @default {}
   */
  headers: { [key: string]: any } = {} as any;

  /**
   * Set the XMLHttpRequest.withCredentials property.
   *
   * @See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
   *
   * @optional
   * @default false
   */
  withCredentials: boolean = false;

  /**
   * Trailing slashes strategy to use.
   *
   *   - **ignore**: leave calculated URL as is.
   *   - **force**:  ensure the calculated URL ens with a trailing slash
   *   - **strip**: remove all trailing slashes from the calculated URL
   *
   * @optional
   * @default 'ignore'
   */
  trailingSlashes: TrailingSlashesStrategy = 'ignore';
}

export const httpDefaultConfig: HttpDefaultConfig = new HttpDefaultConfig();
