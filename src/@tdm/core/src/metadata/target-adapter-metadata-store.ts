import { targetStore, Constructor,  MapExt, isFunction, LazyInit, TargetMetadata, SetExt, fireEvents } from '@tdm/transformation';
import { AdapterStatic, AdapterError, TargetError, ARHookableMethods } from '../fw';
import { ActionController } from '../core';

import { AdapterMetadata, ActionMetadata, HookMetadata } from './meta-types';
import { getProtoChain } from '../utils';

/**
 * A Metadata store for a target-adapter combination.
 * For each target that has an adapter (resource) decorator this store is created.
 */
export class TargetAdapterMetadataStore {
  readonly adapterMeta: AdapterMetadata;

  @LazyInit(function (this: TargetAdapterMetadataStore): ActionController {
    return new ActionController(this, this.parent);
  })
  actionController: ActionController;

  readonly committed: boolean;

  get target(): any {
    return this.parent.target;
  }

  get identity(): string {
    return this.parent.getIdentityKey();
  }

  constructor(public readonly parent: TargetMetadata, public readonly adapterClass: AdapterStatic<any, any>) {
    this.adapterMeta = targetStore.getAdapter(adapterClass);
    if (!this.adapterMeta) {
      throw AdapterError.notRegistered(adapterClass)
    }
  }

  findHookEvent(action: ARHookableMethods, timeline: 'before' | 'after'): HookMetadata | undefined {
    return this.parent.findHookEvent(action, timeline);
  }

  build(): void {
    if (this.committed === true) {
      throw TargetError.built(this.parent.target, this.adapterClass);
    }
    Object.defineProperty(this, 'committed', {value: true});

    this.getProtoChainWithMixins(this.target, this.adapterClass)
      .forEach( proto => {
        if (this.target !== proto && targetStore.hasTarget(proto)) {
          targetStore.extend(proto, this.target);
        }
      });

    this.actionController.commit();

    if (isFunction(this.adapterMeta.commit)) {
      this.adapterMeta.commit(this);
    }

    fireEvents('onBuildMetadata', this.target);
  }


  private getProtoChainWithMixins(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): Set<Constructor<any>> {
    return getProtoChain(target)
      .reduce( (protoSet, proto) => {
        protoSet.add(proto);
        SetExt.combine(protoSet, targetStore.getMixins(proto, adapterClass));
        return protoSet;
      }, new Set<Constructor<any>>());
  }

}
