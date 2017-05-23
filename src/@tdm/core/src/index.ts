export * from './fw/pub_index';

export * from './metadata/pub_index';

// export plugin api, these are objects intended for internal use by extending plugins
import * as tdm from './tdm';
export { tdm };

// import/export order is important to prevent null on circular dependencies.
export { Model } from './add/model';
import './add/target-store';

export * from './mapping/pub_index';

export { Prop, Exclude, Relation, Identity } from './decorators';

// public serialize / deserialize functions
import { Constructor } from './fw';
import { MapperFactory } from './mapping';
import { targetStore } from './metadata';

export { TDMCollection, TDMModel, TDMModelBase } from './model';
/**
 * Serialize a class instance into a plain object.
 * @param mapper
 * @param instance
 * @param type optional, if not set taken from instance.constructor
 * @returns {any}
 */
export function serialize<T, Z>(mapper: MapperFactory, instance: T, type?: Z & Constructor<T>): any {
  return targetStore.serialize(type || instance.constructor as any, mapper.serializer(instance));
}

/**
 * De-serialize a plain object into a new instance of a type
 * @param mapper
 * @param plainObject
 * @param type
 * @returns {any|any[]|undefined}
 */
export function deserialize<T, Z>(mapper: MapperFactory, plainObject: any, type: Z & Constructor<T>): T {
  return targetStore.deserialize(mapper.deserializer(plainObject, type));
}
