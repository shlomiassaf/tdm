import { ClientProtocol, ClientRequest, ClientPostMessageEvent } from '../../shared/src/index';
import { ServiceMockerClient } from './client';

export abstract class ClientBase {
  get ready(): Promise<void> {
    return this._smClient.ready;
  }

  private _smClient: ServiceMockerClient;

  /**
   * A lifecycle hook fired when the client inits
   */
  init?(): void;

  dispose(): void {
    this._smClient.dispose();
  }

  send<T extends keyof ClientProtocol>(action: T,
                                       data: ClientRequest<T>,
                                       timeout?: number): Promise<ClientPostMessageEvent<T>> {
    return this._smClient.sendAction(action, data, timeout);
  }
}
