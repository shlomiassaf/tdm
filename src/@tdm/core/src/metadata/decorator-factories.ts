import { AdapterStatic, AdapterError } from '../core';
import { ActionMetadataArgs, ResourceMetadataArgs, decoratorInfo } from './meta-types';
import { ensureTargetIsType, getProtoChain } from '../utils';
import { internalMetadataStore, externalMetadataStore } from './reflection';
import { activeRecordClassFactory } from '../active-record';

export type StoreForValueFactory<T> = (def: T, propertyKey: PropertyKey) => any;


/**
 * A Factory for custom decorators used by Adapters to store data.
 *
 */
export function storeFor<T>(adapterClass: AdapterStatic<any, any>, metaKey: any, factory: StoreForValueFactory<T>): (def: T) => PropertyDecorator {
  return function ResourceStorePropertyDecorator(def: T) {
    return (target: Object, propertyKey: PropertyKey) => {
      const adapterStore = internalMetadataStore
        .getTargetAdapterStore(ensureTargetIsType(target), adapterClass);

      const coll = adapterStore.custom.get(metaKey) || new Set<any>();
      coll.add(factory(def, propertyKey));
      adapterStore.custom.set(metaKey, coll);
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

      const targetStore = internalMetadataStore.setTarget(TDModel);
      const adapterStore = targetStore.getAdapterStore(adapterClass);

      adapterStore.registerResource(def);

      // communicate with the mixin factories
      // the flags are required to support non-extending mixin.
      const protoChain = getProtoChain(target);
      const ready = protoChain.findIndex( p => externalMetadataStore.isReady(p, adapterClass) );

      if (ready > -1) { // ready means we're decorating a class that extends a mixin, the mixin set readiness
        adapterStore.build();

        // if the ready was set on sub class we must "unready" it, so re-use of that subclass will work.
        ready > 0 && externalMetadataStore.toggleReady(protoChain[ready], adapterClass);

      } else { // not extending, using const & type.
        externalMetadataStore.toggleReady(TDModel, adapterClass);
      }

      return TDModel;
    };
  }
}

