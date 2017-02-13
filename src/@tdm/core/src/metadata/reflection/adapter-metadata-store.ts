import { AdapterStatic } from '../../core/interfaces';
import { AdapterMetadata } from '../meta-types';

export class AdapterMetadataStore {
  meta: AdapterMetadata<any, any>;

  get isAbstract(): boolean {
    return !this.meta;
  }

  constructor(public readonly adapterClass: AdapterStatic<any, any>) {

  }


  setMetadata(meta: AdapterMetadata<any, any>): void {
    this.meta = meta;

  }

}
