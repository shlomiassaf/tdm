import { Constructor } from '../utils';
import { MetaClassMetadata } from './meta-class';

export interface DecoratorInfo {
  type: 'class' | 'member' | 'param';
  name?: PropertyKey,
  isStatic?: boolean;
  hasDescriptor?: boolean;
}

/**
 * A list of supported decoration targets for a metadata class.
 *   - class: can decorate a class
 *   - member: can decorate an instance level property or a method
 *   - staticMember: can decorate an class level property or a method
 */
export type MetadataAllowOn = 'class' | 'member' | 'staticMember';


export interface MetadataClassStatic<TMetaArgs = any, TMetaClass = any> {
  new (metaArgs: TMetaArgs, info: DecoratorInfo, target?: Object | Function): TMetaClass;
  prototype: TMetaClass
}

export interface MetaClassInstanceDetails<TMetaArgs, TMetaClass> {
  info: DecoratorInfo;
  target: Constructor<any>;
  metaClassKey: MetadataClassStatic<TMetaArgs, TMetaClass>;
  metaPropKey: any;
  metaValue: TMetaClass;
}

export type MetadataCurriedCreate<TMetaArgs, TMetaClass>
  = ((alternateMeta?: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => TMetaClass) & { meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass> };

export type RegisterFn<TMetaArgs, TMetaClass> = (this: MetaClassMetadata<TMetaArgs, TMetaClass>,
                                                 meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => void;

export type ExtendFn = (from: Map<PropertyKey, any>, to: Map<PropertyKey, any> | undefined, meta?: { from: Constructor<any>, to: Constructor<any> }) => Map<PropertyKey, any> | undefined;
export type ExtendSingleFn<TMetaClass> = (from: TMetaClass, to: TMetaClass | undefined, meta?: { from: Constructor<any>, to: Constructor<any> }) => TMetaClass | undefined