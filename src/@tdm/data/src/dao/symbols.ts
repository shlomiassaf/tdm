import { Constructor } from '@tdm/core';
import { AdapterStatic } from '../fw';

/**
 * @internal
 */
export const DAOContextSymbol = Symbol('DAO context prop');

export interface DAOContext<T = any> {
  /**
   * The target (resource) to use.
   */
  target: Constructor<any>;
  /**
   * The adapter to use.
   */
  adapter: AdapterStatic<any, any>;
  /**
   * Additional data to pass to the DAO.
   */
  factoryArgs?: T;
}

export interface DAOMethodType {
  findById: any;

  find: any;
  findOne: any;

  query: any;
  findAll: any;

  create: any;
  update: any;
  replace: any;
  remove: any;

  /**
   * Clear the whole table representing a resource.
   */
  clear: any;
}

export type DAOMethods = {
  [P in keyof DAOMethodType]: any
};

export const DAOMethods: DAOMethods = <any> { // Keep this any, or 3rd party extending of DAOMethodType will fail
  findById: 'findById',

  find: 'find',
  findOne: 'findOne',

  query: 'query',
  findAll: 'findAll',

  create: 'create',
  update: 'update',
  replace: 'replace',
  remove: 'remove',

  /**
   * Clear the whole table representing a resource.
   */
  clear: 'clear',
};
