export * from './type-helpers';

export {
  errors,
  Errors,
  Constructor,
  TransformDir,
  TransformFn,
  TransformStrategy,
  NamingStrategyConfig,

  stringify,
  isNumber,
  isString,
  isFunction,
  isUndefined,
  isJsObject,
  isPrimitive,
  LazyInit,
  DualKeyMap,
  SetExt,
  KeySet,
  MapExt,
  ensureTargetIsType,

  MetadataAllowOn,

  BaseMetadata,
  DecoratorInfo,
  TargetEvents,
  lazyRef,
  getProtoChain,

  ProxyHostMetadataArgs,
  MetaClassMetadataArgs,
  MetaClassMetadata,
  MetaClass,
  MetadataClassStatic,
  MetadataCurriedCreate,
  MetaClassInstanceDetails
} from './fw/index';

export {
  ModelMetadataArgs,
  TypeDefinition,
  TypeMetadataArgs,
  PropMetadataArgs,
  RelationMetadataArgs,
  ExcludeMetadataArgs,

  TypeMetadata,
  PropMetadata,
  ExcludeMetadata,
  RelationMetadata,
  TargetStore,
  TargetMetadata,
  targetStore
} from './metadata/index';

export {
  directMapper,
  TransformationError,
  DirectSerializeMapper,
  DirectDeserializeMapper,

  MapperFactory,
  DeserializeMapper,
  SerializeMapper,
  PropertyContainer,
  PoClassPropertyMap,
  transformValueOut,
  PlainObjectMapper,
} from './mapping/index';

export { TDMCollection, TDMModel, TDMModelBase } from './model/index';

export { Model, ModelMetadata } from './add/model/index';

import './add/target-store';
import { initMapping } from './add/mapping';
initMapping();
import './add/mapping'; // we need this for d.ts export, the 2 rows above are not set in d.ts)

export * from './helpers';
