import { DecoratorInfo, MetaClass } from '@tdm/core/tdm';

import { ActionMetadata, ActionMetadataArgs } from '@tdm/data';
import { BaseLocalForageConfig } from '../core/interfaces';

export interface LocalForageActionMetadataArgs extends ActionMetadataArgs, BaseLocalForageConfig {

}

@MetaClass<LocalForageActionMetadataArgs, LocalForageActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend: 'actionMetadata',
  register: 'actionMetadata'
})
export class LocalForageActionMetadata extends ActionMetadata {
  constructor(obj: LocalForageActionMetadataArgs, info: DecoratorInfo) {
    super(obj, info);

  }

  static adapterClass: any;
}
