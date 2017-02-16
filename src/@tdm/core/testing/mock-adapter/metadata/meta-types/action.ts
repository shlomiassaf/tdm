import { Deserializer, ActionMetadata, ActionMetadataArgs, ActionMethodType, ValidationSchedule, DecoratorInfo } from '@tdm/core';

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


  static DEFAULTS: MockActionMetadataArgs = {
    method: undefined
  };

  static VALIDATE(obj: MockActionMetadataArgs): void {
    if (!obj.hasOwnProperty('method')) {
      throw new Error('Resource Action method is mandatory.');
    }
  }
}
