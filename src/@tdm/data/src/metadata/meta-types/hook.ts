import { tdm } from '@tdm/core';

import { ARHookableMethods, ARHooks, TDMError, DecoratorError } from '../../fw';

export interface StoredHook {
  before?: HookMetadata;
  after?: HookMetadata
}

export interface HookMetadataArgs {
  event: 'before' | 'after';
  action: ARHookableMethods;
}

function factory(this: tdm.MetaClassMetadata<HookMetadataArgs, HookMetadata>,
                 metaArgs: HookMetadataArgs,
                 target: Object,
                 info: tdm.DecoratorInfo,
                 key: PropertyKey,
                 desc: PropertyDescriptor): tdm.MetaClassInstanceDetails<HookMetadataArgs, HookMetadata> {
  const { action } = metaArgs;

  if (!ARHooks.hasOwnProperty(action)) {
    throw new TDMError(`Invalid hook '${action}'`);
  }

  switch (ARHooks[action].type) {
    case 'instance':
      if (info.isStatic) {
        throw DecoratorError.hookNoStatic(target, key, action);
      }
      break;
    case 'static':
      if (!info.isStatic) {
        throw DecoratorError.hookNoInstance(target, key, action);
      }
      break;
    default:
      break;
  }

  return this.constructor.prototype.factory.call(this, metaArgs, target, info, key, desc);
}

function register(this: tdm.MetaClassMetadata<HookMetadataArgs, HookMetadata>,
                  meta: tdm.MetaClassInstanceDetails<HookMetadataArgs, HookMetadata>): void {
  const hook: StoredHook = {[meta.metaValue.event]: meta.metaValue};

  const currHook = tdm.targetStore.getMetaFor<any, StoredHook>(meta.target, HookMetadata, meta.metaValue.action) || {} as any;
  tdm.targetStore.setMetaFor<any, StoredHook>(meta.target, HookMetadata, meta.metaValue.action as any, Object.assign(currHook, hook));
}

function extend(from: Map<PropertyKey, StoredHook>, to: Map<PropertyKey, StoredHook> | undefined): Map<PropertyKey, StoredHook> {
  if (!to) {
    to = new Map<PropertyKey, StoredHook>(from.entries());
  } else {
    // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
    tdm.MapExt.asKeyValArray(from)
      .forEach(([k, hookFrom]) => {
        if (!to.has(k)) {
          to.set(k, hookFrom);
        } else {
          const hookTo = to.get(k);
          Object.keys(hookFrom).forEach(event => {
            if (!hookTo.hasOwnProperty(event)) {
              hookTo[event] = hookFrom[event];
            }
          });
        }
      });
  }

  return to;
}

@tdm.MetaClass<HookMetadataArgs, HookMetadata>({
  allowOn: ['staticMember', 'member'],
  factory,
  extend,
  register
})
export class HookMetadata extends tdm.BaseMetadata {

  event: 'before' | 'after';
  action: ARHookableMethods;

  constructor(obj: HookMetadataArgs, info: tdm.DecoratorInfo) {
    super(info);

    this.event = obj.event;
    this.action = obj.action;
  }
}
