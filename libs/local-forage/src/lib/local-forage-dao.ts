import { isPrimitive } from '@tdm/core/tdm';
import {
  TDMCollection as ARecordColl,
  ActionMethodType,
  TargetDAO,
  IdentityValueType,
  ExecuteContext
} from '@tdm/data';

import { LocalForageActionOptions } from './core';
import { LocalForageActionMetadata } from './metadata';
import { LocalForageAction } from './decorators';

export const LocalForageDaoActions = {
  query: LocalForageAction({
    method: ActionMethodType.READ,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming',
    alias: 'findAll'
  }),

  findById: LocalForageAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>,
          id: IdentityValueType,
          options?: LocalForageActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  }),

  find: LocalForageAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming',
    alias: 'findOne'
  }),

  create: LocalForageAction({
    method: ActionMethodType.CREATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>, data: any, options?: LocalForageActionOptions) => {
      ctx.data = data;
      return options;
    }
  }),

  createBulk: LocalForageAction({
    method: ActionMethodType.CREATE,
    isCollection: true,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>, data: any, options?: LocalForageActionOptions) => {
      ctx.data = data;
      return options;
    }
  }),

  update: LocalForageAction({
    method: ActionMethodType.UPDATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>, data: any, options?: LocalForageActionOptions) => {
      ctx.data = data;
      return options;
    }
  }),

  replace: LocalForageAction({
    method: ActionMethodType.REPLACE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>, data: any, options?: LocalForageActionOptions) => {
      ctx.data = data;
      return options;
    }
  }),

  remove: LocalForageAction({
    method: ActionMethodType.DELETE,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<LocalForageActionMetadata>,
          id: IdentityValueType | any,
          options?: LocalForageActionOptions) => {

      if ( isPrimitive(id) ) {
        ctx.setIdentity(id);
      } else if ( ctx.instanceOf(id) ) {
        ctx.setInstance(id);
      } else {
        ctx.deserialize(id);
      }

      return options;
    }
  }),

  clear: LocalForageAction({
    method: ActionMethodType.DELETE,
    validation: 'skip' as 'skip'
  })
};

export class LocalForageDao<T> implements TargetDAO<T, LocalForageActionOptions> {
  @LocalForageDaoActions.query
  query: (options?: LocalForageActionOptions) => Promise<ARecordColl<T>>;
  findAll: (options?: LocalForageActionOptions) => Promise<ARecordColl<T>>;

  @LocalForageDaoActions.findById
  findById: (id: IdentityValueType, options?: LocalForageActionOptions) => Promise<T>;

  @LocalForageDaoActions.find
  find: (options: LocalForageActionOptions) => Promise<T>;
  findOne: (options: LocalForageActionOptions) => Promise<T>;

  @LocalForageDaoActions.create
  create: (data: T | Partial<T>, options?: LocalForageActionOptions) => Promise<T | void>;

  @LocalForageDaoActions.createBulk
  createBulk: (data: T[] | Partial<T[]>, options?: LocalForageActionOptions) => Promise<T[] | void>;

  @LocalForageDaoActions.update
  update: (data: T | Partial<T>, options?: LocalForageActionOptions) => Promise<T | void>;

  @LocalForageDaoActions.replace
  replace: (data: T | Partial<T>, options?: LocalForageActionOptions) => Promise<T | void>;

  @LocalForageDaoActions.remove
  remove: ( (id: IdentityValueType | T, options?: LocalForageActionOptions) => Promise<void> );

  @LocalForageDaoActions.clear
  clear: ( () => Promise<void> );
}
