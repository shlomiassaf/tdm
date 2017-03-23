import { LazyInit } from '@tdm/transformation';
import { BaseActiveRecord } from '../../fw';
import { onCreateNew, ActiveRecordCollection } from '../../active-record';
import { ResourceControl } from '../../resource-control';
import { setGetCtrl } from '../../resource-control/get-ctrl';

function onCreateNewHandler(instance: any): void {
  Object.defineProperty(instance, '$ar', { value: new ResourceControl<any>(instance as any) });
}
onCreateNew(onCreateNewHandler);

setGetCtrl(<T>(instance: BaseActiveRecord<T>): ResourceControl<T> | undefined => instance.$ar);


declare module '../../active-record/interfaces' {
  interface BaseActiveRecord<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<T>;
  }
}


export class StatefulActiveRecordCollection<T> extends ActiveRecordCollection<T> implements BaseActiveRecord<StatefulActiveRecordCollection<T>> {
  @LazyInit(function(this:  StatefulActiveRecordCollection<T>): ResourceControl<StatefulActiveRecordCollection<T>> {
    return new ResourceControl<StatefulActiveRecordCollection<T>>(this);
  })
  $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
}

declare module '../../active-record/active-record-collection' {
  interface ActiveRecordCollection<T> {
    /**
     * @extension '@tdm/core/add/resource-control'
     */
    readonly $ar: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
ActiveRecordCollection.extend(StatefulActiveRecordCollection);
