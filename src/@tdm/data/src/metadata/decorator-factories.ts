import { tdm, TDMModelBase } from '@tdm/core';
import { AdapterStatic } from '../fw';
import { ResourceMetadataArgs } from './meta-types';

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<T extends ResourceMetadataArgs>(adapterClass: AdapterStatic<any, any>): (metaArgs: T) => ClassDecorator {
  return function ResourceDecorator(metaArgs: T) {
    return (target: any) => {

      if (metaArgs.factory) {
        console.warn('Model#factory can not be set in @tdm/data');
        delete metaArgs.factory;
      }

      const TDMModel = TDMModelBase.factory(target);

      tdm.targetStore.registerTarget(target);

      const resourceClass = tdm.targetStore.getAdapter(adapterClass).resourceMetaClass;
      if (resourceClass) {
        tdm.BaseMetadata.create(resourceClass, metaArgs || {}, target);
      }
      tdm.targetStore.setResource(metaArgs, target);

      // check for properties that set the type to self (same class)
      // the class will point to the base class (target) that TDModel extends.
      // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
      tdm.targetStore.getTargetMeta(target)
        .getValues(tdm.PropMetadata)
        .forEach( p => {
          const desc = Object.getOwnPropertyDescriptor(p, 'type');

          if (desc && desc.configurable && tdm.isFunction(desc.get) && desc.get() === target) {
            Object.defineProperty(p, 'type', { configurable: true, value: TDMModel });
          }
        });

      tdm.targetStore.registerTarget(TDMModel);

      if (metaArgs.noBuild !== true) {
        const tMeta = tdm.targetStore.getTargetMeta(TDMModel);
        // default behaviour, register the first adapter, if multiple...
        if (!tMeta.activeAdapter) {
          tMeta.setActiveAdapter(adapterClass);
        }
      } else {
        tdm.targetStore.setReadyToBuild(TDMModel);
      }

      return TDMModel;
    };
  }
}

