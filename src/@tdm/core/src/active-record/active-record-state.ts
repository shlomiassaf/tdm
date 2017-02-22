import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

import { ResourceEvent, CancellationTokenResourceEvent } from './active-record-events';
import { BaseActiveRecord } from './active-record-interfaces';
import { LazyInit } from '../utils/decorators';

// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
const privateDict = new WeakMap<BaseActiveRecord<any>, {
  emitter: Subject<ResourceEvent>,
  actionCancel: Subscription,
}>();

const ENDING_EVENTS = [
  'ActionError',
  'ActionEnd',
  'ActionCancel'
];

const BUSY_CHANGED = Symbol('BUSY CHANGED');

/**
 * Emits an `ResourceEvent` in the `ActiveRecordState#.$events` of a `BaseResource`
 * @internal
 * @param event
 */
export function emitEvent(event: ResourceEvent): void {
  const pData = privateDict.get(event.resource);
  const ar = event.resource.$ar;

  // emitter might face race issues with micro tasks, make sure busy state is sync at all times.
  if (ar.busy === false && event.type === 'ActionStart') {
    ar.busy = true;
    Object.defineProperty(event, BUSY_CHANGED, { value: ar.busy });
  } else if (ar.busy === true && ENDING_EVENTS.indexOf(event.type) !== -1) {
    ar.busy = false;
    pData.actionCancel = undefined;
    Object.defineProperty(event, BUSY_CHANGED, { value: ar.busy });
  }

  if (event.internal === true) {
    if (event instanceof CancellationTokenResourceEvent) {
      privateDict.get(event.resource).actionCancel = event.token;
    }
  } else {
    pData.emitter.next(event);
  }
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
  @LazyInit(function(this: ActiveRecordState<any>) {
    return privateDict.get(this.parent).emitter.share();
  })
  events$: Observable<ResourceEvent>;

  /**
   * An observable that emits a value every time the busy state changes.
   */
  get busy$(): Observable<boolean> {
    if (!this._busy$) { // recover from disconnection.
      const subject = new BehaviorSubject(this.busy);

      this.events$
        .filter( event => event.hasOwnProperty(BUSY_CHANGED) )
        .map( event => event[BUSY_CHANGED]).subscribe(subject);

      this._busy$ = new Observable( o => subject.subscribe(o) );
    }
    return this._busy$;
  }

  /**
   * Indicates if the active record is busy performing an action.
   */
  busy: boolean;

  private _busy$: Observable<boolean>;

  constructor(public parent: BaseActiveRecord<T>) {

    privateDict.set(parent, {
      emitter: new Subject<ResourceEvent>(),
      actionCancel: undefined
    });

    this.busy = false;
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
    this._busy$ = undefined;
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
