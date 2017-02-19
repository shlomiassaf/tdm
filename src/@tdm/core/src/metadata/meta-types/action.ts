import { DeserializerFactory, ExecuteContext, ExecuteResponse, ActionOptions } from "../../core";
import { ValidationSchedule } from './schema';
import { MemberDecoratorMetadata } from './core';
import { DecoratorInfo } from '../meta-types';

export enum ActionMethodType {
  /**
   * Used to mark a method as local to the implementing adapter.
   */
  LOCAL,
  READ,
  CREATE,
  REPLACE,
  UPDATE,
  DELETE
}

export type RawActionHandler = (executeResponse: ExecuteResponse, options: ActionOptions) => void;

export type RawActionMetadataArgs = RawActionHandler | {
  handler: RawActionHandler;
  deserialize?: boolean;
}

export interface RawActionMetadata {
  handler: RawActionHandler;
  deserialize: boolean;
}

export interface ActionMetadataArgs<T> {
  method: T;
  /**
   * Specify if the response is an array.
   * A collection can only be set on static level actions.
   * @optional
   * @default false
   */
  isCollection?: boolean;
  deserializer?: DeserializerFactory;
  raw?: RawActionMetadataArgs;
  /**
   * A hook to update data and return the options.
   * If not set the options is taken from the 1st arg.
   * @param data
   * @param args
   */
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any,
  validation?: ValidationSchedule;
  sendBody?: boolean;
}

export class ActionMetadata extends MemberDecoratorMetadata {
  method: ActionMethodType;
  isCollection: boolean | undefined;
  deserializer: DeserializerFactory;
  raw: RawActionMetadata;
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any;
  validation: ValidationSchedule;
  sendBody: boolean;

  constructor(public readonly metaArgs: ActionMetadataArgs<any>, info: DecoratorInfo) {
    super(info);
  }
}
