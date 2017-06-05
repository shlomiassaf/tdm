import { Tixin } from '@tdm/tixin';
import { errors, tdm, TDMCollection, Constructor } from '@tdm/core';

import { AdapterStatic, ARHookableMethods } from '../fw';
import {
  ExtendActionMetadata,
  HookMetadata,
  ValidationError
} from '../metadata';
import { ActionController } from '../core/action-controller';
import { TargetValidator } from '../core/target-validator';

class CoreTargetMetadata<T = any, Z = any>extends tdm.TargetMetadata<T, Z> {

  collectionClass: typeof TDMCollection & Constructor<TDMCollection<T>>;

  get activeAdapter(): AdapterStatic<any, any> | undefined {
    return this._activeAdapter;
  }

  @tdm.LazyInit(function (this: CoreTargetMetadata): TargetValidator {
    return new TargetValidator(this.target);
  })
  protected validator: TargetValidator;

  @tdm.LazyInit(function (this: CoreTargetMetadata): Map<AdapterStatic<any, any>, ActionController> {
    return new Map<AdapterStatic<any, any>, ActionController>();
  })
  protected adapters: Map<AdapterStatic<any, any>, ActionController>;

  private _activeAdapter: AdapterStatic<any, any>;

  validate(instance: any): Promise<ValidationError[]> {
    return this.validator.validate(instance);
  }

  findHook(action: ARHookableMethods): { before: HookMetadata, after: HookMetadata } | undefined {
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

  isActive(adapterClass: AdapterStatic<any, any>): boolean {
    return this._activeAdapter === adapterClass;
  }

  getAC(): ActionController | undefined;
  getAC(adapterClass: AdapterStatic<any, any>, create?: boolean): ActionController | undefined;
  getAC(adapterClass?: AdapterStatic<any, any>, create: boolean = true): ActionController | undefined {
    if (!adapterClass) {
      adapterClass = this.activeAdapter;
    }
    return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
  }

  getExtendingAction(info: tdm.DecoratorInfo): ExtendActionMetadata | undefined {
    const arr = this.config.get(ExtendActionMetadata, info.name);
    if (arr) {
      return arr.find(a => a.name === info.name && a.decoratorInfo.isStatic === info.isStatic);
    }
  }

  setActiveAdapter(adapter: AdapterStatic<any, any>): void {
    this._activeAdapter = adapter;

    this.getProtoChainWithMixins(this.target, adapter)
      .forEach(proto => {
        if (this.target !== proto && tdm.targetStore.hasTarget(proto)) {
          tdm.targetStore.extend(proto, this.target);
        }
      });

  }

  private getProtoChainWithMixins(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): Set<Constructor<any>> {
    return tdm.getProtoChain(target)
      .reduce((protoSet, proto) => {
        protoSet.add(proto);
        tdm.SetExt.combine(protoSet, tdm.targetStore.getMixins(proto, adapterClass));
        return protoSet;
      }, new Set<Constructor<any>>());
  }

  private registerAdapter(adapterClass: AdapterStatic<any, any>): ActionController {
    if (!tdm.targetStore.hasAdapter(adapterClass)) {
      errors.throw.adapterNotRegistered(adapterClass, this.target);
    } else if (this.adapters.has(adapterClass)) {
      errors.throw.adapterRegistered(adapterClass, this.target);
    } else {
      return this.adapters.set(adapterClass, new ActionController(this, adapterClass)).get(adapterClass);
    }
  }
}

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    collectionClass: typeof TDMCollection & Constructor<TDMCollection<any>>;

    validate(instance: any): Promise<ValidationError[]>;

    findHook(action: ARHookableMethods): { before: HookMetadata, after: HookMetadata } | undefined;
    findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined;

    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;

    /**
     * Checks if the adapter is the current adapter for this target
     * @param adapterClass
     */
    isActive(adapterClass: AdapterStatic<any, any>): boolean;

    /**
     * Returns the action controller of the current (active) adapter on this target.
     */
    getAC(): ActionController | undefined;
    /**
     * Returns the  action controller of an adapter on this target.
     */
    getAC(adapterClass: AdapterStatic<any, any>, create?: boolean): ActionController | undefined;

    getExtendingAction(info: tdm.DecoratorInfo): ExtendActionMetadata | undefined;

    readonly activeAdapter: AdapterStatic<any, any>;
    setActiveAdapter(adapter: AdapterStatic<any, any>): void;

    extendFrom(store: this): void;
  }
}

Tixin(tdm.TargetMetadata, CoreTargetMetadata);

// override core implementation to support type specific collection class
tdm.TargetMetadata.prototype.createCollection = function(): TDMCollection<any> {
  return this.collectionClass ? new this.collectionClass() : new TDMCollection();
};
