import { createClient, MockerClient } from 'service-mocker/client';

function initApp() {
  fetch('/greet')
    .then( response => {
      console.log(response.text());
    });
}

export class Client {

  private constructor(private mockClient: MockerClient) { }

  public restoreDB(): Promise<void> {
    return System.import(/* webpackChunkName: "northwind" */ './json-db/index').then( module => {
      console.log(module);
    });
  }

  static create(): Promise<Client> {
    const mockClient = createClient('sw.js');
    return mockClient.ready.then( () => new Client(mockClient));
  }
}
