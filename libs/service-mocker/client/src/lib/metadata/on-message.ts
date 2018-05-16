import { BaseMetadata, MetaClass, DecoratorInfo } from '@tdm/core/tdm';
import { ServerProtocol } from '@tdm/service-mocker/shared';

@MetaClass<string, OnMessageMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
export class OnMessageMetadata extends BaseMetadata {
  constructor(public eventName: keyof ServerProtocol, info: DecoratorInfo) {
    super(info);
  }
}
