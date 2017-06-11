import { Adapter, AdapterResponse, ExecuteContext, findProp, ExecuteResponse } from '@tdm/data';

import { MockActionMetadata, MockResourceMetadata } from '../metadata';
import { MockActionOptions } from './interfaces';

export class MockAdapter implements Adapter<MockActionMetadata, MockActionOptions> {
  readonly supports = { cancel: true };

  private executing = new Map<number, {resolve: any, reject: any}>();
  private idCount = 1;

  execute(ctx: ExecuteContext<MockActionMetadata>, options: MockActionOptions, args: any[]): AdapterResponse {
    if (!options) options = {} as any;

    const action = ctx.action ;
    const resource = ctx.targetMeta.model<MockResourceMetadata>();
    const endpoint = findProp('endpoint', resource, action);

    if (options.payloadInspect) {
      options.payloadInspect(ctx.serialize());
    }

    const id = this.idCount++;
    let ref = { resolve: undefined, reject: undefined };
    const response = new Promise<ExecuteResponse>( (resolve, reject) => { ref = {resolve, reject} } );
    this.executing.set(id, ref);

    setTimeout(() => {
      const ref = this.executing.get(id);
      if (ref) {
        this.executing.delete(id);
        if (options.throwError) {
          ref.reject(options.throwError)
        } else {
          ref.resolve({ data: options.returnValue || {} })
        }
      }
    }, options.timeout);

    return { id, response };
  }

  cancel(id: number): void {
    const ref = this.executing.get(id);
    if (ref) {
      this.executing.delete(id);
      ref.reject(new Error('CANCELLED')); // mimic cancellation that fires an error
    }
  }
}
