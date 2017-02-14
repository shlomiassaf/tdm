import { AdapterStatic } from '../../core/interfaces';
import { TargetMetadataStore } from './target-metadata-store';
import { TargetAdapterMetadataStore } from './target-adapter-metadata-store';
import { AdapterMetadataStore } from './adapter-metadata-store';
import { ResourceMetadataArgs } from '../meta-types/resource';


/**
 * Metadata store for internal metadata.
 * e.g.: AdapterMetadata etc...
 *
 * @internal
 */
export class InternalMetadataStore {
  private adapters = new Map<AdapterStatic<any, any>, AdapterMetadataStore>();
  private targets = new Map<any, TargetMetadataStore>();
  private readyToBuild = new Set<any>();
  private targetNames = new Map<string, TargetAdapterMetadataStore>();

  constructor() {
    // TODO: InternalMetadataStore is singleton, enforce?
  }

  /**
   * Add a target to the store
   * @param target
   * @returns {undefined|TargetMetadataStore}
   */
  setTarget(target: any): TargetMetadataStore {
    if (this.targets.has(target)) {
      throw new Error('Target class already exists');
    } else {
      return this.targets.set(target, new TargetMetadataStore(target)).get(target);
    }
  }

  setTargetAndAdapter(target: any, adapterClass: AdapterStatic<any, any>, def: ResourceMetadataArgs): TargetAdapterMetadataStore {
    const adapterStore = this.setTarget(target).getAdapterStore(adapterClass, true);
    adapterStore.registerResource(def);
    this.targetNames.set(def.name, adapterStore);
    return adapterStore;
  }

  /**
   * Search for a target registered in the repository by it's name.
   * @see ResourceMetadataArgs#name
   * @param name
   */
  findTarget(name: string): any {
    const adapterStore = this.targetNames.get(name);
    if (adapterStore) {
      return adapterStore.target;
    }
  }

  setReadyToBuild(target: any): void {
    if (!this.readyToBuild.has(target)) {
      this.readyToBuild.add(target);
    }
  }

  buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean {
    if (this.readyToBuild.has(target)) {
      const adapterStore = this.getTargetAdapterStore(target, adapterClass, false);
      if (adapterStore) {
        this.readyToBuild.delete(target);
        adapterStore.build();
        return true;
      }
    }
    return false;
  }

  getTargetStore(target: any, createIfMissing: boolean = true): TargetMetadataStore | undefined {
    return this.targets.get(target) || (createIfMissing ? this.setTarget(target) : undefined);
  }

  getTargetAdapterStore(target: any, adapterClass: AdapterStatic<any, any>, createIfMissing: boolean = true): TargetAdapterMetadataStore | undefined {
    return this.getTargetStore(target, createIfMissing).getAdapterStore(adapterClass, createIfMissing);
  }

  getAdapterStore(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore {
    return this.adapters.get(adapterClass) || this.setAdapter(adapterClass);
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.adapters.has(adapterClass);
  }

  private setAdapter(adapterClass: AdapterStatic<any, any>): AdapterMetadataStore {
    if (this.adapters.has(adapterClass)) {
      throw new Error('Adapter class already exists');
    } else {
      return this.adapters.set(adapterClass, new AdapterMetadataStore(adapterClass)).get(adapterClass);
    }
  }
}

/**
 * Metadata store for internal metadata.
 * e.g.: AdapterMetadata etc...
 *
 * @internal
 */
export const internalMetadataStore = new InternalMetadataStore();
