import { BaseMetadata, MetaClass, DecoratorInfo } from '@tdm/core/tdm';
import { ClientProtocol } from '../../../shared/src/index';

@MetaClass<string, OnMessageMetadata>({
  allowOn: ['member'],
  extend: 'mergeMap'
})
export class OnMessageMetadata extends BaseMetadata {
  constructor(public eventName: keyof ClientProtocol, info: DecoratorInfo) {
    super(info);
  }
}
