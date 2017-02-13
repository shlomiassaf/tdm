import { AdapterStatic } from '../../core/interfaces';
import { AdapterError } from '../../core/errors';

import { internalMetadataStore as store } from './internal-metadata-store';
import { TargetAdapterMetadataStore } from './target-adapter-metadata-store';

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
export class ExternalMetadataStore {
  constructor() { /* TODO: ExternalMetadataStore is singleton, enforce? */ }

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
export const externalMetadataStore = new ExternalMetadataStore();
