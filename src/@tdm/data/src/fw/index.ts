export * from './interfaces';
export * from './errors';
export * from './plugin';

/**
 * @internal
 */
export const DAOTarget = Symbol('DAO target prop');

/**
 * @internal
 */
export const DAOAdapter = Symbol('DAO adapter prop');

export const DAOMethods = {
  findById: 'findById' as 'findById',

  find: 'find' as 'find',
  findOne: 'findOne' as 'findOne',

  query: 'query' as 'query',
  findAll: 'findAll' as 'findAll',

  create: 'create' as 'create',
  update: 'update' as 'update',
  remove: 'remove' as 'remove',
};

