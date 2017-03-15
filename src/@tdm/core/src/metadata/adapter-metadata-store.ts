import { AdapterStatic } from '../fw';
import { AdapterMetadata } from './meta-types';

export class AdapterMetadataStore {
  meta: AdapterMetadata;

  get isAbstract(): boolean {
    return !this.meta;
  }

  constructor(public readonly adapterClass: AdapterStatic<any, any>) {

  }


  setMetadata(meta: AdapterMetadata): void {
    this.meta = meta;

  }

}
