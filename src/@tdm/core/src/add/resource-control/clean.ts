import { LazyInit } from '@tdm/transformation';
import { BaseActiveRecord } from '../../fw';
import { onCreateNew, ActiveRecordCollection } from '../../active-record';
import { ResourceControl } from '../../resource-control';
import { setGetCtrl } from '../../resource-control/get-ctrl';

const privateDict = new WeakMap<any, ResourceControl<any>>();

function onCreateNewHandler(instance: any): void {
  privateDict.set(instance, new ResourceControl<any>(instance as any) );
}
onCreateNew(onCreateNewHandler);

setGetCtrl(<T>(instance: T): ResourceControl<T> | undefined => privateDict.get(instance));

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
