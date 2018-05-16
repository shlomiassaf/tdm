import {
  targetStore,
  TDMModel,
  TransformDir,
  Constructor,
  SerializeMapper,
  DeserializeMapper
} from '@tdm/core/tdm';
import { AdapterStatic } from '../fw';

export class Store {
  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    Store.create(this);
  }

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
   * @returns
   */
  deserialize(
    mapper: DeserializeMapper
  ): TDMModel<any> | TDMModel<any>[] | undefined {
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
   * @see ModelMetadataArgs#resName
   * @param name
   */
  findModel(name: string): any | undefined {
    return targetStore.findTarget(name);
  }

  getModelName(target: any): string | undefined {
    return targetStore.getTargetName(target);
  }

  /**
   * Marks mixins as part of the functionality of a target, in a specific adapter.
   * This will not apply the mixin, it's just metadata about he relation.
   * @param target
   * @param adapterClass
   * @param mixins
   */
  markMixins(
    target: any,
    adapterClass: AdapterStatic<any, any>,
    ...mixins: any[]
  ): void {
    targetStore.registerMixins(target, adapterClass, ...mixins);
  }

  /**
   * Creates a new Store instance.
   * @param instance optional, used internally
   * @returns
   */
  static create(instance?: Store): Store {
    const store: Store = instance || Object.create(Store.prototype);
    return store;
  }
}

export const store = Store.create();
