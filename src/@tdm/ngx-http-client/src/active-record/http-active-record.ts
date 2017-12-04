import { Tixin } from '@tdm/tixin';
import { TDMCollection as ARecordColl, TDMModel, IdentityValueType, ExecuteContext } from '@tdm/data';

import { HttpActionOptions } from '../core/interfaces';
import { HttpActionMetadata, HttpActionMethodType } from '../metadata';
import { HttpAction } from '../decorators';
import { HttpDAOActions } from '../core/http-dao';

export class HttpActiveRecord {
  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, options?: HttpActionOptions) => {
      ctx.data = ctx.serialize();
      return options;
    }
  })
  $create: (options?: HttpActionOptions) => this;

  @HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming'
  })
  $refresh: (options?: HttpActionOptions) => this;

  @HttpAction({
    method: HttpActionMethodType.Put,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, options?: HttpActionOptions) => {
      ctx.data = ctx.serialize();
      return options;
    }
  })
  $update: (options?: HttpActionOptions) => this;

  @HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip'
  })
  $remove: (options?: HttpActionOptions) => this;

  @HttpDAOActions.query
  static query: (options?: HttpActionOptions) => any;
  static findAll: (options?: HttpActionOptions) => any;

  @HttpDAOActions.findById
  static findById: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpDAOActions.find
  static find: (options: HttpActionOptions) =>any;
  static findOne: (options: HttpActionOptions) => any;

  @HttpDAOActions.create
  static create: (data: any | Partial<any>, options?: HttpActionOptions) => any;

  @HttpDAOActions.update
  static update: (data: any | Partial<any>, options?: HttpActionOptions) => any;

  @HttpDAOActions.remove
  static remove: ( (id: IdentityValueType | any, options?: HttpActionOptions) => any );
}

export const ActiveRecordCollection = ARecordColl;
export type ActiveRecordCollection<T> =
  ARecordColl<Tixin<T, TDMModel<T> & HttpActiveRecord>>
    & { query: ActiveRecordCollection<T> };

export interface HttpActiveRecordStatic<T>  {
  findById(id: IdentityValueType, options?: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;

  find(options: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;
  findOne(options: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;

  query(options?: HttpActionOptions): this & ActiveRecordCollection<T>;
  findAll(options?: HttpActionOptions): this & ActiveRecordCollection<T>;

  create(data: T, options?: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;
  update(data: Partial<T>, options?: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;
  remove(id: IdentityValueType | T, options?: HttpActionOptions): Tixin<T, TDMModel<T> & HttpActiveRecord>;
}
