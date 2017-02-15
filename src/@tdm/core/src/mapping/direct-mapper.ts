import { MapperFactory, DeserializeMapper, SerializeMapper } from './mapper';
import { PropertyContainer, PoClassPropertyMap, transformValueOut } from './prop-container';

/**
 * A mapper that has no mapping effect.
 * Maps every property on the source to the same property on the target.
 *
 */
export class DirectDeserializeMapper extends DeserializeMapper {
  readonly isCollection: boolean;

  private idx: number = -1;
  private current: any;


  constructor(source: any) {
    super(source);

    this.isCollection = Array.isArray(source);
    if (!this.isCollection) {
      this.current = this.source;
    }
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

  getValue(key: string): any {
    return this.current[key];
  }
}

export class DirectSerializeMapper extends SerializeMapper {
  serialize(container: PropertyContainer): any {
    if (Array.isArray(this.source)) {
      return this.serializeCollection(this.source, container);
    } else {
      return this.serializeObject(this.source, container);
    }
  }

  private serializeObject(obj: any, container: PropertyContainer): any {
    const target: any = {};

    const cb = (prop: PoClassPropertyMap) => target[prop.obj] = transformValueOut(this.source[prop.cls], prop.prop);

    container.forEach(Object.keys(obj), cb);

    return target;
  }

  private serializeCollection(arr: any[], container: PropertyContainer): any[] {
    return arr.map( s => this.serializeObject(s, container));
  }
}

export const directMapper: MapperFactory = {
  serializer(source: any): DirectSerializeMapper {
    return new DirectSerializeMapper(source);
  },
  deserializer(source: any): DirectDeserializeMapper {
    return new DirectDeserializeMapper(source);
  }
};
