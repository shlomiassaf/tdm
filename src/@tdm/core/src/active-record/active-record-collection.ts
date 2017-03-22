import { Tixin } from '@tdm/tixin';

const ARColl = Symbol('ActiveRecordCollection');
const NON_EXTENDABLE_PROPS = ['constructor'];

let propertiesToCopy: Array<string | symbol>;

function buildAndCacheProperties() {
  const proto = ActiveRecordCollection.prototype;
  propertiesToCopy = Object.getOwnPropertyNames(proto)
    .concat(Object.getOwnPropertySymbols(proto) as any)
    .filter(v => NON_EXTENDABLE_PROPS.indexOf(v) === -1)
}

function runtimeExtend(thisVar: Array<any>): any {
  thisVar[ARColl] = true;

  const proto = ActiveRecordCollection.prototype;
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
    runtimeExtend(this);
  }

  static extend(type: any): void {
    Tixin(ActiveRecordCollection as any, type);
    buildAndCacheProperties();
  }

  static instanceOf(instance: any): instance is ActiveRecordCollection<any> {
    return instance.hasOwnProperty(ARColl);
  }
}

Object.defineProperty(ActiveRecordCollection, Symbol.hasInstance, {
  value: ActiveRecordCollection.instanceOf
});

buildAndCacheProperties();
