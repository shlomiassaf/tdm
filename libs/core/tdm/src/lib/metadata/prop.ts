import {
  LazyInit,
  Constructor,
  TransformFn,
  propAliasConfig,
  PropAliasConfig,
  propTransformConfig,
  PropTransformConfig,
  BaseMetadata,
  DecoratorInfo,
  MetaClass,
  MetaClassMetadata
} from '../fw';

import { targetStore } from './target-store';
import { RelationMetadata } from './relation';
import { TypeMetadata, TypeMetadataArgs } from './type';

export interface PropMetadataArgs {
  alias?: string | Partial<PropAliasConfig>;
  transform?: TransformFn | Partial<PropTransformConfig>;

  /**
   * A Getter function that returns the type of the property.
   * In most cases, the framework will identify the type using the metadata supplied by TypeScript.
   * However, in some scenarios it is not possible to detect the type, the most common are:
   *
   * A) Circular module dependency, i.e. where A import B and B import A. Especially common in related types.
   *    From 2 circular dependencies, the first one to load will not know the type of the 2nd.
   *
   * B) When using "this" type. TypeScript will emit the type "Object" when using this so it is not
   *    known and the user must supply it.
   *
   * C) When using "any" type. TypeScript will emit the type "Object" when using this so it is not
   *    known and the user must supply it.
   *
   * D): When the type T in an Array of T, TypeScript will emit the type Array without the array
   *     element type. https://github.com/Microsoft/TypeScript/issues/7169
   */
  type?: TypeMetadataArgs;
}

@MetaClass<PropMetadataArgs, PropMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
export class PropMetadata extends BaseMetadata {
  alias: PropAliasConfig;
  transform?: Partial<PropTransformConfig>;

  @LazyInit(function(this: PropMetadata) {
    // get the type information.
    // 3 options:
    // 1. User set the @Type decorator, so we will find it in the metadata store
    // 2. User the the 'type' property in PropMetadataArgs which will mimic @Type in the PropMetadata constructor
    // 3. Auto resolve, we will create a new instance with no getter.
    return (
      targetStore.getMetaFor(this.target, TypeMetadata, this.name) ||
      new TypeMetadata(this.typeArgs, this.decoratorInfo, this.target)
    );
  })
  type: TypeMetadata;

  relation: RelationMetadata | undefined;
  foreignKeyOf?: PropMetadata;

  private typeArgs?: TypeMetadataArgs;

  constructor(
    obj: PropMetadataArgs | undefined,
    info: DecoratorInfo,
    private target: Constructor<any>
  ) {
    super(info);

    if (!obj) {
      obj = {};
    }

    // TODO: throw if name is not a string (can be symbol)
    this.alias = propAliasConfig(obj.alias, info.name as any);

    if (obj.transform) {
      this.transform = propTransformConfig(obj.transform);
    }

    if (obj.type) {
      this.typeArgs = obj.type;
    }
  }

  setRelationship(rel: RelationMetadata): void {
    if (!this.type.isGetter) {
      if (
        !this.type.ref ||
        this.type.ref === Object ||
        this.type.ref === Array
      ) {
        throw new Error(
          `Property ${this.decoratorInfo.name.toString()} with relation but without a type, please set a type.`
        );
      }
    }

    this.relation = rel;
  }
}

// to make it easy on generics later
declare module '../fw/metadata-framework/meta-class' {
  namespace MetaClass {
    function get(
      target: typeof PropMetadata
    ): MetaClassMetadata<PropMetadataArgs, PropMetadata>;
  }
}
