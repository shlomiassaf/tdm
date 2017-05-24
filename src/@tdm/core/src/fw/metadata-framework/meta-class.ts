import { Constructor, stringify, ensureTargetIsType, isFunction } from '../utils';
import { MetadataClassStatic, MetaClassInstanceDetails, MetadataCurriedCreate, DecoratorInfo } from './types';
import { decoratorInfo } from './utils';
import { ProxyHostMetadataArgs, MetaClassMetadataArgs } from './meta-class-args';

const store = new Map<Constructor<any>, MetaClassMetadata>();

/**
 * Represents management and control logic for metadata class's
 */
export class MetaClassMetadata<TMetaArgs = any, TMetaClass = any, Z = any> {
  private proxyTo: Array<ProxyHostMetadataArgs & {metaClass: MetaClassMetadata}> = [];

  private constructor(public target: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, public metaArgs?: MetaClassMetadataArgs<TMetaArgs, TMetaClass>) {
    if (!this.metaArgs) {
      this.metaArgs = {};
    } else {
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
      
      if (isFunction(metaArgs.extend)) {
        this.extend = metaArgs.extend;
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

    const curry: MetadataCurriedCreate<TMetaArgs, TMetaClass> = <any>( (alternateMeta?: MetaClassInstanceDetails<TMetaArgs, TMetaClass>): TMetaClass => {
      this.register(alternateMeta || meta);

      const proxies = this.findProxies(metaArgs);
      proxies && proxies.forEach( ra => {
        if (ra) { // we check since findProxies returns undefined when no key on metadata arguments was found
          for (let i=1, len=ra.args.length; i<len; i++) {
            ra.meta.create(ra.args[i], target, key, desc);
          }
        }
      });

      return meta.metaValue;
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
  extend?(from: Map<PropertyKey, any>, to: Map<PropertyKey, any> | undefined, meta?: { from: Constructor<any>, to: Constructor<any> }): Map<PropertyKey, any>;

  /**
   * @internal
   */
  public factory(metaArgs: TMetaArgs, target: Object | Function, info: DecoratorInfo, key?: PropertyKey, desc?: PropertyDescriptor): MetaClassInstanceDetails<TMetaArgs, TMetaClass> {
    const type = ensureTargetIsType(target);
    const meta = {
      info,
      target: type,
      metaClassKey: this.target,
      metaPropKey: info.name,
      metaValue: new this.target(metaArgs, info, type)
    };

    return meta;
  }

  /**
   * @internal
   */
  public register: (meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => void;

  private findProxies(metaArgs: TMetaArgs | undefined): Array<{ meta: MetaClassMetadata; args: any[]}> | void {
    if (metaArgs && this.proxyTo.length > 0) {
      return this.proxyTo.map(proxy => {
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
    }
  }

  /**
   * A factory for {@link MetaClassMetadata} instances
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

  export function defaultRegistrator(fn: (meta: MetaClassInstanceDetails<any, any>) => void): void {
    MetaClassMetadata.prototype['register'] = fn;
  }
}


