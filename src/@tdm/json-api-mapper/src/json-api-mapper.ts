import {
  MapperFactory,
  DeserializeMapper,
  SerializeMapper,
  PropertyContainer,
  PoClassPropertyMap,
  transformValueOut,
  PropMetadata,
  targetStore
} from '@tdm/core';

import { TopLevel, ResourceObject, ResourceIdentifierObject } from './json-api';
import * as japiUtils from './json-api-utils';

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 *
 */
export class JSONAPIDeserializeMapper extends DeserializeMapper {
  readonly isCollection: boolean;

  private idx: number = -1;
  private current: ResourceObject;
  private keys: { att: string[], rel: string[] };

  constructor(public source: TopLevel) {
    super(source);

    this.isCollection = Array.isArray(source.data);
    if (!this.isCollection) {
      this.current = this.source.data as any;
      this.keys = japiUtils.getResourceKeys(this.current);
    }
  }

  next(): boolean {
    if (this.isCollection) {
      this.current = this.source.data[++this.idx];
      if (this.current) {
        this.keys = japiUtils.getResourceKeys(this.current);
        return true;
      }
    }
    return false;
  }

  getKeys(): string[] {
    return this.keys.att.concat(this.keys.rel);
  }

  getValue(key: string, prop?: PropMetadata): any | undefined {
    if (this.keys.att.indexOf(key) > -1) {
      return this.getAttrValue(key, prop);
    } else if (this.keys.rel.indexOf(key) > -1) {
      return this.getRelatedValue(key, prop);
    }
      // relationship
      // search included, if found return serialized.
      // if not in included, serialize only with id (need to set based on identity)

      // Make sure to return array, if this is the case...

      // this requires a refactor, the TargetStore should allow serializing/deserializing based on Target
      // this must happen within the deserializer since JSONAPI detailed implementation is not known
      // to the invoker. (i.e.: { type: 'Person', id: 5 } is JSONAPI specific schema)
  }

  private getAttrValue(key: string, prop?: PropMetadata): any {
    return this.current.attributes[key];
  }

  private getRelatedValue(key: string, prop?: PropMetadata): any | undefined {
    const relObject = this.current.relationships[key];

    if (relObject && relObject.data) {
      if (Array.isArray(relObject.data)) {
        return relObject.data.map( rel => this.getIncluded(rel, prop) );
      } else {
        return this.getIncluded(relObject.data, prop);
      }
    }
  }

  private getIncluded(rel: ResourceIdentifierObject, prop?: PropMetadata): any {
    const included = japiUtils.findIncluded(this.source.included, rel) || {};

    let target: any = (prop && prop.type) || targetStore.findTarget(rel.type);
    const ident = (target && targetStore.getIdentityKey(target)) || 'id';

    included[ident] = rel.id;

    return japiUtils.findIncluded(this.source.included, rel) || rel;
  }
}

export class JSONAPISerializeMapper extends SerializeMapper {
  serialize(container: PropertyContainer): any {
    const target: any = {};

    const cb = (prop: PoClassPropertyMap) => target[prop.obj] = transformValueOut(this.source[prop.cls], prop.prop);

    container.forEach(Object.keys(this.source), cb);

    return target;
  }
}

export const jsonAPIMapper: MapperFactory = {
  serializer(source: any): JSONAPISerializeMapper {
    return new JSONAPISerializeMapper(source);
  },
  deserializer(source: any): JSONAPIDeserializeMapper {
    return new JSONAPIDeserializeMapper(source);
  }
};
