import { AdapterStatic } from '../../core/interfaces';
import { AdapterError, TargetError } from '../../core/errors';
import { TargetController } from '../../core/target-controller';
import { ActionController } from '../../core/action-controller';

import { metadataFactory, AdapterMetadata, ResourceMetadata, ResourceMetadataArgs, ActionMetadata, HookMetadata } from '../meta-types';
import { ARHookableMethods } from '../../active-record/active-record-interfaces';

import { TargetMetadataStore } from './target-metadata-store';
import { internalMetadataStore } from './internal-metadata-store';
import { isFunction, getProtoChain, Constructor, SetExt, MapExt,  } from '../../utils';
import { LazyInit } from '../../utils/decorators';

/**
 * A Metadata store for a target-adapter combination.
 * For each target that has an adapter (resource) decorator this store is created.
 */
export class TargetAdapterMetadataStore {
  readonly adapterMeta: AdapterMetadata<any, any>;
  resource: ResourceMetadata;
  mixins: Set<any> = new Set<any>();

  custom: Map<any, Set<any>> = new Map<any, Set<any>>();

  @LazyInit(function (this: TargetAdapterMetadataStore): TargetController<any> {
    return new TargetController<any>(this);
  })
  targetController: TargetController<any>;

  @LazyInit(function (this: TargetAdapterMetadataStore): ActionController {
    return new ActionController(this);
  })
  actionController: ActionController;

  readonly committed: boolean;

  /**
   * If true means that the target was not decorated with the adapter this store represents.
   * An abstract target/adapter can't be built into the target, it can only be used as a mixin
   * or base class for other targets.
   * @returns {boolean}
   */
  get isAbstract(): boolean {
    return !this.resource;
  }

  get target(): any {
    return this.parent.target;
  }

  get identity(): string {
    return this.parent.getIdentity();
  }

  constructor(private readonly parent: TargetMetadataStore, public readonly adapterClass: AdapterStatic<any, any>) {
    this.adapterMeta = internalMetadataStore.getAdapterStore(adapterClass).meta;
    if (!this.adapterMeta) {
      throw AdapterError.notRegistered(adapterClass)
    }
  }

  registerResource(def: ResourceMetadataArgs): void {
    this.resource = metadataFactory(this.adapterMeta.resourceMetaClass, def) as any;
  }

  findHookEvent(action: ARHookableMethods, timeline: 'before' | 'after'): HookMetadata | undefined {
    return this.parent.findHookEvent(action, timeline);
  }

  build(): void {
    if (this.isAbstract) {
      throw TargetError.isAbstract(this.parent.target, this.adapterClass);
    }
    if (this.committed === true) {
      throw TargetError.built(this.parent.target, this.adapterClass);
    }
    Object.defineProperty(this, 'committed', {value: true});

    const target: any = this.parent.target;

    this.actionController.commit();

    const store = internalMetadataStore.getTargetStore(target);

    const customStoredData: Map<any, Set<any>>[] = [];
    const thisHooks = store.getHooks();
    this.getProtoChainWithMixins(target, this.adapterClass)
      .forEach( proto => {

        if (target !== proto) {
          const protoStore = internalMetadataStore.getTargetStore(proto, false);

          if (protoStore) {

            // extend all ExtendedActions from child classes to parent.
            MapExt.asValArray(protoStore.getExtendingActions())
              .forEach( extActions => {
                extActions.forEach( v => {
                  if (!store.getExtendingAction(v.info)) {
                    store.addExtendingAction(v.info, v.def);
                  }
                });
              });

            // Aggregating global lifecycle hooks
            // TODO: Refactor to support static/instance like ExtendAction in case 2 hooks with same prop name
            MapExt.asKeyValArray(protoStore.getHooks())
              .forEach( ([action, hook]) => {
                let thisHook = store.findHook(action);
                if (!thisHook) {
                  thisHook = hook;
                } else {
                  Object.keys(hook).forEach( k => {
                    if (!thisHook.hasOwnProperty(k)) {
                      thisHook[k] = hook[k];
                    }
                  });
                }
                thisHooks.set(action, thisHook);
              });

            // TODO: this is slow, allow setProp/setExclude to get array, not single item.

            // Aggregating Props
            protoStore.getProps().forEach( prop => store.addProp(prop) );
            // Aggregating Excludes
            protoStore.getExcludes().forEach( ex => store.addExclude(ex) );

            if (protoStore.hasAdapter(this.adapterClass)) {
              const custom = protoStore.getAdapterStore(this.adapterClass).custom;
              if (custom.size > 0) {
                customStoredData.push(custom);
              }
            }
          }
        }
      });

    // TODO: refactor for performance on getActions and getProtoChainWithMixins (+ Caching)
    this.getActions(target, this.adapterClass)
      .forEach( action => this.registerAction(action) );

    customStoredData.forEach( m => {
      MapExt.asKeyArray(m).forEach( key => {
        const customSet = this.custom.get(key) || new Set<any>();

        SetExt.combine(customSet, m.get(key));

        this.custom.set(key, customSet);
      });
    });

    if (isFunction(this.adapterMeta.commit)) {
      this.adapterMeta.commit(this);
    }
  }


  private getProtoChainWithMixins(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): Set<Constructor<any>> {
    return getProtoChain(target).reduce( (protoSet, proto) => {
      protoSet.add(proto);
      const protoAdapterStore = internalMetadataStore.getTargetAdapterStore(proto, adapterClass);
      if (protoAdapterStore) {
        Array.from(protoAdapterStore.mixins)
          .forEach( mixin => !protoSet.has(mixin) && protoSet.add(mixin) );
      }
      return protoSet;
    }, new Set<Constructor<any>>());
  }

  /**
   * Returns all of the actions registered for a target going through the proto chain and all
   * mixins associated with each proto.
   *
   * Returns a unique list of actioned, uniqueness is set by the `name` of each action.
   * If 2 actions with the same 'name' exists, the top level actions wins, i.e. the first in the chain.
   *
   * @param target
   * @param adapterClass
   * @returns {ActionMetadata[]}
   */
  private getActions(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): ActionMetadata[] {
    const chain = getProtoChain(target);
    const actions = new Map<PropertyKey, ActionMetadata>();

    for (let i=0, len=chain.length; i<len; i++) {
      const protoAdapterStore = internalMetadataStore.getTargetAdapterStore(chain[i], adapterClass);
      if (protoAdapterStore) {
        const protoActions = protoAdapterStore.adapterMeta.getActions(chain[i], ...Array.from(protoAdapterStore.mixins));
        MapExt.fromArray(protoActions, (v) => v.name, actions, true);
      }
    }

    return MapExt.asValArray(actions);
  }

  private registerAction(action: ActionMetadata): void {
    // TODO check action instance of ActionMetadata + in ActionMetadata verify using DecoratorInfo
    const extAction = internalMetadataStore.getTargetStore(this.target).getExtendingAction(action.decoratorInfo);
    if (extAction) {
      const desc = Object.assign({}, action.metaArgs, extAction.def);
      action = metadataFactory(this.adapterMeta.actionMetaClass, desc, extAction.info)
    }
    this.actionController.registerAction(action, true);
  }
}
