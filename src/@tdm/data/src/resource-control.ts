import { TDMModel, TDMCollection, errors } from '@tdm/core';

import {
  events$,
  ResourceEventDispatcher,
  ResourceEventEmitter,
  CancellationTokenResourceEvent,
  ExecuteInitResourceEvent,
  ExecuteInitResourceEventArgs,
  StateChangeResourceEvent,
  SimpleEvents,
  ResourceEvent,
  ActionErrorResourceEvent
} from './events';


// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
const privateDict = new WeakMap<TDMModel<any>, ResourceControl<any>>();


export interface RecordControlState<T = any> {
  busy: boolean;
}

const handlers: Array<(this: ResourceControl<any>, event: ResourceEvent) => void> = [];

/**
 * An controller, state and notification interface for instances of TDM models.
 * Each model instance has a corresponding ResourceControl instance.
 *
 * To get the ResourceControl instance for a specific model instance call ResourceControl#get(modelInstance)
 *
 * > If you are using the `ActiveRecord` plugin you can also opt in to have a property on each model instance
 * that reference the ResourceControl instance.
 *
 * Notifications are stream of resource related events, derived from {@link ResourceEvent}.
 * Each event is bound to a resource instance, hence every event fired in a ResourceControl instance
 * is an event bound to the resource.
 *
 * The notification are passive lifecycle event, intended to be used by the consumer of a resource.
 * Passive hooks does not effect actions, they are used for state (UI) representation.
 *
 * For active lifecycle hooks, being able to effect an action, use metadata life cycle hooks (`ActiveRecordHooks`)
 *
 */
export class ResourceControl<T> implements RecordControlState<T> {

  /**
   * A stream of `ResourceEvent` see `ResourceEventType` for possible events.
   */
  events$: ResourceEventEmitter;


  /**
   * Indicates if the active record is busy performing an action.
   */
  get busy(): boolean {
    return this.state.busy;
  }

  protected dispatcher: ResourceEventDispatcher;
  protected actionCancel: () => void;
  protected lastExecute: ExecuteInitResourceEventArgs;
  protected state: RecordControlState<T> = { busy: false };

  protected constructor(public parent: TDMModel<T>) {
    const eventSys = this.initEventSys();
    this.dispatcher = eventSys.dispatcher;
    this.events$ = eventSys.emitter;
  }

  /**
   * Set a new state value
   * @param key
   * @param value
   */
  set<P extends keyof RecordControlState<T>>(key: P, value: RecordControlState<T>[P]): void {
    if (this.state[key] !== value) {
      ResourceControl.emitEvent(new StateChangeResourceEvent(this.parent, key, this.state[key], this.state[key] = value));
    }
  }

  /**
   * Reply the last operation.
   * Busy state must be false and the resource should have been executed at least once (any action)
   */
  replay(): void {
    if (this.busy) {
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if (!this.lastExecute) {
      errors.throw.model(this.parent, `No replay data`);
    }

    const last = this.lastExecute;
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
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if (!this.lastExecute) {
      errors.throw.model(this.parent, `No replay data`);
    }

    this.set('busy', true);


    const arr: Array<TDMModel<any>> = Array.isArray(resources) ? resources.slice() : [resources];

    let catcher: (err?: Error) => any | void;

    switch (ignoreError) {
      case 'always':
        catcher = () => {};
        break;
      case 'some':
        catcher = err => { arr.pop(); if (arr.length === 0) throw err; };
        break;
      default:
        catcher = err => { throw err };
        break;
    }

    Promise.all(arr.map( a => ResourceControl.get(a).busy ? ResourceControl.get(a).next().catch(catcher) : Promise.resolve() ))
      .then( () => {
        this.set('busy', false);
        this.replay();
      })
      .catch( err => {
        this.set('busy', false);
      });
  }

  /**
   * Returns a promise, resolving on the next response from the current resource.
   * Will throw is there is no active action for this resource (i.e. not busy)
   * @returns {Promise<never>}
   */
  next(): Promise<T> {
    if (!this.busy) {
      return Promise.reject(errors.model(this.parent, 'Call to next() while not in an active action.'));
    } else {
      return new Promise<T>( (resolve, reject) => {
        const subs = this.events$.subscribe( event => {
          if (event.type === 'ActionError') {
            reject((event as ActionErrorResourceEvent).error);
            subs.unsubscribe();
          } else if (event.type === 'ActionEnd') {
            // TODO: ActionEnd is fired for both ActionSuccess and ActionCancel
            // since promises does not cancel this is a design hole...
            resolve(<any>this.parent);
            subs.unsubscribe();
          }
        });
      });
    }
  }


  /**
   * Cancel the current action.
   * Does not throw if no action is running.
   */
  cancel(): void {
    if (this.busy && this.actionCancel) {
      this.set('busy', false);
      this.actionCancel();
      this.actionCancel = undefined;
    }
  }

  /**
   * Initialize the event system, return the dispatcher and emitter
   *
   * Derived implementations can implement different mechanisms
   */
  protected initEventSys(): { dispatcher: ResourceEventDispatcher, emitter: ResourceEventEmitter } {
    const simpleEvents = new SimpleEvents();
    return { dispatcher: simpleEvents, emitter: simpleEvents };
  }


  static addHandler(handler: (this: ResourceControl<any>, event: ResourceEvent) => void): void {
    handlers.push(handler);
  }

  /**
   * Emits an `ResourceEvent` in the `ActiveRecordState#.$events` of a `BaseResource`
   * @internal
   * @param event
   */
  static emitEvent(event: ResourceEvent): void {
    const rc = ResourceControl.get(event.resource);

    for (let i=0, len=handlers.length; i<len; i++) {
      handlers[i].call(rc, event);
    }

    if (event.internal !== true) {
      rc.dispatcher.next(event);
    }
  }

  static get<T>(instance: TDMModel<T>): ResourceControl<TDMModel<T>> {
    return privateDict.get(instance)
      || ( privateDict.set(instance, new ResourceControl<any>(instance as any)), ResourceControl.get(instance) );
  }

  private static _rootHandler(this: ResourceControl<any>, event: ResourceEvent): void {
    if (event instanceof CancellationTokenResourceEvent) {
      this.actionCancel = event.cancel;
    } else if (event instanceof ExecuteInitResourceEvent) {
      this.lastExecute = event.data;
    } else {
      switch (event.type) {
        case 'ActionError':
        case 'ActionEnd':
          this.actionCancel = undefined;
          break;
      }
    }
  }
}
// https://github.com/Microsoft/TypeScript/issues/15892
ResourceControl.addHandler(ResourceControl['_rootHandler']);

events$.subscribe(ResourceControl.emitEvent);