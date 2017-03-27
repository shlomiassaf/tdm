import { Tixin } from '@tdm/tixin';
import { Constructor } from '@tdm/transformation';

const ARColl = Symbol('ActiveRecordCollection');
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

  thisVar[ARColl] = true;

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
export class ActiveRecordCollection<T /* extends ActiveRecord<any, any> */> extends Array<T> {
  constructor() {
    super();
    runtimeExtend(ActiveRecordCollection.prototype, this);
  }

  static extend(type: any): void {
    Tixin(ActiveRecordCollection as any, type);
    buildAndCacheProperties(ActiveRecordCollection.prototype);
  }

  static instanceOf(instance: any): instance is ActiveRecordCollection<any> {
    return instance.hasOwnProperty(ARColl);
  }
}

Object.defineProperty(ActiveRecordCollection, Symbol.hasInstance, {
  value: ActiveRecordCollection.instanceOf
});

buildAndCacheProperties(ActiveRecordCollection.prototype);

export function collectionClassFactory<T>(proto: any): typeof ActiveRecordCollection  & Constructor<ActiveRecordCollection<T>> {
  const clz = class RuntimeActiveRecordCollection<T> extends ActiveRecordCollection<T> {
    constructor() {
      super();
      runtimeExtend(clz.prototype, this);
    }

    static extend(type: any): void {
      Tixin(ActiveRecordCollection as any, type);
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
