import { ModelMetadataArgs, ModelMetadata, MetaClass } from '@tdm/core/tdm';
import { Params } from '../utils/match-pattern';
import { BaseHttpConfig, TrailingSlashesStrategy } from '../core/interfaces';

export interface HttpResourceMetadataArgs
  extends ModelMetadataArgs,
    BaseHttpConfig {
  /**
   * A parameterized URL template with parameters prefixed by : as in /user/:username.
   */
  endpoint: string;

  /**
   * If true will not build (process) the decorated class into a resource.
   * This is useful for deferring the build step.
   *
   * The default value for `skip` is dynamically set byt the library.
   * When `skip` is not set (explicitly) the library will set it based on the inheritance structure of the target.
   * When the target (class) extends a class that has a registered `HttpAdapter` it will leave it as is (false)
   * Otherwise, it will set it to true.
   *
   * The logic behind this is simple, when a target inherits a class with a registered `HttpAdapter` the library assume
   * that the base target is an `ActiveRecord` mixin:
   *
   * ```ts
   * export class UserBaseClass extends ActiveRecord(User) { }
   * ```
   *
   * If the user still wants to defer he can explicitly set `skip` to true.
   *
   * Any other case (the base target does not have a registered `HttpAdapter`) means that no mixins are registered which
   * means no actions for this target are set, i.e. `HttpAdapter` will not work.
   *
   * For example, if you are registering the mixin outside of the class declaration.
   *
   * ### Example
   * **Registering the mixin INSIDE the class declaration (skip: false, or don't declare it):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserBaseClass extends ActiveRecord(User_) { }
   *
   * **Registering the mixin OUTSIDE the class declaration (skip: true):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserConst_) { }
   *
   * export const UserConst = ActiveRecord(UserConst_);
   * export type UserConst = ActiveRecord<UserConst_>;
   * ```
   *
   * Manually processing is required to finish the model build.
   * @optional
   * @default false
   */
  skip?: true;
}

@MetaClass<HttpResourceMetadataArgs, HttpResourceMetadata>({
  inherit: ModelMetadata
})
export class HttpResourceMetadata extends ModelMetadata
  implements HttpResourceMetadataArgs {
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
