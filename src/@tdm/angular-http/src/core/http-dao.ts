import { Observable } from 'rxjs/Observable';
import { isPrimitive } from '@tdm/transformation';
import { ActiveRecordCollection as ARecordColl, AdapterDAO, IdentityValueType, ExecuteContext } from '@tdm/core';

import { HttpActionOptions } from './interfaces';
import { HttpActionMetadata, HttpActionMethodType } from '../metadata';
import { HttpAction } from '../decorators';

export class HttpDao implements AdapterDAO<HttpActionOptions> {
  @HttpAction({
    method: HttpActionMethodType.Get,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming'
  })
  query: <T>(options?: HttpActionOptions) => Observable<ARecordColl<T>>;

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
  create: <T>(data: T | Partial<T>, options?: HttpActionOptions) => Observable<T | void>;

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
  update: <T>(data: T | Partial<T>, options?: HttpActionOptions) => Observable<T | void>;

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
  remove: ( (id: IdentityValueType, options?: HttpActionOptions) => Observable<void> )
          | ( <T>(id: T, options?: HttpActionOptions) => Observable<void> );

}
