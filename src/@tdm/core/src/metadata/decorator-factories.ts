import { AdapterStatic, AdapterError } from '../core';
import { ActionMetadataArgs, ResourceMetadataArgs, decoratorInfo } from './meta-types';
import { ensureTargetIsType, isFunction } from '../utils';
import { internalMetadataStore } from './reflection/internal-metadata-store';
import { activeRecordClassFactory } from '../active-record';

export type StoreForValueFactory<T> = (def: T, propertyKey: PropertyKey) => any;


/**
 * A Factory for custom decorators used by Adapters/mapper etc to store data.
 *
 */
export function storeFor<T>(storeKey: any, metaKey: any, factory: StoreForValueFactory<T>): (def: T) => PropertyDecorator {
  return function ResourceStorePropertyDecorator(def: T) {
    return (target: Object, propertyKey: PropertyKey) => {
      internalMetadataStore
        .getTargetStore(ensureTargetIsType(target))
        .setCustom(storeKey, metaKey, factory(def, propertyKey));
    };
  }
}

/**
 * A Factory for Action property decorators, the returned decorator will automatically create a
 * relation between the target, adapterType and action.
 *
 * Actions are not registered until the resource is set.
 *
 * Actions are set based on the `adapterType` and target, i.e. a target can have multiple actions based
 * on the same name but different adapters.
 * @param adapterClass
 */
export function action<T extends ActionMetadataArgs<any>>(adapterClass: AdapterStatic<any, any>): (def: T) => any {
  return function ActionDecorator(def: T) {
    return (target: Object, propertyKey: PropertyKey, desc: any) => {
      internalMetadataStore.getAdapterStore(adapterClass).meta
        .addAction(ensureTargetIsType(target), def, decoratorInfo(target, propertyKey, desc));
    };
  }
}

/**
 * A Factory for Resource class decorators, the returned decorator will automatically register the
 * target & adapterType with the resource.
 * @param adapterClass
 */
export function resource<T extends ResourceMetadataArgs>(adapterClass: AdapterStatic<any, any>): (def: T) => ClassDecorator {
  if (!internalMetadataStore.hasAdapter(adapterClass)) {
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

      // check for properties that set the type to self (same class)
      // the class will point to the base class (target) that TDModel extends.
      // this is fine if the user didn't set `typeGetter`, if he did we get TDModel
      internalMetadataStore.getTargetStore(target)
        .getProps()
        .forEach( p => {
          const desc = Object.getOwnPropertyDescriptor(p, 'type');

          if (desc && desc.configurable && isFunction(desc.get) && desc.get() === target) {
            Object.defineProperty(p, 'type', { configurable: true, value: TDModel });
          }
        });

      const adapterStore = internalMetadataStore.setTargetAndAdapter(TDModel, adapterClass, def);

      if (def.noBuild !== true) {
        adapterStore.build();
      } else {
        internalMetadataStore.setReadyToBuild(TDModel);
      }

      return TDModel;
    };
  }
}

