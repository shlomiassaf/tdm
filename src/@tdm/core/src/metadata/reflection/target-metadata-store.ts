import { AdapterStatic } from '../../core/interfaces';
import { AdapterError } from '../../core/errors';
import { PropMetadata, ExcludeMetadata, HookMetadata, ActionMetadataArgs, DecoratorInfo } from '../meta-types';
import { TargetAdapterMetadataStore } from './target-adapter-metadata-store';
import { internalMetadataStore } from './internal-metadata-store';
import { stringify, SetExt } from '../../utils';
import { ARHookableMethods } from '../../active-record/active-record-interfaces';

export class TargetMetadataStore {

  private identity: string;
  private adapters = new Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>();
  private props = new Set<PropMetadata>();
  private extendingActions = new Map<PropertyKey, {def: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo}[]>();
  private excludes = new Set<ExcludeMetadata>();
  private hooks = new Map<ARHookableMethods, {before: HookMetadata, after: HookMetadata}>();

  constructor(public readonly target: any) { }

  addExtendingAction(info: DecoratorInfo, def: Partial<ActionMetadataArgs<any>>): void {
    const arr = this.extendingActions.get(info.name) || [];
    arr.push({def, info});
    this.extendingActions.set(info.name, arr);
  }

  addProp(meta: PropMetadata): void {
    this.props.add(meta);
  }

  addExclude(meta: ExcludeMetadata): void {
    this.excludes.add(meta);
  }

  addHook(meta: HookMetadata): void {
    const hooks = this.hooks.get(meta.action) || {} as any;
    hooks[meta.event] = meta;
    this.hooks.set(meta.action, hooks);
  }

  setIdentity(propertyKey: string): void {
    this.identity = propertyKey;
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.adapters.has(adapterClass);
  }

  getAdapterStore<T extends AdapterStatic<any, any>>(adapterClass: T, create: boolean = true): TargetAdapterMetadataStore | undefined {
    return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
  }

  getExtendingAction(info: DecoratorInfo): {def: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo} | undefined {
    const arr = this.extendingActions.get(info.name);
    if (arr) {
      return arr.find( a => a.info.name === info.name && a.info.isStatic === info.isStatic);
    }
  }

  getExtendingActions(): Map<PropertyKey, {def: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo}[]> {
    return this.extendingActions;
  }

  getIdentity(): string | undefined {
    return this.identity;
  }

  getProps(): PropMetadata[] {
    return SetExt.asArray(this.props);
  }

  getExcludes(): ExcludeMetadata[] {
    return SetExt.asArray(this.excludes);
  }

  getHooks(): Map<ARHookableMethods, {before: HookMetadata, after: HookMetadata}> {
    return this.hooks;
  }

  findHook(action: ARHookableMethods): {before: HookMetadata, after: HookMetadata} | undefined {
    return this.hooks.get(action)
  }

  findHookEvent(action: ARHookableMethods, event: 'before' | 'after'): HookMetadata | undefined {
    const hook = this.findHook(action);
    if (hook) {
      return hook[event];
    }
  }

  private registerAdapter(adapterClass: AdapterStatic<any, any>): TargetAdapterMetadataStore {
    if (!internalMetadataStore.hasAdapter(adapterClass)) {
      throw AdapterError.notRegistered(adapterClass)
    } else if (this.adapters.has(adapterClass)) {
      throw AdapterError.registered(adapterClass, stringify(this.target))
    } else {
      return this.adapters.set(adapterClass, new TargetAdapterMetadataStore(this, adapterClass)).get(adapterClass);
    }
  }
}
