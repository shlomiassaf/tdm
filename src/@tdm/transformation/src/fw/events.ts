import { KeySet } from './set-map-ext';
import { Constructor, isFunction } from './utils';


export interface TargetStoreEvents {
  onCreateMetadata: 'onCreateMetadata'
}

const handlersMap = new KeySet<keyof TargetStoreEvents, (target: Constructor<any>) => void>();

export function registerEvent(event: keyof TargetStoreEvents, handler: (target: Constructor<any>) => void) {
  if (isFunction(handler)) {
    handlersMap.add(event, handler);
  }
}

export function fireEvents(event: keyof TargetStoreEvents, target: Constructor<any>): void {
  const eventMap = handlersMap.get(event);
  if (eventMap) {
    Array.from(eventMap.values())
      .forEach( handler => handler(target) );
  }
}
