import { Client, ClientBase, OnMessage } from '@tdm/service-mocker/client';
import { ClientPostMessageEvent, ServerRequest, ClientResponse } from '@tdm/service-mocker/shared';

@Client({
  scriptURL: './sw.js'
})
export class SWClient extends ClientBase {
  @OnMessage()
  installed(data: ServerRequest<'installed'>): Promise<ClientResponse<'installed'>> {
    return <any> Promise.resolve(12);
  }

  restoreDB(): Promise<ClientPostMessageEvent<'restoreDb'>> {
    return import(/* webpackChunkName: "northwind" */ './json-db/index')
      .then( module => this.send('restoreDb', module.DB, 1000 * 60) );
  }

}
