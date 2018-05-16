import { isPrimitive, DualKeyMap } from '../../fw';
import { PropMetadata, targetStore } from '../../metadata';
import { MapperFactory, DeserializeMapper, SerializeMapper } from '../mapper';
import {
  PropertyContainer,
  PoClassPropertyMap,
  transformValueOut
} from '../prop-container';
import { PlainObjectMapper } from '../plain-object-mapper';

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

  protected current: any;
  protected identity: string;
  private idx: number = -1;

  constructor(source: any, sourceType: any, plainMapper?: PlainObjectMapper) {
    super(source, sourceType, plainMapper);

    if (!(this instanceof DirectChildDeserializeMapper)) {
      this.existing = new DualKeyMap<any, string, any>();
    }

    this.identity = targetStore.getIdentityKey(this.sourceType, 'outgoing');

    this.isCollection = Array.isArray(source);
    if (!this.isCollection) {
      this.current = this.source;
    }
  }

  getIdentity(): string {
    // TODO: Move to the global store, so logic can change without bugs.
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
      // if its not a primitive, it will process as a full object included in the payload.
      const rel = this.getRelationQuery(prop, value);
      if (rel) {
        value = rel;
      }

      if (targetStore.hasTarget(prop.type.ref)) {
        return (
          this.getCache(prop.type.ref, value) || this.deserialize(value, prop)
        );
      }
    }

    return typeof value === 'object'
      ? this.plainMapper.deserialize(value)
      : value;
  }

  protected deserialize(value: any, prop: PropMetadata): any {
    const mapper = this.ref
      ? new DirectChildDeserializeMapper(
          value,
          prop.type.ref,
          this.existing,
          this.plainMapper
        )
      : directMapper.deserializer(value, prop.type.ref, this.plainMapper); // tslint:disable-line

    return targetStore.deserialize(mapper);
  }

  /**
   *  Returns a relationship object with the identity property set.
   *  This object can then be used by the cache to identify if a value is cached or not (using the type & identity comb)
   */
  protected getRelationQuery(prop: PropMetadata, value: any): any {
    if (prop.relation && isPrimitive(value)) {
      return {
        [targetStore.getIdentityKey(prop.type.ref as any, 'outgoing')]: value
      };
    }
  }

  protected getCache(type: any, value: any): any | undefined {
    const idKey = targetStore.getIdentityKey(type, 'outgoing');
    const idVal = idKey && value[idKey];
    if (idVal) {
      return this.existing.get(type, idVal);
    }
  }
}

// tslint:disable-next-line
export class DirectChildDeserializeMapper extends DirectDeserializeMapper {
  constructor(
    source: any,
    sourceType: any,
    protected existing: DualKeyMap<any, string, any>,
    plainMapper: PlainObjectMapper
  ) {
    super(source, sourceType, plainMapper);
  }
}

// tslint:disable-next-line
export class DirectSerializeMapper extends SerializeMapper {
  protected cache: Map<any, any>;

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
          data[pMap.obj] = targetStore.serialize(
            type,
            new DirectChildSerializeMapper(
              obj[pMap.cls],
              this.cache,
              this.plainMapper
            )
          );
        }
      } else {
        const newVal = this.plainMapper.serialize(
          transformValueOut(obj[pMap.cls], p)
        );
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
    return arr.map(s => this.serializeObject(s, container));
  }
}

// tslint:disable-next-line
export class DirectChildSerializeMapper extends DirectSerializeMapper {
  constructor(
    source: any,
    protected cache: Map<any, any>,
    plainMapper: PlainObjectMapper
  ) {
    super(source, plainMapper);
  }
}

export const directMapper: MapperFactory = {
  serializer(
    source: any,
    plainMapper?: PlainObjectMapper
  ): DirectSerializeMapper {
    return new DirectSerializeMapper(source, plainMapper);
  },
  deserializer(
    source: any,
    sourceType: any,
    plainMapper?: PlainObjectMapper
  ): DirectDeserializeMapper {
    return new DirectDeserializeMapper(source, sourceType, plainMapper);
  }
};
