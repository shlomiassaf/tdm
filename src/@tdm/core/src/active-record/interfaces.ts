import { DAOMethods, TDMModel } from '../fw';

/**
 * String enumeration of active record object methods
 */
export const ARMethods = {
  $create: '$create' as '$create',
  $update: '$update' as '$update',
  $remove: '$remove' as '$remove',
  $refresh: '$refresh' as '$refresh',
};

export const ARFactoryMethods = DAOMethods;

export type ARHookableMethods = keyof typeof ARMethods | keyof typeof ARFactoryMethods;

export interface ARHookRule {
  type: 'both' | 'static' | 'instance';
}

export const ARHooks: { [P in ARHookableMethods]: ARHookRule } = {
  $create: { type: 'instance'},
  $update: { type: 'instance'},
  $remove: { type: 'instance'},
  $refresh: { type: 'instance'},
  find: { type: 'static'},
  query: { type: 'static'},
  create: { type: 'static'},
  update: { type: 'static'},
  remove: { type: 'static'},
};

export type ActiveRecord<T, Z> = TDMModel<T> & {
  [P in keyof typeof ARMethods]: (options?: Z) => T;
};



