import {
  TDMModel,
  targetStore,
  registerEvent,
  Constructor,
  isFunction,
  getProtoChain,
  SetExt,
  MapExt
} from '@tdm/core';

import { PluginStore, TDMCollection, ActionMetadata } from '@tdm/data';
import { ExecuteContext } from '../../core/execute-context';
import { AdapterStatic } from '../../fw';
import { ActionController } from '../../core';

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
function getActions(target: Constructor<any>, adapterClass: AdapterStatic<any, any>): ActionMetadata[] {
  const chain = getProtoChain(target);
  const actions = new Map<PropertyKey, ActionMetadata>();

  for (let i = 0, len = chain.length; i < len; i++) {
    if (targetStore.hasTarget(chain[i])) {
      const adapterMeta = targetStore.getAdapter(adapterClass);
      const mixins = SetExt.asArray(targetStore.getMixins(chain[i], adapterClass));
      if (adapterMeta) {
        const protoActions = adapterMeta.getActions(chain[i], ...mixins);
        MapExt.fromArray(protoActions, (v) => v.name, actions, true);
      }
    }
  }

  return MapExt.asValArray(actions);
}

function registerAction(this: ActionController, action: ActionMetadata, collProto: any, override: boolean = false): void {
  if (override || !isFunction(this.target.prototype[action.name])) {

    // ACTION VALIDATION
    // TODO: move to separate function, add more assertions, create unique error class
    if (action.isCollection && !action.decoratorInfo.isStatic) {
      throw new Error('An action with a collection response must be a static level member');
    }

    const ctx = new ExecuteContext(this.targetMetadata, action);
    const self = this;

    if (action.decoratorInfo.isStatic) {

      if (action.isCollection && action.collInstance) {
        collProto[action.name] = function (this: TDMCollection<any>, ...args: any[]): any {
          this.splice(0, this.length);
          return self.execute(ctx.clone(this), {async: true, args});
        };
      }

      this.target[action.name] = function (this: AdapterStatic<any, any>, ...args: any[]) {
        return self.execute(ctx.clone(), {async: true, args});
      };
    } else {
      this.target.prototype[action.name] = function (this: TDMModel<any>, ...args: any[]) {
        return self.execute(ctx.clone(this), {async: true, args});
      };
    }
  }
}


function activeRecord(target: Constructor<any>): void {
  const ac = targetStore.getAC(target);
  const collProto: any = {};

  // build actions on the target type for the currently active adapter.
  if (ac) {
    getActions(target, ac.adapterClass).forEach(a => {
      // TODO check action instance of ActionMetadata + in ActionMetadata verify using DecoratorInfo
      const extAction = targetStore.getTargetMeta(target).getExtendingAction(a.decoratorInfo);
      if (extAction) {
        const metaArgs = Object.assign({}, a.metaArgs, extAction);
        a = ac.adapterMeta.actionMetaClass.metaFactory(metaArgs, target, extAction.decoratorInfo.name).metaValue;
      }

      registerAction.call(ac, a, collProto, true)
    });
  }

  // creating collection type for this target
  if (Object.keys(collProto).length > 0) {
    ac.targetMetadata.collectionClass = TDMCollection.factory(collProto);
  }
}

export class ActiveRecordPlugin {
  init(): void {
    registerEvent('onProcessType', activeRecord);
  }
}

PluginStore.register('ActiveRecord', ActiveRecordPlugin);

declare module '../../fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly ActiveRecord: ActiveRecordPlugin;
  }
}
