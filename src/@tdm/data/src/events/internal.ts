import { InternalResourceEventType } from './interfaces';
import { ResourceEvent } from './events';
import { ActionController } from '../core';
import { ExecuteParams } from '../core/execute-context';
import { ActionMetadata } from '../metadata';

declare module './interfaces' {
  interface InternalResourceEventType {
    $CancellationToken: CancellationTokenResourceEvent;
    $ExecuteInit: ExecuteInitResourceEvent;
    $StateChange: StateChangeResourceEvent;
  }
}

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
  params: ExecuteParams;
}

/**
 * @internal
 */
export class ExecuteInitResourceEvent extends ResourceEvent {

  /**
   * The promise that is used by the execution.
   *
   * A promise is always used, it is returned to the user when the execution run's in promise mode, otherwise it is
   * instance mode and the instance is returned, yet the promise always exist.
   *
   * When working with DAO the returned value is the promise, which makes it impossible to track the resource control
   * because the user does not get it back, the promise can be used to track the instance.
   */
  promise: Promise<any>;

  /**
   * True instructs the resource control to stay alive when the promise resolves.
   * False will cause the resource control to destroy itself once the promise resolve.
   */
  keepAlive: boolean;
  constructor(public readonly resource: any,
              public readonly data: ExecuteInitResourceEventArgs,
              promise: Promise<any>,
              keepAlive: boolean) {
    super(resource, '$ExecuteInit', true);
    this.promise = promise;
    this.keepAlive = keepAlive;
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
