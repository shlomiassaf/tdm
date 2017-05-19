import { Constructor, targetStore } from '@tdm/core';
import { DAO } from '@tdm/data';
import { SeqDAO } from './core/seq-dao';
import { SeqAdapter } from './core';
import { SeqActionMetadata, SeqResourceMetadata } from './metadata';

targetStore.registerAdapter(SeqAdapter, {
  actionMetaClass: SeqActionMetadata,
  DAOClass: SeqDAO,
  resourceMetaClass: SeqResourceMetadata
});


DAO.seq = function seq<T, Z>(target: Z & Constructor<T>): SeqDAO<T> {
  return DAO.of(SeqAdapter, target);
};

declare module '@tdm/data/dao' {
  module DAO {
    /**
     * Data Access Object for Angular HTTP adapter.
     * @extension '@tdm/ngx-http'
     */
    function seq<T>(target: Constructor<T>): SeqDAO<T>;
  }
}
