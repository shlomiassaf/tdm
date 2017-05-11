import {
  Constructor,
  Prop,
  PropMetadataArgs,
  Exclude,
  ExcludeMetadataArgs,
  Relation,
  RelationMetadataArgs
} from '@tdm/core';

import {
  ClassMetadata,
  PropMetadata,
  ExcludeMetadata,
  RelationMetadata,
  TargetStore,
  TargetMetadata,
  targetStore as targetStore_,
  isFunction
} from '@tdm/core/ext';
import { ModelMetadataArgs } from "@tdm/core/metadata";

const targetStore: TestTargetStore = targetStore_;

function getTargetMetaStore(target: any): TestTargetMetadata {
  return targetStore.getTargetMeta(target) as any;
}

class TestTargetStore extends TargetStore {

  static getTargetMeta(target: any): TestTargetMetadata | undefined {
    return targetStore.builtTargets.get(target);
  }

  static clear(target: any): void {
    const meta = targetStore.builtTargets.get(target);
    if (meta) {
      targetStore.namedTargets.delete(meta.name);
      targetStore.builtTargets.delete(target);
      targetStore.targets.get(target).clear();

    }
  }

  static removeClassProp(target: Constructor<any>, key: keyof ClassMetadata) {
    if (targetStore.builtTargets.has(target)) {
      delete targetStore.builtTargets.get(target)[key];
    }

    if (targetStore.targets.has(target)) {
      return targetStore.targets.get(target).delete(ClassMetadata, key);
    }
  }
}

export class TestTargetMetadata extends TargetMetadata {
  static getFactory<T, Z>(type: Z & Constructor<T>): (target: any, key: any) => T | undefined {
    return (target: any, key: string) => {
      const t = getTargetMetaStore(target);
      if (t) {
        return t.config.get(type, key);
      }
    }
  }

  static removeFactory<T, Z>(type: Z & Constructor<T>): (target: any, key: any) => boolean {
    return (target: any, key: string) => {
      const t = TestTargetStore.getTargetMeta(target);
      if (t) {
        return t.config.delete(type, key);
      }
    }
  }

  static getRelation = TestTargetMetadata.getFactory(RelationMetadata);
  static getProp = TestTargetMetadata.getFactory(PropMetadata);
  static getExclude = TestTargetMetadata.getFactory(ExcludeMetadata);

  static removeRelation = TestTargetMetadata.removeFactory(RelationMetadata);
  static removeProp = TestTargetMetadata.removeFactory(PropMetadata);
  static removeExclude = TestTargetMetadata.removeFactory(ExcludeMetadata);

  static getClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, propName: keyof ClassMetadata): ClassMetadata[P] {
    const t = getTargetMetaStore(target);
    if (t) {
      return t[propName];
    }
  }

  static removeClassProp(target: Constructor<any>, propName: keyof ClassMetadata): boolean {
    return TestTargetStore.removeClassProp(target, propName);
  }

  static setClassProp<P extends keyof ClassMetadata>(target: Constructor<any>, propName: P, value: ClassMetadata[P]): void {
    targetStore.setClassProp(target, propName, value);
  }

  static addRelation(target: Constructor<any>, key: string, meta?: RelationMetadataArgs): void {
    Relation(meta)(target.prototype, key);
  }

  static addProp(target: Constructor<any>, key: string, meta?: PropMetadataArgs): void {
    Prop(meta)(target.prototype, key);
  }

  static setExcludeClass(target: Constructor<any>): void {
    Exclude()(target);
  }

  static addExclude(target: Constructor<any>, key: string, meta?: ExcludeMetadataArgs): void {
    Exclude(meta)(target.prototype, key);
  }

}

export class TargetMetaModifier<T, Z> {
  constructor(public target: Z & Constructor<T>) {
  }

  clear(): this {
    TestTargetStore.clear(this.target);
    return this;
  }

  updateResource(resource: ModelMetadataArgs): this {
    targetStore.setModel(resource, this.target);
    return this;
  }


  /**
   * Set/Update the identity field.
   * If key is empty will set to default name
   * @param key
   * @returns {TargetMetaModifier}
   */
  setName(name?: string): this {
    TestTargetMetadata.setClassProp(this.target, 'name', name);
    return this;
  }

  /**
   * Set/Update/Remove the identity field.
   * If key is empty will remove identity.
   * @param key
   * @returns {TargetMetaModifier}
   */
  setIdentity(key?: keyof T): this {
    TestTargetMetadata.setClassProp(this.target, 'identity', key);
    return this;
  }

  /**
   * Set exclusion/inclusion at the class level
   * @param exclude
   * @returns {TargetMetaModifier}
   */
  setExclude(exclude: boolean): this {
    if (!exclude) {
      TestTargetMetadata.removeClassProp(this.target, 'transformStrategy');
    } else {
      TestTargetMetadata.setExcludeClass(this.target);
    }
    return this;
  }

  getProp<P extends keyof T>(key: P): PropMetadata {
    return TestTargetMetadata.getProp(this.target, key);
  }

  getRelation<P extends keyof T>(key: P): RelationMetadata {
    return TestTargetMetadata.getRelation(this.target, key);
  }

  getExclude<P extends keyof T>(key: P): ExcludeMetadata {
    return TestTargetMetadata.getExclude(this.target, key);
  }

  getClassProp<P extends keyof ClassMetadata>(key: P): ClassMetadata[P] {
    return TestTargetMetadata.getClassProp(this.target, key);
  }

  classProp<P extends keyof ClassMetadata>(key: P, value?: ClassMetadata[P] | false): this {
    TestTargetMetadata.removeClassProp(this.target, key);
    if (typeof value !== 'boolean') {
      TestTargetMetadata.setClassProp(this.target, key, value);
    }
    return this;
  }

  relation(key: keyof T, meta?: RelationMetadataArgs | false): this {
    TestTargetMetadata.removeRelation(this.target, key);

    if (typeof meta !== 'boolean') {
      TestTargetMetadata.addRelation(this.target, key, meta);
    }

    return this;
  }

  /**
   * Add or remove prop, to remove set meta to false
   * @param key
   * @param meta
   * @param type
   * @returns {any}
   */
  prop(key: keyof T, meta?: PropMetadataArgs | false | Function, type?: Function): this {
    TestTargetMetadata.removeProp(this.target, key);

    if (typeof meta !== 'boolean' && !isFunction(meta)) {
      TestTargetMetadata.addProp(this.target, key, meta);
    } else if (isFunction(meta)) {
      type = meta;
    }

    if (isFunction(type)) {
      (Reflect as any).defineMetadata("design:type", type, this.target.prototype, key);
    }

    return this;
  }

  props(...args: Array<keyof T>): this {
    args.forEach(a => this.prop(a));
    return this;
  }

  /**
   * Add or remove exclude, to remove set meta to false
   * @param key
   * @param meta
   * @returns {any}
   */
  exclude(key: keyof T, meta?: ExcludeMetadataArgs | false): this {
    TestTargetMetadata.removeExclude(this.target, key);
    if (typeof meta !== 'boolean') {
      TestTargetMetadata.addExclude(this.target, key, meta);
    }
    return this;
  }

  static create<T, Z>(target: Z & Constructor<T>): TargetMetaModifier<T, Z> {
    return new TargetMetaModifier(target);
  }
}
