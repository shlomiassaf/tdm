import {
  TDMModel,
  TDMModelBase,
  TDMCollection,
  errors,
  directMapper,
  autoSerialize,
  deserialize
} from '@tdm/core';
import { MapperFactory } from '@tdm/core/tdm';

import {
  eventFactory,
  events$,
  ResourceEventDispatcher,
  ResourceEventEmitter,
  CancellationTokenResourceEvent,
  ExecuteInitResourceEvent,
  ExecuteInitResourceEventArgs,
  StateChangeResourceEvent,
  SimpleEvents,
  ResourceEvent,
  isResourceEvent,
  isInternalError
} from './events';

// Weak map for private emitter
// TODO: check perf, maybe symbols are "less" private but more performant
const privateDict = new WeakMap<any, ResourceControl<any>>();

export interface RecordControlState<T = any> {
  busy: boolean;
}

export type ResourceEventListener = (this: ResourceControl<any>, event: ResourceEvent) => void;

const handlers: ResourceEventListener[] = [];

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

  get hasSnapshot(): boolean {
    return !!this.snapshot;
  }

  protected dispatcher: ResourceEventDispatcher;
  protected actionCancel: () => void;
  protected lastExecute: ExecuteInitResourceEventArgs;
  protected state: RecordControlState<T> = { busy: false };
  protected snapshot: any;

  protected constructor(public parent: TDMModel<T> & T) {
    const eventSys = this.initEventSys();
    this.dispatcher = eventSys.dispatcher;
    this.events$ = eventSys.emitter;
  }

  private _next: Promise<TDMModel<T> & T>;
  private _mode: 'promise' | 'instance';

  /**
   * Set a new state value
   * @param key
   * @param value
   */
  set<P extends keyof RecordControlState<T>>(key: P, value: RecordControlState<T>[P]): void {
    if ( this.state[ key ] !== value ) {
      const event = new StateChangeResourceEvent(this.parent, key, this.state[ key ], this.state[ key ] = value);
      ResourceControl.emitEvent(event);
    }
  }

  /**
   * Reply the last operation.
   * Busy state must be false and the resource should have been executed at least once (any action)
   */
  replay(): void {
    if ( this.busy ) {
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if ( !this.lastExecute ) {
      errors.throw.model(this.parent, `No replay data`);
    }

    const last = this.lastExecute;
    if ( TDMCollection.instanceOf(this.parent) ) {
      this.parent.splice(0, this.parent.length);
    }
    last.ac.createExecFactory(last.action)(this.parent, last.params);
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
  replayAfter(resources: TDMModel<any> | Array<TDMModel<any>>,
              ignoreError: 'always' | 'some' | 'never' = 'never'): void {
    if ( this.busy ) {
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if ( !this.lastExecute ) {
      errors.throw.model(this.parent, `No replay data`);
    }

    this.set('busy', true);

    const arr: Array<TDMModel<any>> = Array.isArray(resources) ? resources.slice() : [ resources ];

    let catcher: (err?: Error) => any | void;

    switch ( ignoreError ) {
      case 'always':

        catcher = () => {
        }; // tslint:disable-line
        break;
      case 'some':
        catcher = err => {
          arr.pop();
          if ( arr.length === 0 ) {
            throw err;
          }
        };
        break;
      default:
        catcher = err => {
          throw err;
        };
        break;
    }

    const flowControl = resource => {
      return ResourceControl.get(resource).busy
        ? ResourceControl.get(resource).next().catch(catcher)
        : Promise.resolve()
        ;
    };

    Promise.all(arr.map(flowControl))
      .then(() => {
        this.set('busy', false);
        this.replay();
      })
      .catch(err => {
        this.set('busy', false);
        ResourceControl.emitEvent(eventFactory.error(this.parent, err));
      });
  }

  /**
   * Returns a promise, resolving on the next response from the current resource.
   * Will throw is there is no active action for this resource (i.e. not busy)
   * @returns
   */
  next(silent?: boolean): Promise<TDMModel<T> & T> {
    if (this._mode === 'promise' && this._next) {
      return this._next;
    }
    return Promise.resolve()
      .then( () => {
        if ( !this.busy ) {
          return Promise.reject(errors.model(this.parent, 'Call to next() while not in an active action.'));
        } else {
          return new Promise<TDMModel<T> & T>((resolve, reject) => {
            const subs = this.events$.subscribe(event => {
              if ( isResourceEvent('ActionError', event) ) {
                reject(event.error);
                subs.unsubscribe();
              } else if ( isResourceEvent('ActionEnd', event) ) {
                // TODO: ActionEnd is fired for both ActionSuccess and ActionCancel
                // since promises does not cancel this is a design hole...
                resolve(this._next || this.parent);
                subs.unsubscribe();
              }
            });
          });
        }
      });
  }

  /**
   * Cancel the current action.
   * Does not throw if no action is running.
   */
  cancel(): void {
    if ( this.busy && this.actionCancel ) {
      this.actionCancel();
      this.actionCancel = undefined;
    }
  }

  /**
   * Creates a snapshot of the current instance and stores it.
   * Only one snapshot is stored per instance, if a new one is created the previous snapshot is overwriten.
   * This snapshot is created using serialization which means that all rules apply (i.e @Exclude)
   *
   * @param mapperFactory The [[MapperFactory]] to use, defaults to [[directMapper]].
   */
  createSnapshot(mapperFactory: MapperFactory = directMapper): void {
    this.snapshot = autoSerialize(this.parent, mapperFactory);
  }

  /**
   * Restores a previously created snapshot into the current instance (merge).
   * If a snapshot does not exist it will not restore, nothing is thrown.
   * Snapshot is removed after restoring.
   * This snapshot is restored using deserialization which means that all rules apply (i.e @Exclude)
   *
   * @param mapperFactory The [[MapperFactory]] to use, defaults to [[directMapper]].
   */
  restoreSnapshot(mapperFactory: MapperFactory = directMapper): void {
    if ( this.hasSnapshot ) {
      deserialize(mapperFactory, this.snapshot, <any> this.parent.constructor, this.parent);
      this.snapshot = undefined;
    }
  }

  /**
   * Clone's (deep) the resource.
   * This is a deep clone done using serialization -> deserialization, which means that all rules apply (i.e @Exclude)
   *
   * @param mapperFactory The [[MapperFactory]] to use, defaults to [[directMapper]].
   */
  clone(mapperFactory: MapperFactory = directMapper): T {
    return TDMModelBase.clone(this.parent, mapperFactory);
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

  static addEventListener(handler: ResourceEventListener): void {
    handlers.push(handler);
  }

  static removeEventListener(handler: ResourceEventListener): boolean {
    const idx = handlers.indexOf(handler);
    if (idx > -1) {
      handlers.splice(idx, 1);
      return true;
    }
    return false;
  }

  /**
   * Returns a resource control for an instance of a resource.
   * If it's an instance and a resource control does not exist it will create it.
   * If it's a promise for a resource, will return it only if a resource was already created.
   */
  static get<T>(instance: T): ResourceControl<T>;
  static get<T>(instance: Promise<T>): ResourceControl<T> | undefined;
  static get<T>(instance: T | Promise<T>): ResourceControl<T> | undefined {
    let rc = privateDict.get(instance);
    if ( !rc && (TDMModelBase.instanceOf(instance) || TDMCollection.instanceOf(instance))) {
      privateDict.set(instance, rc = new ResourceControl<any>(instance as any));
    }
    return rc;
  }

  /**
   * Emits an `ResourceEvent` in the `ActiveRecordState#.$events` of a `BaseResource`
   * @internal
   * @param event
   */
  protected static emitEvent(event: ResourceEvent): void {
    const rc = ResourceControl.get(event.resource);

    for ( let i = 0, len = handlers.length; i < len; i++ ) {
      handlers[ i ].call(rc, event);
    }

    if (!isInternalError(event)) {
      rc.dispatcher.next(event);
    }
  }

  /* An IFFE that returns undefined. Workaround for https://github.com/Microsoft/TypeScript/issues/15892
  It acts as a type initializer (not instance initializer), running after the type is created.
  We run it inside the class because we need access to private/protected member.
  it has a slight runtime impact as it set's a property on the class, a function invocation.
  Although forcing runtime changes due to design time type restrictions is a bad practice it was still preferred because
  the impact is minimal and type safety is extremely important in such low level constructs, I like to think of this as
  a virtual runtime assertion.
  */
  private static _ = (() => {
    events$.subscribe(ResourceControl.emitEvent);
    ResourceControl
      .addEventListener(function rootHandler(this: ResourceControl<any>, event: ResourceEvent): void {
        if ( event instanceof CancellationTokenResourceEvent ) {
          this.actionCancel = event.cancel;
        } else if ( event instanceof ExecuteInitResourceEvent ) {
          mapPromiseAndKeepAlive(this, event);
          this.lastExecute = event.data;
          this._next = event.promise;
          this._mode = event.mode;
        } else {
          switch ( event.type ) { // tslint:disable-line
            case 'ActionError':
            case 'ActionEnd':
              this.actionCancel = undefined;
              this._next = undefined;
              break;
          }
        }
      });
  })();
}

function mapPromiseAndKeepAlive(resourceControl: ResourceControl<any>, event: ExecuteInitResourceEvent): void {
  privateDict.set(event.promise, resourceControl);
  const doFinally = function x(this: ExecuteInitResourceEvent) {
    privateDict.delete(event.promise);
    if ( !event.keepAlive ) {
      privateDict.delete(event.resource);
    }
  }.bind(event);
  event.promise.then(doFinally, doFinally);
}
