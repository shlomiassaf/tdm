import { Tixin } from '@tdm/tixin';
import { isPrimitive } from '@tdm/transformation';
import { ActiveRecordCollection as ARecordColl, BaseActiveRecord, IdentityValueType, ExecuteContext } from '@tdm/core';

import { HttpActionOptions } from './interfaces';
import { HttpActionMetadata, HttpActionMethodType } from '../metadata';
import { HttpAction } from '../decorators';

export class HttpDao {
  @HttpAction({
    method: HttpActionMethodType.Get,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming'
  })
  query: (options?: HttpActionOptions) => ARecordColl<any>;

  @HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<HttpActionMetadata>, id: IdentityValueType, options?: HttpActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  find: (id: IdentityValueType, options?: HttpActionOptions) => any;

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
  remove: (id: IdentityValueType | any, options?: HttpActionOptions) => any;

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
  create: (data: any, options?: HttpActionOptions) => any;

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
  update: (data: any, options?: HttpActionOptions) => any;
}
