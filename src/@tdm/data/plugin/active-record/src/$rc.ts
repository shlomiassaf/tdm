import { TDMModel, TDMCollection } from '@tdm/core';
import { ResourceControl } from '@tdm/data';

declare module '@tdm/core/tdm/src/model/tdm-model' {
  interface TDMModel<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<this & T>;
  }

  interface TDMModelBase<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<this & T>;
  }
}

export interface StatefulActiveRecordCollection<T>
  extends TDMCollection<T>, TDMModel<StatefulActiveRecordCollection<T>> { }

declare module '@tdm/core/tdm/src/model/tdm-collection' {
  interface TDMCollection<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<this & StatefulActiveRecordCollection<T>>;
  }
}
