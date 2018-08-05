import { ModelMetadata, TargetStore, SetExt, KeySet } from '@tdm/core/tdm';
import { AdapterStatic } from '../fw';

declare module '@tdm/core/tdm/lib/add/model/model' {
  interface ModelMetadata {
    mixins: KeySet<AdapterStatic<any, any>, any>;
  }
}

declare module '@tdm/core/tdm/lib/metadata/target-store' {
  interface TargetStore {
    /**
     * Registers mixins to a target, under a specific adapter type.
     * @param target
     * @param adapterClass
     * @param mixins
     */
    registerMixins(
      target: any,
      adapterClass: AdapterStatic<any, any>,
      ...mixins: any[]
    ): void;
    getMixins(target: any, adapterClass: AdapterStatic<any, any>): Set<any>;
    hasMixins(target: any, adapterClass: AdapterStatic<any, any>): boolean;
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

export function initMixins(): void {
  TargetStore.prototype.registerMixins = function registerMixins(
    target: any,
    adapterClass: AdapterStatic<any, any>,
    ...mixins: any[]
  ): void {
    if (mixins.length > 0) {
      const model = this.getTargetMeta(target).model();

      let registered: KeySet<AdapterStatic<any, any>, any> = model.mixins;
      if (!registered) {
        model.mixins = registered = new KeySet<AdapterStatic<any, any>, any>();
      }

      const set = registered.has(adapterClass)
        ? registered.get(adapterClass)
        : registered.set(adapterClass);
      SetExt.combine(set, mixins);

      // seems to much, maybe a decorator will be better...
      // mixins.forEach( m => extendMixin(m) );
    }
  };

  TargetStore.prototype.getMixins = function getMixins(
    target: any,
    adapterClass: AdapterStatic<any, any>
  ): Set<any> {
    const model = this.getTargetMeta(target).model();
    return (model.mixins && model.mixins.get(adapterClass)) || new Set<any>();
  };

  TargetStore.prototype.hasMixins = function hasMixins(
    target: any,
    adapterClass: AdapterStatic<any, any>
  ): boolean {
    const mixins = this.getTargetMeta(target).model().mixins;
    const registered = mixins && mixins.get(adapterClass);
    return registered && registered.size > 0;
  };
}
