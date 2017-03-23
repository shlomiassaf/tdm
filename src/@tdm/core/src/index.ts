import '@tdm/transformation/add/mapping';

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
  decoratorFactories,
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
  RawActionHandler,
  RawActionMetadata,
  RawActionMetadataArgs,
  Relationship,
  RelationshipType,
  Resource,
  ResourceAdapter,
  ResourceMetadataArgs,
  ValidationContext,
  ValidationError,
  ValidationMetadataArgs,
  ValidationSchedule,
  Validator,
  store
} from './metadata';

import './add/transformation'; // extending @tdm/transformation
export * from './core';

export { validators } from './core-validators';

export {
  BaseActiveRecord,
  ActiveRecord,
  IdentityValueType,
  ExecuteContext,
  Deserializer,
  DeserializerFactory,
  ExecuteResponse,
  Adapter,
  ActionOptions
} from './fw';

export {
  events$,
  ResourceEvent,
  ResourceEventType,
  ActionErrorResourceEvent,
  ActionEndResourceEvent,
  eventFactory
} from './events';

export { ActiveRecordCollection } from './active-record';
export { getCtrl } from './resource-control/get-ctrl';

export {
  findProp,
  PlainSerializer,
  isSymbol,
  isPropertyKey,
  promiser,
} from './utils';

export { Constructor } from '@tdm/transformation';
