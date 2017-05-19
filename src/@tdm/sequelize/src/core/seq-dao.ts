import { isPrimitive } from '@tdm/core';
import { TDMCollection as ARecordColl, TargetDAO, IdentityValueType, ExecuteContext, ActionMethodType } from '@tdm/data';

import { SeqActionOptions } from './interfaces';
import { SeqActionMetadata } from '../metadata';
import { SeqAction } from '../decorators';

export const SeqDAOActions = {
  query: SeqAction({
    method: ActionMethodType.READ,
    seqProxy: {
      method: 'findAll',
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming',
    alias: 'findAll'
  }),
  findById: SeqAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming',
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions, id: IdentityValueType) => [id]
    },
    pre: (ctx: ExecuteContext<SeqActionMetadata>, id: IdentityValueType, options?: SeqActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  }),
  find: SeqAction({
    method: ActionMethodType.READ,
    seqProxy: {
      method: 'find',
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    validation: 'incoming' as 'incoming',
    alias: 'findOne'
  }),
  create: SeqAction({
    method: ActionMethodType.READ,
    validation: 'both' as 'both',
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => {
        return [ctx.body, options];
      }
    },
    pre: (ctx: ExecuteContext<SeqActionMetadata>, data: any, options?: SeqActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }
      ctx.body = ctx.serialize();
      return options;
    }
  }),
  update: SeqAction({
    method: ActionMethodType.UPDATE,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<SeqActionMetadata>, data: any, options?: SeqActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.body = ctx.serialize();

      return options;
    }
  }),
  remove: SeqAction({
    method: ActionMethodType.DELETE,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<SeqActionMetadata>, id: IdentityValueType | any, options?: SeqActionOptions) => {

      if (isPrimitive(id)) {
        ctx.setIdentity(id);
      } else if (ctx.instanceOf(id)) {
        ctx.setInstance(id);
      } else {
        ctx.deserialize(id);
      }

      return options;
    }
  })
};

export class SeqDAO<T> implements TargetDAO<T, SeqActionOptions> {
  @SeqDAOActions.query
  query: (options?: SeqActionOptions) => Promise<ARecordColl<T>>;
  findAll: (options?: SeqActionOptions) => Promise<ARecordColl<T>>;

  @SeqDAOActions.findById
  findById: (id: IdentityValueType, options?: SeqActionOptions) => Promise<T>;

  @SeqDAOActions.find
  find: (options: SeqActionOptions) => Promise<T>;
  findOne: (options: SeqActionOptions) => Promise<T>;

  @SeqDAOActions.create
  create: (data: T | Partial<T>, options?: SeqActionOptions) => Promise<T | void>;

  @SeqDAOActions.update
  update: (data: T | Partial<T>, options?: SeqActionOptions) => Promise<T | void>;

  @SeqDAOActions.remove
  remove: ( (id: IdentityValueType | T, options?: SeqActionOptions) => Promise<void> );
}
