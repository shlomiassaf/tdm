import { createServer, MockerServer, MockerRouter } from 'service-mocker/server';
import {
  postError,
  sendMessageRequest,
  ServerProtocol,
  ServerRequest,
  ServerResponse,
  ClientProtocol,
  ClientRequest,
  ServerPostMessageEvent
} from '../../shared/src/messaging';

interface IncomingClientMessageEvent<T extends keyof ClientProtocol = keyof ClientProtocol> extends MessageEvent {
  data: {
    action: T;
    data: ClientRequest<T>
  };
}

/**
 * Patch the service-mocker MockerRouter to fix the bug with deep nested routes not working properly.
 * SEE https://github.com/service-mocker/service-mocker/issues/48
 * @param {MockerRouter} router
 */
function pathServiceMockerBug48(router: MockerRouter) {
  if (router.constructor['TDM_PATCHED'] !== pathServiceMockerBug48) {
    router.constructor['TDM_PATCHED'] = pathServiceMockerBug48;
    const oldMatch = router.constructor.prototype._match;
    router.constructor.prototype._match = function(event: FetchEvent) {
      const { request } = event;
      const url = new URL(request.url, location.href);

      const re = new RegExp(`^${this._basePath}(.*)`);
      const match = re.exec(url.pathname);
      return match ? oldMatch.call(this, event) : false;
    };
  }
}

const servers: ServiceMockerServer[] = [];

export interface MessageHandler {
  canHandle(name: keyof ClientProtocol): boolean;
  handle<T extends keyof ClientProtocol>(action: T, data: ClientRequest<T>): Promise<ServerResponse<T>>;
}

export class ServiceMockerServer {
  public router: MockerRouter;
  private constructor(public mockServer: MockerServer, private messageHandler: MessageHandler) {
    this.router = mockServer.router;
    pathServiceMockerBug48(this.router);
  }

  onMessage(event: IncomingClientMessageEvent): void {
    const {
      data,
      ports,
    } = event;

    if ( !data || !ports || !ports.length ) {
      return;
    }

    const port = ports[ 0 ];

    if (this.messageHandler.canHandle(data.action)) {
      this.messageHandler.handle(data.action, data.data)
        .then(response => port.postMessage(response))
        .catch(err => port.postMessage(postError(err)));
    }
  }

  dispose(): void {
    const idx = servers.indexOf(this);
    servers.splice(idx, 1);
  }

  sendAction<T extends keyof ServerProtocol = keyof ServerProtocol>(
    client: Client,
    action: T,
    data: ServerRequest<T>,
    timeout?: number
  ): Promise<ServerPostMessageEvent<T>> {
    const message = { action, data };
    return sendMessageRequest<T>(client, message, timeout);
  }

  sendActionAll<T extends keyof ServerProtocol = keyof ServerProtocol>(
    action: T,
    data: ServerRequest<T>,
    timeout?: number
  ): Promise<Array<ServerPostMessageEvent<T>>> {
    return (<ServiceWorkerGlobalScope> <any> self).clients.matchAll()
      .then(clients => {
        return Promise.all(clients.map(c => this.sendAction(c, action, data, timeout) ));
      });
  }

  static create(messageHandler: MessageHandler, baseURL?: string): ServiceMockerServer {
    const mockServer = createServer(baseURL);
    const server = new ServiceMockerServer(mockServer, messageHandler);
    servers.push(server);
    return server;
  }
}

self.addEventListener('message', event => {
  for ( let server of servers ) {
    server.onMessage(event);
  }
});
