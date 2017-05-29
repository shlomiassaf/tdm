import { tdm } from '@tdm/core';

import '@tdm/core/add/mapping';

import { TopLevel, ResourceObject, ResourceIdentifierObject } from './json-api';
import * as japiUtils from './json-api-utils';

const { targetStore } = tdm;

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 *
 */
export class JSONAPIDeserializeMapper extends tdm.DeserializeMapper {
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

  private get ref(): any | undefined {
    if (this.current) {
      return this.existing.get(this.uuid(this.current.type, this.current.id));
    }
  }

  constructor(public source: TopLevel, sourceType: any) {
    super(source, sourceType);

    if (! (this instanceof JSONAPIChildDeserializeMapper)) {
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

  getValue(key: string, prop?: tdm.PropMetadata): any | undefined {
    if (this.keys.att.indexOf(key) > -1) {
      return this.getAttrValue(key, prop);
    } else if (this.keys.rel.indexOf(key) > -1) {
      return this.getRelatedValue(key, prop);
    }
  }

  protected uuid(type: string, id: string): string {
    return `${type}-${id}`;
  }

  protected getAttrValue(key: string, prop?: tdm.PropMetadata): any {
    return this.current.attributes[key];
  }

  protected getRelatedValue(key: string, prop?: tdm.PropMetadata): any | undefined {
    const relObject = this.current.relationships[key];

    if (relObject && relObject.data) {
      if (Array.isArray(relObject.data)) {
        return relObject.data.map( rel => this.getIncluded(rel, prop) );
      } else {
        return this.getIncluded(relObject.data, prop);
      }
    }
  }

  protected getIncluded(rel: ResourceIdentifierObject, prop?: tdm.PropMetadata): any {

    const uuid = this.uuid(rel.type, rel.id);

    if (this.existing.has(uuid)) {
      return this.existing.get(uuid);
    }

    const included = japiUtils.findIncluded(this.source.included, rel) || rel as any;

    if (included) {
      const target: any = prop && targetStore.hasTarget(prop.type)
        ? prop.type
        : targetStore.findTarget(rel.type)
      ;

      const mapper = this.ref // event if no target we use ChildDes because the type can be found be "type" keys of child resources.
        ? new JSONAPIChildDeserializeMapper({ data: included, included: this.source.included }, target, this.existing)
        : jsonAPIMapper.deserializer({data: included}, target)
      ;

      // if target is none, a plain deserializer is used.
      return targetStore.deserialize(mapper);
    }
  }
}

export class JSONAPIChildDeserializeMapper extends JSONAPIDeserializeMapper {
  constructor(public source: TopLevel, sourceType: any, protected existing: Map<string, any>) {
    super(source, sourceType);
  }
}


export class JSONAPISerializeMapper extends tdm.SerializeMapper {
  protected cache: Map<string, ResourceObject>;
  private doc: TopLevel;

  serialize(container: tdm.PropertyContainer): TopLevel {

    if (!this.cache) {
      this.cache = new Map<string, ResourceObject>();
    }

    if (Array.isArray(this.source)) {
      this.doc = { data: [] as any, included: [] };
      this.doc.data = this.serializeCollection(this.source, this.doc, container);
    } else {
      this.doc = { data: {} as any, included: [] };
      this.doc.data = this.serializeObject(this.source, this.doc, container);
    }

    if ( (!(this instanceof JSONAPIChildSerializeMapper)) && this.cache.size > 0) {
      const includedArr = this.doc.included = [];
      const data: any = this.doc.data;
      const canInclude = Array.isArray(data)
        ? (item) => data.indexOf(item) === -1
        : (item) => item !== this.doc.data
      ;

      Array.from(this.cache.values())
        .forEach( toInclude => {
          if (!japiUtils.isIdentObject(toInclude) && canInclude(toInclude)) {
            includedArr.push(toInclude);
          }
        });
    }

    this.cleanDoc(this.doc, container);

    return this.doc;
  }

  private cleanDoc(doc: TopLevel, container: tdm.PropertyContainer): void {

    if (Array.isArray(doc.data)) {
      for (let i=0, len=doc.data.length; i<len; i++) {
        this.cleanResourceObject(doc.data[i], container)
      }
    } else if (doc.data && Object.keys(doc.data).length === 0) {
      delete doc.data;
    } else {
      this.cleanResourceObject(doc.data, container);
    }

    if (doc.included && doc.included.length === 0) {
      delete doc.included;
    }
  }

  private cleanResourceObject(obj: ResourceObject, container): void {
    if (obj) {
      if (obj.attributes) {
        delete obj.attributes[targetStore.getIdentityKey(container.target, 'outgoing')];
        if (Object.keys(obj.attributes).length === 0) {
          delete obj.attributes;
        }
      }

      if (obj.relationships && Object.keys(obj.relationships).length === 0) {
        delete obj.relationships;
      }
    }
  }

  private serializeObject(obj: any, doc: TopLevel, container: tdm.PropertyContainer): ResourceObject | ResourceIdentifierObject {
    const id = obj[targetStore.getIdentityKey(container.target)];
    const type = targetStore.getTargetName(container.target);

    const uuid = this.uuid(type, id);

    if (this.cache.has(uuid)) {
      return this.cache.get(uuid);
    }

    const data: ResourceObject = {
      id, type,
      attributes: {},
      relationships: {},
    };

    this.cache.set(uuid, data);

    const cb = (pMap: tdm.PoClassPropertyMap) => {
      const p = pMap.prop;
      if (p && p.relation) {
        const type = p.type.ref;
        const name = targetStore.getTargetName(type as any);

        if (!type || !name) {
          // TODO: handle without error
          throw new Error('Property Relation without type or name, try setting typeGetter in prop');
        }

        const isArray = p.relation && p.type.isArray && Array.isArray(obj[pMap.cls]);
        const idKey = targetStore.getIdentityKey(type as any);
        const createRel = (id: string) => ({ id, type: name });

        if (isArray) {
          const relList = [];
          data.relationships[pMap.cls] = { data: relList };
          obj[pMap.cls].forEach( item => {
            relList.push(createRel(item[idKey]));
            this.serializeChild(item, type)
          });

        } else {
          data.relationships[pMap.cls] = { data: createRel(obj[pMap.cls][idKey]) };
          this.serializeChild(obj[pMap.cls], type);
        }
      } else {
        const value = tdm.transformValueOut(obj[pMap.cls], p);
        data.attributes[pMap.obj] = new tdm.PlainSerializer().serialize(value);
      }
    };

    container.forEach(Object.keys(obj), cb);

    return data;
  }

  private uuid(type: string, id: string): string {
    return `${type}-${id}`;
  }

  private serializeChild(obj: any, type: any): void {
    targetStore.serialize(type, new JSONAPIChildSerializeMapper(obj, this.cache));
  }

  private serializeCollection(arr: any[], doc: TopLevel, container: tdm.PropertyContainer): Array<ResourceObject | ResourceIdentifierObject> {
    return arr.map( s => this.serializeObject(s, doc, container));
  }
}

export class JSONAPIChildSerializeMapper extends JSONAPISerializeMapper {
  constructor(source: any, protected cache: Map<string, ResourceObject>) {
    super(source);
  }
}


export const jsonAPIMapper: tdm.MapperFactory = {
  serializer(source: any): JSONAPISerializeMapper {
    return new JSONAPISerializeMapper(source);
  },
  deserializer(source: any, sourceType: any): JSONAPIDeserializeMapper {
    return new JSONAPIDeserializeMapper(source, sourceType);
  }
};
