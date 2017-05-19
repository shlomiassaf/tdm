import { Tixin } from '@tdm/tixin';
import { isPrimitive } from '@tdm/core';
import { TDMCollection as ARecordColl, TDMModel, IdentityValueType, ExecuteContext, ActionMethodType } from '@tdm/data';

import { SeqActionOptions } from '../core/interfaces';
import { SeqActionMetadata } from '../metadata';
import { SeqAction } from '../decorators';
import { SeqDAOActions } from '../core/seq-dao'

export class SeqActiveRecord {
  @SeqAction({
    method: ActionMethodType.CREATE,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => [ctx.body, options]
    },
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<SeqActionMetadata>, options?: SeqActionOptions) => {
      ctx.body = ctx.serialize();
      return options;
    }
  })
  $create: (options?: SeqActionOptions) => this;

  @SeqAction({
    method: ActionMethodType.READ,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => [ctx.getIdentity(), options]
    },
    validation: 'incoming' as 'incoming'
  })
  $refresh: (options?: SeqActionOptions) => this;

  @SeqAction({
    method: ActionMethodType.UPDATE,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<SeqActionMetadata>, options?: SeqActionOptions) => {
      ctx.body = ctx.serialize();
      return options;
    }
  })
  $update: (options?: SeqActionOptions) => this;

  @SeqAction({
    method: ActionMethodType.DELETE,
    seqProxy: {
      args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions) => []
    },
    validation: 'skip' as 'skip'
  })
  $remove: (options?: SeqActionOptions) => this;

  @SeqDAOActions.query
  static query: (options?: SeqActionOptions) => any;
  static findAll: (options?: SeqActionOptions) => any;

  @SeqDAOActions.findById
  static findById: (id: IdentityValueType, options?: SeqActionOptions) => any;

  @SeqDAOActions.find
  static find: (options: SeqActionOptions) =>any;
  static findOne: (options: SeqActionOptions) => any;

  @SeqDAOActions.create
  static create: (data: any | Partial<any>, options?: SeqActionOptions) => any;

  @SeqDAOActions.update
  static update: (data: any | Partial<any>, options?: SeqActionOptions) => any;

  @SeqDAOActions.remove
  static remove: ( (id: IdentityValueType | any, options?: SeqActionOptions) => any );
}

export const ActiveRecordCollection = ARecordColl;
export type ActiveRecordCollection<T> =
  ARecordColl<Tixin<T, TDMModel<T> & SeqActiveRecord>>
    & { query: ActiveRecordCollection<T> };

export interface SeqActiveRecordStatic<T> {
  findById(id: IdentityValueType, options?: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;

  find(options: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;
  findOne(options: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;

  query(options?: SeqActionOptions): ActiveRecordCollection<T>;
  findAll(options?: SeqActionOptions): ActiveRecordCollection<T>;

  create(data: T, options?: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;
  update(data: Partial<T>, options?: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;
  remove(id: IdentityValueType | T, options?: SeqActionOptions): Tixin<T, TDMModel<T> & SeqActiveRecord>;
}


