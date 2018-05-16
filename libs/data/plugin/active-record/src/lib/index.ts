import {
  MapExt,
  SetExt,
  targetStore,
  getProtoChain,
  isFunction,
  Constructor,
  TDMModel,
  TDMModelBase,
  TDMCollection,
  MetaClass
} from '@tdm/core/tdm';

import {
  ActionMetadata,
  ExecuteContext,
  AdapterStatic,
  PluginStore,
  ActionController,
  ResourceControl
} from '@tdm/data';

/**
 * Returns all of the actions registered for a target going through the proto chain and all
 * mixins associated with each proto.
 *
 * Returns a unique list of actioned, uniqueness is set by the `name` of each action.
 * If 2 actions with the same 'name' exists, the top level actions wins, i.e. the first in the chain.
 *
 * @param target
 * @param adapterClass
 * @returns
 */
function getActions(
  target: Constructor<any>,
  adapterClass: AdapterStatic<any, any>
): ActionMetadata[] {
  const chain = getProtoChain(target);
  const actions = new Map<TdmPropertyKey, ActionMetadata>();

  for (let i = 0, len = chain.length; i < len; i++) {
    if (targetStore.hasTarget(chain[i])) {
      const adapterMeta = targetStore.getAdapter(adapterClass);
      const mixins = SetExt.asArray(
        targetStore.getMixins(chain[i], adapterClass)
      );
      if (adapterMeta) {
        const protoActions = adapterMeta.getActions(chain[i], ...mixins);
        MapExt.fromArray(protoActions, v => v.name, actions, true);
      }
    }
  }

  return MapExt.asValArray(actions);
}

function composeAction(
  obj: any,
  action: ActionMetadata,
  fn: (...args: any[]) => any
): void {
  obj[action.name] = fn;
  if (action.alias) {
    action.alias.forEach(alias => (obj[alias] = obj[action.name]));
  }
}

function registerAction(
  this: ActionController,
  action: ActionMetadata,
  collProto: any,
  override: boolean = false
): void {
  const ctx = new ExecuteContext(this.targetMetadata, action);
  const self = this;

  if (action.decoratorInfo.isStatic) {
    if (override || !isFunction(this.target[action.name])) {
      composeAction(this.target, action, function(
        this: AdapterStatic<any, any>,
        ...args: any[]
      ) {
        return self.execute(ctx.clone(), { args }, 'instance');
      });
    }

    if (
      action.isCollection &&
      action.collInstance &&
      (override || !isFunction(collProto[action.name]))
    ) {
      composeAction(collProto, action, function(
        this: TDMCollection<any>,
        ...args: any[]
      ): any {
        this.splice(0, this.length);
        return self.execute(ctx.clone(this), { args }, 'instance');
      });
    }
  } else {
    if (action.isCollection) {
      throw new Error(
        'An action with a collection response must be a static level member'
      );
    }

    if (override || !isFunction(this.target.prototype[action.name])) {
      composeAction(this.target.prototype, action, function(
        this: TDMModel<any>,
        ...args: any[]
      ) {
        // we call `self.execute` with 'instance' so it acts like AR in its resource control but we need the promise
        // so we use the resource control to get it right away.
        return ResourceControl.get(
          self.execute(ctx.clone(this), { args }, 'instance')
        );
      });
    }
  }
}

function activeRecord(target: Constructor<any>): void {
  // don't apply active record on non TDMModel targets (i.e. @Model targets)
  // TODO: the event should be specific to `@tdm/data` and not onProcessType
  if (!TDMModelBase.instanceOf(target.prototype)) {
    return;
  }

  const ac = targetStore.getAC(target);
  const collProto: any = {};

  // build actions on the target type for the currently active adapter.
  if (ac) {
    getActions(target, ac.adapterClass).forEach(a => {
      // TODO check action instance of ActionMetadata + in ActionMetadata verify using DecoratorInfo
      const extAction = targetStore
        .getTargetMeta(target)
        .getExtendingAction(a.decoratorInfo);

      if (extAction) {
        const metaArgs = Object.assign({}, a.metaArgs, extAction);
        const metaClass = MetaClass.get(ac.adapterMeta.actionMetaClass);
        a = metaClass.factory(metaArgs, target, extAction.decoratorInfo)
          .metaValue;
      }

      registerAction.call(ac, a, collProto, true);
    });
  }

  // creating collection type for this target
  if (Object.keys(collProto).length > 0) {
    ac.targetMetadata.collectionClass = TDMCollection.factory(collProto);
  }
}

function attachResourceControl(propertyName: string): void {
  function getThisCtrl() {
    return ResourceControl.get(this);
  }

  // extend TDMModel
  Object.defineProperty(TDMModelBase.prototype, propertyName, {
    configurable: true,
    get: getThisCtrl
  });

  // extend TDMCollection
  function StatefulActiveRecordCollection() {}
  Object.defineProperty(
    StatefulActiveRecordCollection.prototype,
    propertyName,
    { get: getThisCtrl }
  );
  TDMCollection.extend(StatefulActiveRecordCollection);
}

export interface ActiveRecordOptions {
  /**
   * On each model, defines a property name that reference the {@link ResourceControl}
   * instance for that model.
   *
   * Note that the string value is the property name on the model instance at runtime.
   * At design time this property is not known to the type system (TypeScript), to attach the
   * property to the type system extend {@link TDMModel} and {@link TDMModelCollection}.
   *
   * For example, attaching the property name '$rc', use a module to init the plugin:
   * ```ts
   * import { TDMModel, TDMCollection } from '@tdm/core/tdm';
   * import { ResourceControl, plugins } from '@tdm/data';
   * import '@tdm/data/plugin/active-record';
   *
   * plugins.ActiveRecord.init({ resourceControl: '$rc' });
   *
   * // Now, teach TypeScript about the new property:
   * declare module '@tdm/core/tdm/src/model/tdm-model' {
   *   interface TDMModel<T> {
   *     readonly $rc: ResourceControl<T>;
   *   }
   *
   *   interface TDMModelBase<T> {
   *     readonly $rc: ResourceControl<T>;
   *   }
   * }
   *
   * export interface StatefulActiveRecordCollection<T> extends TDMCollection<T>, TDMModel<StatefulActiveRecordCollection<T>> { }
   *
   * declare module '@tdm/core/tdm/src/model/tdm-collection' {
   *   interface TDMCollection<T> {
   *     readonly $rc: ResourceControl<StatefulActiveRecordCollection<T>>;
   *   }
   * }
   * ```
   *
   * If not set (falsy expression) the resource control instance can not be accessed directly from the model instance.
   * > It is still accessible through ResourceControl.get(modelInstance);
   *
   * @default undefined
   */
  resourceControl?: string | false | undefined | null;

  /**
   * Enable active record actions on each model (save, delete, update etc..)
   *
   * @default true
   */
  enableActions?: boolean;
}

export class ActiveRecordPlugin {
  /**
   * Init the plugin
   * @param options ActiveRecordOptions
   */
  init(options: ActiveRecordOptions): void {
    if (options.resourceControl) {
      attachResourceControl(options.resourceControl);
    }

    if (
      options.hasOwnProperty('enableActions') === false ||
      options.enableActions === true
    ) {
      targetStore.on.processType(activeRecord);
    }
  }
}

PluginStore.register('ActiveRecord', ActiveRecordPlugin);

declare module '@tdm/data/lib/fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly ActiveRecord: ActiveRecordPlugin;
  }
}
