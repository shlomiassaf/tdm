import { ResourceEvent } from './events';
import { ActionController } from '../core';
import { ActionMetadata } from '../metadata';

/**
 * Sends the cancellation token (function) so the listener (resource control) can cancel.
 *
 * @internal
 */
export class CancellationTokenResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly cancel: () => void) {
    super(resource, '$CancellationToken', true);
  }
}

/**
 *
 * @internal
 */
export interface ExecuteInitResourceEventArgs {
  ac: ActionController;
  action: ActionMetadata;
  args: any[];
}

/**
 * @internal
 */
export class ExecuteInitResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly data: ExecuteInitResourceEventArgs) {
    super(resource, '$ExecuteInit', true);
  }
}

/**
 * @internal
 */
export class StateChangeResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any,
              public readonly key: string,
              public readonly oldVal: any,
              public readonly newVal: any) {
    super(resource, '$StateChange', true);
  }
}
