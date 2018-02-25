import { targetStore, DecoratorInfo, MapExt, ModelMetadata, MetaClass, BaseMetadata, Constructor } from '@tdm/core/tdm';

import { OnMessageMetadata } from './on-message';

export interface ClientMetadataArgs {
  scriptURL?: string;
}

@MetaClass<ClientMetadataArgs, ClientMetadata>({
  single: true,
  inherit: ModelMetadata,
  allowOn: [ 'class' ]
})
export class ClientMetadata extends BaseMetadata {
  scriptURL: string;
  messageHandlers = new Map<string, string>();

  constructor(metaArgs: ClientMetadataArgs | undefined, info: DecoratorInfo, target: Constructor<any>) {
    super(info);
    if (metaArgs && metaArgs.scriptURL) {
      this.scriptURL = metaArgs.scriptURL;
    }

    const clientMessage = targetStore.getMetaFor(target, OnMessageMetadata);
    if (clientMessage) {
      for (let [k, v] of MapExt.asKeyValArray(clientMessage)) {
        this.messageHandlers.set(v.eventName, <any> k);
      }
    }
  }
}
