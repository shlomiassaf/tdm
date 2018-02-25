import { TDMModel } from '@tdm/core';
import { DAOMethodType } from '../dao/index';

export interface ARMethodType {
  $create: any;
  $update: any;
  $replace: any;
  $remove: any;
  $refresh: any;
}

export type ARMethods = {
  [P in keyof ARMethodType]: any
};

/**
 * String enumeration of active record object methods
 */
export const ARMethods: ARMethodType = <any> { // Keep this any, or 3rd party extending of ARMethodType will fail
  $create: '$create',
  $update: '$update',
  $replace: '$replace',
  $remove: '$remove',
  $refresh: '$refresh'
};

export type ARHookableMethods = keyof ARMethodType | keyof DAOMethodType;

export interface ARHookRule {
  type: 'both' | 'static' | 'instance';
}

export const ARHooks: { [P in ARHookableMethods]: ARHookRule } = {
  $create: { type: 'instance'},
  $update: { type: 'instance'},
  $replace: { type: 'instance'},
  $remove: { type: 'instance'},
  $refresh: { type: 'instance'},

  findById: { type: 'static'},

  find: { type: 'static'},
  findOne: { type: 'static'},

  query: { type: 'static'},
  findAll: { type: 'static'},

  create: { type: 'static'},
  update: { type: 'static'},
  replace: { type: 'static'},
  remove: { type: 'static'},

  /**
   * Clear the whole table representing a resource.
   */
  clear: { type: 'static'}
};

export type ARInterface<T, Z> = TDMModel<T> & {
  [P in keyof typeof ARMethods]: (options?: Z) => T;
};
