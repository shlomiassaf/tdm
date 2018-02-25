import { ResourceEventType, ResourceEventTypes } from './interfaces';

declare module './interfaces' {
  interface ResourceEventType {
    ActionStart: ResourceEvent;
    ActionError: ActionErrorResourceEvent;
    ActionSuccess: ResourceEvent;
    ActionEnd: ActionEndResourceEvent;
    ActionCancel: ResourceEvent;
  }
}

export class ResourceEvent<T extends ResourceEventTypes = ResourceEventTypes>{
  constructor(public readonly resource: any,
              public readonly type: T,
              public readonly internal: boolean = false) {
  }
}

export class ActionErrorResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly error: Error) {
    super(resource, 'ActionError');
  }
}

export class ActionEndResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly result: 'success' | 'cancel') {
    super(resource, 'ActionEnd');
  }
}

export const eventFactory = {
  actionStart(resource: any) { return new ResourceEvent(resource, 'ActionStart'); },
  error(resource: any, err: Error) { return new ActionErrorResourceEvent(resource, err); },
  cancel(resource: any) { return new ResourceEvent(resource, 'ActionCancel'); },
  success(resource: any) { return new ResourceEvent(resource, 'ActionSuccess'); },
  actionEnd(resource: any, result: 'success' | 'cancel') { return new ActionEndResourceEvent(resource, result); }
};
