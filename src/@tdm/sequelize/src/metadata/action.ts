import * as seq from 'sequelize';

import { DecoratorInfo, metaFactoryFactory, targetStore, MetaFactoryInstance } from '@tdm/core';

import { ActionMetadata, ActionMetadataArgs, ActionMethodType, ExecuteContext } from '@tdm/data';
import { SeqActionOptions, SeqAdapter } from '../core';
import { BaseSeqConfig } from '../core/interfaces';
import { mapMethod, MappedMethod, HttpActionMethodType } from './method-mapper';

export interface SeqActionProxyArgs {
  method?: (keyof typeof seq.Model) | keyof seq.Model<any, any>,
  args: (ctx: ExecuteContext<SeqActionMetadata>, options: SeqActionOptions, ...args: any[]) => any[]
}

export interface SeqActionMetadataArgs extends ActionMetadataArgs<ActionMethodType>, BaseSeqConfig {
  seqProxy: SeqActionProxyArgs
}

export class SeqActionMetadata extends ActionMetadata {
  seqProxy: SeqActionProxyArgs

  constructor(obj: SeqActionMetadataArgs, info: DecoratorInfo) {
    super(obj, info);

    if (!this.seqProxy.method) {
      this.seqProxy.method = <any>info.name;
    }
  }

  static metaFactory = metaFactoryFactory<SeqActionMetadataArgs, SeqActionMetadata>(SeqActionMetadata);

  static register(meta: MetaFactoryInstance<SeqActionMetadata>): void {
    targetStore.getAdapter(SeqAdapter).addAction(meta);
  };
}
