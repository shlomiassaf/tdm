import { TDMModel, TDMCollection } from '../../fw';
import { ResourceControl } from './resource-control';


declare module '../../fw/tdm-model' {
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

declare module '../../fw/tdm-collection' {
  interface TDMCollection<T> {
    /**
     * @extension '@tdm/data/add/resource-control'
     */
    readonly $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
