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

  private registeredActions: Map<PropertyKey, ActionMetadata>;

  constructor(public readonly parent: TargetMetadata, public readonly adapterClass: AdapterStatic<any, any>) {
    this.adapterMeta = targetStore.getAdapter(adapterClass);
    if (!this.adapterMeta) {
      throw AdapterError.notRegistered(adapterClass)
    }
  }

  findAction(name: string): ActionMetadata | undefined {
    return this.registeredActions && this.registeredActions.get(name);
  }

  findHookEvent(action: ARHookableMethods, timeline: 'before' | 'after'): HookMetadata | undefined {
    return this.parent.findHookEvent(action, timeline);
  }

  build(): void {
    if (this.committed === true) {
      throw TargetError.built(this.parent.target, this.adapterClass);
    }
    Object.defineProperty(this, 'committed', {value: true});

    this.registeredActions = new Map<PropertyKey, ActionMetadata>();

    this.getProtoChainWithMixins(this.target, this.adapterClass)
      .forEach( proto => {
        if (this.target !== proto && targetStore.hasTarget(proto)) {
          targetStore.extend(proto, this.target);
        }
      });

    // TODO: refactor for performance on getActions and getProtoChainWithMixins (+ Caching)
    const actions = this.getActions(this.target, this.adapterClass)
      .map( action => this.processAction(action) );

    this.actionController.commit(actions);

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

  /**
   * Returns all of the actions registered for a target going through the proto chain and all
   * mixins associated with each proto.
   *
   * Returns a unique list of actioned, uniqueness is set by the `name` of each action.
   * If 2 actions with the same 'name' exists, the top level actions wins, i.e. the first in the chain.
   *
   * @param target
   * @param adapterClass
   * @returns {ActionMetadata[]}
   */
  private getActions(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): ActionMetadata[] {
    const chain = getProtoChain(target);
    const actions = new Map<PropertyKey, ActionMetadata>();

    for (let i=0, len=chain.length; i<len; i++) {
      if (targetStore.hasTarget(chain[i])) {
        const protoAdapterStore = targetStore.getTargetAdapterStore(chain[i], adapterClass);
        const mixins = SetExt.asArray(targetStore.getMixins(chain[i], adapterClass));
        const protoActions = protoAdapterStore.adapterMeta.getActions(chain[i], ...mixins);
        MapExt.fromArray(protoActions, (v) => v.name, actions, true);
      }
    }

    return MapExt.asValArray(actions);
  }

  private processAction(action: ActionMetadata): ActionMetadata {
    // TODO check action instance of ActionMetadata + in ActionMetadata verify using DecoratorInfo
    const extAction = targetStore.getTargetMeta(this.target).getExtendingAction(action.decoratorInfo);
    if (extAction) {
      const metaArgs = Object.assign({}, action.metaArgs, extAction);
      action = this.adapterMeta.actionMetaClass.metaFactory(metaArgs, this.target, extAction.decoratorInfo.name).metaValue;
    }

    this.registeredActions.set(action.name, action);
    return action;
  }
}
