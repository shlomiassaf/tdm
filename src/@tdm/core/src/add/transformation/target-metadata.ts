import { Tixin } from '@tdm/tixin';
import { targetStore, DecoratorInfo, TargetMetadata, stringify, LazyInit, Constructor } from '@tdm/transformation';

import { ActiveRecordCollection } from '../../active-record/active-record-collection';
import { AdapterError, AdapterStatic, ARHookableMethods } from '../../fw';
import { TargetAdapterMetadataStore, ExtendActionMetadata, HookMetadata, ResourceMetadataArgs, ValidationError } from '../../metadata';
import { TargetValidator } from '../../core/target-validator';

class CoreTargetMetadata extends TargetMetadata {

  collectionClass: typeof ActiveRecordCollection & Constructor<ActiveRecordCollection<any>>;
  daoClass: Constructor<any>;

  get activeAdapter(): AdapterStatic<any, any> | undefined {
    return this._activeAdapter;
  }

  @LazyInit(function (this: CoreTargetMetadata): TargetValidator {
    return new TargetValidator(this.target);
  })
  protected validator: TargetValidator;

  @LazyInit(function(this: CoreTargetMetadata): Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>{
    return  new Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>();
  })
  protected adapters: Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>;

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

  getAdapterMeta(): TargetAdapterMetadataStore | undefined;
  getAdapterMeta<T extends AdapterStatic<any, any>>(adapterClass: T, create?: boolean): TargetAdapterMetadataStore | undefined;
  getAdapterMeta<T extends AdapterStatic<any, any>>(adapterClass?: T, create: boolean = true): TargetAdapterMetadataStore | undefined {
    if (arguments.length === 0) {
      return this.activeAdapter && this.adapters.get(this.activeAdapter);
    } else {
      return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
    }
  }

  getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined {
    const arr = this.config.get(ExtendActionMetadata, info.name);
    if (arr) {
      return arr.find(a => a.name === info.name && a.decoratorInfo.isStatic === info.isStatic);
    }
  }

  setActiveAdapter(adapter: AdapterStatic<any, any>): void {
    const adapterMeta = this.getAdapterMeta(adapter);
    adapterMeta.build();
    this._activeAdapter = adapter;
  }

  private createCollection() {
    return this.collectionClass
      ? new this.collectionClass()
      : new ActiveRecordCollection()
    ;
  }

  private registerAdapter(adapterClass: AdapterStatic<any, any>): TargetAdapterMetadataStore {
    if (!targetStore.hasAdapter(adapterClass)) {
      throw AdapterError.notRegistered(adapterClass)
    } else if (this.adapters.has(adapterClass)) {
      throw AdapterError.registered(adapterClass, stringify(this.target))
    } else {
      return this.adapters.set(adapterClass, new TargetAdapterMetadataStore(this, adapterClass)).get(adapterClass);
    }
  }
}

CoreTargetMetadata.prototype.factory = function targetFactory(isColl: boolean): any {
  return isColl
    ? this.createCollection()
    : new this.target()
  ;
};

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    collectionClass: typeof ActiveRecordCollection & Constructor<ActiveRecordCollection<any>>;
    daoClass: Constructor<any>;

    validate(instance: any): Promise<ValidationError[]>;

    setResource(meta: ResourceMetadataArgs): void;

    findHook(action: ARHookableMethods): {before: HookMetadata, after: HookMetadata} | undefined;
    findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined;

    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;

    getAdapterMeta(): TargetAdapterMetadataStore | undefined;
    getAdapterMeta<T extends AdapterStatic<any, any>>(adapterClass: T, create?: boolean): TargetAdapterMetadataStore | undefined;

    getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined;

    readonly activeAdapter: AdapterStatic<any, any>;
    setActiveAdapter(adapter: AdapterStatic<any, any>): void;

    extendFrom(store: this): void;
  }
}

Tixin(TargetMetadata, CoreTargetMetadata);

