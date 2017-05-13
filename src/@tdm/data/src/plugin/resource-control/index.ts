import { TDMCollection, TDMModelBase, registerEvent, Constructor } from '@tdm/core';
import { PluginStore} from '../../fw';
import { DAO } from '../../dao';
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

  /**
   * Init the plugin
   * @param propertyName {string} ['@ar'] Optional, the property name to attach to the each model
   */
  init(propertyName: string = '$ar'): void {
    if (!propertyName) {
      throw new Error('Invalid ResourceControl property name');
    }
    DAO.getCtrl = getCtrl;
    attachToResource(propertyName);
  }
}
PluginStore.register('ResourceControl', ResourceControlPlugin);

declare module '../../fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/data/plugin/resource-control'
     */
    readonly ResourceControl: ResourceControlPlugin;
  }
}

declare module '../../dao' {
  module DAO {
    /**
     * @extension '@tdm/data/plugin/resource-control'
     */
    function getCtrl<T>(instance: T): ResourceControl<T> | undefined;
  }
}

export { ResourceControl } from './resource-control';
