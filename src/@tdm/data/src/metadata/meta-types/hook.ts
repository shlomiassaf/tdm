import {
  errors,
  targetStore,
  MapExt,
  DecoratorInfo,
  MetaClassInstanceDetails,
  MetaClassMetadata,
  MetaClass,
  BaseMetadata
} from '@tdm/core/tdm';

import { ARHookableMethods, ARHooks } from '../../fw';

export interface StoredHook {
  before?: HookMetadata;
  after?: HookMetadata;
}

export interface HookMetadataArgs {
  event: 'before' | 'after';
  action: ARHookableMethods;
}

/** @internal */
export function factory(this: MetaClassMetadata<HookMetadataArgs, HookMetadata>,
                        metaArgs: HookMetadataArgs,
                        target: Object,
                        info: DecoratorInfo,
                        key: TdmPropertyKey,
                        desc: PropertyDescriptor): MetaClassInstanceDetails<HookMetadataArgs, HookMetadata> {
  const { action } = metaArgs;

  if (!ARHooks.hasOwnProperty(action)) {
    errors.throw.decorator(target, `Invalid hook '${action}'`, key);
  }

  const t = ARHooks[action].type;
  if (info.isStatic ? t === 'instance' : t === 'static') {
    errors.throw.decorator(target, `Hook '${action}' can only decorate ${t} methods`, key);
  }
  return this.constructor.prototype.factory.call(this, metaArgs, target, info, key, desc);
}

/** @internal */
export function register(this: MetaClassMetadata<HookMetadataArgs, HookMetadata>,
                  meta: MetaClassInstanceDetails<HookMetadataArgs, HookMetadata>): void {
  const hook: StoredHook = {[meta.metaValue.event]: meta.metaValue};

  const currHook = targetStore.getMetaFor<any, StoredHook>(meta.target, HookMetadata, meta.metaValue.action) || {} as any;
  targetStore.setMetaFor<any, StoredHook>(meta.target, HookMetadata, meta.metaValue.action as any, Object.assign(currHook, hook));
}

/** @internal */
export function extend(from: Map<TdmPropertyKey, StoredHook>, to: Map<TdmPropertyKey, StoredHook> | undefined): Map<TdmPropertyKey, StoredHook> {
  if (!to) {
    to = new Map<TdmPropertyKey, StoredHook>(from.entries());
  } else {
    // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
    MapExt.asKeyValArray(from)
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

@MetaClass<HookMetadataArgs, HookMetadata>({
  allowOn: ['staticMember', 'member'],
  factory,
  extend,
  register
})
export class HookMetadata extends BaseMetadata {

  event: 'before' | 'after';
  action: ARHookableMethods;

  constructor(obj: HookMetadataArgs, info: DecoratorInfo) {
    super(info);

    this.event = obj.event;
    this.action = obj.action;
  }
}
