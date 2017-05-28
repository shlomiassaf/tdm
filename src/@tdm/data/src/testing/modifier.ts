import { tdm, Constructor } from '@tdm/core';
import { TargetMetaModifier as _TargetMetaModifier } from '@tdm/core/testing';
import { TestTargetMetadata as _TestTargetMetadata } from '@tdm/core/testing/modifier';
import { Resource, Hook, Owns, BelongsTo } from '@tdm/data';
import {
  OwnsMetadataArgs,
  BelongsToMetadataArgs,
  OwnsMetadata,
  BelongsToMetadata,
  HookMetadataArgs, HookMetadata
} from '../metadata/meta-types';
import { ARHookableMethods, ARHooks } from '@tdm/data/active-record/interfaces';

const targetStore: TestTargetStore = tdm.targetStore;

class TestTargetStore extends tdm.TargetStore {

  static remove(type: typeof OwnsMetadata | typeof BelongsToMetadata, target: any, key: string): void {
    if (targetStore.hasTarget(target)) {
      switch (type) {
        case OwnsMetadata:
        case BelongsToMetadata:
          if (targetStore.targets.get(target).delete(type, key)) {
            const prop = targetStore.getMetaFor(target, tdm.PropMetadata, key);
            prop.rel = prop.relation = undefined;
          }
          break;
      }
    }
  }

  static hook(target: any, key: ARHookableMethods, meta: HookMetadataArgs | 'before' | 'after' | false): void {
    if (targetStore.hasTarget(target)) {
      const dkm = targetStore.targets.get(target);
      const hook = targetStore.getMetaFor(target, HookMetadata, key);

      if (meta === false && hook) {
        dkm.delete(HookMetadata, key);
      } else if (tdm.isString(meta) && hook) {
        delete hook[meta];
        if (Object.keys(hook).length === 0) {
          dkm.delete(HookMetadata, key);
        }
      } else if (meta) {
        const type = ARHooks[key] ? ARHooks[key].type : 'static';
        // if !ARHooks[key] Hook will throw, let it manage that.
        Hook(meta as any)(type === 'instance' ? target.prototype : target, key, null);
      }
    }
  }

  static addOwns(target: any, key: string, meta?: OwnsMetadataArgs<any>): void {
    Owns(meta)(target.prototype, key);
  }

  static addBelongsTo(target: any, key: string, meta?: BelongsToMetadataArgs): void {
    BelongsTo(meta)(target.prototype, key);
  }
}

export class TargetMetaModifier<T, Z> extends _TargetMetaModifier<T, Z> {

  /**
   * Add/Remove/Replace a hook
   * If meta is false remove all hooks from method
   * If meta is 'before' or 'after' remove that hook only
   * otherwise replace the hook
   * @param key
   * @param meta
   * @returns {TargetMetaModifier}
   */
  hook(key: ARHookableMethods, meta: HookMetadataArgs | 'before' | 'after' | false): this {
    TestTargetStore.hook(this.target, key, meta);
    return this;
  }

  owns(key: string, meta?: OwnsMetadataArgs<any> | false): this {
    TestTargetStore.remove(OwnsMetadata, this.target, key);

    if (meta === false) return;

    if (!targetStore.getMetaFor(this.target, tdm.PropMetadata, key)) {
      throw new Error('TestTargetMetadataStore does not support adding relations without Prop, please set a Prop first');
    }

    TestTargetStore.addOwns(this.target, key, meta);
    return this;
  }

  belongsTo(key: string, meta?: BelongsToMetadataArgs | false): this {
    TestTargetStore.remove(BelongsToMetadata, this.target, key);
    if (meta === false) return;

    if (!targetStore.getMetaFor(this.target, tdm.PropMetadata, key)) {
      throw new Error('TestTargetMetadataStore does not support adding relations without Prop, please set a Prop first');
    }
    TestTargetStore.addBelongsTo(this.target, key, meta);
    return this;
  }


  static create<T, Z>(target: Z & Constructor<T>): TargetMetaModifier<T, Z> {
    return new TargetMetaModifier(target);
  }
}
