import { BaseActiveRecord } from '../../active-record/active-record-interfaces';
import { onCreateNew } from '../../active-record/active-record';
import { ActiveRecordCollection } from '../../active-record/active-record-collection';
import { ActiveRecordState as ActiveRecordState_ } from '../../active-record-state/active-record-state';

function onCreateNewHandler(instance: any): void {
  /**
   * Make active record prop future proof for refactoring.
   */
// (Object.defineProperty as DefinePropertyTyped<typeof ARProps, ActiveRecordState<T>>)
//   (this, '$ar', { value: new ActiveRecordState<T>(this as any) });

  Object.defineProperty(instance, '$ar', { value: new ActiveRecordState_<any>(instance as any) });
}
onCreateNew(onCreateNewHandler);

declare module '../../active-record/active-record-interfaces' {
  interface BaseActiveRecord<T> {
    /**
     * @extension '@tdm/core/add/active-record-state'
     */
    readonly $ar: ActiveRecordState_<T>;
  }
}

Object.defineProperty(ActiveRecordCollection.prototype, '$ar', {
  configurable: true,
  get: function() {
    Object.defineProperty(this, '$ar', { value: new ActiveRecordState_<any>(this as any)})
  }
});

declare module '../../active-record/active-record-collection' {
  interface ActiveRecordCollection<T> {
    /**
     * @extension '@tdm/core/add/active-record-state'
     */
    readonly $ar: ActiveRecordState_<ActiveRecordCollection<T>>;
  }
}

declare module '@tdm/core' {
  export type ActiveRecordState<T> = ActiveRecordState_<T>;
}
