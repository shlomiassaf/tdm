export {
  TransformationError,
  Constructor,
  TransformDir,
  TransformFn,
  TransformStrategy
} from './fw';

export {
  PropMetadataArgs,
  RelationMetadataArgs,
  ExcludeMetadataArgs,
  TransformableMetadataArgs
} from './metadata';

export { directMapper } from './mapping';

export { Factory, Identity, SetName } from './decorators';

export { Prop } from './add/prop';
export { Exclude } from './add/exclude';
export { Relation } from './add/relation';
export { Transformable } from './add/transformable';

// TODO: this is for node support, since esm can be used on node (cant require @tdm/transformation/ext)
//        this introduces noise to the main import...
export * from './ext';

// public serialize / deserialize functions
import { Constructor } from './fw';
import { MapperFactory } from './mapping';
import { targetStore } from './metadata';

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
