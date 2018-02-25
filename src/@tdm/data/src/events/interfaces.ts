import { ResourceEvent } from './events';

export interface ResourceEventType { }

export interface InternalResourceEventType { }

export type ResourceEventTypes = keyof (ResourceEventType & InternalResourceEventType);

export interface ResourceEventDispatcher {
  next(value?: ResourceEvent): void;
}

export interface ResourceEventEmitter {
  subscribe(next?: (value: ResourceEvent) => void): { unsubscribe(): void; };
}

export function isResourceEvent<T extends keyof ResourceEventType>(type: T,
                                                                   evt: ResourceEvent ): evt is ResourceEventType[T] {
  return type === evt.type;
}
