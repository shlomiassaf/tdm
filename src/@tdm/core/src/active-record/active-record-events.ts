import { Subscription } from "rxjs/Subscription";
import { BaseActiveRecord } from './active-record-interfaces'

export const ResourceEventType = {
  ActionStart: 'ActionStart' as 'ActionStart',
  ActionError: 'ActionError' as 'ActionError',
  ActionSuccess: 'ActionSuccess' as 'ActionSuccess',
  ActionEnd: 'ActionEnd' as 'ActionEnd',
  ActionCancel: 'ActionCancel' as 'ActionCancel'
};

export const InternalResourceEventType = {
  $CancellationToken: '$CancellationToken' as '$CancellationToken'
};

export class ResourceEvent {
  constructor(public readonly resource: BaseActiveRecord<any>,
              public readonly type: keyof (typeof ResourceEventType & typeof InternalResourceEventType),
              public readonly internal: boolean = false) {
  }
}

export class ActionErrorResourceEvent extends ResourceEvent {
  constructor(public readonly resource: BaseActiveRecord<any>, public readonly error: Error) {
    super(resource, 'ActionError');
  }
}

export class ActionEndResourceEvent extends ResourceEvent {
  constructor(public readonly resource: BaseActiveRecord<any>, public readonly result: 'success' | 'cancel') {
    super(resource, 'ActionEnd');
  }
}

/**
 * internal
 */
export class CancellationTokenResourceEvent extends ResourceEvent {
  constructor(public readonly resource: BaseActiveRecord<any>, public readonly token: Subscription) {
    super(resource, '$CancellationToken', true);
  }
}


export const eventFactory = {
  actionStart(resource: BaseActiveRecord<any>) { return new ResourceEvent(resource, 'ActionStart'); },
  error(resource: BaseActiveRecord<any>, err: Error) { return new ActionErrorResourceEvent(resource, err); },
  cancel(resource: BaseActiveRecord<any>) { return new ResourceEvent(resource, 'ActionCancel'); },
  success(resource: BaseActiveRecord<any>) { return new ResourceEvent(resource, 'ActionSuccess'); },
  actionEnd(resource: BaseActiveRecord<any>, result: 'success' | 'cancel') { return new ActionEndResourceEvent(resource, result); }
};
