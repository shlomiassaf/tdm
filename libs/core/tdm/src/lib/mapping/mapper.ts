import { PropertyContainer } from './prop-container';
import { PropMetadata } from '../metadata';
import { PlainObjectMapper } from './plain-object-mapper';

export interface MapperFactory {
  serializer(source: any, plainMapper?: PlainObjectMapper): SerializeMapper;
  deserializer(
    source: any,
    sourceType: any,
    plainMapper?: PlainObjectMapper
  ): DeserializeMapper;
}

/**
 * Represents the contract a Serializer needs to implements.
 * A Serializer should handle both a collection and a single item and should be able to identify them.
 *
 * Since Serialization transforms a KNOWN document to an UNKNOWN document the serializer is gets
 * free control over the output.
 * The library provides the instance and a container of property metadata for the instance and the
 * serializer should do the rest.
 *
 * Since the output schema is now known to the library the whole process is managed by the serializer.
 * The library helps with metadata.
 */
export abstract class SerializeMapper {
  protected plainMapper: PlainObjectMapper;

  constructor(public source: any | any[], plainMapper?: PlainObjectMapper) {
    this.plainMapper = plainMapper || new PlainObjectMapper();
  }

  abstract serialize(container: PropertyContainer): any;
}

/**
 * Represents the contract a Deserializer needs to implements.
 * A Deserializer should handle both a collection and a single item and should be able to identify them.
 *
 * Since deserialization transforms UNKNOWN document to a KNOWN document the deserializer must implement
 * a specific interface so the library can normalize an unknown document into a known one.
 *
 * If a collection is found the deserializer move to an iteration mode via the next() method.
 * In a collection, the cursor must not point on an item until the first call to next().
 * In a single item next() is never used so the cursor must point to the item provided.
 *
 * The deserialization process:
 *   - Initialize the item (constructor) and identify the type (collection/single)
 *   - Find and return the keys for the current item (getKeys() done for each item)
 *   - Get the value for a given key
 *
 *
 * The Deserializer is responsible for deserializing the whole document, including nested items and
 * related items. It is therefor recommended to keep a cache of generated items if the document is expected to have nested resources.
 * Caching logic can be implemented by implementing the `setRef()` and `getIdentity()` methods and
 * using a child deserializer class or a count flag.
 *
 * > See `directMapper` and `@tdm/json-api-mapper` for implementation example.
 *
 */
export abstract class DeserializeMapper {
  /**
   * Optional, if set will be used to get the identity value.
   * If the identity is part of the properties it will be sent through getValue(), but if not this
   * function should be implemented. e.g. JSON API has an ID that is not part of the object attributes.
   */
  getIdentity?(): any;

  /**
   * Optional, if set will be used to inject a reference object to identify resources.
   * If a mapper handles a cyclic document where resources reference other resources within the same
   * document (e.g. JSONAPI) the mapper can use this reference along with identifiers on the document/resource
   * to return objects that it already created.
   * @param value
   */
  setRef?(value: any): void;

  /**
   * If true will iterate excluded items when calling getValue.
   * See PropertyContainer.forEachRaw
   */
  raw?: boolean;

  protected plainMapper: PlainObjectMapper;

  constructor(
    public source: any,
    public sourceType: any,
    plainMapper?: PlainObjectMapper
  ) {
    this.plainMapper = plainMapper || new PlainObjectMapper();
  }

  /**
   * A value stating if the input is a collection or not.
   * The Deserializer is responsible to identify it from the document
   */
  abstract readonly isCollection: boolean;

  /**
   * If a collection, Moves the current item to the next item in the collection and returns true.
   * If not a collection or if the enumerator is at the end of the collection or the collection is empty, returns false.
   */
  abstract next(): boolean;

  /**
   * Return the keys for the current item, this call is guaranteed to execute once per item.
   * In the event of a collection and if you are certain that each item in the collection has the same properties
   * you can implement a cache.
   *
   * It is not recommended to alter the keys, key transformation is governed by the library and set
   * by the definition on the models, i.e. Naming transformation strategy and PropMetadata#alias.
   */
  abstract getKeys(): string[];

  /**
   * Return the value for a given key.
   *
   * The keys sent to `getValue()` are not guaranteed to match the keys returned from `getKeys()`.
   * Some keys might get omitted, some might change and the order might differ.
   *
   * A `PropMetadata` object is supplied, if exists.
   * If the transformation strategy is exclusive a PropMetadata is always supplied otherwise, only for properties that have a @Prop decorator.
   *
   * Use the supplied `PropMetadata` to identify relationships, foreign keys, etc...
   *
   * @param key
   * @param prop
   */
  abstract getValue(key: string, prop?: PropMetadata): any;
}
