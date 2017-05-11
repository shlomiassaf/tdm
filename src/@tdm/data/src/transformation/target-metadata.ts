import { Tixin } from '@tdm/tixin';
import { TDMCollection, targetStore, DecoratorInfo, TargetMetadata, stringify, LazyInit, Constructor, SetExt, fireEvents } from '@tdm/core';

import { AdapterError, AdapterStatic, ARHookableMethods } from '../fw';
import { getProtoChain } from '../utils';
import { ExtendActionMetadata, HookMetadata, ResourceMetadataArgs, ValidationError } from '../metadata';
import { ActionController } from '../core/action-controller';
import { TargetValidator } from '../core/target-validator';

class CoreTargetMetadata extends TargetMetadata {

  collectionClass: typeof TDMCollection & Constructor<TDMCollection<any>>;

  get activeAdapter(): AdapterStatic<any, any> | undefined {
    return this._activeAdapter;
  }

  @LazyInit(function (this: CoreTargetMetadata): TargetValidator {
    return new TargetValidator(this.target);
  })
  protected validator: TargetValidator;

  @LazyInit(function(this: CoreTargetMetadata): Map<AdapterStatic<any, any>, ActionController>{
    return  new Map<AdapterStatic<any, any>, ActionController>();
  })
  protected adapters: Map<AdapterStatic<any, any>, ActionController>;

  private _activeAdapter: AdapterStatic<any, any>;

  validate(instance: any): Promise<ValidationError[]> {
    return this.validator.validate(instance);
  }

  setResource(meta: ResourceMetadataArgs): void {
    targetStore.setResource(meta, this.target);
  }

  findHook(action: ARHookableMethods): {before: HookMetadata, after: HookMetadata} | undefined {
    return this.config.get(HookMetadata, action);
  }

  findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined {
    const hook = this.getMetaFor(HookMetadata, action);
    if (hook) {
      return hook[event];
    }
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.adapters.has(adapterClass);
  }

  getAC(): ActionController | undefined;
  getAC(adapterClass: AdapterStatic<any, any>, create?: boolean): ActionController | undefined;
  getAC(adapterClass?: AdapterStatic<any, any>, create: boolean = true): ActionController | undefined {
    if (!adapterClass) {
      adapterClass = this.activeAdapter;
    }
    return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
  }

  getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined {
    const arr = this.config.get(ExtendActionMetadata, info.name);
    if (arr) {
      return arr.find(a => a.name === info.name && a.decoratorInfo.isStatic === info.isStatic);
    }
  }

  setActiveAdapter(adapter: AdapterStatic<any, any>): void {
    this._activeAdapter = adapter;

    this.getProtoChainWithMixins(this.target, adapter)
      .forEach( proto => {
        if (this.target !== proto && targetStore.hasTarget(proto)) {
          targetStore.extend(proto, this.target);
        }
      });

    fireEvents('onBuildMetadata', this.target);
  }

  /**
   * Create a new instance of the TDMCollection for this type.
   * @returns {TDMCollection}
   */
  createCollection(): TDMCollection<any> {
    return this.collectionClass
      ? new this.collectionClass()
      : new TDMCollection()
    ;
  }


  private getProtoChainWithMixins(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): Set<Constructor<any>> {
    return getProtoChain(target)
      .reduce( (protoSet, proto) => {
        protoSet.add(proto);
        SetExt.combine(protoSet, targetStore.getMixins(proto, adapterClass));
        return protoSet;
      }, new Set<Constructor<any>>());
  }

  private registerAdapter(adapterClass: AdapterStatic<any, any>): ActionController {
    if (!targetStore.hasAdapter(adapterClass)) {
      throw AdapterError.notRegistered(adapterClass)
    } else if (this.adapters.has(adapterClass)) {
      throw AdapterError.registered(adapterClass, stringify(this.target))
    } else {
      return this.adapters.set(adapterClass, new ActionController(this, adapterClass)).get(adapterClass);
    }
  }
}

// @tdm/data does not allow a 'factory' for @tdm/core @Transformable, it uses it's own factory.
Object.defineProperty(CoreTargetMetadata.prototype, 'factory', {
  value: function targetFactory(isColl: boolean): any {
    return isColl
      ? this.createCollection()
      : new this.target()
      ;
  }
});

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    collectionClass: typeof TDMCollection & Constructor<TDMCollection<any>>;

    validate(instance: any): Promise<ValidationError[]>;

    setResource(meta: ResourceMetadataArgs): void;

    findHook(action: ARHookableMethods): {before: HookMetadata, after: HookMetadata} | undefined;
    findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined;

    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;

    /**
     * Returns the action controller of the current (active) adapter on this target.
     */
    getAC(): ActionController | undefined;
    /**
     * Returns the  action controller of an adapter on this target.
     */
    getAC(adapterClass: AdapterStatic<any, any>, create?: boolean): ActionController | undefined;

    createCollection(): TDMCollection<any>;

    getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined;

    readonly activeAdapter: AdapterStatic<any, any>;
    setActiveAdapter(adapter: AdapterStatic<any, any>): void;

    extendFrom(store: this): void;
  }
}

Tixin(TargetMetadata, CoreTargetMetadata);

