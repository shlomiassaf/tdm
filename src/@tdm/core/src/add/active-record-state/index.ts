import { LazyInit } from '@tdm/transformation';
import { BaseActiveRecord } from '../../fw';
import { onCreateNew, ActiveRecordCollection } from '../../active-record';
import { ActiveRecordState } from '../../active-record-state';

function onCreateNewHandler(instance: any): void {
  Object.defineProperty(instance, '$ar', { value: new ActiveRecordState<any>(instance as any) });
}
onCreateNew(onCreateNewHandler);

declare module '../../active-record/interfaces' {
  interface BaseActiveRecord<T> {
    /**
     * @extension '@tdm/core/add/active-record-state'
     */
    readonly $ar: ActiveRecordState<T>;
  }
}


export class StatefulActiveRecordCollection<T> implements BaseActiveRecord<StatefulActiveRecordCollection<T>> {
  @LazyInit(function(this:  StatefulActiveRecordCollection<T>): ActiveRecordState<StatefulActiveRecordCollection<T>> {
    return new ActiveRecordState<StatefulActiveRecordCollection<T>>(this);
  })
  $ar: ActiveRecordState<StatefulActiveRecordCollection<T>>;
}

declare module '../../active-record/active-record-collection' {
  interface ActiveRecordCollection<T> {
    /**
     * @extension '@tdm/core/add/active-record-state'
     */
    readonly $ar: ActiveRecordState<StatefulActiveRecordCollection<T>>;
  }
}
ActiveRecordCollection.extend(StatefulActiveRecordCollection);
