import { tdm } from '@tdm/core';

import {
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  ValidationSchedule,
} from '@tdm/data';

import { MockAdapter } from '../../core';

export interface MockActionMetadataArgs extends ActionMetadataArgs<ActionMethodType> {
  isCollection?: boolean;
}

@tdm.MetaClass<MockActionMetadataArgs, MockActionMetadata>({
  allowOn: ['staticMember', 'member'],
  extend: ActionMetadata.extend,
  register: ActionMetadata.register
})
export class MockActionMetadata extends ActionMetadata {
  method: ActionMethodType;
  isCollection: boolean;
  validation: ValidationSchedule;

  constructor(obj: MockActionMetadataArgs, public info: tdm.DecoratorInfo) {
    super(obj, info);
  }

  static adapterClass = MockAdapter;
}
