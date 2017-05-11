import { TransformDir, Constructor, targetStore, SerializeMapper, DeserializeMapper } from '@tdm/core';
import { AdapterStatic, TDMModel } from '../fw';

/**
 *
 * @public
 */
export class Store {
  constructor() { /* TODO: ExternalMetadataStore is singleton, enforce? */ }

  getIdentityKey(target, direction?: TransformDir): string | undefined {
    return targetStore.getIdentityKey(target, direction);
  }

  hasTarget(target: any): boolean {
    return targetStore.hasTarget(target);
  }

  serialize(target: Constructor<any>, mapper: SerializeMapper): any {
    return targetStore.serialize(target, mapper);
  }

  /**
   * Deserialize and instance of "DeserializeMapper" into an instance of tge target supplied
   * @param target
   * @param mapper
   * @returns {any}
   */
  deserialize(mapper: DeserializeMapper): TDMModel<any> | TDMModel<any>[] | undefined {
    return targetStore.deserialize(mapper);
  }

  /**
   * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
   * @param mapper
   */
  deserializePlain(mapper: DeserializeMapper): any {
    return targetStore.deserializePlain(mapper);
  }


  /**
   * Search for a target registered in the repository by it's name.
   * @see ResourceMetadataArgs#name
   * @param name
   */
  findTarget(name: string): any | undefined {
    return targetStore.findTarget(name);
  }

  getName(target: any): string | undefined {
    return targetStore.getTargetName(target);
  }

  buildIfReady(target: any, adapterClass: AdapterStatic<any, any>): boolean {
    return targetStore.buildIfReady(target, adapterClass);
  }

  /**
   * Marks mixins as part of the functionality of a target, in a specific adapter.
   * This will not apply the mixin, it's just metadata about he relation.
   * @param target
   * @param adapterClass
   * @param mixins
   */
  markMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
    targetStore.registerMixins(target, adapterClass, ...mixins);
  }
}

/**
 *
 * @public
 */
export const store = new Store();
