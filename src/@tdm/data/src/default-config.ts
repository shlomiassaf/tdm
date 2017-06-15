import { TransformStrategy, NamingStrategyConfig, directMapper, MapperFactory } from '@tdm/core/tdm';

export interface DefaultConfig {
  mapper: MapperFactory;

  /**
   * How to treat an object when transforming it.
   *
   * inclusive - include all except explicitly excluded properties.
   * exclusive - exclude all except explicitly included properties.
   *
   * Note that every member decorated with @Prop is included by default, so `exclusive` requires
   * every member that you want to include to be decorated with @Prop
   *
   * ## exclusive vs inclusive:
   * An exclusive strategy is strict hence predictable, this means:
   *   - Reduce the change for error
   *   - Better performance
   *
   * The cost is boilerplate, writing additional code.
   *
   *
   * @optional
   * @default 'inclusive'
   */
  transformStrategy: TransformStrategy | undefined;

  /**
   * A Default strategy for name conversion.
   * Applied on all properties except those with explicit alias defined.
   *
   *
   * ###EXAMPLE
   * ```ts
   * {
   *  transformNameStrategy: {
   *    incoming: (propertyName: string) => camelCase(propertyName),
   *    outgoing: (propertyName: string) => snakeCase(propertyName)
   *  }
   * }
   * ```ts
   *
   * The example above converts incoming server object properties to camel case (myProperty)
   * and all outgoing client object properties to snake case (my_property)
   *
   * @optional
   * @default undefined
   */
  transformNameStrategy: NamingStrategyConfig | undefined;
}

export const defaultConfig: DefaultConfig = {
  mapper: directMapper,
  transformStrategy: 'inclusive',
  transformNameStrategy: undefined
};
