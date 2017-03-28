import { registerEvent, Constructor } from '@tdm/transformation';
import { PluginStore, TDMCollection, DAO, TDMModelBase } from '@tdm/core';
import { ResourceControl } from './resource-control';

const privateDict = new WeakMap<any, ResourceControl<any>>();

function getCtrl<T>(instance: T): ResourceControl<T> | undefined {
  return privateDict.get(instance)
    || ( privateDict.set(instance, new ResourceControl<any>(instance as any)), getCtrl(instance) );
}

function attachToResource(propertyName: string = '$ar'): void {
  function getThisCtrl() { return getCtrl(this); }

  // extend TDMModel
  Object.defineProperty(TDMModelBase.prototype, propertyName, { configurable: true, get: getThisCtrl });


  // extend TDMCollection
  function StatefulActiveRecordCollection() { }
  Object.defineProperty(StatefulActiveRecordCollection.prototype, propertyName, { get: getThisCtrl });
  TDMCollection.extend(StatefulActiveRecordCollection);
}

export class ResourceControlPlugin {
  private attach: string;

  attachToResource(propertyName: string = '$ar'): this {
    this.attach = propertyName;
    return this;
  }

  init(): void {
    DAO.getCtrl = getCtrl;
    if (this.attach) {
      attachToResource(this.attach);
    }
  }
}
PluginStore.register('ResourceControl', ResourceControlPlugin);

declare module '../../fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/core/plugin/resource-control'
     */
    readonly ResourceControl: ResourceControlPlugin;
  }
}

declare module '../../dao' {
  module DAO {
    /**
     * @extension '@tdm/core/plugin/resource-control'
     */
    function getCtrl<T>(instance: T): ResourceControl<T> | undefined;
  }
}

export { ResourceControl } from './resource-control';
