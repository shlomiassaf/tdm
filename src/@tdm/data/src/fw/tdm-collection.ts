import { Tixin } from '@tdm/tixin';
import { Constructor, targetStore } from '@tdm/core';

const TDMCollectionMark = Symbol('TDMCollection instance mark');
const NON_EXTENDABLE_PROPS = ['constructor'];

const pCopyMap = new Map<any, Array<string | symbol>>();

function buildAndCacheProperties(proto: any) {
  const propertiesToCopy = Object.getOwnPropertyNames(proto)
    .concat(Object.getOwnPropertySymbols(proto) as any)
    .filter(v => NON_EXTENDABLE_PROPS.indexOf(v) === -1);

  pCopyMap.set(proto, propertiesToCopy);
}

function runtimeExtend(proto: any, thisVar: Array<any>): any {
  const propertiesToCopy = pCopyMap.get(proto) || [];

  thisVar[TDMCollectionMark] = true;

  for (let i=0, len=propertiesToCopy.length; i<len; i++) {
    const name = propertiesToCopy[i];
    const propDesc = Object.getOwnPropertyDescriptor(proto, name);
    if (propDesc) {
      Object.defineProperty(thisVar, name, propDesc);
    } else {
      thisVar[name] = proto[name];
    }
  }
}

// TODO: document the class and how to use it. explain about methods that return new instance (concat, reverse, etc) that return Array instance and not ActiveRecordCollection instance.
// TODO: override ref changing methods? throw on them? return ActiveRecordCollection on them?
export class TDMCollection<T /* extends ActiveRecord<any, any> */> extends Array<T> {
  constructor() {
    super();
    runtimeExtend(TDMCollection.prototype, this);
  }

  static extend(type: any): void {
    Tixin(TDMCollection as any, type);
    buildAndCacheProperties(TDMCollection.prototype);
  }

  static instanceOf(instance: any): instance is TDMCollection<any> {
    return instance[TDMCollectionMark] === true;
  }

  /**
   * Creates a new instance of TDMCollection.
   * If a type is specified, returns the TDMCollection class for that type.
   * It is recommended to use this method along with a type to ensure plugins functionality.
   * @param type
   */
  static create<T>(type?: Constructor<T>): TDMCollection<T> {
    if (!type) {
      return new TDMCollection<any>();
    } else {
      return targetStore.getTargetMeta(type).createCollection();
    }
  }

  /**
   * Creates a new TDMCollection class mixed in with the proto object.
   * @param proto An object literal used as a mixin to the TDMCollection prototype.
   * @returns {RuntimeTDMCollection}
   */
  static factory<T>(proto: any): typeof TDMCollection & Constructor<TDMCollection<T>> {
    const clz = class RuntimeTDMCollection<T> extends TDMCollection<T> {
      constructor() {
        super();
        runtimeExtend(clz.prototype, this);
      }

      static extend(type: any): void {
        Tixin(TDMCollection as any, type);
        buildAndCacheProperties(clz.prototype);
      }
    };

    Object.defineProperty(clz, Symbol.hasInstance, {
      value: clz.instanceOf
    });

    Object.assign(clz.prototype, proto);
    buildAndCacheProperties(clz.prototype);

    return clz;
  }
}

Object.defineProperty(TDMCollection, Symbol.hasInstance, {
  value: TDMCollection.instanceOf
});

buildAndCacheProperties(TDMCollection.prototype);
