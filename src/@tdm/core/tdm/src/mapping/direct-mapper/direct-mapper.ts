import { isPrimitive, DualKeyMap } from '../../fw';
import { PropMetadata, targetStore } from '../../metadata';
import { MapperFactory, DeserializeMapper, SerializeMapper } from '../mapper';
import { PropertyContainer, PoClassPropertyMap, transformValueOut } from '../prop-container';
import { PlainSerializer } from '../plain-serializer';

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

  protected existing: DualKeyMap<any, string, any>;
  protected get ref(): any | undefined {
    if (this.current) {
      return this.existing.get(this.sourceType, this.getIdentity());
    }
  }

  private idx: number = -1;
  private current: any;
  private identity: string;


  constructor(source: any, sourceType: any) {
    super(source, sourceType);

    if (! (this instanceof DirectChildDeserializeMapper)) {
      this.existing = new DualKeyMap<any, string, any>();
    }

    this.identity = targetStore.getIdentityKey(this.sourceType, 'outgoing');

    this.isCollection = Array.isArray(source);
    if (!this.isCollection) {
      this.current = this.source;
    }
  }

  getIdentity(): string {
    // TODO: Move compare to the global store, so logic can change without bugs.
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
      if (prop.relation && isPrimitive(value)) {
        value = { [targetStore.getIdentityKey(prop.type.ref as any, 'outgoing')]: value };
      }

      if (targetStore.hasTarget(prop.type.ref)) {
        return this.getCache(prop.type.ref, value) || this.deserialize(value, prop);
      }
    }

    return value;
  }

  protected deserialize(value: any, prop: PropMetadata): any {

    const mapper = this.ref
        ? new DirectChildDeserializeMapper(value, prop.type.ref, this.existing)
        : directMapper.deserializer(value, prop.type.ref)
      ;

    return targetStore.deserialize(mapper);
  }

  private getCache(type: any, value: any): any | undefined {
    const idKey = targetStore.getIdentityKey(type, 'outgoing');
    const idVal = idKey && value[idKey];
    if (idVal) {
      return this.existing.get(type, idVal)
    }
  }

}

export class DirectChildDeserializeMapper extends DirectDeserializeMapper {
  constructor(source: any, sourceType: any, protected existing: DualKeyMap<any, string, any>) {
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

    const cb = (pMap: PoClassPropertyMap) => {
      const p = pMap.prop;
      if (p && targetStore.hasTarget(p.type.ref)) {
        const type: any = p.type.ref;
        if (p.relation && !p.type.isArray) {
          const idKey = targetStore.getIdentityKey(type);
          // if the rel points to a different fk property name, @tdm will make sure prop.obj is that fk.
          data[pMap.obj] = obj[pMap.cls][idKey];
        } else {
          data[pMap.obj] = targetStore.serialize(type, new DirectChildSerializeMapper(obj[pMap.cls], this.cache))
        }
      } else {
        const newVal = this.plainSer.serialize(transformValueOut(obj[pMap.cls], p));
        data[pMap.obj] = newVal;
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
