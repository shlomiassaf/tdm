import { TDMModel } from '@tdm/core';
import { DAOMethodType } from '../dao/index';
import { ResourceControl } from '../resource-control';

export interface ARMethodType {
  $create: any;
  $update: any;
  $replace: any;
  $remove: any;
  $get: any;
}

export type ARMethods = { [P in keyof ARMethodType]: any };

/**
 * String enumeration of active record object methods
 */
export const ARMethods: ARMethodType = <any>{
  // Keep this any, or 3rd party extending of ARMethodType will fail
  $create: '$create',
  $update: '$update',
  $replace: '$replace',
  $remove: '$remove',
  $get: '$get'
};

export type ARHookableMethods = keyof ARMethodType | keyof DAOMethodType;

export interface ARHookRule {
  type: 'both' | 'static' | 'instance';
}

export const ARHooks: { [P in ARHookableMethods]: ARHookRule } = {
  $create: { type: 'instance' },
  $update: { type: 'instance' },
  $replace: { type: 'instance' },
  $remove: { type: 'instance' },
  $get: { type: 'instance' },

  findById: { type: 'static' },

  find: { type: 'static' },
  findOne: { type: 'static' },

  query: { type: 'static' },
  findAll: { type: 'static' },

  create: { type: 'static' },
  update: { type: 'static' },
  replace: { type: 'static' },
  remove: { type: 'static' },

  /**
   * Clear the whole table representing a resource.
   */
  clear: { type: 'static' }
};

export type ARInterface<T, Z> = TDMModel<T> &
  { [P in keyof typeof ARMethods]: (options?: Z) => ResourceControl<T> };
