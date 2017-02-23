import { ActiveRecordState } from '../../active-record-state/active-record-state';
import { next } from '../../active-record-state/next';

/**
 * Returns a promise that will resolve when the current action ends.
 * Throws a `ResourceError` if not in an action.
 * @returns Promise<any>
 */
ActiveRecordState.prototype.next = next;

declare module '../../active-record-state/active-record-state' {
  interface ActiveRecordState<T> {
    /**
     * Returns a promise that will resolve when the current action ends.
     * Throws a `ResourceError` if not in an action.
     * @returns Promise<any>
     * @extension '@tdm/core/add/active-record-state/next'
     */
    next(): Promise<T>
  }
}
