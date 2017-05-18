import { Constructor, targetStore } from '@tdm/core';
import { DAO } from '@tdm/data';
import { HttpDao } from './core/http-dao';
import { HttpAdapter } from './core';
import { HttpActionMetadata } from './metadata';

targetStore.registerAdapter(HttpAdapter, {
  actionMetaClass: HttpActionMetadata,
  DAOClass: HttpDao
});

/**
 * An HttpDAO factory based for a target.
 */
export class NgDAO {
  get<T, Z>(target: Z & Constructor<T>): HttpDao<T> {
    return DAO.of(HttpAdapter, target);
  }
}

DAO.angularHttp = NgDAO.prototype.get;

declare module '@tdm/data/dao' {
  module DAO {
    /**
     * Data Access Object for Angular HTTP adapter.
     * @extension '@tdm/ngx-http'
     */
    function angularHttp<T>(target: Constructor<T>): HttpDao<T>;
  }
}
