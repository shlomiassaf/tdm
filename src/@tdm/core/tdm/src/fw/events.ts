import { KeySet } from './set-map-ext';
import { Constructor, isFunction } from './utils';
import { MetadataClassStatic } from './metadata-framework';

const eventHandlers = new KeySet<TARGET_EVENT_NAMES, (target: Constructor<any>) => void>();
const metaInitHandlers = new KeySet<Constructor<any>, (target: Constructor<any>, value: any, metaArgs?: any) => void>();

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

  metaInit<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>) {
    return {
      run(handler: (target: Constructor<any>, value: TMetaClass, metaArgs?: TMetaArgs) => void): void {
        metaInitHandlers.add(metaClass, handler);
      }
    }
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
   * Fired before the type is processed, after extending all metadata.
   * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
   *
   * FireAfter: createMetadata
   * FireBefore: processType
   */
  beforeProcessType(handler: (target: Constructor<any>) => void): void {
    if (isFunction(handler)) {
      eventHandlers.add('beforeProcessType', handler);
    }
  }

  /**
   * Fired when the type is processed, after extending all metadata.
   * This event is not guaranteed to fire, it will fire only if the type is decorated with an appropriate decorator.
   *
   * FireAfter: beforeProcessType
   */
  processType(handler: (target: Constructor<any>) => void): void {
    if (isFunction(handler)) {
      eventHandlers.add('processType', handler);
    }
  }

  FIRE: typeof EVENT_FIRE;

  static create(instance?: TargetEvents): TargetEvents {
    const targetStore: TargetEvents = instance || Object.create(TargetEvents.prototype);
    targetStore.FIRE = EVENT_FIRE;
    return targetStore;
  }
}

export const EVENT_FIRE = {
  metaInit<TMetaArgs, TMetaClass, Z>(metaClass: Z & MetadataClassStatic<TMetaArgs, TMetaClass>, target: Constructor<any>, value: TMetaClass, metaArgs?: TMetaArgs): void {
    const eventMap = metaInitHandlers.get(metaClass);
    if (eventMap) {
      Array.from(eventMap.values()).forEach( handler => handler(target, value, metaArgs) );
    }
  },
  createMetadata: (target: Constructor<any>) => fireTargetEvent('createMetadata', target),
  beforeProcessType: (target: Constructor<any>) => fireTargetEvent('beforeProcessType', target),
  processType: (target: Constructor<any>) => fireTargetEvent('processType', target),
};

export const targetEvents = TargetEvents.create();

type TARGET_EVENT_NAMES = 'createMetadata' | 'beforeProcessType' | 'processType';

function fireTargetEvent(event: TARGET_EVENT_NAMES, target: any): void {
  const eventMap = eventHandlers.get(event);
  if (eventMap) {
    Array.from(eventMap.values()).forEach( handler => handler(target) );
  }
}
