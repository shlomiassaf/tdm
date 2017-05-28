import {
  tdm,
  Constructor,
  Prop,
  PropMetadataArgs,
  Model,
  ModelMetadataArgs,
  Identity,
  Exclude,
  ExcludeMetadataArgs,
  Relation,
  RelationMetadataArgs
} from '@tdm/core';

import { RelationMetadata, PropMetadata, ExcludeMetadata } from '@tdm/core/tdm';

const targetStore: TestTargetStore = tdm.targetStore;

function getTargetMetaStore(target: any): TestTargetMetadata {
  return targetStore.getTargetMeta(target) as any;
}

export class TestTargetStore extends tdm.TargetStore {

  static getTargetMeta(target: any): TestTargetMetadata | undefined {
    return targetStore.builtTargets.get(target);
  }

  static getModel<T extends tdm.ModelMetadata = tdm.ModelMetadata>(target: Constructor<any>): T {
    const t = targetStore.getTargetMeta(target, true);
    return t && t.model<T>();
  }

  static clearAll(): void {
    targetStore.namedTargets.clear();
    targetStore.builtTargets.clear();
    targetStore.targets.clear();
    targetStore.locals.clear();
  }

  static clear(target: any): void {
    const meta = targetStore.builtTargets.get(target);
    if (meta) {
      targetStore.namedTargets.delete(meta.model().resName);
      targetStore.builtTargets.delete(target);
      targetStore.targets.get(target).clear();

    }
  }

}

export class TestTargetMetadata extends tdm.TargetMetadata {
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

  static getRelation = TestTargetMetadata.getFactory(tdm.RelationMetadata);
  static getProp = TestTargetMetadata.getFactory(tdm.PropMetadata);
  static getExclude = TestTargetMetadata.getFactory(tdm.ExcludeMetadata);

  static removeRelation = TestTargetMetadata.removeFactory(tdm.RelationMetadata);
  static removeProp = TestTargetMetadata.removeFactory(tdm.PropMetadata);
  static removeExclude = TestTargetMetadata.removeFactory(tdm.ExcludeMetadata);

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

  build(): void {
    targetStore.getTargetMeta(this.target).model().build();
  }

  clear(): this {
    TestTargetStore.clear(this.target);
    return this;
  }

  /**
   * Registers a new model
   *
   * > Clears the model from the registry before trying to register.
   * @param metaArgs
   * @param type
   * @returns {TargetMetaModifier}
   */
  setModel<T extends ModelMetadataArgs>(metaArgs: T = undefined): this {
    this.clear();
    Model(metaArgs)(this.target);
    return this;
  }

  /**
   * Set/Update/Remove the identity field.
   * If key is empty will remove identity.
   * @param key
   * @returns {TargetMetaModifier}
   */
  setIdentity(key?: keyof T): this {
    Identity()(this.target.prototype, key);
    return this;
  }

  /**
   * Set exclusion/inclusion at the class level
   * @param exclude
   * @returns {TargetMetaModifier}
   */
  setExclude(exclude: boolean): this {
    if (!exclude) {
      delete targetStore.getTargetMeta(this.target).model().transformStrategy;
    } else {
      TestTargetMetadata.setExcludeClass(this.target);
    }
    return this;
  }

  getProp<P extends keyof T>(key: P): tdm.PropMetadata {
    return TestTargetMetadata.getProp(this.target, key);
  }

  getRelation<P extends keyof T>(key: P): tdm.RelationMetadata {
    return TestTargetMetadata.getRelation(this.target, key);
  }

  getExclude<P extends keyof T>(key: P): tdm.ExcludeMetadata {
    return TestTargetMetadata.getExclude(this.target, key);
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

    if (typeof meta !== 'boolean' && !tdm.isFunction(meta)) {
      TestTargetMetadata.addProp(this.target, key, meta);
    } else if (tdm.isFunction(meta)) {
      type = meta;
    }

    if (tdm.isFunction(type)) {
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
