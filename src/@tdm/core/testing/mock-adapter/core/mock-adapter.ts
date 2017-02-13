import { Observable } from 'rxjs';
import { Adapter, ResourceAdapter, ExecuteContext, findProp, ExecuteResponse } from '@tdm/core';

import {
  MockResourceMetadata,
  MockActionMetadata
} from '../metadata';
import { MockActionOptions } from './interfaces';

import { mockDeserializer } from '../mock-deserializer';

@ResourceAdapter({
  actionMetaClass: MockActionMetadata,
  resourceMetaClass: MockResourceMetadata,
  deserializerFactory: () => mockDeserializer
})
export class MockAdapter implements Adapter<MockActionMetadata, MockActionOptions> {

  execute(ctx: ExecuteContext<MockActionMetadata>, options: MockActionOptions): Observable<ExecuteResponse> {
    if (!options) options = {} as any;

    const [resource, action] = [ctx.adapterStore.resource, ctx.action];
    const endpoint = findProp('endpoint', resource, action);

    if (options.payloadInspect) {
      options.payloadInspect(ctx.adapterStore.targetController.toPlain(ctx.data));
    }

    return new Observable(o => {
      if (options.throwError) {
        o.error(options.throwError);
      } else {
        o.next(options.returnValue || {});
        o.complete();
      }
    }).map( response => ({ response }) );
  }
}
