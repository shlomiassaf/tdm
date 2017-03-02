import { DecoratorInfo, metaFactoryFactory, MetaFactoryInstance } from '@tdm/transformation';

import {
  Deserializer,
  ActionMetadata,
  ActionMetadataArgs,
  ActionMethodType,
  ValidationSchedule,
} from '@tdm/core';

export interface MockActionMetadataArgs extends ActionMetadataArgs<ActionMethodType> {
  deserializerFactory?: () => Deserializer<any>;
  isCollection?: boolean;
}


export class MockActionMetadata extends ActionMetadata {
  method: ActionMethodType;
  deserializer: () => Deserializer<any>;
  isCollection: boolean;
  validation: ValidationSchedule;

  constructor(obj: MockActionMetadataArgs, public info: DecoratorInfo) {
    super(obj, info);
    Object.assign(this, obj);
  }


  static metaFactory = metaFactoryFactory<MockActionMetadataArgs, MockActionMetadata>(MockActionMetadata);

  static register: (meta: MetaFactoryInstance<MockActionMetadata>) => void;
}
