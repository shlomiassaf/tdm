import { targetStore, isUndefined, stringify, TargetMetadata } from '@tdm/core';

import {
  Adapter,
  findProp,
  ExecuteContext,
  AdapterResponse,
  ExecuteResponse
} from '@tdm/data';

import { SeqActionMetadata } from '../metadata';
import { SeqActionOptions } from './interfaces';
import { seqDefaultConfig } from '../seq-default-config';


export class SeqAdapter implements Adapter<SeqActionMetadata, SeqActionOptions> {
  readonly supports = { cancel: false };

  private idCount = 1;

  execute(ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions, args: any[]): AdapterResponse {
    const id = this.idCount++;
    try {
      const proxy = ctx.action.seqProxy;
      const methodArgs = proxy.args(ctx, options, ...args);

      const response = (<any>ctx.targetMeta.seqModel)[proxy.method](...methodArgs)
        .then(data => Promise.resolve({data}) );

      return { id, response };
    } catch (err) {
      return { id, response: Promise.reject(err) };
    }
  }

  cancel(id: number): void { }
}
