import { targetStore, Constructor } from '@tdm/core/tdm';
import { DAO } from '@tdm/data';
import { LocalForageActionMetadata, LocalForageResourceMetadata } from './metadata';
import { LocalForageAdapter } from './core';
import { LocalForageDao } from './local-forage-dao';

targetStore.registerAdapter(LocalForageAdapter, {
  actionMetaClass: LocalForageActionMetadata,
  DAOClass: LocalForageDao,
  resourceMetaClass: LocalForageResourceMetadata
});

/**
 * An HttpDAO factory based for a target.
 */
export class LocalForageDaoFactory {
  get<T, Z>(target: Z & Constructor<T>): LocalForageDao<T> {
    return <any> DAO.of(LocalForageAdapter, target);
  }
}

DAO.localForage = LocalForageDaoFactory.prototype.get;

declare module '@tdm/data/lib/dao/dao' {
  module DAO { // tslint:disable-line:no-internal-module
    /**
     * Data Access Object for the localForage adapter.
     */
    function localForage<T>(target: Constructor<T>): LocalForageDao<T>;
  }
}
