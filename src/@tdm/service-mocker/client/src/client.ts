import { createClient, MockerClient } from 'service-mocker/client';
import {
  postError,
  sendMessageRequest,
  ServerProtocol,
  ServerRequest,
  ClientResponse,
  ClientProtocol,
  ClientRequest,
  ClientPostMessageEvent
} from '../../shared/src/messaging';

interface IncomingServerMessageEvent<T extends keyof ServerProtocol = keyof ServerProtocol> extends MessageEvent {
  data: {
    action: T;
    data: ServerRequest<T>
  };
}

export interface MessageHandler {
  canHandle(name: keyof ServerProtocol): boolean;
  handle<T extends keyof ServerProtocol>(action: T, data: ServerRequest<T>): Promise<ClientResponse<T>>;
}

export class ServiceMockerClient {
  ready: Promise<void>;

  private controller: ServiceWorker;
  private messageEventListener = (event: IncomingServerMessageEvent) => this.onMessage(event);

  private constructor(private mockClient: MockerClient, private messageHandler: MessageHandler) {
    this.ready = this.mockClient.ready.then( registration => {
      this.controller = registration.active;
      this.controller.addEventListener('message', this.messageEventListener );
    });
  }

  private onMessage(event: IncomingServerMessageEvent): void {
    const {
      data,
      ports,
    } = event;

    if (!data || !ports || !ports.length) {
      return;
    }

    const port = ports[0];

    if (this.messageHandler.canHandle(data.action)) {
      this.messageHandler.handle(data.action, data.data)
        .then(response => port.postMessage(response))
        .catch(err => port.postMessage(postError(err)));
    }
  }

  sendAction<T extends keyof ClientProtocol = keyof ClientProtocol>(
    action: T,
    data: ClientRequest<T>,
    timeout?: number): Promise<ClientPostMessageEvent<T>> {
    const message = { action, data };
    return sendMessageRequest<T>(this.controller, message, timeout);
  }

  dispose(): void {
    this.controller.removeEventListener('message', this.messageEventListener);
  }

  static create(messageHandler: MessageHandler, scriptURL: string = './sw.js'): ServiceMockerClient {
    const mockClient = createClient(scriptURL);
    const client = new ServiceMockerClient(mockClient, messageHandler);
    return client;
  }
}
