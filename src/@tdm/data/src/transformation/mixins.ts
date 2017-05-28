import { tdm } from '@tdm/core';
import { AdapterStatic } from '../fw';

declare module '@tdm/core/add/model/model' {
  interface ModelMetadata {
    mixins: tdm.KeySet<AdapterStatic<any, any>, any>;
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

tdm.TargetStore.prototype.registerMixins = function registerMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
  if (mixins.length > 0) {
    const model = this.getTargetMeta(target).model();

    let registered: tdm.KeySet<AdapterStatic<any, any>, any> = model.mixins;
    if (!registered) {
      model.mixins = registered = new tdm.KeySet<AdapterStatic<any, any>, any>();
    }

    const set = registered.has(adapterClass) ? registered.get(adapterClass) : registered.set(adapterClass);
    tdm.SetExt.combine(set, mixins);

    // seems to much, maybe a decorator will be better...
    // mixins.forEach( m => extendMixin(m) );
  }
};

tdm.TargetStore.prototype.getMixins = function getMixins(target: any, adapterClass: AdapterStatic<any, any>): Set<any> {
  const model = this.getTargetMeta(target).model();
  return (model.mixins && model.mixins.get(adapterClass)) || new Set<any>();
};
