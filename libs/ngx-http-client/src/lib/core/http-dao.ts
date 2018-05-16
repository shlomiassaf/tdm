import { isPrimitive } from '@tdm/core/tdm';
import { TargetDAO, IdentityValueType, ExecuteContext } from '@tdm/data';

import { HttpActionOptions } from './interfaces';
import { HttpActionMetadata, HttpActionMethodType } from '../metadata';
import { HttpAction } from '../decorators';

export const HttpDAOActions = {
  query: HttpAction({
    method: HttpActionMethodType.Get,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming',
    alias: 'findAll'
  }),

  findById: HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming',
    pre: (
      ctx: ExecuteContext<HttpActionMetadata>,
      id: IdentityValueType,
      options?: HttpActionOptions
    ) => {
      ctx.setIdentity(id);
      return options;
    }
  }),

  find: HttpAction({
    method: HttpActionMethodType.Get,
    validation: 'incoming' as 'incoming',
    alias: 'findOne'
  }),

  create: HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    pre: (
      ctx: ExecuteContext<HttpActionMetadata>,
      data: any,
      options?: HttpActionOptions
    ) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.data = ctx.serialize();

      return options;
    }
  }),

  update: HttpAction({
    method: HttpActionMethodType.Put,
    validation: 'both' as 'both',
    pre: (
      ctx: ExecuteContext<HttpActionMetadata>,
      data: any,
      options?: HttpActionOptions
    ) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.data = ctx.serialize();

      return options;
    }
  }),

  replace: HttpAction({
    method: HttpActionMethodType.Patch,
    validation: 'both' as 'both',
    pre: (
      ctx: ExecuteContext<HttpActionMetadata>,
      data: any,
      options?: HttpActionOptions
    ) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.data = ctx.serialize();

      return options;
    }
  }),

  remove: HttpAction({
    method: HttpActionMethodType.Delete,
    validation: 'skip' as 'skip',
    pre: (
      ctx: ExecuteContext<HttpActionMetadata>,
      id: IdentityValueType | any,
      options?: HttpActionOptions
    ) => {
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

export class HttpDao<T> implements TargetDAO<T, HttpActionOptions> {
  @HttpDAOActions.query query: (options?: HttpActionOptions) => Promise<T[]>;
  findAll: (options?: HttpActionOptions) => Promise<T[]>;

  @HttpDAOActions.findById
  findById: (id: IdentityValueType, options?: HttpActionOptions) => Promise<T>;

  @HttpDAOActions.find find: (options: HttpActionOptions) => Promise<T>;
  findOne: (options: HttpActionOptions) => Promise<T>;

  @HttpDAOActions.create
  create: (
    data: T | Partial<T>,
    options?: HttpActionOptions
  ) => Promise<T | void>;

  @HttpDAOActions.update
  update: (
    data: T | Partial<T>,
    options?: HttpActionOptions
  ) => Promise<T | void>;

  @HttpDAOActions.replace
  replace: (
    data: T | Partial<T>,
    options?: HttpActionOptions
  ) => Promise<T | void>;

  @HttpDAOActions.remove
  remove: ((
    id: IdentityValueType | T,
    options?: HttpActionOptions
  ) => Promise<void>);
}
