import {
  Constructor,
  DualKeyMap,
  BaseMetadata,
  TransformStrategy,
  NamingStrategyConfig,
  isString,
  stringify,
  DecoratorInfo,
  MetadataClassStatic
} from '../fw';
import { ClassMetadata } from './class-metadata';
import { PropMetadata } from './prop';
import { TDMCollection } from '../model';

import { Prop } from '../decorators';

const defaultCollFactory = () => [];

/**
 * The metadata store for a target.
 *
 * Each target in the {@link TargetStore} has a matching TargetMetadata instance.
 * Each instance holds all the metadata data registered under that target.
 *
 * @pluginApi
 */
export class TargetMetadata implements ClassMetadata {
  name: string;
  factory: (isColl: boolean) => any;
  identity: PropertyKey; // TODO: this should be string
  transformStrategy: TransformStrategy | undefined;
  transformNameStrategy: NamingStrategyConfig | undefined;

  protected config: DualKeyMap<Constructor<any>, PropertyKey, any>;

  constructor(public readonly target: Constructor<any>, config: DualKeyMap<MetadataClassStatic, PropertyKey, any>) {
    this.config = config;

    if (config.has(ClassMetadata as any)) {
      Array.from(config.get(ClassMetadata as any).entries()).forEach(([k, v]) => this[k] = v);
    }

    if (!this.factory) {
      this.factory = (isColl: boolean) => isColl ? defaultCollFactory() : new this.target();
    }

    if (!this.name) {
      this.name = stringify(target);
    }
  }

  getCreateProp(info: DecoratorInfo | string): PropMetadata {
    const name = isString(info) ? info : info.name;

    if (!this.config.has(PropMetadata, name)) {
      Prop()(this.target.prototype, name);
    }

    return this.config.get(PropMetadata, name);
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

  getMetaFor<T extends MetadataClassStatic, Z extends BaseMetadata>(metaClass: T & Constructor<Z>, name: string): Z {
    const meta = this.config.get(metaClass);
    if (meta) {
      return meta.get(name);
    }
  }

  /**
   * Create a new instance of the TDMCollection for this type.
   * @returns {TDMCollection}
   */
  createCollection(): TDMCollection<any> {
    return new TDMCollection();
  }

  protected get<T, Z, P extends keyof T>(type: T & Constructor<Z>, key: P): Z {
    return this.config.get(PropMetadata, key);
  }
}
