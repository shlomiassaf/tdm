import { KeySet } from './set-map-ext';
import { Constructor, isFunction } from './utils';

const eventHandlers = new KeySet<keyof TargetEvents, (target: Constructor<any>) => void>();

/**
 * Event listeners registration object for lifecycle metadata events on a target.
 *
 * @pluginApi
 * @mixable
 * @singleton
 */
export class TargetEvents {

  protected constructor() {
    // support for post instantiation mixins on the prototype (plugins) - don't use new.
    TargetEvents.create(this);
  }

  /**
   * Fired when the {@link TargetMetadata} instance is created for the target)
   *
   * FireBefore: processType
   */
  createMetadata(handler: (target: Constructor<any>) => void): void {
    if (isFunction(handler)) {
      eventHandlers.add('createMetadata', handler);
    }
  }

  /**
   * Fired when the type is processed, after extending all metadata.
   * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
   *
   * FireAfter: createMetadata
   */
  processType(handler: (target: Constructor<any>) => void): void {
    if (isFunction(handler)) {
      eventHandlers.add('processType', handler);
    }
  }

  static create(instance?: TargetEvents): TargetEvents {
    const targetStore: TargetEvents = instance || Object.create(TargetEvents.prototype);
    return targetStore;
  }
}

export const targetEvents = TargetEvents.create();

export function fireEvents(event: keyof TargetEvents, target: Constructor<any>): void {
  const eventMap = eventHandlers.get(event);
  if (eventMap) {
    Array.from(eventMap.values())
      .forEach( handler => handler(target) );
  }
}
