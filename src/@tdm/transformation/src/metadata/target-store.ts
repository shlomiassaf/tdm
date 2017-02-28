import {
  Constructor, DualKeyMap, ensureTargetIsType,
  TransformDir, MetaFactoryStatic, fireEvents, TargetStoreEvents
} from '../fw';
import { ClassMetadata } from './class-metadata';
import { TargetMetadata } from './target-metadata';
import { SerializeMapper, DeserializeMapper } from '../mapping';


class PlainObject {}

export class TargetStore {

  protected namedTargets = new Map<string, Constructor<any>>();
  protected targets = new Map<Constructor<any>, DualKeyMap<MetaFactoryStatic, PropertyKey, any>>();
  protected builtTargets = new Map<Constructor<any>, TargetMetadata>();

  constructor() {
    this.targets.set(PlainObject, new DualKeyMap<MetaFactoryStatic, PropertyKey, any>());
  }

  setClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, key: P, value: ClassMetadata[P]): void {
    if (this.builtTargets.has(target)) {
      this.builtTargets.get(target)[key] = value;
    }

    if (key === 'name') {
      this.namedTargets.set(value as any, target);
    }

    this.set(target, ClassMetadata, key, value);
  }

  hasTarget(target: any): boolean {
    return this.targets.has(target);
  }

  findTarget(name: string): Constructor<any> | undefined {
    return this.namedTargets.get(name);
  }

  getTargetName(target: Constructor<any>): string | undefined {
    const meta = this.getTargetMeta(target);
    return meta && meta.name;
  }

  getTargetMeta(target: Constructor<any>): TargetMetadata | undefined {
    let meta = this.builtTargets.get(target);
    if (!meta) {
      const metaArgs = this.targets.get(target);
      if (!metaArgs) {
        throw new Error('Target has no metadata');
      }
      meta = new TargetMetadata(target, metaArgs);
      this.builtTargets.set(target, meta);
      this.namedTargets.set(meta.name, target);
      fireEvents(TargetStoreEvents.onCreateMetadata, target);
    }
    return meta;
  }

  getIdentityKey(target: Constructor<any>, direction?: TransformDir): string | undefined {
    const meta = this.getTargetMeta(target);
    if (meta) {
      return meta.getIdentityKey(direction);
    }
  }

  serialize(target: Constructor<any>, mapper: SerializeMapper): any {
    const meta = this.getTargetMeta(target);
    if (meta) {
      return meta.serialize(mapper);
    }
  }

  /**
   * Deserialize and instance of "DeserializeMapper" into an instance of tge target supplied
   * @param target
   * @param mapper
   * @returns {any}
   */
  deserialize(mapper: DeserializeMapper): any | any[] | undefined {
    if (this.hasTarget(mapper.sourceType)) {
      const meta = this.getTargetMeta(mapper.sourceType);
      const result: any = meta.factory(mapper.isCollection);
      meta.deserialize(mapper, result);
      return result;
    } else {
      return this.deserializePlain(mapper);
    }
  }

  /**
   * Deserialize and instance of "DeserializeMapper" into a plain object (object literal)
   * @param mapper
   */
  deserializePlain(mapper: DeserializeMapper): any {
    const meta = this.getTargetMeta(PlainObject);
    const result: any = mapper.isCollection ? [] : {};
    meta.deserialize(mapper, result, true);
    return result;
  }


  protected setMeta<T, Z extends MetaFactoryStatic>(metaClass: Z & Constructor<T>, def: any, tProto: Object, key?: PropertyKey, desc?: PropertyDescriptor): T {
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

}

export const targetStore = new TargetStore();
