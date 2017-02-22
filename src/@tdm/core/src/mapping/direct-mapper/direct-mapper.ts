import { PropMetadata } from '../../metadata/meta-types';
import { MapperFactory, DeserializeMapper, SerializeMapper } from '../mapper';
import { PropertyContainer, PoClassPropertyMap, transformValueOut } from '../prop-container';
import { targetStore } from "../../metadata/target-store";
import { PlainSerializer, isPrimitive } from '../../utils';

class DualKeyMap {
  private map = new Map<any, Map<string, any>>();

  has(type: any, id: string): boolean {
    const t = this.map.get(type);
    return t ? t.has(id) : false;
  }

  get(type: any, id: string): any {
    const t = this.map.get(type);
    return t && t.get(id);
  }

  set(type: any, id: string, value: any): void {
    const t = this.map.get(type) || new Map<string, any>();
    t.set(id, value);
    this.map.set(type, t);
  }
}

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 * This mapper does not support non primitive id's
 */
export class DirectDeserializeMapper extends DeserializeMapper {

  setRef(value: any): void {
    if (this.current) {
      this.existing.set(this.sourceType, this.getIdentity(), value);
    }
  }

  readonly isCollection: boolean;

  protected existing: DualKeyMap;
  private idx: number = -1;
  private current: any;
  private identity: string;

  private get ref(): any | undefined {
    if (this.current) {
      return this.existing.get(this.sourceType, this.getIdentity());
    }
  }

  constructor(source: any, sourceType: any) {
    super(source, sourceType);

    if (! (this instanceof DirectChildDeserializeMapper)) {
      this.existing = new DualKeyMap();
    }

    this.identity = targetStore.getIdentityKey(this.sourceType, 'incoming');

    this.isCollection = Array.isArray(source);
    if (!this.isCollection) {
      this.current = this.source;
    }
  }

  getIdentity(): string {
    return this.current[this.identity];
  }

  next(): boolean {
    if (this.isCollection) {
      this.current = this.source[++this.idx];
      return !!this.current;
    } else {
      return false;
    }
  }

  getKeys(): string[] {
    return Object.keys(this.current);
  }

  getValue(key: string, prop?: PropMetadata): any {
    let value = this.current[key];

    if (prop) {
      // The adapter has the responsibility to manage relationships.
      // It doesn't care about key matching (e.g. key in property customer_id but property is customer)
      // it get's a value and the property to assign to, the adapter should check if the value it got
      // was an id or an object.


      // this relationship handling logic makes this whole adapter support only primitive ID properties.
      // if we have primitives we treat them as id's and create an object.
      // later we wil check if this value is in cache, if not create it.
      /// if its not a primitive, it will process as a full object inlcuded in the payload.
      if (prop.rel === 'belongsTo' && isPrimitive(value)) {
        value = { [targetStore.getIdentityKey(prop.type, 'incoming')]: value };
      }

      if (targetStore.hasTarget(prop.type)) {
        return this.getCache(prop.type, value) || this.deserialize(value, prop.type);
      }
    }

    return value;
  }

  private deserialize(value: any, type: any): any {

    const mapper = this.ref
        ? new DirectChildDeserializeMapper(value, type, this.existing)
        : directMapper.deserializer(value, type)
      ;

    return targetStore.deserialize(mapper);
  }

  private getCache(type: any, value: any): any | undefined {
    const idKey = targetStore.getIdentityKey(type, 'incoming');
    const idVal = idKey && value[idKey];
    if (idVal) {
      return this.existing.get(type, idVal)
    }
  }

}

export class DirectChildDeserializeMapper extends DirectDeserializeMapper {
  constructor(source: any, sourceType: any, protected existing: DualKeyMap) {
    super(source, sourceType);
  }
}



export class DirectSerializeMapper extends SerializeMapper {
  protected cache: Map<any, any>;
  private plainSer = new PlainSerializer();

  serialize(container: PropertyContainer): any {

    if (!this.cache) {
      this.cache = new Map<any, any>();
    }

    if (Array.isArray(this.source)) {
      return this.serializeCollection(this.source, container);
    } else {
      return this.serializeObject(this.source, container);
    }
  }

  private serializeObject(obj: any, container: PropertyContainer): any {
    const data: any = {};

    const cb = (prop: PoClassPropertyMap) => {
      if (prop.prop && targetStore.hasTarget(prop.prop.type)) {
        const type: any = prop.prop.type;
        if (prop.prop.rel === 'belongsTo') {
          const idKey = targetStore.getIdentityKey(type);
          // if the rel points to a different fk property name, @tdm will make sure prop.obj is that fk.
          data[prop.obj] = obj[prop.cls][idKey];
        } else {
          data[prop.obj] = targetStore.serialize(type, new DirectChildSerializeMapper(obj[prop.cls], this.cache))
        }
      } else {
        const newVal = this.plainSer.serialize(transformValueOut(obj[prop.cls], prop.prop));
        data[prop.obj] = newVal;
      }
    };

    container.forEach(Object.keys(obj), cb);

    const idKey = targetStore.getIdentityKey(container.target);
    if (idKey !== targetStore.getIdentityKey(container.target, 'outgoing')) {
      delete data[idKey];
    }

    return data;
  }

  private serializeCollection(arr: any[], container: PropertyContainer): any[] {
    return arr.map( s => this.serializeObject(s, container));
  }
}

export class DirectChildSerializeMapper extends DirectSerializeMapper {
  constructor(source: any, protected cache: Map<any, any>) {
    super(source);
  }
}

export const directMapper: MapperFactory = {
  serializer(source: any): DirectSerializeMapper {
    return new DirectSerializeMapper(source);
  },
  deserializer(source: any, sourceType: any): DirectDeserializeMapper {
    return new DirectDeserializeMapper(source, sourceType);
  }
};
