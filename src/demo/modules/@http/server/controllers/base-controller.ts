import { Constructor } from '@tdm/core';
import { DAO } from '@tdm/data';
import {
  ServiceMockGet,
  ServiceMockPost,
  ServiceMockPut,
  ServiceMockPatch,
  Body,
  Param
} from '@tdm/service-mocker';

export abstract class BaseController<T> {

  abstract modelClass: Constructor<T>;

  @ServiceMockGet({
    path: '/'
  })
  getAll(): Promise<T[]> {
    return new DAO().query(this.modelClass);
  };

  @ServiceMockGet({
    path: '/:id'
  })
  get(@Param('id') id: number): Promise<T> {
    return new DAO().findById(this.modelClass, id);
  };

  @ServiceMockPost({
    path: '/',
    httpCode: 204
  })
  create(@Body() body): Promise<T | void> {
    return new DAO().create<T>(this.modelClass, body);
  };

  @ServiceMockPatch({
    path: '/:id',
    httpCode: 204
  })
  update(@Body() body): Promise<void> {
    return new DAO().update(this.modelClass, body).then(() => null );
  };

  @ServiceMockPut({
    path: '/:id',
    httpCode: 204
  })
  replace(@Body() body): Promise<void> {
    return new DAO().replace(this.modelClass, body).then(() => null );
  };
}
