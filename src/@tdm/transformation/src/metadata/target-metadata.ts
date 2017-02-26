import { Constructor, DualKeyMap, TransformDir, TransformStrategy, NamingStrategyConfig, LazyInit, TransformationError, stringify, MetaFactoryStatic } from "../fw";
import { ClassMetadata } from './class-metadata';
import { PropMetadata } from './prop';
import { targetStore } from './target-store';
import { SerializeMapper, DeserializeMapper } from '../mapping';
import { TargetTransformer } from '../target-transformer';


const defaultCollFactory = () => [];

export class TargetMetadata implements ClassMetadata {
  name: string;
  factory: (isColl: boolean) => any;
  identity: PropertyKey; // TODO: this should be string
  transformStrategy: TransformStrategy | undefined;
  transformNameStrategy: NamingStrategyConfig | undefined;

  @LazyInit(function (this: TargetMetadata): TargetTransformer {
    return new TargetTransformer(this);
  })
  protected transformer: TargetTransformer;

  protected config: DualKeyMap<Constructor<any>, PropertyKey, any>;

  constructor(public readonly target: Constructor<any>, config: DualKeyMap<MetaFactoryStatic, PropertyKey, any>) {
    this.config = config;

    if (config.has(ClassMetadata as any)) {
      Array.from(config.get(ClassMetadata as any).entries()).forEach( ([k, v]) => this[k] = v );
    }

    if (!this.factory) {
      this.factory = (isColl: boolean) => isColl ? defaultCollFactory() : new this.target();
    }

    if (!this.name) {
      this.name = stringify(target);
    }
  }

  getIdentityKey(direction?: TransformDir): string | undefined {
    if (this.identity) {
      if (!direction) {
        return this.identity as string;
      }
      return direction === 'outgoing'
        ? this.get(PropMetadata, this.identity as any).alias.outgoing
        : this.get(PropMetadata, this.identity as any).alias.incoming
      ;
    }
  }


  serialize(mapper: SerializeMapper): any {
    return this.transformer.serialize(mapper);
  }

  deserialize(mapper: DeserializeMapper, target: any | any[], plain: boolean = false): void {
    if (mapper.isCollection) {

      if (!Array.isArray(target)) {
        throw TransformationError.coll_obj(true);
      }

      while(mapper.next()) {
        const t: any = plain ? {} : this.factory(false);
        this.transformer.deserialize(mapper, t);
        target.push(t);
      }
    } else {

      if (Array.isArray(target)) {
        throw TransformationError.coll_obj(false);
      }

      this.transformer.deserialize(mapper, target);
    }
  }

  /**
   * Returns an array of values represented by the key.
   * If the key has no values returns an empty array.
   *
   * This is a safe metadata collection extractor.
   * @param type
   * @returns {Array<T>|Array}
   */
  getValues<T, Z>(type: T & Constructor<Z>): Array<Z> {
    const values = this.config.get(type);
    return values ? Array.from(values.values()) : [];
  }

  private get<T, Z, P extends keyof T>(type: T & Constructor<Z>, key: P): Z {
    return this.config.get(PropMetadata, key);
  }
}
