import { Constructor, isUndefined, isFunction, ensureTargetIsType } from '../fw/utils';
import { KeySet, SetExt, MapExt,DualKeyMap } from '../fw/set-map-ext';
import { MetaFactoryStatic, MetaFactoryInstance } from '../fw/interfaces';
import { targetEvents, TargetEvents } from '../fw/events'

import { ClassMetadata } from './class-metadata';
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
   * @returns {TargetEvents}
   */
  get on(): TargetEvents {
    return targetEvents;
  }

  /**
   * Storage for local, non target specific, data.
   */
  protected locals: KeySet<any, any>;
  protected namedTargets: Map<string, Constructor<any>>;
  protected targets: Map<Constructor<any>, DualKeyMap<MetaFactoryStatic, PropertyKey, any>>;
  protected builtTargets: Map<Constructor<any>, TargetMetadata>;

  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    TargetStore.create(this);
  }

  /**
   * Returns a single local item.
   * @param key
   * @param index optional, if not set returns the first.
   * @returns {undefined|T}
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

  findTarget(name: string): Constructor<any> | undefined {
    return this.namedTargets.get(name);
  }

  /**
   * Returns the target's name key without initiating a target build.
   * @param target
   * @returns {string}
   */
  getTargetName(target: Constructor<any>): string | undefined {
    return this.getClassProp(target, 'name');
  }

  hasClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, key: P): boolean {
    return this.hasTarget(target) && this.targets.get(target).has(ClassMetadata, key);
  }

  setClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, key: P, value: ClassMetadata[P]): ClassMetadata[P] {
    if (this.builtTargets.has(target)) {
      this.builtTargets.get(target)[key] = value;
    }

    if (key === 'name') {
      this.namedTargets.set(value as any, target);
    }

    this.set(target, ClassMetadata, key, value);

    return value;
  }

  getClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, key: P): ClassMetadata[P] | undefined {
    if (this.builtTargets.has(target)) {
      return this.builtTargets.get(target)[key];
    } else if (this.hasTarget(target)) {
      return this.targets.get(target).get(ClassMetadata, key);
    }
  }

  getMetaFor<T extends MetaFactoryStatic, Z>(target: Constructor<any>, metaClass: T & Constructor<Z>): Map<PropertyKey, Z> | undefined;
  getMetaFor<T extends MetaFactoryStatic, Z>(target: Constructor<any>, metaClass: T & Constructor<Z>, name: PropertyKey): Z | undefined;
  getMetaFor<T extends MetaFactoryStatic, Z>(target: Constructor<any>, metaClass: T & Constructor<Z>, name?: PropertyKey): Z | Map<PropertyKey, Z> | undefined {
    const dkm = this.targets.get(target);
    if (dkm) {
      return name ? dkm.get(metaClass, name) : dkm.get(metaClass);
    }
  }

  setMetaFormFactory<T>(meta: MetaFactoryInstance<T>): void {
    this.setMetaFor(meta.target, meta.metaClassKey, meta.metaPropKey, meta.metaValue);
  }

  setMetaFor<T extends MetaFactoryStatic, Z>(target: Constructor<any>, metaClass: T & Constructor<Z>, name: string, value: Z): void {
    if (metaClass === ClassMetadata) {
      this.setClassProp(target, name as any, value);
    } else {
      let dkm = this.targets.get(target);

      if (!dkm) {
        this.targets.set(target, dkm = new DualKeyMap<MetaFactoryStatic, PropertyKey, any>());
      }

      dkm.set(metaClass, name, value);
    }
  }

  /**
   * Registers the target in the store, does not build.
   * Used for targets without metadata
   * @param target
   */
  registerTarget(target: Constructor<any>): void {
    if (!this.hasTarget(target)) {
      this.targets.set(target, new DualKeyMap<MetaFactoryStatic, PropertyKey, any>());
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
    Array.from(fromTarget.keys())
      .forEach( clsKey => {
        if (clsKey === ClassMetadata) {
          const clsMap = toTarget.get(ClassMetadata);
          MapExt.asKeyValArray(fromTarget.get(ClassMetadata))
            .forEach( ([k, v]) => {
              if (!clsMap || !clsMap.has(k)) {
                this.setClassProp(to, k as any, v); // TODO: this.setClassProp searches for target (to) each iteration... redundant but it also handle target built/not built...
              }
            });
        } else if (isFunction(clsKey.extend)) {
          const value = clsKey.extend(fromTarget.get(clsKey), toTarget.get(clsKey), {from, to});
          if (!isUndefined(value)) {
            toTarget.set(clsKey, value);
          }
        }
      });
  }

  protected setMeta<T , Z extends MetaFactoryStatic>(metaClass: Z & Constructor<T>, def: any, tProto: Object, key?: PropertyKey, desc?: PropertyDescriptor): T {
    const meta = metaClass.metaFactory(def, tProto, key, desc);
    return this.set(ensureTargetIsType(tProto), meta.metaClassKey, meta.metaPropKey as any, meta.metaValue);
  }

  protected set<T , Z, P extends keyof T>(target: Constructor<any>, k: Z & Constructor<T>, k1: P, v: T[P]): T[P] {
    // TODO: implement LRU since most values are set sequentially on the same target.
    let dkm = this.targets.get(target);

    if (!dkm) {
      this.targets.set(target, dkm = new DualKeyMap<MetaFactoryStatic, PropertyKey, any>());
    }

    dkm.set(k as any, k1, v as any);

    return v;
  }

  /**
   * Creates a new TargetStore instance.
   * @param instance optional, used internally
   * @returns {TargetStore}
   */
  static create(instance?: TargetStore): TargetStore {
    const targetStore: TargetStore = instance || Object.create(TargetStore.prototype);

    targetStore.locals = new KeySet<any, any>();
    targetStore.namedTargets = new Map<string, Constructor<any>>();
    targetStore.targets = new Map<Constructor<any>, DualKeyMap<MetaFactoryStatic, PropertyKey, any>>();
    targetStore.builtTargets = new Map<Constructor<any>, TargetMetadata>();

    return targetStore;
  }
}

export const targetStore: TargetStore = TargetStore.create();

