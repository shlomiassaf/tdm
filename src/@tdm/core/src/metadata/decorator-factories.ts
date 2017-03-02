import { isFunction, targetStore, PropMetadata } from '@tdm/transformation';
import { AdapterStatic, AdapterError } from '../core/index';
import { ResourceMetadataArgs } from './meta-types';
import { activeRecordClassFactory } from '../active-record';
import { ActiveRecordCollection } from '../active-record/active-record-collection';

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<T extends ResourceMetadataArgs>(adapterClass: AdapterStatic<any, any>): (def: T) => ClassDecorator {
  if (!targetStore.hasAdapter(adapterClass)) {
    throw AdapterError.notRegistered(adapterClass);
  }

  return function ResourceDecorator(def: T) {
    return (target: any) => {
      const TDModel = activeRecordClassFactory(target as any);

      // TODO: this needs to move outside of core
      // add a hook to `resource` so dev can do stuff before returning.
      // this is temp here to support angular CD
      const paramTypes = (Reflect as any).getOwnMetadata('design:paramtypes', target);
      (Reflect as any).defineMetadata('design:paramtypes', paramTypes, TDModel);

      if (!def.factory) {
        def.factory = (isColl: boolean) => isColl ? new ActiveRecordCollection() : new TDModel();
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

      const adapterStore = targetStore.getTargetAdapterStore(TDModel, adapterClass, true);
      adapterStore.isAbstract = false;

      if (def.noBuild !== true) {
        adapterStore.build();
      } else {
        targetStore.setReadyToBuild(TDModel);
      }

      return TDModel;
    };
  }
}

