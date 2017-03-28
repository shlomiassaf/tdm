import { Constructor } from '@tdm/transformation';
import { DAO } from '@tdm/core';
import { HttpDao } from './core/http-dao';
import { targetStore } from '@tdm/transformation/metadata';
import { HttpAdapter } from './core';
import { HttpActionMetadata } from './metadata';

targetStore.registerAdapter(HttpAdapter, {
  actionMetaClass: HttpActionMetadata,
  DAOClass: HttpDao
});


DAO.angularHttp = function angularHttp<T, Z>(target: Z & Constructor<T>): HttpDao<T> {
  return DAO.of(HttpAdapter, target);
};

declare module '@tdm/core/dao' {
  module DAO {
    /**
     * Data Access Object for Angular HTTP adapter.
     * @extension '@tdm/angular-http'
     */
    function angularHttp<T>(target: Constructor<T>): HttpDao<T>;
  }
}
