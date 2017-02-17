import { BaseActiveRecord } from '../active-record/active-record-interfaces';
import { AdapterStatic } from '../core/interfaces';
import { AdapterError } from '../core/errors';

import { internalMetadataStore as store } from './reflection/internal-metadata-store';
import { TargetAdapterMetadataStore } from './reflection/target-adapter-metadata-store';
import { DeserializeMapper } from '../mapping';
import { TargetController } from '../core';
import { Constructor, isString } from '../utils';

/**
 * Returns the adapter store for a target class & Adapter class.
 * If target or adapter are not registered will throw.
 * @param target
 * @param adapterClass
 * @returns {TargetAdapterMetadataStore}
 */
function getAdapterStore(target: any, adapterClass: AdapterStatic<any, any>): TargetAdapterMetadataStore {
  if (!store.hasAdapter(adapterClass)) {
    throw AdapterError.notRegistered(adapterClass);
  }
  return store.getTargetAdapterStore(target, adapterClass);
}

/**
 *
 * @public
 */
export class TargetStore {
  constructor() { /* TODO: ExternalMetadataStore is singleton, enforce? */ }

  getIdentityKey(target): string | undefined {
    const targetStore = store.getTargetStore(target, false);
    if (targetStore) {
      return targetStore.getIdentity();
    }
  }

  deserialize(target: Constructor<any> | string, mapper: DeserializeMapper): BaseActiveRecord<any> | BaseActiveRecord<any>[] | undefined {
    if (isString(target)) {
      return this.deserialize(this.findTarget(target), mapper);
    } else {
      const targetStore = store.getTargetStore(target, false);
      if (targetStore) {
        return TargetController.deserialize(targetStore, mapper);
      }
    }
  }

  /**
   * Search for a target registered in the repository by it's name.
   * @see ResourceMetadataArgs#name
   * @param name
   */
  findTarget(name: string): any | undefined {
    return store.findTarget(name);
  }

  getName(target: any): string | undefined {
    const ts = store.getTargetStore(target, false);
    if (ts) {
      return ts.name;
    }
  }

  buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean {
    return store.buildIfReady(target, adapterClass);
  }

  /**
   * Marks mixins as part of the functionality of a target, in a specific adapter.
   * This will not apply the mixin, it's just metadata about he relation.
   * @param target
   * @param adapterClass
   * @param mixins
   */
  markMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
    const adapterStore = getAdapterStore(target, adapterClass);
    mixins.forEach( m => adapterStore.mixins.add(m) );
  }
}

/**
 *
 * @public
 */
export const targetStore = new TargetStore();
