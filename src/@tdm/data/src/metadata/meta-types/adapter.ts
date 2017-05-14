import { metaFactoryFactory, MetaFactoryStatic, targetStore, MetaFactoryInstance, Constructor } from '@tdm/core';
import { ActionMetadata } from './action';
import { array } from '../../utils';
import { DAOMethods, DAOAdapter, DAOTarget } from '../../fw';

function unsupportedDAOCmd() {
  // TODO: normalize error.
  return Promise.reject(new Error(`DAO does not support this action`));
}

export interface AdapterMetadataArgs {
  actionMetaClass: MetaFactoryStatic;
  DAOClass: Constructor<any>;
}

export class AdapterMetadata {
  actionMetaClass: MetaFactoryStatic;
  DAOClass: Constructor<any>;

  private actions = new Map<any, ActionMetadata[]>();

  addAction(meta: MetaFactoryInstance<ActionMetadata>): void {
    const actions = this.actions.get(meta.target) || [];
    actions.push(meta.metaValue);
    this.actions.set(meta.target, actions);
  }

  getDAOAction(key: string): ActionMetadata {
    return this.actions.get(this.DAOClass).find(a => a.name === key);
  }

  getActions(...targets: any[]): ActionMetadata[] {
    const metadataColl = targets.map( t => this.actions.get(t) ).filter( t => !!t );
    return array.flatten(metadataColl);
  }

  private setArgs(obj: AdapterMetadataArgs): this {
    // TODO: possibly be strict and log the state of setArgs to allow it once only.
    Object.assign(this, obj);

    this.buildDAO();

    return this;
  }

  private buildDAO(): void {
    const actions = this.getActions(this.DAOClass);
    const daoProto = this.DAOClass.prototype;

    actions.forEach(action => {
      if (action.decoratorInfo.isStatic) {
        throw new Error('DAO can define static actions.');
      }

      daoProto[action.name] = function (...args: any[]) {
        return targetStore.getAC(this[DAOTarget], this[DAOAdapter])
          .createExecFactory(action, 'promise')(undefined, true, ...args);
      };
    });

    // set unsupported handlers for missing commands.
    const keys = Object.keys(DAOMethods);
    for (let i=0, len=keys.length; i<len; i++) {
      if (!daoProto[keys[i]]) {
        daoProto[keys[i]] = unsupportedDAOCmd;
      }
    }

  }

  // this is here so we don't break the flow.
  // adapter meta is different the other meta's since it might get created before the meta is available
  // since metadata (actions) for the adapter might be set before the meta is created.
  // this workaround prevents the need for an adapter store, the meta is used as the store.
  // to support that we allow setting the metadata args in a later period.
  // the register() method is aware of that and knows how to handle this scenario.
  static metaFactory = metaFactoryFactory<AdapterMetadataArgs, AdapterMetadata>(AdapterMetadata, (meta: any, metaArgs: any) => meta.metaArgs = metaArgs );

  static register(meta: MetaFactoryInstance<AdapterMetadata> & { metaArgs: AdapterMetadataArgs}): void {
    targetStore.getAdapter(meta.target).setArgs(meta.metaArgs);
  }
}
