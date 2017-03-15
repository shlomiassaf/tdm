import { Tixin } from '@tdm/tixin';
import { targetStore, DecoratorInfo, TargetMetadata, stringify, LazyInit } from '@tdm/transformation';

import { AdapterError, AdapterStatic, ARHookableMethods } from '../../fw';
import { TargetAdapterMetadataStore, ExtendActionMetadata, HookMetadata, ResourceMetadataArgs, ValidationError } from '../../metadata';
import { TargetValidator } from '../../core/target-validator';

class CoreTargetMetadata extends TargetMetadata {
  @LazyInit(function (this: CoreTargetMetadata): TargetValidator {
    return new TargetValidator(this.target);
  })
  protected validator: TargetValidator;

  @LazyInit(function(this: CoreTargetMetadata): Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>{
    return  new Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>();
  })
  protected adapters: Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>;

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

  getAdapterStore<T extends AdapterStatic<any, any>>(adapterClass: T, create: boolean = true): TargetAdapterMetadataStore | undefined {
    return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
  }

  getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined {
    const arr = this.config.get(ExtendActionMetadata, info.name);
    if (arr) {
      return arr.find(a => a.name === info.name && a.decoratorInfo.isStatic === info.isStatic);
    }
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

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    validate(instance: any): Promise<ValidationError[]>;

    setResource(meta: ResourceMetadataArgs): void;

    findHook(action: ARHookableMethods): {before: HookMetadata, after: HookMetadata} | undefined;
    findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined;

    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;
    getAdapterStore<T extends AdapterStatic<any, any>>(adapterClass: T, create?: boolean): TargetAdapterMetadataStore | undefined;
    getExtendingAction(info: DecoratorInfo): ExtendActionMetadata | undefined;

    extendFrom(store: this): void;
  }
}

Tixin(TargetMetadata, CoreTargetMetadata);

