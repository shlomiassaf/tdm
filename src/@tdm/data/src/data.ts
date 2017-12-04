export {
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  AdapterMetadata,
  AdapterMetadataArgs,
  AfterHook,
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
  ActiveRecord,
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

export {
  findProp,
  isSymbol,
  isPropertyKey,
  promiser,
} from './utils/index';

// re-export common types from core
export {
  Constructor,
  TDMModel,
  TDMModelBase,
  TDMCollection
} from '@tdm/core';

export { DAO, AdapterDAO, TargetDAO } from './dao';

export { ResourceControl } from './resource-control';
