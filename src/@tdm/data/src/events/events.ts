
export const ResourceEventType = {
  ActionStart: 'ActionStart' as 'ActionStart',
  ActionError: 'ActionError' as 'ActionError',
  ActionSuccess: 'ActionSuccess' as 'ActionSuccess',
  ActionEnd: 'ActionEnd' as 'ActionEnd',
  ActionCancel: 'ActionCancel' as 'ActionCancel'
};

export const InternalResourceEventType = {
  $CancellationToken: '$CancellationToken' as '$CancellationToken',
  $ExecuteInit: '$ExecuteInit' as '$ExecuteInit'
};

export class ResourceEvent {
  constructor(public readonly resource: any,
              public readonly type: keyof (typeof ResourceEventType & typeof InternalResourceEventType),
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
