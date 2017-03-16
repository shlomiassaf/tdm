import { Tixin } from '@tdm/tixin';
import { ActiveRecordCollection, BaseActiveRecord, IdentityValueType, ExecuteContext } from '@tdm/core';

import { HttpActionOptions } from './core/interfaces';
import { HttpActionMetadata, HttpAction, HttpActionMethodType } from './metadata';

export class BaseRestResource {
  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    sendBody: true
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
    sendBody: true
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
    validation: 'incoming' as 'incoming'
  })
  static query: (options?: HttpActionOptions) => ActiveRecordCollection<any>;

  @HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options: HttpActionOptions) => {
      ctx.data[ctx.adapterStore.identity] = id;
      return options;
    }
  })
  static find: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options: HttpActionOptions) => {
      ctx.data[ctx.adapterStore.identity] = id;
      return options;
    }
  })
  static remove: (id: IdentityValueType, options?: HttpActionOptions) => any;

  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    sendBody: true,
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options: HttpActionOptions) => {
      // TODO: use directMapper here, this will choose the user defined mapper
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
      // TODO: use directMapper here, this will choose the user defined mapper
      ctx.deserialize(data);
      return options;
    }
  })
  static update: (data: any, options?: HttpActionOptions) => any;
}

export interface BaseRestResourceStatic<T> {
  find(id: IdentityValueType, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  query(options?: HttpActionOptions): ActiveRecordCollection<Tixin<T, BaseActiveRecord<T> & BaseRestResource>>;
  create(data: Partial<T>, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  update(data: Partial<T>, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
  remove(id: IdentityValueType, options?: HttpActionOptions): Tixin<T, BaseActiveRecord<T> & BaseRestResource>;
}


