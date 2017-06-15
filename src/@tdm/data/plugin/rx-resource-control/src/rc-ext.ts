import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { share } from 'rxjs/operator/share'

import { TixinFree } from '@tdm/tixin';
import { LazyInit } from '@tdm/core/tdm';
import {
  ResourceEvent,
  ResourceEventType,
  StateChangeResourceEvent,
  ResourceControl
} from '@tdm/data';


/**
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
export class RxResourceControl<T> extends ResourceControl<T> {

  /**
   * An observable that emits a value every time the busy state changes.
   */
  @LazyInit(function(this: RxResourceControl<any>) {
    return share.call(this._busySubject);
  })
  busy$: Observable<boolean>;

  /**
   * An observable that emits the resource (hence self) on every ActionSuccess event.
   * If self is ActiveRecordCollection it will emit the collection property.
   */
  @LazyInit(function(this: RxResourceControl<any>) {
    return share.call(this._selfSubject);
  })
  self$: Observable<T>;


  @LazyInit(function(this: ResourceControl<any>) {
    return new BehaviorSubject<boolean>(this.busy)
  })
  private _busySubject: BehaviorSubject<boolean>;

  @LazyInit(function(this: ResourceControl<any>) {
    return new BehaviorSubject<T>(<any>this.parent)
  })
  private _selfSubject: BehaviorSubject<T>;

  /**
   * Disconnect all rx subscriptions
   */
  disconnect(): void {
    // TODO: unsubscribing the subjects will throw when "nexting" them
    // check if this approach does not leak
    if (this.hasOwnProperty('_busySubject')) {
      this._busySubject.observers.forEach(o => o.complete() );
    }
    if (this.hasOwnProperty('_selfSubject')) {
      this._selfSubject.observers.forEach(o => o.complete() );
    }
  }

  private static rxHandler(this: RxResourceControl<any>, event: ResourceEvent): void {
    if (event instanceof StateChangeResourceEvent) {
      if (event.key === 'busy') {
        this._busySubject.next(event.newVal);
      }
    } else if (event.type === ResourceEventType.ActionSuccess) {
      this._selfSubject.next(this.parent);
    }
  }
}

export function init(): void {
  TixinFree(ResourceControl, RxResourceControl, 'proto');

  // https://github.com/Microsoft/TypeScript/issues/15892
  ResourceControl.addHandler(RxResourceControl['rxHandler']);
}
