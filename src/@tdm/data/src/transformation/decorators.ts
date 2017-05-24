import { tdm, RelationMetadataArgs } from '@tdm/core'; // RelationMetadataArgs - leave to satisfy angular compiler
import { ExecuteResponse, ARHookableMethods } from '../fw';
import {
  HookMetadata,
  ExtendActionMetadata,
  ResourceMetadataArgs,
  BelongsToMetadata,
  OwnsMetadata
} from '../metadata';

import * as decoratorFactories from '../metadata/decorator-factories';
import { Adapter } from '../fw';

/* Workaround, see index.ts in this directory */
import './target-store'
import './target-metadata';
import './prop';
import './relations';
import './resource';
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

tdm.targetStore.registerAdapter(NoopAdapter, { actionMetaClass: <any>class {}, DAOClass: class {} });

// FOR AOT
const resource = decoratorFactories.resource<ResourceMetadataArgs>(NoopAdapter);

/**
 * A Resource with a NOOP adapter.
 * @classDecorator
 * @param metaArgs
 */
export function Resource(metaArgs: ResourceMetadataArgs) {
  return resource(metaArgs) as any;
}

/**
 * @propertyDecorator instance
 * @param metaArgs
 */
export const ExtendAction = tdm.MetaClass.get(ExtendActionMetadata).createDecorator();

/**
 * @propertyDecorator instance
 * @param def
 */
export const BelongsTo = tdm.MetaClass.get(BelongsToMetadata).createDecorator();


/**
 * @propertyDecorator instance
 * @param def
 */
export const Owns = tdm.MetaClass.get(OwnsMetadata).createDecorator();

export const Hook = tdm.MetaClass.get(HookMetadata).createDecorator();

export function BeforeHook(action: ARHookableMethods) {
  return Hook({event: 'before', action});
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({event: 'after', action});
}

export type BeforeHook<K extends string, Z> = { [P in K]: (options: Z) => void | Promise<void>; }
export type AfterHook<K extends string, Z> = { [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>; }
