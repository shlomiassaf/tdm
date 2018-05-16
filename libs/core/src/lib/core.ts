import { directMapper, TDMModelBase } from '@tdm/core/tdm';

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
  DirectDeserializeMapper
} from '@tdm/core/tdm';

export { Type, Prop, Exclude, Relation, Identity } from './decorators';

import './add/target-metadata';

// public serialize / deserialize functions
import { Constructor, MapperFactory, targetStore } from '@tdm/core/tdm';

/**
 * Serialize a class instance into a plain object.
 * @param mapper
 * @param instance
 * @param type optional, if not set taken from instance.constructor
 * @returns
 */
export function serialize<T, Z>(
  mapper: MapperFactory,
  instance: T,
  type?: Z & Constructor<T>
): any {
  return targetStore.serialize(
    type || (instance.constructor as any),
    mapper.serializer(instance)
  );
}

/**
 * Automatically serialize an instance.
 * This method will serialize an instance by first trying to locate the target using the `constructor` function.
 * If a target is found and if it's a model target (i.e. ModelMetadata) it will try to get the mapper assign for that
 * model.
 *
 * If no target, model or mapper was found it will use the fallbackMapper mapper provided, or `directMapper`
 * if no fallback is provided provided.
 *
 * Note that when provided a fallback mapper, make sure it is able to serialize unknown targets. (plain objects)
 */
export function autoSerialize(
  instance: any,
  fallbackMapper: MapperFactory = directMapper
): any {
  const tMeta = targetStore.getTargetMeta(<any>instance.constructor);
  const mapper =
    (tMeta && tMeta.hasModel && tMeta.model().mapper) || fallbackMapper;
  return serialize(mapper, instance);
}

/**
 * De-serialize a plain object into a the provided instance or, when no instance is provided, to a new instance.
 */
export function deserialize<T, Z>(
  mapper: MapperFactory,
  plainObject: any,
  type: Z & Constructor<T>,
  instance?: any
): T {
  return targetStore.deserialize(
    mapper.deserializer(plainObject, type),
    instance
  );
}

/**
 * Automatically de-serialize an object to/into an instance.
 * This method will de-serialize an object by first trying to locate a model (i.e. ModelMetadata) for the target.
 * If a model is found it will try to get the mapper assign for that model.
 *
 * If no model or mapper was found it will use the fallbackMapper mapper provided, or `directMapper`
 * if no fallback is provided provided.
 *
 */
export function autoDeserialize<T, Z>(
  plainObject: any,
  type: Z & Constructor<T>,
  instance: any = null,
  fallbackMapper: MapperFactory = directMapper
): T {
  const tMeta = targetStore.getTargetMeta(type);
  const mapper =
    (tMeta && tMeta.hasModel && tMeta.model().mapper) || fallbackMapper;
  return deserialize(mapper, plainObject, type, instance);
}

TDMModelBase.clone = function(
  resource: any,
  mapperFactory: MapperFactory = directMapper
) {
  return autoDeserialize(
    autoSerialize(resource, mapperFactory),
    <any>resource.constructor,
    null,
    mapperFactory
  );
};
