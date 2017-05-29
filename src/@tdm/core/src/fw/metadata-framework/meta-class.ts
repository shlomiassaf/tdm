import { Constructor, isString, stringify, ensureTargetIsType, isFunction } from '../utils';
import { targetEvents } from '../events';
import { MetadataClassStatic, MetaClassInstanceDetails, MetadataCurriedCreate, DecoratorInfo, ExtendFn, ExtendSingleFn } from './types';
import { decoratorInfo, extendHelpers } from './utils';
import { ProxyHostMetadataArgs, MetaClassMetadataArgs } from './meta-class-args';

const store = new Map<Constructor<any>, MetaClassMetadata>();

/**
 * A token representing single items (see {@link MetaClassMetadataArgs.single})
 * Use this token as a key for single items in TargetMetadata
 * @type {symbol}
 */
export class GLOBAL_KEY {}

/**
 * Represents management and control logic for metadata class's
 */
export class MetaClassMetadata<TMetaArgs = any, TMetaClass = any, Z = any> {
  private proxyTo: Array<ProxyHostMetadataArgs & {metaClass: MetaClassMetadata}> = [];

  private constructor(public target: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, public metaArgs?: MetaClassMetadataArgs<TMetaArgs, TMetaClass>) {
    if (!this.metaArgs) {
      this.metaArgs = {};
    } else {
      if (metaArgs.inherit) {
        this.metaArgs = metaArgs = Object.assign({}, MetaClass.get(metaArgs.inherit).metaArgs, metaArgs);
      }

      if (metaArgs.factory) {
        this.factory = metaArgs.factory;
      }

      if (metaArgs.register) {
        this.register = metaArgs.register;
      }
      if (metaArgs.proxy) {
        const proxy: ProxyHostMetadataArgs & {metaClass: MetaClassMetadata} = <any>metaArgs.proxy;
        proxy.metaClass = this;
        MetaClass.get(metaArgs.proxy.host).proxyTo.push(proxy);
      }

      if (metaArgs.extend) {
        if (metaArgs.single === true) {
          // TODO: make error message clear;
          throw new Error('Extending a single class is done using extendSingle');
        }
        if (isString(metaArgs.extend)) {
          this.extend = extendHelpers[metaArgs.extend];
        } else if (isFunction(metaArgs.extend)) {
          this.extend = metaArgs.extend;
        }
      }

      if (isFunction(metaArgs.extendSingle)) {
        if (metaArgs.single !== true) {
          // TODO: make error message clear;
          throw new Error('Extending a non-single class is done using extend');
        }
        this.extendSingle = metaArgs.extendSingle;
      }
    }
  }

  /**
   * Create a new instance of the metadata class
   * @param metaArgs
   * @param target
   * @param key
   * @param desc
   * @returns {TMetaClass}
   */
  create(metaArgs: TMetaArgs, target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor): TMetaClass {
    return this.createCurry(metaArgs, target, key, desc)();
  }

