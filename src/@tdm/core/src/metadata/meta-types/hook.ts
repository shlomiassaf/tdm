import { MemberDecoratorMetadata, DecoratorInfo } from './core';
import { ARHookableMethods } from '../../active-record';

export interface HookMetadataArgs {
  event: 'before' | 'after';
  action: ARHookableMethods;
}

export class HookMetadata extends MemberDecoratorMetadata {
  event: 'before' | 'after';
  action: ARHookableMethods;

  constructor(obj: HookMetadataArgs, info: DecoratorInfo) {
    super(info);
    this.event = obj.event;
    this.action = obj.action;
  }

  static DEFAULTS: HookMetadataArgs = {} as any;

  static VALIDATE(obj: HookMetadataArgs): void {
  }
}

