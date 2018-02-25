import { MetaClass, DecoratorInfo } from '@tdm/core/tdm';
import { ActionMetadata, ActionMetadataArgs } from './action';

@MetaClass<ActionMetadataArgs<any>, ExtendActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend: 'mergeMapArray',
  register: 'array'
})
export class ExtendActionMetadata extends ActionMetadata {
  constructor(metaArgs: Partial<ActionMetadataArgs<any>>, info: DecoratorInfo)  {
    super(metaArgs as any, info);
    Object.assign(this, metaArgs);
  }
}
