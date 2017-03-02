import { KeySet } from './set-map-ext';
import { Constructor, isFunction } from './utils';


const handlersMap = new KeySet<TargetStoreEvents, (target: Constructor<any>) => void>();

export enum TargetStoreEvents {
  onCreateMetadata
}

export function registerEvent(event: TargetStoreEvents, handler: (target: Constructor<any>) => void) {
  if (isFunction(handler)) {
    handlersMap.add(event, handler);
  }
}

export function fireEvents(event: TargetStoreEvents, target: Constructor<any>): void {
  const eventMap = handlersMap.get(event);
  if (eventMap) {
    Array.from(eventMap.values())
      .forEach( handler => handler(target) );
  }
}
