import { MetaClass, DecoratorInfo } from '@tdm/core/tdm';

import {
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  ValidationSchedule
} from '@tdm/data';

import { MockAdapter } from '../../core';

export interface MockActionMetadataArgs
  extends ActionMetadataArgs<ActionMethodType> {
  isCollection?: boolean;
}

@MetaClass<MockActionMetadataArgs, MockActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend: 'actionMetadata',
  register: 'actionMetadata'
})
export class MockActionMetadata extends ActionMetadata {
  method: ActionMethodType;
  isCollection: boolean;
  validation: ValidationSchedule;

  constructor(obj: MockActionMetadataArgs, public info: DecoratorInfo) {
    super(obj, info);
  }

  static adapterClass = MockAdapter;
}
