import { LazyInit } from '@tdm/transformation';
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs/Subscription'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share'; // TODO: move to no-side effect implementation

import { DAO } from '../../dao';
import { events$, ResourceEvent, ResourceEventType, ActionErrorResourceEvent } from '../../events';
import { CancellationTokenResourceEvent, ExecuteInitResourceEvent, ExecuteInitResourceEventArgs } from '../../events/internal';
import { TDMModel, ResourceError, TDMCollection } from '../../fw';
import { promiser } from '../../utils';

// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
const privateDict = new WeakMap<TDMModel<any>, {
  emitter: Subject<ResourceEvent>,
  actionCancel: Subscription,
  lastExecute: ExecuteInitResourceEventArgs
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
function emitEvent(event: ResourceEvent): void {
  const pData = privateDict.get(event.resource);
  const ar = DAO.getCtrl(event.resource);

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
    } else if (event instanceof ExecuteInitResourceEvent) {
      privateDict.get(event.resource).lastExecute = event.data;
    }
  } else {
    pData.emitter.next(event);
  }
}
events$.subscribe(emitEvent);

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
export class ResourceControl<T> {
  /**
   * A stream of `ResourceEvent` see `ResourceEventType` for possible events.
   */
  @LazyInit(function(this: ResourceControl<any>) {
    return privateDict.get(this.parent).emitter.share(); // share imported by events module
  })
  events$: Observable<ResourceEvent>;

  /**
   * An observable that emits a value every time the busy state changes.
   */
  get busy$(): Observable<boolean> {
    if (!this._busy$) { // recover from disconnection.
      this._busySubject = new BehaviorSubject(this.busy);

      this.events$
        .filter( event => event.hasOwnProperty(BUSY_CHANGED))
        .map( event => event[BUSY_CHANGED]).subscribe(this._busySubject);

      this._busy$ = new Observable( o => this._busySubject.subscribe(o) );
    }
    return this._busy$;
  }

  /**
   * An observable that emits the resource (hence self) on every ActionSuccess event.
   * If self is ActiveRecordCollection it will emit the collection property.
   */
  get self$(): Observable<T> {
    if (!this._self$) { // recover from disconnection.
      const subject = new BehaviorSubject(this.parent);

      this.events$
        .filter( event => event.type === ResourceEventType.ActionSuccess )
        .map( event => this.parent)
        .subscribe(subject);

      this._self$ = new Observable( o => subject.subscribe(o) );
    }
    return this._self$;
  }


  /**
   * Indicates if the active record is busy performing an action.
   */
  busy: boolean;

  private _busySubject: BehaviorSubject<boolean>;
  private _busy$: Observable<boolean>;
  private _self$: Observable<T>;

  constructor(public parent: TDMModel<T>) {

    privateDict.set(parent, {
      emitter: new Subject<ResourceEvent>(),
      actionCancel: undefined,
      lastExecute: undefined
    });

    this.busy = false;
  }

  /**
   * Reply the last operation.
   * Busy state must be false and the resource should have been executed at least once (any action)
   */
  replay(): void {
    if (this.busy) {
      throw new ResourceError(this.parent, `Can not replay while busy.`);
    }

    const pData = privateDict.get(this.parent);
    if (!pData.lastExecute) {
      throw new ResourceError(this.parent, `No replay data`);
    }

    const last = pData.lastExecute;
    if (TDMCollection.instanceOf(this.parent)) {
      this.parent.splice(0, this.parent.length);
    }
    last.ac.createExecFactory(last.action)(this.parent, last.async, ...last.args);
  }

  /**
   * Reply the last operation after the the supplied items finish their current operation. (not busy)
   * Busy state must be false and the resource should have been executed at least once (any action)
   * @param resources
   * @param ignoreError Whether to reply or not if an error is thrown from some or all of the resources.
   * always: Always execute the reply operation
   * some: Execute the reply operation if at least one item did not throw.
   * never: Don't execute the reply operation if at least one item threw.
   */
  replayAfter(resources: TDMModel<any> | Array<TDMModel<any>>, ignoreError: 'always' | 'some' | 'never' = 'never'): void {
    if (this.busy) {
      throw new ResourceError(this.parent, `Can not replay while busy.`);
    }

    const pData = privateDict.get(this.parent);
    if (!pData.lastExecute) {
      throw new ResourceError(this.parent, `No replay data`);
    }

    this.busy = true;
    if (this._busySubject) {
      this._busySubject.next(true);
    }

    //TODO: make sure next() rejects on cancel or this is a memory leak.
    const arr: Array<TDMModel<any>> = Array.isArray(resources) ? resources.slice() : [resources];


    let catcher: (err?: Error) => any | void;

    switch (ignoreError) {
      case 'always':
        catcher = () => {};
        break;
      case 'some':
        catcher = err => { arr.pop(); if (arr.length === 0) throw err; }
        break;
      default:
        catcher = err => { throw err };
        break;
    }

    Promise.all(arr.map( a => DAO.getCtrl(a).busy ? DAO.getCtrl(a).next().catch(catcher) : Promise.resolve() ))
      .then( () => {
        this.busy = false;
        this.replay();
      })
      .catch( err => {
        this.busy = false;
        this._busySubject && this._busySubject.next(false)
      });
  }

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
    this._busySubject = this._busy$ = this._self$ = undefined;
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
