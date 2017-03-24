import { metaFactoryFactory, MetaFactoryStatic, targetStore, MetaFactoryInstance } from '@tdm/transformation';
import { ActionMetadata } from './action';
import { TargetAdapterMetadataStore } from '../target-adapter-metadata-store';
import { array } from '../../utils';

export interface AdapterMetadataArgs {
  actionMetaClass: MetaFactoryStatic;
  commit?(adapterStore: TargetAdapterMetadataStore): void;
}

export class AdapterMetadata {
  actionMetaClass: MetaFactoryStatic;
  commit?: (adapterStore: TargetAdapterMetadataStore) => void;

  private actions = new Map<any, ActionMetadata[]>();

  constructor(obj: AdapterMetadataArgs) {
    Object.assign(this, obj);
  }

  addAction(meta: MetaFactoryInstance<ActionMetadata>): void {
    const actions = this.actions.get(meta.target) || [];
    actions.push(meta.metaValue);
    this.actions.set(meta.target, actions);
  }

  getActions(...targets: any[]): ActionMetadata[] {
    const metadataColl = targets.map( t => this.actions.get(t) ).filter( t => !!t );
    return array.flatten(metadataColl);
  }

  static metaFactory = metaFactoryFactory<AdapterMetadataArgs, AdapterMetadata>(AdapterMetadata);

  static register(meta: MetaFactoryInstance<AdapterMetadata>): void {
    targetStore.getAdapterStore(meta.target).setMetadata(meta.metaValue);
  }
}
