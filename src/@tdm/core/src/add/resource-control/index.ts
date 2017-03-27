import { ResourceControl } from '../../resource-control';
import { setGetCtrl } from '../../resource-control/get-ctrl';

const privateDict = new WeakMap<any, ResourceControl<any>>();

function getCtrl<T>(instance: T): ResourceControl<T> | undefined {
  return privateDict.get(instance)
    || ( privateDict.set(instance, new ResourceControl<any>(instance as any)), getCtrl(instance) );
}
setGetCtrl(getCtrl);
