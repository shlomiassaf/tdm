import { stringify, isFunction, isNumber, isStaticDecorator } from './utils';
import { DecoratorInfo, MetaFactoryInstance, MetaFactoryStatic } from './interfaces';
import { MetaHostMetadata } from './meta-host';

export const EXTEND_COLL = Symbol('EXTEND_COLL');

export function decoratorInfo(...args: any[]): DecoratorInfo {

  if (isFunction(args[0]) && !args[1]) { // target is function and key is not set
    return { type: 'class' };
  } else {
    const type = args.length === 3 && isNumber(args[2]) ? 'param' : 'member';
    return {
      type,
      name: args[1],
      isStatic: isStaticDecorator(args[0]),
      hasDescriptor:  args.length === 3 && type === 'member'
    }
  }
}

export abstract class BaseMetadata {

  /**
   * The property name that the decorator wraps, if it wraps a property, member or constructor param.
   * @returns {PropertyKey}
   */
  readonly name: PropertyKey | undefined;

  constructor(public readonly decoratorInfo: DecoratorInfo) {
    this.name = decoratorInfo.name;
  }

  /**
   * Creates a Metadata class instance from decorator parameters.
   *
   * @param metaClass
   * @param metaArgs
   * @param target
   * @param key
   * @param desc
   */
  static create(metaClass: MetaFactoryStatic, metaArgs: any, target: Object | Function, key?: PropertyKey, desc?: PropertyDescriptor): void {
    BaseMetadata.createCurry(metaClass, metaArgs, target, key, desc)();
  }

  static createCurry(metaClass: MetaFactoryStatic,
                     metaArgs: any,
                     target: Object | Function,
                     key?: PropertyKey,
                     desc?: PropertyDescriptor): MetadataCurriedCreate {

    const arr: MetaHostMetadata[] = metaClass[EXTEND_COLL];

    // TODO: make this pretty
    const runAfter = metaArgs && Array.isArray(arr) && arr.map(a => {
        if (metaArgs.hasOwnProperty(a.containerKey)) {
          const myMetaArgs = isFunction(a.before) ? a.before(metaArgs[a.containerKey]) : metaArgs[a.containerKey];
          delete metaArgs[a.containerKey];
          if (a.forEach === true && Array.isArray(myMetaArgs)) {
            return [a.target, ...myMetaArgs]
          } else {
            return [a.target, myMetaArgs]
          }
        }
      });

    const meta = metaClass.metaFactory(metaArgs, target, key, desc);

    if (metaClass.allowOn && metaClass.allowOn.length > 0) {
      if (meta.info.type === 'class') {
        if (metaClass.allowOn.indexOf('class') === -1) {
          throw new Error(`Metadata class ${stringify(metaClass)} can not decorate a class (${stringify(target)})`);
        }
      } else if (meta.info.isStatic) {
        if (metaClass.allowOn.indexOf('staticMember') === -1) {
          throw new Error(`Metadata class ${stringify(metaClass)} can not decorate a static member (${stringify(meta.target)}#${key})`);
        }
      } else  {
        if (metaClass.allowOn.indexOf('member') === -1) {
          throw new Error(`Metadata class ${stringify(metaClass)} can not decorate an instance member (${stringify(meta.target)}.${key})`);
        }
      }
    }

    const curry: MetadataCurriedCreate = <any>( (alternateMeta?: MetaFactoryInstance<any>): void => {
      metaClass.register(alternateMeta || meta);
      runAfter && runAfter.forEach( ra => {
        if (ra) {
          for (let i=1, len=ra.length; i<len; i++) {
            BaseMetadata.create(ra[0], ra[i], target, key, desc)
          }
        }
      });
    } );

    curry.meta = meta;

    return curry;
  }
}

export type MetadataCurriedCreate
  = ((alternateMeta?: MetaFactoryInstance<any>) => void) & { meta: MetaFactoryInstance<any> };
