import { TargetStore, KeySet, SetExt } from '@tdm/transformation';
import { AdapterStatic } from '../fw';

declare module '@tdm/transformation/metadata/target-metadata' {
  interface TargetMetadata {
    mixins: KeySet<AdapterStatic<any, any>, any>;
  }
}

declare module '@tdm/transformation/metadata/class-metadata' {
  interface ClassMetadata {
    mixins: KeySet<AdapterStatic<any, any>, any>;
  }
}


declare module '@tdm/transformation/metadata/target-store' {
  interface TargetStore {
    /**
     * Registers mixins to a target, under a specific adapter type.
     * @param target
     * @param adapterClass
     * @param mixins
     */
    registerMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void;
    getMixins(target: any, adapterClass: AdapterStatic<any, any>): Set<any>;
  }
}

TargetStore.prototype.registerMixins = function registerMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
  if (mixins.length > 0) {
    let registered: KeySet<AdapterStatic<any, any>, any> = this.getClassProp(target, 'mixins');
    if (!registered) {
      this.setClassProp(target, 'mixins', registered = new KeySet<AdapterStatic<any, any>, any>())
    }

    const set = registered.has(adapterClass) ? registered.get(adapterClass) : registered.set(adapterClass);
    SetExt.combine(set, mixins);
  }
};

TargetStore.prototype.getMixins = function getMixins(target: any, adapterClass: AdapterStatic<any, any>): Set<any> {
  const mixins: KeySet<AdapterStatic<any, any>, any> = this.getClassProp(target, 'mixins');
  const adapterMixins = mixins && mixins.get(adapterClass);

  return adapterMixins ? adapterMixins : new Set<any>();
};
