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
  setMetaHelper,
  MetaClassRegisterHelpers,
  MetaClassExtendHelpers,
  BaseMetadata,
  BaseParamMetadata,
  DecoratorInfo,
  TargetEvents,
  lazyRef,
  getBaseClass,
  getProtoChain,
  reflection,
  runFunction,
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
  PlainObjectMapper
} from './mapping/index';

export { TDMCollection, TDMModel, TDMModelBase } from './model/index';

export { Model, ModelMetadata, processModel } from './add/model/index';

import { initTargetStore } from './add/target-store';
import { initMapping } from './add/mapping';
initTargetStore();
initMapping();
import './add/target-store'; // we need this for d.ts export, if not then the import are not set in d.ts)
import './add/mapping'; // we need this for d.ts export, if not then the import are not set in d.ts)

// tslint:disable-next-line:no-namespace
declare global {
  type TdmPropertyKey = string | symbol;
}
