import { TransformStrategy, NamingStrategyConfig, ModelMetadataArgs, tdm } from '@tdm/core';

export interface ResourceMetadataArgs extends ModelMetadataArgs {
  /**
   * A name for the resource.
   * Depending on your setup, this property might be used to identify resource from deserialized data. (e.g. JSONAPI)
   * If not set, the default name is the class name (which does not guarantee uniqueness)
   * @optional
   */
  resName?: string;

  /**
   * If true will not build the decorated class into a resource.
   * Use this if you are registering the mixin outside of the class declaration.
   *
   * ### Example
   * **Registering the mixin INSIDE the class declaration (noBuild: false, or don't declare it):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserBaseClass extends ARMixin(User_) { }
   *
   * **Registering the mixin OUTSIDE the class declaration (noBuild: true):**
   * ```ts
   * @HttpResource({ endpoint: '/api/users/:id?' })
   * export class UserConst_) { }
   *
   * export const UserConst = ARMixin(UserConst_);
   * export type UserConst = ARMixin<UserConst_>;
   * ```
   *
   * @optional
   * @default false
   */
  noBuild?: boolean;

  mapper?: tdm.MapperFactory;
}

export function noop() {}

@tdm.MetaClass<ResourceMetadataArgs, ResourceMetadata>({
  allowOn: ['class'],
  register: <any>noop
})
export class ResourceMetadata extends tdm.BaseMetadata {
  resName: string;
  noBuild: boolean;
  mapper: tdm.MapperFactory;
  factory: (isColl: boolean) => any;
  transformStrategy: TransformStrategy | undefined;
  transformNameStrategy: NamingStrategyConfig | undefined;
  
  constructor(obj: ResourceMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);
    ['resName', 'noBuild', 'mapper', 'factory', 'transformStrategy', 'transformNameStrategy']
      .forEach( k => {
        if (obj.hasOwnProperty(k)) {
        this[k] = obj[k]
      }
    });
  }
}