import { TDMModel, TDMCollection } from '@tdm/core';
import { ResourceControl } from './resource-control';


declare module '@tdm/core/model/tdm-model' {
  interface TDMModel<T> {
    /**
     * @extension '@tdm/data/add/resource-control'
     */
    readonly $ar: ResourceControl<T>;
  }

  interface TDMModelBase<T> {
    /**
     * @extension '@tdm/data/add/resource-control'
     */
    readonly $ar: ResourceControl<T>;
  }
}


export interface StatefulActiveRecordCollection<T> extends TDMCollection<T>, TDMModel<StatefulActiveRecordCollection<T>> { }

declare module '@tdm/core/model/tdm-collection' {
  interface TDMCollection<T> {
    /**
     * @extension '@tdm/data/add/resource-control'
     */
    readonly $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
