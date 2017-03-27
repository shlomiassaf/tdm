import { Constructor, ensureTargetIsType, isFunction } from './utils';
import { MetaFactoryStatic, MetaFactoryInstance } from './interfaces';
import { decoratorInfo } from './base-metadata';
import { targetStore } from '../metadata/target-store';

/**
 * Create a metadata factory. A function that creates new instances of the metadata class provided.
 * This is a generic factory, it requires a metadata class in the right format (TODO: document)
 * @param metaClass
 * @param post allows post processing of the MetaFactoryInstance instnace
 * @returns {(metaArgs:Q, target:(Object|Function), key?:PropertyKey, desc?:PropertyDescriptor)=>MetaFactoryInstance<T>}
 */
export function metaFactoryFactory<Q, T>(metaClass: MetaFactoryStatic & Constructor<T>, post?: (meta: MetaFactoryInstance<T>, metaArgs: Q) => void)
                : (metaArgs: Q, target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => MetaFactoryInstance<T> {

  return (metaArgs: Q, target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor): MetaFactoryInstance<T> => {
    const info = decoratorInfo(target, key, desc);
    const meta = {
      info,
      target: ensureTargetIsType(target),
      metaClassKey: metaClass,
      metaPropKey: info.name,
      metaValue: new metaClass(metaArgs, info)
    };

    if (isFunction(post)) {
      post(meta, metaArgs);
    }

    return meta;
  }
}

export function registerFactory<T>(): (meta: MetaFactoryInstance<T>) => void {
  return (meta: MetaFactoryInstance<T>): void => targetStore.setMetaFormFactory(meta);
}

/**
 * A factory for decorator factories.
 * Creates simple, normalized, decorators factories that accept one metadata arguments parameter and registers
 * the metadata class, key and value.
 *
 * The factory accepts the Meta Class that implements MetaFactoryStatic, MetaFactoryStatic has both
 * methods that allows creation of a simple metadata instantiation and registration logic.
 * An optional, 2nd parameter, can be set to mark the metadata arguments parameter as optional.
 *
 *
 */
export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, type: 'class'): (def: TMetaArgs) => (target: Function) => any;
export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, type: 'prop'): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;

export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, optional: true, type: 'class'): (def?: TMetaArgs) => (target: Function) => any;
export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, optional: true, type: 'prop'): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, optional: true): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;

export function decoratorFactory<TMetaArgs>(metaClass: MetaFactoryStatic, ...args: any[]): ( (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any ) | ( (def?: TMetaArgs) => (target: Function) => any ) {
  return (def: TMetaArgs) => {
    return (target: Object | Function, key: PropertyKey, desc?: PropertyDescriptor) => {
      metaClass.register(metaClass.metaFactory(def, target, key, desc));
    };
  }
}