  createCurry(metaArgs: TMetaArgs, target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor): MetadataCurriedCreate<TMetaArgs, TMetaClass> {

    const info = decoratorInfo(target, key, desc);
    const allowOn = this.metaArgs.allowOn;

    if (allowOn && allowOn.length > 0) {
      if (info.type === 'class') {
        if (allowOn.indexOf('class') === -1) {
          throw new Error(`Metadata class ${stringify(this.target)} can not decorate a class (${stringify(target)})`);
        }
      } else if (info.isStatic) {
        if (allowOn.indexOf('staticMember') === -1) {
          throw new Error(`Metadata class ${stringify(this.target)} can not decorate a static member (${stringify(target)}#${key})`);
        }
      } else  {
        if (allowOn.indexOf('member') === -1) {
          throw new Error(`Metadata class ${stringify(this.target)} can not decorate an instance member (${stringify(target.constructor)}.${key})`);
        }
      }
    }

    const meta = this.factory(metaArgs, target, info, key, desc);

    const curry: MetadataCurriedCreate<TMetaArgs, TMetaClass> = <any>( (_meta?: MetaClassInstanceDetails<TMetaArgs, TMetaClass>): TMetaClass => {
      if (!_meta) {
        _meta = meta;
      }

      // in case factory return undefined
      if (!_meta) return;

      this.register(_meta);

      const chain = this.singleChain(_meta);
      if (chain) {
        // we use this class's register implementation for all
        chain.forEach( c => this.register(c) );
      }

      targetEvents.FIRE.metaInit(_meta.metaClassKey, _meta.target, _meta.metaValue, metaArgs);

      const proxies = this.findProxies(metaArgs);
      proxies.forEach( ra => {
        if (ra) { // we check since findProxies returns undefined when no key on metadata arguments was found
          for (let i=0, len=ra.args.length; i<len; i++) {
            ra.meta.create(ra.args[i], target, key, desc);
          }
        }
      });

      return meta && meta.metaValue;
    } );

    curry.meta = meta;

    return curry;
  }

