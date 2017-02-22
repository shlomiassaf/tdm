import { ActionErrorResourceEvent } from '../active-record/active-record-events';
import { ResourceError } from '../core/errors';
import { promiser } from '../utils';

/**
 * Returns a promise that will resolve when the current action ends.
 * Throws a `ResourceError` if not in an action.
 * @returns Promise<any>
 */
export function next<T>(): Promise<T> {
  if (!this.busy) {
    return Promise.reject(new ResourceError(this.parent, 'Call to next() while not in an active action.'));
  } else {
    const p = promiser<any>();
    const subs = this.events$.subscribe( event => {
      // TODO: handle ActionCancel and throw an error that represent a cancel
      // since promises does not cancel this is a design hole...
      if (event.type === 'ActionError') {
        p.reject((event as ActionErrorResourceEvent).error);
        subs.unsubscribe();
      } else if (event.type === 'ActionEnd') {
        p.resolve(this.parent);
        subs.unsubscribe();
      }
    });
    return p.promise;
  }
};
