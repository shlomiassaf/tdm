import { ResourceControl } from './resource-control'

const getCtrlContainer: { getState: typeof getCtrl } = {} as any;

/**
 * @internal
 * @param gsFn
 */
export function setGetCtrl(gsFn: typeof getCtrl): void {
  getCtrlContainer.getState = gsFn;
}

/**
 * Return the state of the objects. Only if the state plugin was initialized.
 * @public
 * @param instance
 * @returns {ResourceControl<T>|undefined}
 */
export function getCtrl<T>(instance: T): ResourceControl<T> | undefined {
  return getCtrlContainer.getState(instance);
}

