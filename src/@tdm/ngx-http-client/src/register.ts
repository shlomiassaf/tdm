import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { targetStore, Constructor } from '@tdm/core/tdm';
import { DAO } from '@tdm/data';
import { HttpDefaultConfig } from './http-default-config';
import { HttpDao } from './core/http-dao';
import { HttpAdapter, HttpAdapterFactoryArgs } from './core/http-adapter';
import { HttpActionMetadata, HttpResourceMetadata } from './metadata';

targetStore.registerAdapter(HttpAdapter, {
  actionMetaClass: HttpActionMetadata,
  DAOClass: HttpDao,
  resourceMetaClass: HttpResourceMetadata
});

/**
 * An HttpDAO factory based for a target.
 */
@Injectable()
export class NgDAO {
  private factoryArgs: HttpAdapterFactoryArgs;

  constructor(httpClient: HttpClient, @Optional() defaultConfig?: HttpDefaultConfig) {
    this.factoryArgs = { httpClient, defaultConfig: defaultConfig || new HttpDefaultConfig() };
  }

  get<T, Z>(target: Z & Constructor<T>): HttpDao<T> {
    return <any> DAO.of(HttpAdapter, target, this.factoryArgs);
  }
}
