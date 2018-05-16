import {
  MetadataAllowOn,
  MetadataClassStatic,
  MetaClassInstanceDetails,
  DecoratorInfo,
  RegisterFn,
  ExtendFn,
  ExtendSingleFn,
  MetaClassRegisterHelpers,
  MetaClassExtendHelpers
} from './types';
import { MetaClassMetadata } from './meta-class';

/**
 * Proxy definition for the current metadata class on an other metadata class.
 *
 * ProxyHost enables syntax sugar, where a user can avoid setting Decorators and set the metadata in one place.
 * For example:
 *
 * ```ts
 * class MyModel {
 *   @Prop() name: string;
 *
 *   @Prop() age: number;
 * }
 * ```
 *
 * Say we want to exclude the property `age`:
 *
 * ```ts
 * class MyModel {
 *   @Prop() name: string;
 *
 *   @Prop() @Exclude() age: number;
 * }
 * ```
 *
 * If `@Exclude` defines a @Prop as a ProxyHost we can:
 *
 * ```ts
 * class MyModel {
 *   @Prop() name: string;
 *
 *   @Prop({exclude: true}) age: number;
 * }
 * ```
 *
 * While this example doesn't seem to do much it actually does.
 *
 *   - We can omit the import of `Exclude`, less code.
 *   - We reduced the definition boilerplate, in this example its not much but others can have a big impact.
 *   - The code is more readable, less decorators equals better readability. Prop holds the whole schema.
 *
 *
 *
 * Note that a property decorators and define a proxy in a class decorator allowing multiple properties
 * to be set from the root.
 *
 * Consider a model that uses multiple extensions (http, ng-dynamic-forms, etc...) having to define all of the
 * different decorators over and over has an impact, both over the payload and the developer experiance.
 *
 */
export interface ProxyHostMetadataArgs<
  T extends MetadataClassStatic<any, any> = any
> {
  /**
   * The proxy metadata class
   */
  host: T;

  /**
   * The key on the proxy metadata class arguments interface, this key is looked up and if set
   * the value is taken as the metadata arguments object for the current metadata class.
   *
   * > Defining a key on the proxy metadata arguments interface will result in a type error since typescript
   * will not recognize the key, to solve that a type extension is required. A ProxyHost can not be set without a type
   * extension
   *
   * Example: Creating a type extension to `PropMetadataArgs`
   * declare module './prop' {
   *   interface PropMetadataArgs {
   *     exclude?: true | ExcludeMetadataArgs;
   *   }
   * }
   */
  containerKey: string;

  /**
   * An optional transformation function, allows changing the metadata arguments.
   * @param metaArgs
   */
  before?(metaArgs: any): any;

  /**
   * When true, treats an array as a collection where each value is a instance of the metadata.
   * This enables settings multiple metadata values.
   */
  forEach?: boolean;
}

export interface MetaClassMetadataArgs<TMetaArgs = any, TMetaClass = any> {
  /**
   * When true, the metadata is saved under the global key.
   *
   * > Global key logic is implemented throughout the library, make sure to follow this logic when
   * implementing custom behaviour (for example, overriding the default factory and/or register methods)
   * Since most custom implementation are metadata class specific this should be an issue.
   *
   *
   * @default undefined;
   */
  single?: true;

  /**
   * A Metadata class to inherit the MetaClassMetadataArgs from.
   *
   * Note that the MetaClassMetadataArgs used to defined the parent are used and not the
   * MetaClassMetadata instance.
   */
  inherit?: any;

  /**
   * Defines a proxy for the current metadata class on an other metadata class.
   * See {@link ProxyHostMetadataArgs}
   */
  proxy?: ProxyHostMetadataArgs;

  /**
   * Create a new metadata instance.
   * @param metaArgs
   * @param target
   * @param key
   * @param desc
   */
  factory?(
    this: MetaClassMetadata<TMetaArgs, TMetaClass>,
    metaArgs: TMetaArgs,
    target: Object | Function,
    info: DecoratorInfo,
    key?: TdmPropertyKey,
    desc?: PropertyDescriptor
  ): MetaClassInstanceDetails<TMetaArgs, TMetaClass> | undefined;

  /**
   * Register the metadata instance.
   * This operation save the instance in the targetStore.
   * @param meta
   */
  register?: RegisterFn<TMetaArgs, TMetaClass> | keyof MetaClassRegisterHelpers;

  /**
   * Optional implementation of extend logic FOR non-single metadata, logic that handles 1 type extending another type.
   * If not set, the Metadata class is not extendable and will not inherit metadata from child types.
   * If the method returns undefined it will also not extend the Metadata class.
   *
   * 'to' can be undefined, if so it means that that Metadata class was never assigned to the type.
   *
   * #### You can set on of the predefined extend functions.
   *   - prop: An extending implementation suitable for property decorators. Expecting a `Map<TdmPropertyKey, T>`, it
   *   will merge the source into the target.
   *
   * @param from
   * @param to
   * @param meta
   * @param meta.from the target source
   * @param meta.to the target target
   * @returns the new extended value.
   */
  extend?: ExtendFn | keyof MetaClassExtendHelpers;

  /**
   * Optional implementation of extend logic FOR single metadata, logic that handles one type extending another type.
   * If not set, the Metadata class is not extendable and will not inherit metadata from child types.
   * If the method returns undefined it will also not extend the Metadata class.
   *
   * 'to' can be undefined, if so it means that that Metadata class was never assigned to the type.
   *
   * @param from
   * @param to
   * @param meta
   *  @returns the new extended value.
   */
  extendSingle?: ExtendSingleFn<TMetaClass>;

  /**
   * A list of supported decoration targets for a metadata class.
   * If not set (or empty list) all of the targets are allowed.
   */
  allowOn?: MetadataAllowOn[];
}
