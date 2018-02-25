import { Tixin } from '@tdm/tixin';
import {
  Constructor,
  MetaClass,
  TargetStore
} from '@tdm/core/tdm';

import { AdapterStatic } from '../fw';
import { ActionController } from '../core/action-controller';
import { AdapterMetadata, AdapterMetadataArgs } from '../metadata';

class CoreTargetStore extends TargetStore {

  getAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadata {
    return this.local<AdapterMetadata>(adapterClass)
      || ( this.locals.add(adapterClass,  new AdapterMetadata()), this.getAdapter(adapterClass) );
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.locals.has(adapterClass);
  }

  registerAdapter(adapterClass: AdapterStatic<any, any>, metaArgs: AdapterMetadataArgs): void {
    MetaClass.get(AdapterMetadata).create(metaArgs, adapterClass);
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

declare module '@tdm/core/tdm/src/metadata/target-store' {
  interface TargetStore {
    getAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadata | undefined;
    hasAdapter(adapterClass: AdapterStatic<any, any>): boolean;
    registerAdapter(adapterClass: AdapterStatic<any, any>, metaArgs: AdapterMetadataArgs): void;

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
Tixin(TargetStore as any, CoreTargetStore as any);
