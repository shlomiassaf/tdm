import { AdapterStatic } from '../../core/interfaces';
import { AdapterError } from '../../core/errors';
import { TargetController } from '../../core/target-controller';
import {
  BelongsToMetadata,
  PropMetadata,
  ExcludeMetadata,
  HookMetadata,
  Relationship,
  GlobalResourceMetadata,
  ActionMetadataArgs,
  decoratorInfo,
  DecoratorInfo,
  metadataFactory
} from '../meta-types';
import { TargetAdapterMetadataStore } from './target-adapter-metadata-store';
import { internalMetadataStore } from './internal-metadata-store';
import { stringify, MapExt, KeySet } from '../../utils';
import { ARHookableMethods } from '../../active-record/active-record-interfaces';


export class TargetMetadataStore {

  name: string;
  targetController: TargetController<any>;
  readonly resource: GlobalResourceMetadata;

  protected identity: string;
  protected multiIdentity: string[];

  protected adapters = new Map<AdapterStatic<any, any>, TargetAdapterMetadataStore>();
  protected props = new Map<PropertyKey, PropMetadata>();
  protected extendingActions = new Map<PropertyKey, {def: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo}[]>();
  protected excludes = new Map<PropertyKey, ExcludeMetadata>();
  protected hooks = new Map<ARHookableMethods, {before: HookMetadata, after: HookMetadata}>();
  protected customStore = new Map<any, KeySet<any, any>>();
  protected relations = new Map<PropertyKey, Relationship>();

  constructor(public readonly target: any) {
    this.name = stringify(target);
    this.targetController = new TargetController(this);
  }

  addExtendingAction(info: DecoratorInfo, def: Partial<ActionMetadataArgs<any>>): void {
    const arr = this.extendingActions.get(info.name) || [];
    arr.push({def, info});
    this.extendingActions.set(info.name, arr);
  }

  addProp(meta: PropMetadata): void {
    this.props.set(meta.name, meta);
  }

  addRelationship(meta: Relationship): void {
    this.relations.set(meta.name, meta);
  }

  addExclude(meta: ExcludeMetadata): void {
    this.excludes.set(meta.name, meta);
  }

  addHook(meta: HookMetadata): void {
    const hooks = this.hooks.get(meta.action) || {} as any;
    hooks[meta.event] = meta;
    this.hooks.set(meta.action, hooks);
  }

  setCustom(storeKey: any, metaKey: any, value: any): void {
    const t = this.customStore.get(storeKey) || new KeySet<any, any>();
    t.add(metaKey, value);
    this.customStore.set(storeKey, t);
  }

  setResource(meta: GlobalResourceMetadata): void {
    if (meta.name && meta.name !== this.name) {
      internalMetadataStore.replaceName(meta.name, this.target);
    }
    Object.defineProperty(this, 'resource', {value: meta});
  }

  setIdentity(propertyKey: string): void {
    this.identity = propertyKey;
  }

  setMultiIdentity(propertyKey: string, order: number): void {
    if (!this.multiIdentity) {
      this.multiIdentity = [];
    }
    this.multiIdentity[order] = propertyKey;
  }

  hasAdapter(adapterClass: AdapterStatic<any, any>): boolean {
    return this.adapters.has(adapterClass);
  }

  getCustom(storeKey: any): KeySet<any, any> | undefined {
    return this.customStore.get(storeKey);
  }

  getAdapterStore<T extends AdapterStatic<any, any>>(adapterClass: T, create: boolean = true): TargetAdapterMetadataStore | undefined {
    return this.adapters.get(adapterClass) || (create ? this.registerAdapter(adapterClass) : undefined);
  }

  getExtendingAction(info: DecoratorInfo): {def: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo} | undefined {
    const arr = this.extendingActions.get(info.name);
    if (arr) {
      return arr.find(a => a.info.name === info.name && a.info.isStatic === info.isStatic);
    }
  }

  getIdentity(): string | undefined {
    return this.identity;
  }

  getProps(): PropMetadata[] {
    return MapExt.asValArray(this.props);
  }

  getProp(key: string): PropMetadata {
    return this.props.get(key);
  }

  getExcludes(): ExcludeMetadata[] {
    return MapExt.asValArray(this.excludes);
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

  build(): void {
    if (this.identity && !this.props.has(this.identity)) {
      this.getCreateProp(decoratorInfo(this.target.prototype, this.identity))
    }

    this.relations.forEach( rel => {
      const prop = this.getCreateProp(rel.decoratorInfo);
      prop.setRelationship(rel);

      if (rel instanceof BelongsToMetadata && rel.name !== rel.foreignKey) {
        const fkPointerProp = this.getCreateProp(decoratorInfo(this.target.prototype, rel.foreignKey));
        fkPointerProp.foreignKeyOf = prop;
      }
    });
  }

  extendFrom(store: this): void {
    // extend all ExtendedActions from child classes to parent.
    MapExt.asValArray(store.extendingActions)
      .forEach( extActions => {
        extActions.forEach( v => {
          if (!this.getExtendingAction(v.info)) {
            this.addExtendingAction(v.info, v.def);
          }
        });
      });

    // Aggregating global lifecycle hooks
    // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
    MapExt.asKeyValArray(store.hooks)
      .forEach( ([action, hook]) => {
        let thisHook = this.findHook(action);
        if (!thisHook) {
          thisHook = hook;
        } else {
          Object.keys(hook).forEach( k => {
            if (!thisHook.hasOwnProperty(k)) {
              thisHook[k] = hook[k];
            }
          });
        }
        this.hooks.set(action, thisHook);
      });

    // TODO: this is slow, allow setProp/setExclude to get array, not single item.

    // Aggregating Props
    store.props.forEach( prop => {
      if (!this.props.has(prop.name)) {
        this.addProp(prop);
      }
    });
    // Aggregating Excludes
    store.excludes.forEach( ex => {
      if (!this.excludes.has(ex.name)) {
        this.addExclude(ex);
      }
    });
    // Aggregating Relationships
    store.relations.forEach( rel => {
      if (!this.relations.has(rel.name)) {
        this.addRelationship(rel);
      }
    });
  }

  /**
   * Returns a Prop based on a DecoratorInfo.
   * If there is no Prop it will create a default Prop based on the DecoratorInfo
   *
   * This helper is useful for child decorators of Prop where the child inject itself into PropMetadata
   * Those children can be set on a member that does not include Prop...
   *
   * Do not run this on a child creation, only at build after all decorators processed since a child
   * decorator can be set before Prop decorator by the user.
   * @param info
   * @returns {undefined|PropMetadata}
   */
  private getCreateProp(info: DecoratorInfo): PropMetadata {
    if (!this.props.has(info.name)) {
      this.addProp(metadataFactory(PropMetadata, undefined, this.target, info));
    }
    return this.props.get(info.name);
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
