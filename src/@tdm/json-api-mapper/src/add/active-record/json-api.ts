import { ActiveRecordState } from '@tdm/core/active-record/active-record-state';

ActiveRecordState.prototype.select = '';

declare module '@tdm/core/active-record/active-record-state' {
  interface ActiveRecordState<T> {
    select: string;
  }
}