  createDecorator(type: 'class'): (def: TMetaArgs) => (target: Function) => any;
  createDecorator(type: 'prop'): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  createDecorator(): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  createDecorator(optional: true, type: 'class'): (def?: TMetaArgs) => (target: Function) => any;
  createDecorator(optional: true, type: 'prop'): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  createDecorator(optional: true): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  createDecorator(...args: any[]): ( (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any ) | ( (def?: TMetaArgs) => (target: Function) => any ) {
    return (def: TMetaArgs) => {
      return (target: Object | Function, key: PropertyKey, desc?: PropertyDescriptor) => {
        this.create(def, target, key, desc);
      };
    }
  }

  /**
   * @internal
   */
  extend?: ExtendFn;
  extendSingle?: ExtendSingleFn<TMetaClass>;

  /**
   * @internal
   */
  public factory(metaArgs: TMetaArgs, target: Object | Function, info: DecoratorInfo, key?: PropertyKey, desc?: PropertyDescriptor): MetaClassInstanceDetails<TMetaArgs, TMetaClass> {
    const type = ensureTargetIsType(target);
    const meta = {
      info,
      target: type,
      metaClassKey: this.target,
      metaPropKey: this.metaArgs.single === true ? GLOBAL_KEY : info.name,
      metaValue: new this.target(metaArgs, info, type)
    };

    return meta;
  }

  /**
   * @internal
   * set by target-store.ts
   */
  public register: (meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => void;

  /**
   * Given a MetaClassInstanceDetails, if its a single metadata (single) and has a chain (inherit)
   * it will go up the chain and create MetaClassInstanceDetails that match the given one just with
   * the inherited class as the metaClass property.
   *
   * This is used to allow registering inheriting single metadata classes.
   * For example, a ModelMetadata might get extended by an adapter resource, the only metadata class
   * registered is the extending one, if we will not register the ModelMetadata token as well logic
   * that expects to find it will fail.
   * @param meta
   * @returns {[any,any]|[any]}
   */
  private singleChain(meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>): MetaClassInstanceDetails<TMetaArgs, TMetaClass>[] | undefined {
    if (this.metaArgs.single === true && this.metaArgs.inherit) {
      const parentMeta = Object.create(meta);
      parentMeta.metaClassKey = this.metaArgs.inherit;

      const deep = getMetaClass(this.metaArgs.inherit).singleChain(meta);
      return deep
        ? [ parentMeta, ...deep ]
        : [ parentMeta ]
      ;
    }
  }

  private findProxies(metaArgs: TMetaArgs | undefined): Array<{ meta: MetaClassMetadata; args: any[]}> {
    const results: Array<{ meta: MetaClassMetadata; args: any[]}> = [];

    if (metaArgs) {

      // we need to take into account parent metadata
      if (this.metaArgs.inherit) {
        results.splice(0, 0, ...MetaClass.get(this.metaArgs.inherit).findProxies(metaArgs));
      }

      const local = this.proxyTo.map(proxy => {
        if (metaArgs.hasOwnProperty(proxy.containerKey)) {
          const myMetaArgs = isFunction(proxy.before)
            ? proxy.before(metaArgs[proxy.containerKey])
            : metaArgs[proxy.containerKey]
          ;

          delete metaArgs[proxy.containerKey];

          return proxy.forEach === true && Array.isArray(myMetaArgs)
            ? { meta: proxy.metaClass, args: myMetaArgs }
            : { meta: proxy.metaClass, args: [myMetaArgs] }
            ;
        }
      });

      results.splice(results.length, 0, ...local);
    }


    return results;
  }

  /**
   * A factory for {@link MetaClassMetadata} instances
   *
   * > This will create an instance of a metadata class container.
   * A Metadata container can create instances of the metadata class it "contains", thus, the instance
   * returned from the static `create` method also has a 'create' method however that instance level
   * `create` method is a factory for instance of the metadata class, not the container.
   *
   * @param target
   * @param metaArgs
   * @returns {MetaClassMetadata<TMetaArgs, TMetaClass>}
   */
  static create<TMetaArgs = any, TMetaClass = any>(target: MetadataClassStatic<TMetaArgs, TMetaClass>, metaArgs?: MetaClassMetadataArgs<TMetaArgs, TMetaClass>): MetaClassMetadata<TMetaArgs, TMetaClass> {
    return new MetaClassMetadata<TMetaArgs, TMetaClass>(target, metaArgs);
  }
}

export function MetaClass<TMetaArgs, TMetaClass = any, Z = any>(metaArgs?: MetaClassMetadataArgs<TMetaArgs, TMetaClass>) {
  return (target: Z & MetadataClassStatic<TMetaArgs, TMetaClass>): Z & MetadataClassStatic<TMetaArgs, TMetaClass> | void => {
    store.set(target, MetaClassMetadata.create(target, metaArgs));
  }
}

export function getMetaClass<TMetaArgs = any, TMetaClass = any>(target: MetadataClassStatic<TMetaArgs, TMetaClass>): MetaClassMetadata<TMetaArgs, TMetaClass> {
  return store.get(target);
}


export module MetaClass {

  // export function get<TMetaArgs, TMetaClass, Z>(target: Z & MetadataClassStatic<TMetaArgs, TMetaClass>): MetaClassMetadata<TMetaArgs, TMetaClass> {
  //   return store.get(target);
  // }

  /**
   * Creates a metadata class instance.
   * This is a shortcut for `MetaClass.get(MyMetadataClass).create(...);
   * @param metaClass
   * @param metaArgs
   * @param target
   * @param key
   * @param desc
   * @return {TMetaClass}
   */
  export function create<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>,
                                                   metaArgs: TMetaArgs,
                                                   target: Object | Function,
                                                   key?: PropertyKey,
                                                   desc?: PropertyDescriptor): TMetaClass {
    return store.get(metaClass).create(metaArgs, target, key, desc);
  }

  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, type: 'class'): (def: TMetaArgs) => (target: Function) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, type: 'prop'): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, type: 'both'): (def: TMetaArgs) => (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>): (def: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, optional: true, type: 'class'): (def?: TMetaArgs) => (target: Function) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, optional: true, type: 'prop'): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, optional: true, type: 'both'): (def?: TMetaArgs) => (target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, optional: true): (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any;
  export function decorator<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, ...args: any[]): ( (def?: TMetaArgs) => (target: Object, key: PropertyKey, desc?: PropertyDescriptor) => any ) | ( (def?: TMetaArgs) => (target: Function) => any ) {
    return store.get(metaClass).createDecorator();
  }


  export function defaultRegistrator(fn: (meta: MetaClassInstanceDetails<any, any>) => void): void {
    MetaClassMetadata.prototype['register'] = fn;
  }
}


