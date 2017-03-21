import { TransformableMetadataArgs, MapperFactory } from '@tdm/transformation';

import { DeserializerFactory } from '../../fw';

export interface ResourceMetadataArgs extends TransformableMetadataArgs {
  /**
   * A name for the resource.
   * Depending on your setup, this property might be used to identify resource from deserialized data. (e.g. JSONAPI)
   * If not set, the default name is the class name (which does not guarantee uniqueness)
   * @optional
   */
  name?: string;

  deserializer?: DeserializerFactory;

  /**
   * If true will not build the decorated class into a resource.
   * Use this if you are registering the mixin outside of the class declaration.
   *
   * ### Example
   * **Registering the mixin INSIDE the class declaration (noBuild: false, or don't declare it):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserBaseClass extends RestMixin(User_) { }
   *
   * **Registering the mixin OUTSIDE the class declaration (noBuild: true):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserConst_) { }
   *
   * export const UserConst = RestMixin(UserConst_);
   * export type UserConst = RestMixin<UserConst_>;
   * ```
   *
   * @optional
   * @default false
   */
  noBuild?: boolean;

  mapper?: MapperFactory;
}
