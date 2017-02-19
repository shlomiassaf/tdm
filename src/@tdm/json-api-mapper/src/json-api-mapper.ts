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

import { TopLevel, ResourceObject, ResourceIdentifierObject, RelationshipObject } from './json-api';
import * as japiUtils from './json-api-utils';

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 *
 */
export class JSONAPIDeserializeMapper extends DeserializeMapper {
  setRef(value: any): void {
    if (this.current) {
      this.existing.set(this.uuid(this.current.type, this.current.id), value);
    }
  }

  readonly isCollection: boolean;

  protected idx: number = -1;
  protected current: ResourceObject;
  protected keys: { att: string[], rel: string[] };
  protected existing: Map<string, any>;

  get ref(): any | undefined {
    if (this.current) {
      return this.existing.get(this.uuid(this.current.type, this.current.id));
    }
  }


  constructor(public source: TopLevel) {
    super(source);

    if (!this.existing) {
      this.existing = new Map<string, any>();
    }

    this.isCollection = Array.isArray(source.data);
    if (!this.isCollection) {
      this.current = this.source.data as any;
      this.keys = japiUtils.getResourceKeys(this.current);
    }
  }

  getIdentity(): string {
    return this.current.id;
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
  }

  protected uuid(type: string, id: string): string {
    return `${type}-${id}`;
  }

  protected getAttrValue(key: string, prop?: PropMetadata): any {
    return this.current.attributes[key];
  }

  protected getRelatedValue(key: string, prop?: PropMetadata): any | undefined {
    const relObject = this.current.relationships[key];

    if (relObject && relObject.data) {
      if (Array.isArray(relObject.data)) {
        return relObject.data.map( rel => this.getIncluded(rel, prop) );
      } else {
        return this.getIncluded(relObject.data, prop);
      }
    }
  }

  protected getIncluded(rel: ResourceIdentifierObject, prop?: PropMetadata): any {

    const uuid = this.uuid(rel.type, rel.id);

    if (this.existing.has(uuid)) {
      return this.existing.get(uuid);
    }

    const included = japiUtils.findIncluded(this.source.included, rel) || rel as any;

    if (included) {
      const mapper = this.ref
        ? new JSONAPIChildDeserializeMapper({ data: included, included: this.source.included }, this.existing)
        : jsonAPIMapper.deserializer({data: included})
      ;

      const target: any = (prop && prop.type) || targetStore.findTarget(rel.type);
      return target
        ? targetStore.deserialize(target, mapper)
        : targetStore.deserializePlain(mapper)
      ;
    }
  }
}

export class JSONAPIChildDeserializeMapper extends JSONAPIDeserializeMapper {
  constructor(public source: TopLevel, protected existing: Map<string, any>) {
    super(source);
  }
}


export class JSONAPISerializeMapper extends SerializeMapper {

  serialize(container: PropertyContainer): any {
    if (Array.isArray(this.source)) {
      return this.serializeCollection(this.source, container);
    } else {
      return this.serializeObject(this.source, container);
    }
  }

  private serializeObject(obj: any, container: PropertyContainer): TopLevel {
    const data: ResourceObject = {
      id: this.source[targetStore.getIdentityKey(container.target)],
      type: targetStore.getName(container.target),
      attributes: {},
      relationships: {},
    };

    const doc: TopLevel = {
      data
    };
    const cb = (prop: PoClassPropertyMap) => {
      if (!prop.prop || !prop.prop.rel) {
        data.attributes[prop.obj] = transformValueOut(this.source[prop.cls], prop.prop)
      } else {
        // TODO: allow forwardRef for type (circular deps)
        const type = prop.prop.type;
        const name = targetStore.getName(type);
        const rel: RelationshipObject = {
          data: prop.prop.rel === 'hasMany' // TODO: check source is arr as well
            ? transformValueOut(this.source[prop.cls], prop.prop).map( v => ({ type: name, id: v[targetStore.getIdentityKey(type)] }) )
            : { type: name, id: transformValueOut(this.source[prop.cls], prop.prop)[targetStore.getIdentityKey(type)] }
        };

        data.relationships[prop.obj] = rel;
      }
    };

    container.forEach(Object.keys(obj), cb);

    if (Object.keys(data.attributes).length === 0) {
      delete data.attributes;
    }
    if (Object.keys(data.relationships).length === 0) {
      delete data.relationships;
    }

    return doc;
  }

  private serializeCollection(arr: any[], container: PropertyContainer): TopLevel {
    const doc: TopLevel = {
      data: []
    };
    arr.map( s => this.serializeObject(s, container));
    return doc;
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
