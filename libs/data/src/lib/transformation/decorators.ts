import { Identity } from '@tdm/core';
import {
  runFunction,
  targetStore,
  ModelMetadataArgs,
  RelationMetadataArgs, // RelationMetadataArgs - leave to satisfy angular compiler
  ModelMetadata,
  MetaClass
} from '@tdm/core/tdm';

import { ExecuteResponse, ARHookableMethods } from '../fw';
import {
  HookMetadata,
  ExtendActionMetadata,
  BelongsToMetadata,
  OwnsMetadata,
  ActionMetadataArgs, // ActionMetadataArgs - leave to satisfy angular compiler
  OwnsMetadataArgs, // OwnsMetadataArgs - leave to satisfy angular compiler
  HookMetadataArgs // HookMetadataArgs - leave to satisfy angular compiler
} from '../metadata';

import { Adapter } from '../fw';

/* Workaround, see index.ts in this directory */
import './meta-class';
import './target-store';
import './target-metadata';
import './prop';
import './relations';
import './mixins';

/* duplicate imports required or else import is omitted in d.ts */
import { initMetaClass } from './meta-class';
import { initTargetStore } from './target-store';
import { initTargetMetadata } from './target-metadata';
import { initProps } from './prop';
import { initRelations } from './relations';
import { initMixins } from './mixins';

declare module '@tdm/core/tdm/lib/add/model/model' {
  interface ModelMetadata {
    autoGenIdentity?: boolean;
  }
}

function initDecorators() {
  targetStore.registerAdapter(NoopAdapter, {
    actionMetaClass: <any>class {},
    DAOClass: class {},
    resourceMetaClass: ModelMetadata
  });
}

// TODO: this is a workaround to allow registering Models with no adapter so `onProcessType` event
// fires, need to fire the build event even if no adapter is set, this requires refactoring.
export class NoopAdapter implements Adapter<any, any> {
  supports = { cancel: false };
  execute(ctx: any, options: any): any {
    return { id: 1, response: Promise.resolve(undefined) };
  }
  cancel(id: number): void {}
}

export function AutoIdentity(): Function {
  return (target: Object, key: TdmPropertyKey) => {
    Identity()(target, key);
    const model = (targetStore
      .getTargetMeta(<any>target.constructor)
      .model().autoGenIdentity = true);
  };
}

/* FOR AOT */
const _Resource = runFunction(() => {
  initMetaClass();
  initTargetStore();
  initTargetMetadata();
  initProps();
  initRelations();
  initMixins();
  initDecorators();
  return MetaClass.get(ModelMetadata).createResourceDecorator(NoopAdapter);
});

/**
 * A Resource with a NOOP adapter.
 * @classDecorator
 * @param metaArgs
 */
export function Resource(metaArgs: ModelMetadataArgs) {
  return _Resource(metaArgs) as any;
}

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const ExtendAction = MetaClass.decorator(ExtendActionMetadata);

/**
 * @propertyDecorator instance
 * @param def
 */
export const BelongsTo = MetaClass.decorator(BelongsToMetadata, true);

/**
 * @propertyDecorator instance
 * @param def
 */
export const Owns = MetaClass.decorator(OwnsMetadata, true);

export const Hook = MetaClass.decorator(HookMetadata);

export function BeforeHook(action: ARHookableMethods) {
  return Hook({ event: 'before', action });
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({ event: 'after', action });
}

export type BeforeHook<K extends string, Z> = {
  [P in K]: (options: Z) => void | Promise<void>
};
export type AfterHook<K extends string, Z> = {
  [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>
};
