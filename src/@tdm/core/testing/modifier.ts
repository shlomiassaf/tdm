import { Prop, Exclude, Resource, Hook } from '@tdm/core';
import { PropMetadata, PropMetadataArgs, ExcludeMetadata, ExcludeMetadataArgs, GlobalResourceMetadata, HookMetadata, HookMetadataArgs } from '../src/metadata/meta-types';
import { TargetMetadataStore } from "../src/metadata/reflection/target-metadata-store";
import { internalMetadataStore } from '../src/metadata/reflection/internal-metadata-store';
import { SetExt, stringify, isString, isFunction } from '@tdm/core/src/utils';
import { ARHookableMethods, ARHooks } from "../src/active-record/active-record-interfaces";
import { TargetController } from "../src/core/target-controller";

function getTargetStore(target: any): TestTargetMetadataStore {
  return internalMetadataStore.getTargetStore(target, false) as any;
}

class TestTargetMetadataStore extends TargetMetadataStore {
  static clear(target: any): void {
    const t = getTargetStore(target);
    if (t) {
      t.props.clear();
      t.excludes.clear();
      t.hooks.clear();
      TestTargetMetadataStore.setIdentity(target);
      TestTargetMetadataStore.updateResource(target, new GlobalResourceMetadata({}), true);
      TestTargetMetadataStore.setName(target);
      t.targetController = new TargetController(t);
    }
  }

  static remove(type: typeof PropMetadata | typeof ExcludeMetadata, target: any, key: string): void {
    const t = getTargetStore(target);
    if (t) {
      let set: Set<any>;
      switch (type) {
        case PropMetadata:
          set = t.props;
          break;
        case ExcludeMetadata:
          set = t.excludes;
          break;
      }

      const p = SetExt.asArray(set).find( p => p.name === key);
      p && set.delete(p);
    }
  }

  static setName(target: any, name?: string): void {
    const t = getTargetStore(target);
    if (t) {
      if (!name) {
        internalMetadataStore.replaceName(stringify(target), target);
      } else {
        internalMetadataStore.replaceName(name, target);
      }
    }
  }

  static setIdentity(target: any, key?: string): void {
    const t = getTargetStore(target);
    if (t) {
      if (!key) {
        t.identity = undefined;
      } else {
        t.identity = key;
      }
    }
  }

  static hook(target: any, key: ARHookableMethods, meta: HookMetadataArgs | 'before' | 'after' | false): void {
    const t = getTargetStore(target);
    if (t) {
      const hook = t.hooks.get(key);
      if (meta === false && hook) {
        t.hooks.delete(key);
      } else if (isString(meta) && hook) {
        delete hook[meta];
        if (Object.keys(hook).length === 0) {
          t.hooks.delete(key);
        }
      } else if (meta) {
        const type = ARHooks[key] ? ARHooks[key].type : 'static';
        // if !ARHooks[key] Hook will throw, let it manage that.
        Hook(meta as any)(type === 'instance' ? target.prototype : target, key, null);
      }
    }
  }

  static addProp(target: any, key: string, meta?: PropMetadataArgs): void {
    const t = getTargetStore(target);
    t && Prop(meta)(target.prototype, key);
  }

  static addExclude(target: any, key: string, meta?: ExcludeMetadataArgs): void {
    const t = getTargetStore(target);
    t && Exclude(meta)(target.prototype, key);
  }

  static updateResource(target: any, resource: GlobalResourceMetadata, replace?: boolean) {
    const t = getTargetStore(target);
    if (t) {
      if (!t.resource) {
        Resource({})(target);
      }
      if (replace) {
        Object.keys(t.resource).forEach( k => {
          try {
            delete t.resource[k];
          } catch (err) {}
        });
      }
      Object.assign(t.resource, resource);

      if (resource.name) {
        TestTargetMetadataStore.setName(target, resource.name);
      }
    }
  }
}

export class TargetMetaModifier {
  constructor(public target: any) {

  }

  clear(): this {
    TestTargetMetadataStore.clear(this.target);
    return this;
  }

  updateResource(resource: GlobalResourceMetadata, replace?: boolean): this {
    TestTargetMetadataStore.updateResource(this.target, resource, replace);
    return this;
  }

  /**
   * Set/Update the identity field.
   * If key is empty will set to default name
   * @param key
   * @returns {TargetMetaModifier}
   */
  setName(name?: string): this {
    TestTargetMetadataStore.setName(this.target, name);
    return this;
  }

  /**
   * Set/Update/Remove the identity field.
   * If key is empty will remove identity.
   * @param key
   * @returns {TargetMetaModifier}
   */
  setIdentity(key?: string): this {
    TestTargetMetadataStore.setIdentity(this.target, key);
    return this;
  }

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
    TestTargetMetadataStore.hook(this.target, key, meta);
    return this;
  }

  /**
   * Add or remove prop, to remove set meta to false
   * @param key
   * @param meta
   * @param type
   * @returns {any}
   */
  prop(key: string, meta?: PropMetadataArgs | false | Function, type?: Function): this {
    TestTargetMetadataStore.remove(PropMetadata, this.target, key);
    if (isFunction(meta)) {
      type = meta;
      meta = undefined;
    } else if (meta === false) {
      return;
    }

    if (isFunction(type)) {
      (Reflect as any).defineMetadata("design:type", String, this.target.prototype, key);
    }

    TestTargetMetadataStore.addProp(this.target, key, meta);
    return this;
  }

  props(...args: string[]): this {
    args.forEach( a => this.prop(a) );
    return this;
  }

  /**
   * Add or remove exclude, to remove set meta to false
   * @param key
   * @param meta
   * @returns {any}
   */
  exclude(key: string, meta?: ExcludeMetadataArgs | false): this {
    TestTargetMetadataStore.remove(ExcludeMetadata, this.target, key);
    if (meta === false) return;
    TestTargetMetadataStore.addExclude(this.target, key, meta);
    return this;
  }

  static create(target: any): TargetMetaModifier {
    return new TargetMetaModifier(target);
  }
}
