import { PropertyContainer } from './prop-container';
import { PropMetadata } from '../metadata/meta-types';
import { BaseActiveRecord } from '../active-record/active-record-interfaces';

export interface MapperFactory {
  serializer(source: any): SerializeMapper;
  deserializer(source: any): DeserializeMapper;
}

export abstract class SerializeMapper {
  constructor(public source: BaseActiveRecord<any> | BaseActiveRecord<any>[]) {}

  abstract serialize(container: PropertyContainer): any;
}

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

  constructor(public source: any) {}

  abstract readonly isCollection: boolean;

  abstract next(): boolean;

  abstract  getKeys(): string[];

  abstract getValue(key: string, prop?: PropMetadata): any;
}
