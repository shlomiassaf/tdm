import { Observable } from 'rxjs';
import { Adapter, ResourceAdapter, ExecuteContext, findProp, ExecuteResponse } from '@tdm/core';

import { MockActionMetadata } from '../metadata';
import { MockActionOptions } from './interfaces';

@ResourceAdapter({
  actionMetaClass: MockActionMetadata
})
export class MockAdapter implements Adapter<MockActionMetadata, MockActionOptions> {

  execute(ctx: ExecuteContext<MockActionMetadata>, options: MockActionOptions): Observable<ExecuteResponse> {
    if (!options) options = {} as any;

    const [resource, action] = [ctx.adapterStore.parent, ctx.action];
    const endpoint = findProp('endpoint', resource, action);

    if (options.payloadInspect) {
      options.payloadInspect(ctx.serialize());
    }

    return new Observable(o => {
      if (options.throwError) {
        o.error(options.throwError);
      } else {
        o.next(options.returnValue || {});
        o.complete();
      }
    }).map( data => ({ data }) );
  }
}
