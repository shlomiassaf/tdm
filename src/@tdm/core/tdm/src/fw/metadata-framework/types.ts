import { Constructor } from '../utils';
import { MetaClassMetadata } from './meta-class';

export interface DecoratorInfo {
  type: 'class' | 'member' | 'param';
  name?: TdmPropertyKey;
  paramIndex?: number;
  isStatic?: boolean;
  hasDescriptor?: boolean;
}

/**
 * A list of supported decoration targets for a metadata class.
 *   - class: can decorate a class
 *   - member: can decorate an instance level property or a method
 *   - staticMember: can decorate an class level property or a method
 */
export type MetadataAllowOn = 'class' | 'member' | 'staticMember' | 'param';

export interface MetadataClassStatic<TMetaArgs = any, TMetaClass = any> {
  new (metaArgs: TMetaArgs, info: DecoratorInfo, target?: Object | Function): TMetaClass;
  prototype: TMetaClass;
}

export interface MetaClassInstanceDetails<TMetaArgs, TMetaClass> {
  info: DecoratorInfo;
  target: Constructor<any>;
  metaClassKey: MetadataClassStatic<TMetaArgs, TMetaClass>;
  metaPropKey: any;
  metaValue: TMetaClass;
}

// tslint:disable:max-line-length
export type MetadataCurriedCreate<TMetaArgs, TMetaClass>
  = ((alternateMeta?: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => TMetaClass) & { meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass> };

export type RegisterFn<TMetaArgs = any, TMetaClass = any> = (this: MetaClassMetadata<TMetaArgs, TMetaClass>,
                                                             meta: MetaClassInstanceDetails<TMetaArgs, TMetaClass>) => void;

export type ExtendFn<TMetaClass = any> = (from: Map<TdmPropertyKey, TMetaClass>,
                                          to?: Map<TdmPropertyKey, TMetaClass> | undefined,
                                          meta?: { from: Constructor<any>, to: Constructor<any> }) => Map<TdmPropertyKey, TMetaClass> | undefined;

export type ExtendSingleFn<TMetaClass = any> = (from: TMetaClass,
                                                to?: TMetaClass | undefined,
                                                meta?: { from: Constructor<any>, to: Constructor<any> }) => TMetaClass | undefined;

export interface MetaClassRegisterHelpers { }
export interface MetaClassExtendHelpers { }
