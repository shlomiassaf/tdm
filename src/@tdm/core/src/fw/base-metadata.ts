import { isFunction, isNumber, isStaticDecorator } from './utils';
import { DecoratorInfo, MetaFactoryStatic } from './interfaces';
import { MetaHostMetadata } from './meta-host';

export const EXTEND_COLL = Symbol('EXTEND_COLL');

export function decoratorInfo(...args: any[]): DecoratorInfo {

  switch (args.length) {
    case 1:
      return { type: 'class' };
    default:
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
    const arr: MetaHostMetadata[] = metaClass[EXTEND_COLL];

    // TODO: make this pretty
    const runAfter = metaArgs && Array.isArray(arr) && arr.map(a => {
      if (metaArgs.hasOwnProperty(a.containerKey)) {
        const myMetaArgs = isFunction(a.before) ? a.before(metaArgs[a.containerKey]) : metaArgs[a.containerKey];
        delete metaArgs[a.containerKey];
        return [a.target, myMetaArgs]
      }
    });

    metaClass.register(metaClass.metaFactory(metaArgs, target, key, desc));

    runAfter && runAfter.forEach( ra => ra && BaseMetadata.create(ra[0], ra[1], target, key, desc) );

  }
}

