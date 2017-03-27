import { metaFactoryFactory, MetaFactoryStatic, targetStore, MetaFactoryInstance, Constructor } from '@tdm/transformation';
import { ActionMetadata } from './action';
import { TargetAdapterMetadataStore } from '../target-adapter-metadata-store';
import { array } from '../../utils';

export interface AdapterMetadataArgs {
  actionMetaClass: MetaFactoryStatic;
  daoClass: Constructor<any>;
  commit?(adapterStore: TargetAdapterMetadataStore): void;
}

export class AdapterMetadata {
  actionMetaClass: MetaFactoryStatic;
  daoClass: Constructor<any>;
  commit?: (adapterStore: TargetAdapterMetadataStore) => void;

  private actions = new Map<any, ActionMetadata[]>();

  addAction(meta: MetaFactoryInstance<ActionMetadata>): void {
    const actions = this.actions.get(meta.target) || [];
    actions.push(meta.metaValue);
    this.actions.set(meta.target, actions);
  }

  getActions(...targets: any[]): ActionMetadata[] {
    const metadataColl = targets.map( t => this.actions.get(t) ).filter( t => !!t );
    return array.flatten(metadataColl);
  }

  private setArgs(obj: AdapterMetadataArgs): this {
    // TODO: possibly be strict and log the state of setArgs to allow it once only.
    Object.assign(this, obj);
    return this;
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
