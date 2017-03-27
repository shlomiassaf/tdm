import { targetStore, registerEvent, Constructor, isFunction } from '@tdm/transformation';

import { PluginStore, ActiveRecordCollection, ActionMetadata, BaseActiveRecord } from '@tdm/core';
import { ExtendedContext } from '../../core/execute-context';
import { AdapterStatic } from '../../fw';
import { ActionController } from '../..//core';
import { collectionClassFactory } from '../../active-record';


function registerAction(this: ActionController, action: ActionMetadata, collProto: any, override: boolean = false): void {
  if (override || !isFunction(this.target.prototype[action.name])) {

    // ACTION VALIDATION
    // TODO: move to separate function, add more assertions, create unique error class
    if (action.isCollection && !action.decoratorInfo.isStatic) {
      throw new Error('An action with a collection response must be a static level member');
    }

    const ctx = new ExtendedContext(this.targetMetadata, action);
    const self = this;

    if (action.decoratorInfo.isStatic) {

      if (action.isCollection && action.collInstance) {
        collProto[action.name] = function (this: ActiveRecordCollection<any>, ...args: any[]): any {
          this.splice(0, this.length);
          return self.execute(ctx.clone(this), {async: true, args});
        };
      }

      this.target[action.name] = function (this: AdapterStatic<any, any>, ...args: any[]) {
        return self.execute(ctx.clone(), { async: true, args});
      };
    } else {
      this.target.prototype[action.name] = function (this: BaseActiveRecord<any>, ...args: any[]) {
        return self.execute(ctx.clone(this), {async: true, args});
      };
    }
  }
}


function activeRecord(target: Constructor<any>): void {
  const meta = targetStore.getAdapterMeta(target);
  const collProto: any = {};

  if (meta) {
    meta.actions.forEach( a => registerAction.call(meta.actionController, a, collProto, true ) );
  }

  // creating collection type for this target
  if (Object.keys(collProto).length > 0) {
    meta.parent.collectionClass = collectionClassFactory(collProto);
  }
}

export class ActiveRecordPlugin {
  init(): void {
    registerEvent('onBuildMetadata', activeRecord);
  }
}

PluginStore.register('ActiveRecord', ActiveRecordPlugin);

declare module '../../fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/core/plugin/active-record'
     */
    readonly ActiveRecord: ActiveRecordPlugin;
  }
}
