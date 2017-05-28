import '@tdm/core/add/mapping';

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
} from './metadata';

import './transformation'; // extending @tdm/core
export * from './core';

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
} from './fw';

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
} from './events';

export {
  findProp,
  PlainSerializer,
  isSymbol,
  isPropertyKey,
  promiser,
} from './utils';

// re-export common types from core
export {
  Constructor,
  TDMModel,
  TDMModelBase,
  TDMCollection
} from '@tdm/core';

export { DAO, AdapterDAO, TargetDAO } from './dao';

export { ResourceControl } from './resource-control';