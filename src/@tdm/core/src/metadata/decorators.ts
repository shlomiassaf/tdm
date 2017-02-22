import {
  AdapterMetadata,
  AdapterMetadataArgs,
  metadataFactory,
  decoratorInfo,
  GlobalResourceMetadata,
  GlobalResourceMetadataArgs,
  ResourceMetadata,
  ActionMetadata,
  ActionMetadataArgs,
  PropMetadata,
  PropMetadataArgs,
  ExcludeMetadata,
  ExcludeMetadataArgs,
  HookMetadata,
  HookMetadataArgs,
  BelongsToMetadata,
  BelongsToMetadataArgs,
  OwnsMetadata,
  OwnsMetadataArgs
} from './meta-types';
import { ARHooks, ARHookableMethods } from '../active-record';
import { ExecuteResponse } from '../core/interfaces';
import { DecoratorError, TDMError } from '../core/errors';
import { reflection, ensureTargetIsType, Constructor, stringify } from '../utils';
import { internalMetadataStore } from './reflection/internal-metadata-store';

export function ResourceAdapter<T extends ResourceMetadata, Z extends ActionMetadata>(def: AdapterMetadataArgs<T, Z>): (target) => any {
  return target => {
    internalMetadataStore.getAdapterStore(ensureTargetIsType(target))
      .setMetadata(metadataFactory(AdapterMetadata, def));
    return target;
  };
}

/**
 * @classDecorator
 * @param def
 */
export function Resource(def: GlobalResourceMetadataArgs) {
  return (target: Constructor<any>) => {
    if (!def.name) {
      def.name = stringify(target);
    } else {
      internalMetadataStore.replaceName(def.name, target);
    }

    internalMetadataStore.getTargetStore(target)
      .setResource(metadataFactory(GlobalResourceMetadata, def));
  };
}

/**
 * @propertyDecorator both
 * @param def
 */
export function ExtendAction(def: Partial<ActionMetadataArgs<any>>): any {
  return (target: Object, propertyKey: string | symbol, desc: any) => {
    const info = decoratorInfo(target, propertyKey, desc);
    internalMetadataStore.getTargetStore(ensureTargetIsType(target)).addExtendingAction(info, def);
  };
}

/**
 * @propertyDecorator instance
 */
export function Identity() {
  return (target: Object, propertyKey: string) => {
    internalMetadataStore.getTargetStore(target.constructor as any)
      .setIdentity(propertyKey);
  };
}

export module Identity {
  export function Multi(order: number) {
    return (target: Object, propertyKey: string) => {
      internalMetadataStore.getTargetStore(target.constructor as any)
        .setMultiIdentity(propertyKey, order);
    };
  }
}

/**
 * @propertyDecorator instance
 * @param def
 */
export function Prop(def?: PropMetadataArgs): any {
  return (target: Object, propertyKey: string | symbol, desc: any) => {
    const info = decoratorInfo(target, propertyKey, desc);

    internalMetadataStore.getTargetStore(target.constructor as any)
      .addProp(metadataFactory(PropMetadata, def, target.constructor, info));
  };
}

/**
 * @propertyDecorator instance
 */
export function BelongsTo(def?: BelongsToMetadataArgs): any {
  return (target: Object, propertyKey: string | symbol, desc: any) => {
    const info = decoratorInfo(target, propertyKey, desc);

    internalMetadataStore.getTargetStore(target.constructor as any)
      .addRelationship(metadataFactory(BelongsToMetadata, def, info));
  };
}

/**
 * @propertyDecorator instance
 */
export function Owns(def?: OwnsMetadataArgs<any>): any {
  return (target: Object, propertyKey: string | symbol, desc: any) => {
    const info = decoratorInfo(target, propertyKey, desc);

    internalMetadataStore.getTargetStore(target.constructor as any)
      .addRelationship(metadataFactory(OwnsMetadata, def, info));
  };
}

/**
 * @propertyDecorator instance
 * @param def
 */
export function Exclude(def?: ExcludeMetadataArgs) {
  return (target: Object, propertyKey: string | symbol) => {
    internalMetadataStore.getTargetStore(target.constructor as any)
      .addExclude(metadataFactory(ExcludeMetadata, def, propertyKey));
  };
}

/**
 * @propertyDecorator both
 * @param def
 */
export function Hook(def: HookMetadataArgs) {
  if (!ARHooks.hasOwnProperty(def.action)) {
    throw new TDMError(`Invalid hook '${def.action}'`);
  }
  return (target: Object, propertyKey: string | symbol, desc) => {
    const info = decoratorInfo(target, propertyKey, desc);

    switch (ARHooks[def.action].type) {
      case 'instance':
        if (info.isStatic) {
          throw DecoratorError.hookNoStatic(target, propertyKey, def.action);
        }
        break;
      case 'static':
        if (!info.isStatic) {
          throw DecoratorError.hookNoInstance(target, propertyKey, def.action);
        }
        break;
      default:
        break;
    }

    internalMetadataStore.getTargetStore(ensureTargetIsType(target))
      .addHook(metadataFactory(HookMetadata, def, info));
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

