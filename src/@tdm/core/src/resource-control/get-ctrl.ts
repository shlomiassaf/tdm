import { ResourceControl } from './resource-control'

const getCtrlContainer: { getCtrl: typeof getCtrl } = {
  getCtrl: (instance: any) => undefined
};

/**
 * @internal
 * @param gsFn
 */
export function setGetCtrl(gsFn: typeof getCtrl): void {
  getCtrlContainer.getCtrl = gsFn;
}

/**
 * Return the state of the objects. Only if the state plugin was initialized.
 * @public
 * @param instance
 * @returns {ResourceControl<T>|undefined}
 */
export function getCtrl<T>(instance: T): ResourceControl<T> | undefined {
  return getCtrlContainer.getCtrl(instance);
}

