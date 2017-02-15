import { ActiveRecordState } from './active-record-state';

export class ActiveRecordCollection<T /* extends ActiveRecord<any, any> */>  {
  readonly $ar = new ActiveRecordState<ActiveRecordCollection<T>>(this as any);

  collection: Array<T> = [];
}
