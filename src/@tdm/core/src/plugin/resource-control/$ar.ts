import { BaseActiveRecord } from '../../fw';
import { ActiveRecordCollection } from '../../active-record';
import { ResourceControl } from './resource-control';


declare module '../../active-record/interfaces' {
  interface BaseActiveRecord<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<T>;
  }
}


export interface StatefulActiveRecordCollection<T> extends ActiveRecordCollection<T>, BaseActiveRecord<StatefulActiveRecordCollection<T>> { }

declare module '../../active-record/active-record-collection' {
  interface ActiveRecordCollection<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
