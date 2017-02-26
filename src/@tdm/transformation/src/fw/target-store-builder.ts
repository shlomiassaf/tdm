import { Constructor, isFunction, ensureTargetIsType, DualKeyMap } from './index';
import { DecoratorInfo } from './base-metadata';

export enum TargetStoreEvents {
  onCreateMetadata
}

const handlersMap = new DualKeyMap<TargetStoreEvents, MetaFactoryStatic, Array<(target: Constructor<any>) => void>>();

export interface MetaFactoryStatic {
  new (...args: any[]): any;
  metaFactory(metaArgs: any, target: Object | Function, key: PropertyKey, desc: PropertyDescriptor): MetaFactoryInstance;
}

export interface MetaFactoryInstance {
  info: DecoratorInfo;
  metaClassKey: MetaFactoryStatic
  metaPropKey: any
  metaValue: any
}

export function targetStoreSetter<T, TArgs>(type: MetaFactoryStatic): (metaArgs: TArgs, ...args: any[]) => T {
  return function(metaArgs, ...args: any[]) {
    return this.setMeta(ensureTargetIsType(type), metaArgs, ...args);
  }
}

export function registerEvent(event: TargetStoreEvents, metaClass: MetaFactoryStatic, handler: (target: Constructor<any>) => void) {
  if (isFunction(handler)) {
    const coll = handlersMap.get(event, metaClass) || [];
    coll.push(handler);
    handlersMap.set(event, metaClass, coll);
  }
}

export function fireEvents(event: TargetStoreEvents, target: Constructor<any>): void {
  const eventMap = handlersMap.get(event);
  if (eventMap) {
    Array.from(eventMap.entries())
      .forEach( ( [metaClass, handlers] ) => handlers.forEach( h => h(target) ) );
  }
}
