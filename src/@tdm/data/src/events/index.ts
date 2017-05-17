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

export function dispatchEvent(event: ResourceEvent): void {
  dispatcher.next(event);
}

/* An example of an rxjs based event system  */
// import { Subject } from 'rxjs/Subject'
// import 'rxjs/add/operator/share'; // TODO: move to no-side effect implementation
// dispatcher = new Subject<ResourceEvent>();
// events$ = (dispatcher as any).share();




