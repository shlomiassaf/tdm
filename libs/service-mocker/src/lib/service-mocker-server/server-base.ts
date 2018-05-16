import { isNumber } from '@tdm/core/tdm';
import { ServerProtocol, ServerRequest, ServerPostMessageEvent } from '@tdm/service-mocker/shared';
import { ServiceMockerServer } from './service-mocker-server';

export abstract class ServerBase {
  private _smServer: ServiceMockerServer;

  init?(): void;

  dispose(): void {
    this._smServer.dispose();
  }

  /**
   * Send an action to a specific client.
   */
  send<T extends keyof ServerProtocol>(action: T,
                                       data: ServerRequest<T>,
                                       client: Client,
                                       timeout?: number): Promise<ServerPostMessageEvent<T>>;
  /**
   * Send an action to all connected clients.
   */
  send<T extends keyof ServerProtocol>(action: T,
                                       data: ServerRequest<T>,
                                       timeout?: number): Promise<ServerPostMessageEvent<T>>;
  send<T extends keyof ServerProtocol>(action: T,
                                       data: ServerRequest<T>,
                                       client?: Client | number,
                                       timeout?: number): Promise<Array<ServerPostMessageEvent<T>> | ServerPostMessageEvent<T>> { // tslint:disable:max-line-length
    if (isNumber(client)) {
      timeout = client;
      client = undefined;
    }

    if (!client) {
      return this._smServer.sendActionAll(action, data, timeout);
    } else {
      return this._smServer.sendAction(client as Client, action, data, timeout);
    }
  }
}
