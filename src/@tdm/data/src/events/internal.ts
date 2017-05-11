import { Subscription } from 'rxjs/Subscription';
import { ResourceEvent } from './events';
import { ActionController } from '../core';
import { ActionMetadata } from '../metadata';

/**
 * @internal
 */
export class CancellationTokenResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly token: Subscription) {
    super(resource, '$CancellationToken', true);
  }
}

export interface ExecuteInitResourceEventArgs {
  ac: ActionController;
  action: ActionMetadata;
  async: boolean;
  args: any[]
}

/**
 * @internal
 */
export class ExecuteInitResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly data: ExecuteInitResourceEventArgs) {
    super(resource, '$ExecuteInit', true);
  }
}
