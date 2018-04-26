import { MetadataClassStatic } from './types';
import { MetaClassMetadata, MetaClass, getMetaClass } from './meta-class';

declare module './meta-class' {
  module MetaClass {
    function get<TMetaArgs, TMetaClass>(target: MetadataClassStatic<TMetaArgs, TMetaClass>): MetaClassMetadata<TMetaArgs, TMetaClass>;
  }
}

MetaClass.get = <any> getMetaClass;
