import { Tixin } from '@tdm/tixin';
import { ActiveRecordCollection as ARecordColl, BaseActiveRecord, IdentityValueType, ExecuteContext } from '@tdm/core';

import { HttpActionOptions } from './core/interfaces';
import { HttpActionMetadata, HttpAction, HttpActionMethodType } from './metadata';

export class BaseRestResource {
  @HttpAction({
    method: HttpActionMethodType.Get,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming'
  })
  static query: (options?: HttpActionOptions) => ARecordColl<any>;

  @HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options: HttpActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  static find: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options: HttpActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  static remove: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    sendBody: true,
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options: HttpActionOptions) => {
      ctx.deserialize(data);
      return options;
    }
  })
  static create: (data: any, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Put,
    validation: 'both' as 'both',
    sendBody: true,
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options: HttpActionOptions) => {
      ctx.deserialize(data);
      return options;
    }
  })
  static update: (data: any, options?: HttpActionOptions) => any;
}

export const ActiveRecordCollection = ARecordColl;
export type ActiveRecordCollection<T> =
  ARecordColl<Tixin<T, BaseActiveRecord<T> & BaseRestResource>>
    & { query: ActiveRecordCollection<T> };

export interface BaseRestResourceStatic<T> {
  find(id: IdentityValueType, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  query(options?: HttpActionOptions): ActiveRecordCollection<T>;
  create(data: Partial<T>, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  update(data: Partial<T>, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  remove(id: IdentityValueType, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
}


