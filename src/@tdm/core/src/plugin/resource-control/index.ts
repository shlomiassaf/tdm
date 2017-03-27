import { registerEvent, Constructor } from '@tdm/transformation';

import { PluginStore } from '../../fw';
import { ActiveRecordCollection } from '../../active-record';
import { ResourceControl } from './resource-control';
import { DS } from '../../ds';

const privateDict = new WeakMap<any, ResourceControl<any>>();

function getCtrl<T>(instance: T): ResourceControl<T> | undefined {
  return privateDict.get(instance)
    || ( privateDict.set(instance, new ResourceControl<any>(instance as any)), getCtrl(instance) );
}

function attachToResource(propertyName: string = '$ar'): void {

  function getThisCtrl() { return getCtrl(this); }
  function onBuildMetadata(target: Constructor<any>) {
    Object.defineProperty(target.prototype, propertyName, { configurable: true, get: getThisCtrl });
  }
  registerEvent('onBuildMetadata', onBuildMetadata);

  function StatefulActiveRecordCollection() { }
  Object.defineProperty(StatefulActiveRecordCollection.prototype, propertyName, { get: getThisCtrl });
  ActiveRecordCollection.extend(StatefulActiveRecordCollection);
}

export class ResourceControlPlugin {
  private attach: string;

  attachToResource(propertyName: string = '$ar'): this {
    this.attach = propertyName;
    return this;
  }

  init(): void {
    DS.getCtrl = getCtrl;
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

declare module '../../ds' {
  module DS {
    /**
     * @extension '@tdm/core/plugin/resource-control'
     */
    function getCtrl<T>(instance: T): ResourceControl<T> | undefined;
  }
}

export { ResourceControl } from './resource-control';
