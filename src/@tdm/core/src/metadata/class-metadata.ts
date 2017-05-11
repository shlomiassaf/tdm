import { TransformStrategy, NamingStrategyConfig } from '../fw';

export interface ModelMetadataArgs {
  /**
   * A Factory for creating new instances of the target and or collection.
   * If not set, collection is [], target is a new instance of the type.
   */
  factory?: (isColl: boolean) => any;

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
  transformStrategy?: TransformStrategy | undefined;

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
   * > In exclusive mode (transformStrategy = 'exclusive` or decorating a class with @Exclude) there
   * is no meaning to the `incoming` strategy since incoming keys are not part of the process, only
   * properties defined with @Prop. This means that the outgoing strategy is a mapper for both incoming and outgoing.
   *
   * @example src/demo/modules/@netflix/models/title.ts
   * @optional
   * @default undefined
   */
  transformNameStrategy?: NamingStrategyConfig | undefined;
}

export class ClassMetadata {
  identity: PropertyKey;

  /**
   * A name for the resource.
   * Depending on your setup, this property might be used to identify resource from deserialized data. (e.g. JSONAPI)
   * If not set, the default name is the class name (which does not guarantee uniqueness)
   * @optional
   */
  name?: string;

  /**
   * A Factory for creating new instances of the target and or collection.
   * If not set, collection is [], target is a new instance of the type.
   */
  factory?: (isColl: boolean) => any;

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

  static metaFactory(metaArgs: any, target: Object | Function, key: PropertyKey, desc: PropertyDescriptor): any {
    throw new Error('Not supported');
  }

  static register(meta: any): void {
    throw new Error('Not supported');
  }
}
