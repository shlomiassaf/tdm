// tslint:disable:max-classes-per-file
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
              public readonly type: T) {
  }
}

export class ActionErrorResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any,
              public readonly error: Error,
              public readonly request?: any,
              public readonly response?: any) {
    super(resource, 'ActionError');
  }
}

export class ActionEndResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any,
              public readonly result: 'success' | 'cancel',
              public readonly request?: any,
              public readonly response?: any) {
    super(resource, 'ActionEnd');
  }
}

export const eventFactory = {
  actionStart(resource: any) { return new ResourceEvent(resource, 'ActionStart'); },
  error(resource: any,
        err: Error,
        request?: any,
        response?: any) { return new ActionErrorResourceEvent(resource, err, request, response); },
  cancel(resource: any) { return new ResourceEvent(resource, 'ActionCancel'); },
  success(resource: any) { return new ResourceEvent(resource, 'ActionSuccess'); },
  actionEnd(resource: any,
            result: 'success' | 'cancel',
            request?: any,
            response?: any) {
    return new ActionEndResourceEvent(resource, result, request, response);
  }
};
