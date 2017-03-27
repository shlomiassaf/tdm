import { Tixin } from '@tdm/tixin';
import { isPrimitive } from '@tdm/transformation';
import { ActiveRecordCollection as ARecordColl, BaseActiveRecord, IdentityValueType, ExecuteContext } from '@tdm/core';

import { HttpActionOptions } from './core/interfaces';
import { HttpActionMetadata, HttpActionMethodType } from './metadata';
import { HttpAction } from './decorators';

export class BaseRestResource {
  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, options?: HttpActionOptions) => {
      ctx.body = ctx.serialize();
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
      ctx.body = ctx.serialize();
      return options;
    }
  })
  $update: (options?: HttpActionOptions) => this;

  @HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip'
  })
  $remove: (options?: HttpActionOptions) => this;

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
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options?: HttpActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  static find: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType | any, options?: HttpActionOptions) => {

      if (isPrimitive(id)) {
        ctx.setIdentity(id);
      } else if (ctx.instanceOf(id)) {
        ctx.instance = id;
      } else {
        ctx.deserialize(id);
      }

      return options;
    }
  })
  static remove: (id: IdentityValueType | any, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options?: HttpActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.instance = data;
      } else {
        ctx.deserialize(data);
      }

      ctx.body = ctx.serialize();

      return options;
    }
  })
  static create: (data: any, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Put,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options?: HttpActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.instance = data;
      } else {
        ctx.deserialize(data);
      }

      ctx.body = ctx.serialize();

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
  create(data: T, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  update(data: Partial<T>, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  remove(id: IdentityValueType | T, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
}


