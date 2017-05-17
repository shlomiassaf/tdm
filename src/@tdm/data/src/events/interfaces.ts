import { ResourceEvent } from './events';

export interface ResourceEventDispatcher {
  next(value?: ResourceEvent): void;
}

export interface ResourceEventEmitter {
  subscribe(next?: (value: ResourceEvent) => void): { unsubscribe(): void; }
}
