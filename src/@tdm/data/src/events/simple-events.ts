import { ResourceEvent } from './events';
import {
  ResourceEventDispatcher,
  ResourceEventEmitter
} from './interfaces';

/**
 * A simple event dispatcher and emitter, used as the default events implementation.
 * The API is minimal and somewhat shared with the observables API for extensibility.
 */
export class SimpleEvents implements ResourceEventDispatcher, ResourceEventEmitter {
  private listeners: Array<(value: ResourceEvent) => void> = [];

  next(value: ResourceEvent): void {
    const listeners = this.listeners.slice();
    for ( let l of listeners ) {
      l(value);
    }
  }

  subscribe(next?: (value: ResourceEvent) => void): { unsubscribe(): void; } {
    this.listeners.push(next);
    const unsubscribe = () => {
      const idx = this.listeners.indexOf(next);
      if ( idx > -1 ) {
        this.listeners.splice(idx, 1);
      }
    };

    return { unsubscribe };
  }

  clear(): void {
    this.listeners.splice(0, this.listeners.length);
  }
}
