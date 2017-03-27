import { Tixin } from '@tdm/tixin';
import { TargetStore, LazyInit, Constructor, TargetStoreEvents } from '@tdm/transformation';

import { AdapterStatic } from '../../fw';
import { TargetAdapterMetadataStore, AdapterMetadata, AdapterMetadataArgs } from '../../metadata';

class CoreTargetStore extends TargetStore {

  @LazyInit(function(this: CoreTargetStore): Set<any>{
    return new Set<any>();
  })
  readyToBuild: Set<any>;

  getAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadata {
    return this.local<AdapterMetadata>(adapterClass)
      || ( this.locals.add(adapterClass,  new AdapterMetadata()), this.getAdapter(adapterClass) );
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.locals.has(adapterClass);
  }

  registerAdapter(adapterClass: AdapterStatic<any, any>, metaArgs: AdapterMetadataArgs): void {
    AdapterMetadata.register(AdapterMetadata.metaFactory(metaArgs, adapterClass));
  }

  setReadyToBuild(target: any): void {
    if (!this.readyToBuild.has(target)) {
      this.readyToBuild.add(target);
    }
  }

  buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean {
    if (this.readyToBuild.has(target)) {
      const tMeta = this.getTargetMeta(target);
      if (!tMeta.activeAdapter) {
        this.readyToBuild.delete(target);
        tMeta.setActiveAdapter(adapterClass);
        return true;
      }
    }
    return false;
  }

  getTargetAdapterStore(target: Constructor<any>, adapterClass: AdapterStatic<any, any>, createIfMissing: boolean = true): TargetAdapterMetadataStore | undefined {
    if (createIfMissing || this.hasTarget(target)) {
      return this.getTargetMeta(target).getAdapterMeta(adapterClass, createIfMissing)
    }
  }
}


declare module '@tdm/transformation/fw/events' {
  interface TargetStoreEvents {
    onBuildMetadata: 'onBuildMetadata'
  }
}

declare module '@tdm/transformation/metadata/target-store' {
  interface TargetStore {
    getAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadata | undefined;
    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;
    registerAdapter(adapterClass: AdapterStatic<any, any>, metaArgs: AdapterMetadataArgs): void;

    setReadyToBuild(target: any): void;
    buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean;

    getTargetAdapterStore(target: Constructor<any>, adapterClass: AdapterStatic<any, any>, createIfMissing?: boolean): TargetAdapterMetadataStore | undefined;
  }
}
Tixin(TargetStore as any, CoreTargetStore as any);
