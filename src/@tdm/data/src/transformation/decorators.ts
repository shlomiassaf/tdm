import { targetStore, decoratorFactory, PropMetadata, RelationMetadataArgs } from '@tdm/core'; // RelationMetadataArgs - leave to satisfy angular compiler
import { TDMError, DecoratorError, ExecuteResponse, ARHooks, ARHookableMethods } from '../fw';
import {
  HookMetadata,
  HookMetadataArgs,
  ActionMetadataArgs,
  ExtendActionMetadata,
  ResourceMetadataArgs,
  BelongsToMetadataArgs,
  OwnsMetadataArgs
} from '../metadata';

import * as decoratorFactories from '../metadata/decorator-factories';
import { Adapter } from '../fw';

// TODO: this is a workaround to allow registering Models with no adapter so `onProcessType` event
// fires, need to fire the build event even if no adapter is set, this requires refactoring.
export class NoopAdapter implements Adapter<any, any> {
  execute(ctx: any, options: any): any { }
}
targetStore.registerAdapter(NoopAdapter, { actionMetaClass: <any>class {}, DAOClass: class {} });

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
export const ExtendAction = decoratorFactory<Partial<ActionMetadataArgs<any>>>(ExtendActionMetadata);

/**
 * @propertyDecorator instance
 * @param def
 */
export const BelongsTo = decoratorFactory<BelongsToMetadataArgs>(PropMetadata, true);


/**
 * @propertyDecorator instance
 * @param def
 */
export const Owns = decoratorFactory<OwnsMetadataArgs<any>>(PropMetadata, true);


/**
 * @propertyDecorator both
 * @param def
 */
export function Hook(def: HookMetadataArgs) {
  if (!ARHooks.hasOwnProperty(def.action)) {
    throw new TDMError(`Invalid hook '${def.action}'`);
  }

  return (target: Object, propertyKey: string | symbol, desc) => {
    const meta = HookMetadata.metaFactory(def, target, propertyKey, desc);

    switch (ARHooks[def.action].type) {
      case 'instance':
        if (meta.info.isStatic) {
          throw DecoratorError.hookNoStatic(target, propertyKey, def.action);
        }
        break;
      case 'static':
        if (!meta.info.isStatic) {
          throw DecoratorError.hookNoInstance(target, propertyKey, def.action);
        }
        break;
      default:
        break;
    }

    HookMetadata.register(meta);
  };
}

export function BeforeHook(action: ARHookableMethods) {
  return Hook({event: 'before', action});
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({event: 'after', action});
}

export type BeforeHook<K extends string, Z> = { [P in K]: (options: Z) => void | Promise<void>; }
export type AfterHook<K extends string, Z> = { [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>; }
