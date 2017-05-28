import { Constructor } from '../utils';

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