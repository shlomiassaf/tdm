import { ResourceEvent } from './events';
import { ResourceEventDispatcher, ResourceEventEmitter } from './interfaces';
import { SimpleEvents } from './simple-events';

export * from './interfaces';
export * from './events';
export * from './internal';
export * from './simple-events';

export let dispatcher: ResourceEventDispatcher;
export let events$: ResourceEventEmitter;

dispatcher = events$ = new SimpleEvents();

/**
 * Dispatch a resource control event.
 * These event's are fired to local listeners, not the user's listeners.
 * The local listeners will trigger user's listeners.
 *
 * @param event
 * @param async When not set, fire's the event sync within the current task.
 * When set to true the event is fired at the end of the current micro task
 * When set to a number, the even if fired as a macro task, after an amount of ms provided as the number.
 */
export function dispatchEvent(
  event: ResourceEvent,
  async?: number | true
): void {
  if (async >= 0) {
    setTimeout(() => dispatcher.next(event), async);
  } else if (async === true) {
    Promise.resolve(null).then(() => dispatcher.next(event));
  } else {
    try {
      dispatcher.next(event);
    } catch (err) {} // tslint:disable-line:no-empty
    // we don't want handler's error to interrupt the process, the handler should handle it's own errors.
  }
}

/* An example of an rxjs based event system  */
// import { Subject } from 'rxjs/Subject'
// import 'rxjs/add/operator/share'; // TODO: move to no-side effect implementation
// dispatcher = new Subject<ResourceEvent>();
// events$ = (dispatcher as any).share();
