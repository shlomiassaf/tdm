import {
  Constructor,
  DualKeyMap,
  BaseMetadata,
  isString,
  DecoratorInfo,
  GLOBAL_KEY,
  MetadataClassStatic
} from '../fw';

import { targetStore } from './target-store';
import { PropMetadata } from './prop';
import { TDMCollection } from '../model';

import { Prop } from '../decorators';



/**
 * The metadata store for a target.
 *
 * Each target in the {@link TargetStore} has a matching TargetMetadata instance.
 * Each instance holds all the metadata data registered under that target.
 *
 * @pluginApi
 */
export class TargetMetadata<T = any, Z = any> {

  protected config: DualKeyMap<Constructor<any>, PropertyKey, any>;

  constructor(public readonly target: Z & Constructor<T>, config: DualKeyMap<MetadataClassStatic, PropertyKey, any>) {
    this.config = config;
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



  /**
   * Get the whole map of non-single metadata class
   */
  getMetaFor<T extends MetadataClassStatic, Z extends BaseMetadata>(metaClass: T & Constructor<Z>): Map<PropertyKey, Z> | undefined;
  /**
   * Get metadata for a single value metadata class
   */
  getMetaFor<T extends MetadataClassStatic, Z extends BaseMetadata>(metaClass: T & Constructor<Z>, single: true): Z | undefined;
  /**
   * Get metadata for a non-single value metadata class
   */
  getMetaFor<T extends MetadataClassStatic, Z extends BaseMetadata>(metaClass: T & Constructor<Z>, name: string): Z | undefined;
  getMetaFor<T extends MetadataClassStatic, Z extends BaseMetadata>(metaClass: T & Constructor<Z>, name?: string | true): Z | undefined {
    if (isString(name)) {
      const meta = this.config.get(metaClass);
      if (meta) {
        return meta.get(name);
      }
    } else if (name === true) {
      const meta = this.config.get(GLOBAL_KEY);
      if (meta) {
        return meta.get(<any>metaClass);
      }
    } else {
      return this.config.get(metaClass) as any;
    }
  }

  /**
   * Set metadata for a single metadata class
   */
  setMetaFor<T, ZValue = T>(metaClass: MetadataClassStatic<T>, value: ZValue): void;
  /**
   * Set metadata for a non-single metadata class
   */
  setMetaFor<T, ZValue = T>(metaClass: MetadataClassStatic<T>, name: string, value: ZValue): void;
  setMetaFor<T, ZValue = T>(metaClass: MetadataClassStatic<T>, name: string | ZValue, value?: ZValue): void {
    // TODO: don't go to target-store for this, implement here
    if (isString(name)) {
      targetStore.setMetaFor(this.target, metaClass, name, value);
    } else {
      targetStore.setMetaFor(this.target, metaClass, true, name);
    }
  }

  /**
   * Create a new instance of the TDMCollection for this type.
   * @returns {TDMCollection}
   */
  createCollection(): TDMCollection<T> {
    return new TDMCollection<T>();
  }

  protected get<T, Z, P extends keyof T>(type: T & Constructor<Z>, key: P): Z {
    return this.config.get(PropMetadata, key);
  }
}