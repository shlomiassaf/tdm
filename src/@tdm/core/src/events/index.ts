import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/share'; // TODO: move to no-side effect implementation
import { ResourceEvent } from './events';

const emitter = new Subject<ResourceEvent>();

export function emitEvent(event: ResourceEvent): void {
  emitter.next(event);
}

export const events$ = emitter.share();

export * from './events';
