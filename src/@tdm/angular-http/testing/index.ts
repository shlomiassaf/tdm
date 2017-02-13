import 'rxjs/add/operator/first';

import { MockBackend, MockConnection } from '@angular/http/testing';


/**
 * Returns the first connection from a MockBackend instance.
 * This is a deserializer from the connections stream to a connection assuming the stream is sync.
 * @param mockBackend
 * @returns {MockConnection}
 */
export function withConnection(mockBackend: MockBackend): { sync: (handler: (conn: MockConnection) => void) => void } {
  let handlerFn;
  const obj = {
    sync(handler: (conn: MockConnection) => void) {
      handlerFn = handler;
    }
  };
  mockBackend.connections.first().subscribe(conn => handlerFn(conn));
  return obj;
}
