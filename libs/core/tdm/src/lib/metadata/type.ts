import {
  reflection,
  isFunction,
  Constructor,
  BaseMetadata,
  DecoratorInfo,
  MetaClass
} from '../fw';

export interface TypeDefinition {
  /**
   * The type or a forward reference (getter) for the type.
   * If not set, Object is set as the default type
   */
  ref?: (() => Constructor<any>) | Constructor<any>;

  /**
   * If true, ref should be treated as a getter to the type.
   */
  forwardRef?: true;

  /**
   * Is actual type an array of the type in ref?
   */
  isArray?: boolean;
}

/**
 * Custom type definitions for a property.
 *
 * In most cases custom type definition are not needed, however due to the way typescript defines
 * the type information there are some edge cases where a manual type definition is required:
 *
 * A) Circular module dependency, i.e. where A import B and B import A. Especially common in related types.
 *    From 2 circular dependencies, the first one to load will not know the type of the 2nd.
 *    A similar scenario also happens when 2 (or more) classes are defined on the same file and a class (A)
 *    defined before of an other class (B). If class A has a property of type class B then the type information
 *    for B will be undefined since at the point of executing the decorator code B is undefined, this is plain JS.
 *
 * B) When using "this" type. TypeScript will emit the type "Object" when using this so it is not
 *    known and the user must supply it.
 *
 * C) When using "any" type. TypeScript will emit the type "Object" when using this so it is not
 *    known and the user must supply it.
 *
 * D): When the type T in an Array of T, TypeScript will emit the type Array without the array
 *     element type. https://github.com/Microsoft/TypeScript/issues/7169
 *
 * A type definition supports 2 type of references to a type:
 *   1. Forward reference
 *   2. Direct reference
 *
 * Forward reference is simple a function that returns the type, a simple getter. It comes to solve
 * the problem described in A.
 *
 * Direct reference is for all other use cases, the type definition points to the type directly.
 *
 * ```ts
 * class MyClass {}
 *
 * // Forward Reference:
 * { ref: () => MyClass, forwardRef: true }
 *
 * // Direct Reference:
 * { ref: MyClass }
 * ```
 *
 * Since `() => MyClass` and `MyClass` are both functions it is required to specify `forwardRef: true`,
 * if not the library will treat `ref` as the type.
 *
 * Since using `forwardRef` is common a shortcut can be used, instead of defining an object, just provide
 * a function, the library will convert it into a forward reference type definition.
 *
 * ```ts
 * class MyClassA {
 *   @Prop({ type: () => MyClassB }) myClassB: MyClassB;
 * }
 *
 * class MyClassB {}
 * ```
 * In the example above, `{ type: () => MyClassB }` is equivalent to `{ ref: () => MyClassB, forwardRef: true }`
 *
 *
 * ### Arrays
 * In TS arrays are used with type parameters (generic) that define the type used within an array.
 * Currently, TS will not emit the type parameter and will only emit the Array type.
 *
 * ```ts
 * class MyClass {
 *   myArray: string[];
 * }
 * ```
 * In the example above the reflected type is `Array` and not `String`.
 *
 * To workaround this issue you can specify if the type is an array in the type definition.
 * If `isArray` is not explicitly specified the value is taken from the type system. i.e. if the
 * reflected type is `Array` then `isArray` is considered true. This is also true when using the forward reference shortcut.
 *
 * If no type definition is set and the reflected type is `Array` then the final defined type will be Array<Object>.
 *
 *
 * ```ts
 * class MyClassA {
 *   @Prop({ type: () => MyClassB }) myClassB: MyClassB[];
 *   @Prop() myClassB_1: MyClassB[];
 *
 *   @Type({ type: {ref: String} }) @Prop() myString: string[];
 *   @Prop({ type: {ref: String, isArray: true} }) myString_1: string;
 *   @Prop() myString_2: string[];
 * }
 *
 * class MyClassB {}
 * ```
 *  myClassB: `{ ref: () => MyClassB, forwardRef: true, isArray: true }`
 *  myClassB_1: `{ ref: Object, isArray: true }`
 *  myString: `{ ref: String, isArray: true }`
 *  myString_1: `{ ref: String, isArray: true }`
 *  myString_2: `{ ref: Object, isArray: true }`
 *
 *  Note that explicitly set type definitions override reflected type definitions.
 */
export type TypeMetadataArgs = { (): Constructor<any> } | TypeDefinition;

@MetaClass<TypeMetadataArgs, TypeMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
export class TypeMetadata extends BaseMetadata {
  readonly ref: Constructor<any>;
  readonly isArray?: boolean;
  readonly isGetter?: boolean;

  constructor(
    metaArgs: TypeMetadataArgs,
    info: DecoratorInfo,
    target?: Constructor<any>
  ) {
    super(info);

    const type = target
      ? reflection.designType(target.prototype, this.name as any)
      : Object;

    let def: TypeDefinition;
    if (isFunction(metaArgs)) {
      def = { ref: metaArgs, forwardRef: true, isArray: type === Array };
    } else if (metaArgs) {
      def = metaArgs;
      if (!def.hasOwnProperty('isArray')) {
        def.isArray = type === Array;
      }
      if (!def.ref) {
        def.ref = def.forwardRef === true ? () => Object : Object;
      }
    } else {
      def = { ref: type === Array ? Object : type, isArray: type === Array };
    }

    this.isArray = def.isArray;

    if (def.forwardRef === true) {
      // WHY configurable: true -> see @tdm/data -> meta-class extension
      Object.defineProperty(this, 'ref', {
        configurable: true,
        get: <any>def.ref
      });
      this.isGetter = true;
    } else {
      this.ref = <any>def.ref;
    }
  }
}
