import { Constructor, isUndefined } from '../fw/utils';
import { KeySet, SetExt, MapExt, DualKeyMap } from '../fw/set-map-ext';
import {
  MetaClass,
  MetadataClassStatic,
  MetaClassInstanceDetails,
  GLOBAL_KEY
} from '../fw/metadata-framework';
import { targetEvents, TargetEvents } from '../fw/events';

import { TargetMetadata } from './target-metadata';

/**
 * The global type registry.
 *
 * Hold {@link TargetMetadata} for models.
 *
 * @pluginApi
 * @mixable
 * @singleton
 */
export class TargetStore {
  /**
   * register listeners for metadata lifecycle events on a target.
   * @returns
   */
  get on(): TargetEvents {
    return targetEvents;
  }

  /**
   * Storage for local, non target specific, data.
   */
  protected locals: KeySet<any, any>;
  protected namedTargets: Map<string, Constructor<any>>;
  protected targets: Map<
    Constructor<any>,
    DualKeyMap<MetadataClassStatic, TdmPropertyKey, any>
  >;
  protected builtTargets: Map<Constructor<any>, TargetMetadata>;

  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    TargetStore.create(this);
  }

  /**
   * Returns a single local item.
   * @param key
   * @param index optional, if not set returns the first.
   * @returns
   */
  protected local<T>(key: any, index: number = 0): T | undefined {
    const set = this.locals.get(key);
    if (set) {
      return SetExt.index(set, index);
    }
  }

  hasTarget(target: any): boolean {
    return this.targets.has(target);
  }

  /**
   * Returns the target metadata of all models registered. (targets with ModelMetadata or derived)
   * Only built models are returned, with valid ModelMetadata instances.
   * Do not call this method from a decorator.
   */
  getAllModels(): TargetMetadata[] {
    return Array.from(this.builtTargets.values()).filter(
      tMeta => tMeta.hasModel
    );
  }

  findTarget(name: string): Constructor<any> | undefined {
    return this.namedTargets.get(name);
  }

  getMetaFor<T, Z>(
    target: Constructor<any>,
    metaClass: T & Constructor<Z>
  ): Map<TdmPropertyKey, Z> | undefined;
  getMetaFor<T, Z>(
    target: Constructor<any>,
    metaClass: T & Constructor<Z>,
    single: true
  ): Z | undefined;
  getMetaFor<T, Z, P extends keyof Z>(
    target: Constructor<any>,
    metaClass: T & Constructor<Z>,
    single: true,
    singleKey: P
  ): Z[P] | undefined;
  getMetaFor<T, Z>(
    target: Constructor<any>,
    metaClass: T & Constructor<Z>,
    name: TdmPropertyKey
  ): Z | undefined;
  getMetaFor<T, Z>(
    target: Constructor<any>,
    metaClass: T & Constructor<Z>,
    name?: TdmPropertyKey | true,
    singleKey?: any
  ): Z | Map<TdmPropertyKey, Z> | undefined {
    const dkm = this.targets.get(target);
    if (dkm) {
      if (name === true) {
        const v = dkm.get(GLOBAL_KEY, <any>metaClass);
        return v && singleKey ? v[singleKey] : v;
      } else if (name) {
        return dkm.get(metaClass, name);
      } else {
        return dkm.get(metaClass);
      }
    }
  }

  setMetaFormFactory<T>(meta: MetaClassInstanceDetails<any, any>): void {
    if (meta) {
      if (meta.metaPropKey === GLOBAL_KEY) {
        this.set<any, any, any>(
          meta.target,
          GLOBAL_KEY,
          meta.metaClassKey,
          meta.metaValue
        );
      } else {
        this.setMetaFor(
          meta.target,
          meta.metaClassKey,
          meta.metaPropKey,
          meta.metaValue
        );
      }
    }
  }

  setMetaFor<T, ZValue = T>(
    target: Constructor<any>,
    metaClass: MetadataClassStatic<T>,
    single: true,
    value: ZValue
  ): void;
  setMetaFor<T, ZValue = T>(
    target: Constructor<any>,
    metaClass: MetadataClassStatic<T>,
    name: string,
    value: ZValue
  ): void;
  setMetaFor<T, ZValue = T>(
    target: Constructor<any>,
    metaClass: MetadataClassStatic<T>,
    name: string | true,
    value: ZValue
  ): void {
    if (name === true) {
      this.set<any, any, any>(target, GLOBAL_KEY, metaClass, value);
    } else {
      this.set(target, metaClass, name, value);
    }
  }

  /**
   * Registers the target in the store, does not build.
   * Used for targets without metadata
   * @param target
   */
  registerTarget(target: Constructor<any>): void {
    if (!this.hasTarget(target)) {
      this.targets.set(
        target,
        new DualKeyMap<MetadataClassStatic, TdmPropertyKey, any>()
      );
    }
  }

  /**
   * Extends metadata from one target to the other.
   * Extending types will not trigger a metadata instantiation.
   * @param from
   * @param to
   */
  extend(from: Constructor<any>, to: Constructor<any>): void {
    if (!this.hasTarget(from) || !this.hasTarget(to)) {
      throw new Error('Target not registered.');
    }

    const fromTarget = this.targets.get(from);
    const toTarget = this.targets.get(to);
    Array.from(fromTarget.keys()).forEach(clsKey => {
      if (clsKey === GLOBAL_KEY) {
        const singleTypes = fromTarget.get(clsKey);
        const toSingleTypes = toTarget.get(clsKey) || new Map<any, any>();

        MapExt.asKeyValArray(singleTypes).forEach(([type, instance]) => {
          // type is a class, using <any> since for TS its a TdmPropertyKey
          const metaClass = MetaClass.get(<any>type);
          if (metaClass.extendSingle) {
            const toInstance = toSingleTypes.get(<any>type);
            const value = metaClass.extendSingle(instance, toInstance, {
              from,
              to
            });
            if (!isUndefined(value)) {
              toSingleTypes.set(<any>type, <any>value);
            }
          }
        });

        if (toSingleTypes.size > 0) {
          toTarget.set(clsKey, toSingleTypes);
        }
      } else {
        const metaClass = MetaClass.get(clsKey);
        if (metaClass.extend) {
          const value = metaClass.extend(
            fromTarget.get(clsKey),
            toTarget.get(clsKey),
            { from, to }
          );
          if (!isUndefined(value)) {
            toTarget.set(clsKey, value);
          }
        }
      }
    });
  }

  protected set<T, Z, P extends keyof T>(target: Constructor<any>, k: Z & Constructor<T>, k1: P, v: T[P]): T[P] {
    // TODO: implement LRU since most values are set sequentially on the same target.
    let dkm = this.targets.get(target);

    if (!dkm) {
      this.targets.set(target, (dkm = new DualKeyMap<MetadataClassStatic, TdmPropertyKey, any>()));
    }

    dkm.set(k as any, k1, v as any);

    return v;
  }

  /**
   * Creates a new TargetStore instance.
   * @param instance optional, used internally
   * @returns
   */
  static create(instance?: TargetStore): TargetStore {
    const targetStore: TargetStore =
      instance || Object.create(TargetStore.prototype);

    targetStore.locals = new KeySet<any, any>();
    targetStore.namedTargets = new Map<string, Constructor<any>>();
    targetStore.targets = new Map<
      Constructor<any>,
      DualKeyMap<MetadataClassStatic, TdmPropertyKey, any>
    >();
    targetStore.builtTargets = new Map<Constructor<any>, TargetMetadata>();

    return targetStore;
  }
}

export const targetStore: TargetStore = TargetStore.create();
MetaClass.defaultRegistrator(meta => targetStore.setMetaFormFactory(meta));

import './helpers';
