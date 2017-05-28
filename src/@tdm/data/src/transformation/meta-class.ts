import { tdm, ModelMetadataArgs, TDMModelBase } from '@tdm/core';
import { AdapterStatic } from '../fw';

declare module '@tdm/core/fw/metadata-framework/meta-class' {
  interface MetaClassMetadata<TMetaArgs = any, TMetaClass = any, Z = any> {
    createResourceDecorator(adapterClass: AdapterStatic<any, any>): (def: TMetaArgs) => (target: Function) => any;
  }
}

const ADAPTER_REF = Symbol('Adapter Ref');

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<TMetaArgs extends ModelMetadataArgs>(
  this: tdm.MetaClassMetadata<ModelMetadataArgs, tdm.ModelMetadata>,
  adapterClass: AdapterStatic<any, any>): (metaArgs: TMetaArgs) => ClassDecorator {

  const metaClass = this;

  return function ResourceDecorator(metaArgs: TMetaArgs) {
    return (target: any) => {

      if (tdm.targetStore.getAdapter(adapterClass).resourceMetaClass !== metaClass.target) {
        throw new Error(`Adapter ${tdm.stringify(adapterClass)} resource metadata mismatch`)
      }

      if (metaArgs.factory) {
        console.warn('Model#factory can not be set in @tdm/data');
        delete metaArgs.factory;
      }

      const TDMModel = TDMModelBase.factory(target);
      TDMModel[ADAPTER_REF] = adapterClass;

      const modelMeta = metaClass.create(metaArgs || {}, target);
      // tdm.targetStore.registerTarget(target);
      const meta = tdm.targetStore.getTargetMeta(target);


      // check for properties that set the type to self (same class)
      // the class will point to the base class (target) that TDModel extends.
      // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
      meta
        .getValues(tdm.PropMetadata)
        .forEach( p => {
          const desc = Object.getOwnPropertyDescriptor(p, 'type');

          if (desc && desc.configurable && tdm.isFunction(desc.get) && desc.get() === target) {
            Object.defineProperty(p, 'type', { configurable: true, value: TDMModel });
          }
        });

      tdm.targetStore.registerTarget(TDMModel);
      const tdmModelMeta = metaClass.extendSingle(modelMeta, undefined, { from: target, to: TDMModel });

      if (metaArgs.skip !== true) {
        tdmModelMeta.build();
      }

      return TDMModel;
    };
  }
}

tdm.MetaClassMetadata.prototype.createResourceDecorator = resource;

tdm.targetStore.on.beforeProcessType( target => {
  const tMeta = tdm.targetStore.getTargetMeta(target);
  // default behaviour, register the first adapter, if multiple...
  if (target[ADAPTER_REF]) {
    if (!tMeta.activeAdapter) {
      tMeta.setActiveAdapter(target[ADAPTER_REF]);
    }
  }
});

