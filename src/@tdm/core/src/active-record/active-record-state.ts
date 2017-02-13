import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import { DefineProperties, promiser } from '../utils';
import { ResourceEvent, CancellationTokenResourceEvent, ActionErrorResourceEvent } from './active-record-events';
import { BaseActiveRecord } from './active-record-interfaces';
import { ResourceError } from '../core/errors';

/**
 * Make active record props future proof for refactoring.
 * TODO: remove when stable.
 */
const defineProperties: DefineProperties<ActiveRecordState<any>> = Object.defineProperties;

// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
const privateDict = new WeakMap<BaseActiveRecord<any>, {
  emitter: Subject<ResourceEvent>,
  actionCancel: Subscription,
  init?: boolean
}>();

/**
 * Emits an `ResourceEvent` in the `ActiveRecordState#.$events` of a `BaseResource`
 * @internal
 * @param tdModel
 * @param event
 */
export function emitEvent(tdModel: BaseActiveRecord<any>, event: ResourceEvent): void {
  const pData = privateDict.get(tdModel);

  // emitter might face race issues with micro tasks, make sure busy state is sync at all times.
  if (event.type === 'ActionStart' || event.type === 'ActionEnd') {
    tdModel.$ar.busy = event.type === 'ActionStart';
  }

  if (event.internal === true) {
    if (event instanceof CancellationTokenResourceEvent) {
      privateDict.get(tdModel).actionCancel = event.token;
    }
  } else {
    if (!pData.init) {
      // handle some of the primitive state logic
    } else {
      pData.emitter.next(event);
    }
  }
}


function lazyEvents(this: ActiveRecordState<any>) {
  const pData = privateDict.get(this.parent);

  pData.init = true;
  const shared$ = pData.emitter.share()
    .do( event => {
      switch(event.type) {
        case 'ActionStart':
          this.busy = true;
          break;
        case 'ActionEnd':
          this.busy = false;
          privateDict.get(this.parent).actionCancel = undefined;
          break;
        default:
          break;
      }
    });

  defineProperties(this, {
    events$: { value: shared$ },
    busy$: {
      value: shared$
        .filter( event => event.type === 'ActionStart' || event.type === 'ActionEnd')
        .map( e => this.busy )
    }
  });

  return this.events$;
}


/**
 * An notification interface to get notified about events and state changes of an active record.
 *
 * This is a passive lifecycle interface, intended to be used by the consumer of an active record.
 * Passive hooks does not effect actions, they are used for state (UI) representation.
 *
 * For active lifecycle hooks, being able to effect an action, use metadata life cycle hooks (`ActiveRecordHooks`)
 *
 * ## Observables and `ActiveRecordState`
 * `ActiveRecordState` notification mechanism is based on observables.
 * This is great for UI interfaces but requires implementing tear down logic, that is unsubscribing
 * from stream. To help with that, all of the streams in `ActiveRecordState` are shared & lazy, they will only
 * register if accessed to and automatically disconnect when the number of subscribers is 0.
 *
 * You can also call `ActiveRecordState.disconnect()` to clear all subscriptions.
 *
 * When using an observable aware UI framework subscriptions managed by the framework so as long as
 * you don't manually subscribe you are safe. e.g: In Angular using the `async` pipe (`|`) will also
 * unsubscribe when the component get disposed.
 */
export class ActiveRecordState<T> {
  /**
   * A stream of `ResourceEvent` see `ResourceEventType` for possible events.
   */
  events$: Observable<ResourceEvent>;

  /**
   * An observable that emits a value every time the busy state changes.
   */
  busy$: Observable<boolean>;

  /**
   * Indicates if the active record is busy performing an action.
   */
  busy: boolean;

  constructor(public parent: BaseActiveRecord<T>) {

    privateDict.set(parent, {
      emitter: new Subject<ResourceEvent>(),
      actionCancel: undefined
    });

    this.busy = false;
  }

  /**
   * Returns a promise that will resolve when the current action ends.
   * Throws a `ResourceError` if not in an action.
   * @returns Promise<any>
   */
  next(): Promise<T> {
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
  }

  /**
   * Disconnect all subscriptions from the active record instance.
   * All active records observables are shared, this means that automatically disconnect if the number
   * of subscribers is 0.
   */
  disconnect(): void {
    const pData = privateDict.get(this.parent);
    if (pData.emitter.observers) {
      pData.emitter.observers.slice().forEach(o => !o.closed && o.complete());
    }
  }

  /**
   * Cancel the current action.
   * Does not throw if no action is running.
   */
  cancel(): void {
    const pData = privateDict.get(this.parent);
    if (this.busy && pData.actionCancel && !pData.actionCancel.closed) {
      this.busy = false;
      pData.actionCancel.unsubscribe();
      pData.actionCancel = undefined;
    }
  }
}
defineProperties(ActiveRecordState.prototype, {
  events$: { get: lazyEvents },
  busy$: { get: lazyEvents as any } // lazyEvents returns $events but sets busy$ once...
});
