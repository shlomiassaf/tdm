import { TDMModel, TransformDir, Constructor, tdm } from '@tdm/core';
import { AdapterStatic } from '../fw';

/**
 *
 * @public
 */
export class Store {

  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    Store.create(this);
  }


  getIdentityKey(target, direction?: TransformDir): string | undefined {
    return tdm.targetStore.getIdentityKey(target, direction);
  }

  hasTarget(target: any): boolean {
    return tdm.targetStore.hasTarget(target);
  }

  serialize(target: Constructor<any>, mapper: tdm.SerializeMapper): any {
    return tdm.targetStore.serialize(target, mapper);
  }

  /**
   * Deserialize and instance of "tdm.DeserializeMapper" into an instance of tge target supplied
   * @param target
   * @param mapper
   * @returns {any}
   */
  deserialize(mapper: tdm.DeserializeMapper): TDMModel<any> | TDMModel<any>[] | undefined {
    return tdm.targetStore.deserialize(mapper);
  }

  /**
   * Deserialize and instance of "tdm.DeserializeMapper" into a plain object (object literal)
   * @param mapper
   */
  deserializePlain(mapper: tdm.DeserializeMapper): any {
    return tdm.targetStore.deserializePlain(mapper);
  }


  /**
   * Search for a target registered in the repository by it's name.
   * @see ModelMetadataArgs#resName
   * @param name
   */
  findModel(name: string): any | undefined {
    return tdm.targetStore.findTarget(name);
  }

  getModelName(target: any): string | undefined {
    return tdm.targetStore.getTargetName(target);
  }

  /**
   * Marks mixins as part of the functionality of a target, in a specific adapter.
   * This will not apply the mixin, it's just metadata about he relation.
   * @param target
   * @param adapterClass
   * @param mixins
   */
  markMixins(target: any, adapterClass: AdapterStatic<any, any>, ...mixins: any[]): void {
    tdm.targetStore.registerMixins(target, adapterClass, ...mixins);
  }

  /**
   * Creates a new Store instance.
   * @param instance optional, used internally
   * @returns {Store}
   */
  static create(instance?: Store): Store {
    const store: Store = instance || Object.create(Store.prototype);


    return store;
  }
}

/**
 *
 * @public
 */
export const store = Store.create();
