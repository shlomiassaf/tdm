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
  constructor(public source: any) {}

  abstract readonly isCollection: boolean;

  abstract next(): boolean;

  abstract  getKeys(): string[];

  abstract getValue(key: string, prop?: PropMetadata): any;
}
