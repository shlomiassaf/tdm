export {
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  AdapterMetadata,
  AdapterMetadataArgs,
  AfterHook,
  AutoIdentity,
  BeforeHook,
  BelongsTo,
  BelongsToMetadata,
  BelongsToMetadataArgs,
  Exclude,
  ExtendAction,
  ExtendActionMetadata,
  Hook,
  HookMetadata,
  HookMetadataArgs,
  Identity,
  Owns,
  OwnsMetadata,
  OwnsMetadataArgs,
  Prop,
  PreActionHandler,
  PostActionHandler,
  PostActionMetadata,
  Relationship,
  RelationshipType,
  Resource,
  ValidationContext,
  ValidationError,
  ValidationMetadataArgs,
  ValidationSchedule,
  Validator,
  store
} from './metadata/index';

import './transformation/index'; // extending @tdm/core
export * from './core/index';

export { validators } from './core-validators';

export {
  ARInterface,
  IdentityValueType,
  AdapterResponse,
  ExecuteResponse,
  Adapter,
  AdapterStatic,
  ActionOptions,
  plugins,
  PluginStore
} from './fw/index';

export {
  isResourceEvent,
  events$,
  ResourceEventEmitter,
  ResourceEventDispatcher,
  ResourceEvent,
  ResourceEventType,
  ActionErrorResourceEvent,
  ActionEndResourceEvent,
  eventFactory,
  StateChangeResourceEvent
} from './events/index';

export { findProp, isSymbol, isTdmPropertyKey, promiser } from './utils/index';

// re-export common types from core
export { Constructor, TDMModel, TDMModelBase, TDMCollection } from '@tdm/core';

export { DAO, AdapterDAO, TargetDAO, DAOMethodType } from './dao/index';

export { ResourceControl, ResourceControlToken } from './resource-control';
