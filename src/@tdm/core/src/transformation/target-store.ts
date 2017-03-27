import { Tixin } from '@tdm/tixin';
import { TargetStore, LazyInit, Constructor, TargetStoreEvents } from '@tdm/transformation';

import { AdapterStatic } from '../fw';
import { TargetAdapterMetadataStore, AdapterMetadata, AdapterMetadataArgs } from '../metadata';

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

  /**
   * Returns the metadata of the current (active) adapter on this target.
   */
  getAdapterMeta(target: Constructor<any>): TargetAdapterMetadataStore | undefined;
  getAdapterMeta<T extends AdapterStatic<any, any>>(target: Constructor<any>, adapterClass: T): TargetAdapterMetadataStore | undefined;
  getAdapterMeta<T extends AdapterStatic<any, any>>(target: Constructor<any>, adapterClass?: T): TargetAdapterMetadataStore | undefined {
    if (this.hasTarget(target)) {
      return adapterClass
        ? this.getTargetMeta(target).getAdapterMeta(adapterClass)
        : this.getTargetMeta(target).getAdapterMeta()
      ;
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

    /**
     * Returns the metadata of an adapter for a given target.
     */

    getAdapterMeta(target: Constructor<any>): TargetAdapterMetadataStore | undefined;
    getAdapterMeta(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): TargetAdapterMetadataStore | undefined;
  }
}
Tixin(TargetStore as any, CoreTargetStore as any);
