import { Subscription } from 'rxjs/Subscription';
import { ResourceEvent } from './events';

/**
 * internal
 */
export class CancellationTokenResourceEvent extends ResourceEvent {
  constructor(public readonly resource: any, public readonly token: Subscription) {
    super(resource, '$CancellationToken', true);
  }
}
