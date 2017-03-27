import { isFunction, targetStore, PropMetadata } from '@tdm/transformation';
import { AdapterStatic, AdapterError } from '../fw';
import { ResourceMetadataArgs } from './meta-types';
import { activeRecordClassFactory, ActiveRecordCollection } from '../active-record';

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<T extends ResourceMetadataArgs>(adapterClass: AdapterStatic<any, any>): (def: T) => ClassDecorator {
  return function ResourceDecorator(def: T) {
    return (target: any) => {
      const TDModel = activeRecordClassFactory(target as any);

      // TODO: this needs to move outside of core
      // add a hook to `resource` so dev can do stuff before returning.
      // this is temp here to support angular CD
      const paramTypes = (Reflect as any).getOwnMetadata('design:paramtypes', target);
      (Reflect as any).defineMetadata('design:paramtypes', paramTypes, TDModel);

      if (def.factory) {
        console.warn('Transformable#factory can not be set in @tdm/core');
        delete def.factory;
      }

      targetStore.setResource(def, target);

      // check for properties that set the type to self (same class)
      // the class will point to the base class (target) that TDModel extends.
      // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
      targetStore.getTargetMeta(target)
        .getValues(PropMetadata)
        .forEach( p => {
          const desc = Object.getOwnPropertyDescriptor(p, 'type');

          if (desc && desc.configurable && isFunction(desc.get) && desc.get() === target) {
            Object.defineProperty(p, 'type', { configurable: true, value: TDModel });
          }
        });


      targetStore.registerTarget(TDModel);

      if (def.noBuild !== true) {
        const tMeta = targetStore.getTargetMeta(TDModel);
        // default behaviour, register the first adapter, if multiple...
        if (!tMeta.activeAdapter) {
          tMeta.setActiveAdapter(adapterClass);
        }
      } else {
        targetStore.setReadyToBuild(TDModel);
      }

      return TDModel;
    };
  }
}

