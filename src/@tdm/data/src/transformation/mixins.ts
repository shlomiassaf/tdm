import { TargetStore, KeySet, SetExt, getProtoChain } from '@tdm/core';
import { AdapterStatic } from '../fw';
import { targetStore } from "@tdm/core/metadata";

declare module '@tdm/core/metadata/target-metadata' {
  interface TargetMetadata {
    mixins: KeySet<AdapterStatic<any, any>, any>;
  }
}

declare module '@tdm/core/metadata/class-metadata' {
  interface ClassMetadata {
    mixins: KeySet<AdapterStatic<any, any>, any>;
  }
}


declare module '@tdm/core/metadata/target-store' {
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

// const mixinCache = new Set<any>();
//
//
// /**
//  * For every mixins, go down the proto chain and extend the metadata.
//  * @param mixin
//  */
// function extendMixin(mixin: any): void {
//   if (!mixinCache.has(mixin)) {
//     const chain = getProtoChain(mixin);
//     if (chain[0] === mixin) chain.shift();
//
//     if (chain.length > 0) {
//       for (let i=chain.length-1; i>0; i--) {
//         if (!mixinCache.has(chain[i+1]) && targetStore.hasTarget(chain[i])) {
//           targetStore.registerTarget(chain[i+1]);
//           targetStore.extend(chain[i], chain[i+1]);
//         }
//       }
//       targetStore.registerTarget(chain[0]);
//       targetStore.registerTarget(mixin);
//       targetStore.extend(chain[0], mixin);
//     }
//   }
// }

TargetStore.prototype.registerMixins = function registerMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
  if (mixins.length > 0) {
    let registered: KeySet<AdapterStatic<any, any>, any> = this.getClassProp(target, 'mixins');
    if (!registered) {
      this.setClassProp(target, 'mixins', registered = new KeySet<AdapterStatic<any, any>, any>())
    }

    const set = registered.has(adapterClass) ? registered.get(adapterClass) : registered.set(adapterClass);
    SetExt.combine(set, mixins);

    // seems to much, maybe a decorator will be better...
    // mixins.forEach( m => extendMixin(m) );
  }
};

TargetStore.prototype.getMixins = function getMixins(target: any, adapterClass: AdapterStatic<any, any>): Set<any> {
  const mixins: KeySet<AdapterStatic<any, any>, any> = this.getClassProp(target, 'mixins');
  const adapterMixins = mixins && mixins.get(adapterClass);

  return adapterMixins ? adapterMixins : new Set<any>();
};
