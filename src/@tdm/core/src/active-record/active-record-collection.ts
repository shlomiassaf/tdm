import { Type } from '@tdm/tixin';

import { DefinePropertyTyped } from '../utils';
import { ActiveRecordState } from './active-record-state';
import { ARProps, BaseActiveRecord } from './active-record-interfaces';

export class ActiveRecordCollection<T /* extends ActiveRecord<any, any> */>  {
  readonly $ar = new ActiveRecordState<ActiveRecordCollection<T>>(this as any);

  collection: Array<T>;

  constructor() {

  }
}
