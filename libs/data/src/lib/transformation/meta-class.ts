import {
  targetStore,
  stringify,
  isFunction,
  PropMetadata,
  MetaClassMetadata,
  ModelMetadataArgs,
  ModelMetadata,
  TDMModelBase
} from '@tdm/core/tdm';
import { AdapterStatic } from '../fw';

declare module '@tdm/core/tdm/lib/fw/metadata-framework/meta-class' {
  interface MetaClassMetadata<TMetaArgs = any, TMetaClass = any, Z = any> {
    createResourceDecorator(
      adapterClass: AdapterStatic<any, any>
    ): (def: TMetaArgs) => (target: Function) => any;
  }
}

const ADAPTER_REF = Symbol('Adapter Ref');

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<TMetaArgs extends ModelMetadataArgs>(
  this: MetaClassMetadata<ModelMetadataArgs, ModelMetadata>,
  adapterClass: AdapterStatic<any, any>
): (metaArgs: TMetaArgs) => ClassDecorator {
  const metaClass = this;

  return function ResourceDecorator(metaArgs: TMetaArgs) {
    return (target: any) => {
      if (
        targetStore.getAdapter(adapterClass).resourceMetaClass !==
        metaClass.target
      ) {
        throw new Error(
          `Adapter ${stringify(adapterClass)} resource metadata mismatch`
        );
      }

      if (metaArgs.factory) {
        console.warn('Model#factory can not be set in @tdm/data');
        delete metaArgs.factory;
      }

      const TDMModel = TDMModelBase.factory(target);
      TDMModel[ADAPTER_REF] = adapterClass;

      // Creating ModelMetadata instance (or a derived class of ModelMetadata)
      const modelMeta = metaClass.create(metaArgs || {}, target);
      // targetStore.registerTarget(target);
      const meta = targetStore.getTargetMeta(target);

      // check for properties that set the type to self (same class)
      // the class will point to the base class (target) that TDModel extends.
      // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
      meta.getValues(PropMetadata).forEach(p => {
        const desc = Object.getOwnPropertyDescriptor(p, 'type');

        if (
          desc &&
          desc.configurable &&
          isFunction(desc.get) &&
          desc.get() === target
        ) {
          Object.defineProperty(p, 'type', {
            configurable: true,
            value: TDMModel
          });
        }
      });

      targetStore.registerTarget(TDMModel);
      const tdmModelMeta = metaClass.extendSingle(modelMeta, undefined, {
        from: target,
        to: TDMModel
      });

      if (modelMeta.skip !== true) {
        tdmModelMeta.build();
      }

      return TDMModel;
    };
  };
}

export function initMetaClass(): void {
  MetaClassMetadata.prototype.createResourceDecorator = resource;

  targetStore.on.beforeProcessType(target => {
    const tMeta = targetStore.getTargetMeta(target);
    // default behaviour, register the first adapter, if multiple...
    if (target[ADAPTER_REF]) {
      if (!tMeta.activeAdapter) {
        tMeta.setActiveAdapter(target[ADAPTER_REF]);
      }
    }
  });
}
