export {
  // fw
  errors,
  Errors,
  Constructor,
  TransformDir,
  TransformFn,
  TransformStrategy,
  NamingStrategyConfig,


  // metadata
  ModelMetadataArgs,
  TypeDefinition,
  TypeMetadataArgs,
  PropMetadataArgs,
  RelationMetadataArgs,
  ExcludeMetadataArgs,

  // here was tdm
  TDMCollection,
  TDMModel,
  TDMModelBase,

  // add/model
  Model,

  // mapping
  directMapper,
  TransformationError,
  DirectSerializeMapper,
  DirectDeserializeMapper,

} from '@tdm/core/tdm';

export { Type, Prop, Exclude, Relation, Identity } from './decorators';

import './add/target-metadata';

// public serialize / deserialize functions
import {
  Constructor,
  MapperFactory,
  targetStore
} from '@tdm/core/tdm';


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
