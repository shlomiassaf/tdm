import {
  targetStore,
  ModelMetadataArgs,
  RelationMetadataArgs,     // RelationMetadataArgs - leave to satisfy angular compiler
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
  OwnsMetadataArgs,   // OwnsMetadataArgs - leave to satisfy angular compiler
  HookMetadataArgs   // HookMetadataArgs - leave to satisfy angular compiler
} from '../metadata';

import { Adapter } from '../fw';

/* Workaround, see index.ts in this directory */
import './meta-class';
import './target-store';
import './target-metadata';
import './prop';
import './relations';
import './mixins';

// TODO: this is a workaround to allow registering Models with no adapter so `onProcessType` event
// fires, need to fire the build event even if no adapter is set, this requires refactoring.
export class NoopAdapter implements Adapter<any, any> {
  supports = { cancel: false };
  execute(ctx: any, options: any): any {
    return { id: 1, response: Promise.resolve(undefined) };
  }
  cancel(id: number): void {};
}

targetStore.registerAdapter(NoopAdapter, {
  actionMetaClass: <any>class {},
  DAOClass: class {},
  resourceMetaClass: ModelMetadata
});

/**
 * A Resource with a NOOP adapter.
 * @classDecorator
 * @param metaArgs
 */
export function Resource(metaArgs: ModelMetadataArgs) {
  return _Resource(metaArgs) as any;
}
const _Resource = MetaClass.get(ModelMetadata).createResourceDecorator(NoopAdapter); // FOR AOT

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
  return Hook({event: 'before', action});
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({event: 'after', action});
}

export type BeforeHook<K extends string, Z> = { [P in K]: (options: Z) => void | Promise<void>; }
export type AfterHook<K extends string, Z> = { [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>; }
