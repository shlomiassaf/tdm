import { MapExt, DecoratorInfo, BaseMetadata, metaFactoryFactory, targetStore, MetaFactoryInstance } from '@tdm/transformation';
import { ARHookableMethods } from '../../active-record/active-record-interfaces';

export interface Hook {
  before?: HookMetadata;
  after?: HookMetadata
}

export interface HookMetadataArgs {
  event: 'before' | 'after';
  action: ARHookableMethods;
}

export class HookMetadata extends BaseMetadata {

  event: 'before' | 'after';
  action: ARHookableMethods;

  constructor(obj: HookMetadataArgs, info: DecoratorInfo)  {
    super(info);

    this.event = obj.event;
    this.action = obj.action;
  }

  static metaFactory = metaFactoryFactory<HookMetadataArgs, HookMetadata>(HookMetadata);

  static register(meta: MetaFactoryInstance<HookMetadata>): void {
    const hook: Hook = { [meta.metaValue.event]: meta.metaValue };

    const currHook = targetStore.getMetaFor<any, Hook>(meta.target, HookMetadata, meta.metaValue.action) || {} as any;
    targetStore.setMetaFor<any, Hook>(meta.target, meta.metaClassKey, meta.metaValue.action as any, Object.assign(currHook, hook));
  }

  static extend(from: Map<PropertyKey, Hook>, to: Map<PropertyKey, Hook> | undefined): Map<PropertyKey, Hook> {
    if (!to) {
      to = new Map<PropertyKey, Hook>(from.entries());
    } else {
      // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
      MapExt.asKeyValArray(from)
        .forEach( ([k, hookFrom]) => {
          if (!to.has(k)) {
            to.set(k, hookFrom);
          } else {
            const hookTo = to.get(k);
            Object.keys(hookFrom).forEach( event => {
              if (!hookTo.hasOwnProperty(event)) {
                hookTo[event] = hookFrom[event];
              }
            });
          }
        });
    }

    return to;
  }
}
