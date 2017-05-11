import { KeySet } from './set-map-ext';
import { Constructor, isFunction } from './utils';


export interface TargetStoreEvents {
  /**
   * Fired when the {@link TargetMetadata} instance is created for the target)
   *
   * FireBefore: onProcessType
   */
  onCreateMetadata: 'onCreateMetadata'

  /**
   * Fired when the type is processed, after extending all metadata.
   * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
   *
   * FireAfter: onCreateMetadata
   */
  onProcessType: 'onProcessType'
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
