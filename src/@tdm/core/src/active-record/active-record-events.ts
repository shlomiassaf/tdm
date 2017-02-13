import { Subscription } from "rxjs/Subscription";

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
  constructor(public readonly type: keyof (typeof ResourceEventType & typeof InternalResourceEventType),
              public readonly internal: boolean = false) {
  }
}

export class ActionErrorResourceEvent extends ResourceEvent {
  constructor(public readonly error: Error) {
    super('ActionError');
  }
}

export class ActionEndResourceEvent extends ResourceEvent {
  constructor(public readonly result: 'success' | 'cancel') {
    super('ActionEnd');
  }
}

/**
 * internal
 */
export class CancellationTokenResourceEvent extends ResourceEvent {
  constructor(public readonly token: Subscription) {
    super('$CancellationToken', true);
  }
}


export const eventFactory = {
  actionStart() { return new ResourceEvent('ActionStart'); },
  error(err: Error) { return new ActionErrorResourceEvent(err); },
  cancel() { return new ResourceEvent('ActionCancel'); },
  success() { return new ResourceEvent('ActionSuccess'); },
  actionEnd(result: 'success' | 'cancel') { return new ActionEndResourceEvent(result); }
};
