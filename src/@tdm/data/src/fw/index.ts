export * from './interfaces';
export * from './errors';
export * from './plugin';


/**
 * @internal
 * @type {symbol}
 */
export const DAOTarget = Symbol('DAO target prop');

/**
 * @internal
 * @type {symbol}
 */
export const DAOAdapter = Symbol('DAO adapter prop');

export const DAOMethods = {
  find: 'find' as 'find',
  query: 'query' as 'query',
  create: 'create' as 'create',
  update: 'update' as 'update',
  remove: 'remove' as 'remove',
};

