import { Tixin } from '@tdm/tixin';
import { TargetStore, LazyInit, Constructor, TargetStoreEvents } from '@tdm/transformation';

import { AdapterStatic } from '../../fw';
import { TargetAdapterMetadataStore, AdapterMetadataStore } from '../../metadata';

class CoreTargetStore extends TargetStore {

  @LazyInit(function(this: CoreTargetStore): Set<any>{
    return new Set<any>();
  })
  readyToBuild: Set<any>;

  getAdapterStore(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore {
    return this.local<AdapterMetadataStore>(adapterClass) || this.setAdapter(adapterClass);
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.locals.has(adapterClass);
  };

  setAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore {
    if (this.hasAdapter(adapterClass)) {
      throw new Error('Adapter class already exists');
    } else {
      const adapter = new AdapterMetadataStore(adapterClass);
      this.locals.add(adapterClass, adapter);
      return adapter;
    }
  };

  setReadyToBuild(target: any): void {
    if (!this.readyToBuild.has(target)) {
      this.readyToBuild.add(target);
    }
  }

  buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean {
    if (this.readyToBuild.has(target)) {
      const adapterStore = this.getTargetAdapterStore(target, adapterClass, false);
      if (adapterStore) {
        this.readyToBuild.delete(target);
        adapterStore.build();
        return true;
      }
    }
    return false;
  }

  getTargetAdapterStore(target: Constructor<any>, adapterClass: AdapterStatic<any, any>, createIfMissing: boolean = true): TargetAdapterMetadataStore | undefined {
    if (createIfMissing || this.hasTarget(target)) {
      return this.getTargetMeta(target).getAdapterStore(adapterClass, createIfMissing)
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
    getAdapterStore(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore;
    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;
    setAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore;

    setReadyToBuild(target: any): void;
    buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean;

    getTargetAdapterStore(target: Constructor<any>, adapterClass: AdapterStatic<any, any>, createIfMissing?: boolean): TargetAdapterMetadataStore | undefined;
  }
}
Tixin(TargetStore as any, CoreTargetStore as any);
