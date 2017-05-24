import { Tixin } from '@tdm/tixin';
import { tdm, Constructor } from '@tdm/core';

import { AdapterStatic } from '../fw';
import { ActionController } from '../core/action-controller';
import { AdapterMetadata, AdapterMetadataArgs } from '../metadata';

class CoreTargetStore extends tdm.TargetStore {

  @tdm.LazyInit(function(this: CoreTargetStore): Set<any>{
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
    tdm.MetaClass.get(AdapterMetadata).create(metaArgs, adapterClass);
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

  getAC(target: Constructor<any>): ActionController | undefined;
  getAC<T extends AdapterStatic<any, any>>(target: Constructor<any>, adapterClass: T): ActionController | undefined;
  getAC<T extends AdapterStatic<any, any>>(target: Constructor<any>, adapterClass?: T): ActionController | undefined {
    if (this.hasTarget(target)) {
      return adapterClass
        ? this.getTargetMeta(target).getAC(adapterClass)
        : this.getTargetMeta(target).getAC()
      ;
    }
  }

}

declare module '@tdm/core/metadata/target-store' {
  interface TargetStore {
    getAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadata | undefined;
    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;
    registerAdapter(adapterClass: AdapterStatic<any, any>, metaArgs: AdapterMetadataArgs): void;

    setReadyToBuild(target: any): void;
    buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean;

    /**
     * Returns the action controller of the current (active) adapter on this target.
     */
    getAC(target: Constructor<any>): ActionController | undefined;

    /**
     * Returns the  action controller of an adapter on this target.
     */
    getAC(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): ActionController | undefined;
  }
}
Tixin(tdm.TargetStore as any, CoreTargetStore as any);
