import { AdapterMetadata, AdapterMetadataArgs, metadataFactory, decoratorInfo, ResourceMetadata, ActionMetadata, ActionMetadataArgs, PropMetadata, PropMetadataArgs, ExcludeMetadata, ExcludeMetadataArgs, HookMetadata, HookMetadataArgs } from './meta-types';
import { ARHooks, ARHookableMethods } from '../active-record';
import { internalMetadataStore } from './reflection';
import { ExecuteResponse } from '../core/interfaces';
import { DecoratorError, TDMError } from '../core/errors';
import { reflection, ensureTargetIsType } from '../utils';


export function ResourceAdapter<T extends ResourceMetadata, Z extends ActionMetadata>(def: AdapterMetadataArgs<T, Z>): (target) => any {
  return target => {
    internalMetadataStore.getAdapterStore(ensureTargetIsType(target))
      .setMetadata(metadataFactory(AdapterMetadata, def));
    return target;
  };
}

export function ExtendAction(def: Partial<ActionMetadataArgs<any>>): any {
  return (target: Object, propertyKey: string | symbol, desc: any) => {
    const info = decoratorInfo(target, propertyKey, desc);
    internalMetadataStore.getTargetStore(ensureTargetIsType(target)).addExtendingAction(info, def);
  };
}

export function Prop(def?: PropMetadataArgs) {
  return (target: Object, propertyKey: string | symbol) => {
    const type = reflection.designType(target, propertyKey);
    internalMetadataStore.getTargetStore(target.constructor)
      .addProp(metadataFactory(PropMetadata, def, type, propertyKey));
  };
}

export function Exclude(def?: ExcludeMetadataArgs) {
  return (target: Object, propertyKey: string | symbol) => {
    internalMetadataStore.getTargetStore(target.constructor)
      .addExclude(metadataFactory(ExcludeMetadata, def, propertyKey));
  };
}

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
  return Hook({ event: 'before', action });
}

export function AfterHook(action: ARHookableMethods) {
  return Hook({ event: 'after', action });
}

export type BeforeHook<K extends string, Z> = { [P in K]: (options: Z) => void | Promise<void>; }
export type AfterHook<K extends string, Z> = { [P in K]: (options: Z, rawResponse: ExecuteResponse) => void | Promise<void>; }

