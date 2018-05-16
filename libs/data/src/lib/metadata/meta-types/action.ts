import {
  isFunction,
  isString,
  DecoratorInfo,
  BaseMetadata
} from '@tdm/core/tdm';

import {
  ExecuteResponse,
  ActionOptions,
  ValidationSchedule,
  AdapterStatic
} from '../../fw';
import { ExecuteContext } from '../../core';

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

export type PreActionHandler = (
  ctx: ExecuteContext<any>,
  ...args: any[]
) => any;

/**
 * The
 */
export type PostActionHandler = (
  response: ExecuteResponse,
  options: ActionOptions
) => void;
export type PostActionMetadata = {
  handler: PostActionHandler;
  /**
   * Override mode.
   *
   * When set to true the action, when invoked, will not return the instance of the model, instead it will return a
   * promise to the return value of the handler.
   *
   * When setting returns to true the incoming data is not managed by the library (no deserialization).
   * When called on an ActiveRecord instance the instance is cloned and the action will work on the clone and not the
   * original instance this is why you SHOULD NOT return the instance when setting returns to true.
   *
   * This mode is useful for custom methods that does not return the instance itself but a different value, for example
   * an action operation with an indicator (true/false)
   *
   * @default false
   */
  returns?: boolean;
};

export interface ActionMetadataArgs<T = any> {
  method: T;
  /**
   * Specify if the response is an array.
   * A collection can only be set on static level actions.
   * @optional
   * @default false
   */
  isCollection?: boolean;

  /**
   * If set to true, the action is also set on the ActiveRecordCollection instance.
   * Valid on if isCollection is true;
   */
  collInstance?: boolean;

  /**
   * A hook to update data and return the options.
   * If not set the options is taken from the 1st arg.
   */
  pre?: PreActionHandler;

  /**
   * A hook that allow control over the response.
   *
   * The hook's handler signature is [[PostActionHandler]].
   *
   * > Note that the context (this) of the handler is the instance of the model.
   *
   * The hook has 2 modes: PASSIVE and ACTIVE
   *
   * >The default mode is PASSIVE.
   *
   * PASSIVE MODE:
   * Hook used to manipulate values in the response but does not control the structure.
   * This mode allows updating the instance of the model before it is sent back to the user.
   *
   * The instance is created by the library which (optionally) deserialize the response and then the hooks can update
   * the instance before it is serialized and sent to the user.
   *
   * > Optionally deserialize because the action might instruct not to, use ExecuteResponse.skipDeserialize to detect
   * this.
   *
   * ACTIVE MODE:
   * Hook used to change the response returned from the execution of the action.
   *
   * An execution returns one of 2: The instance of the model it "executes on" OR a promise of...
   *
   * When using ACTIVE mode, the execution will (always) return a promise of the value returned by the post handler.
   *
   * ACTIVE mode allows execution of operations/actions that does not return a response matching the structure of
   * the model attached to it.
   *
   * For example, In a virtual machines ,management application we have a `VirtualMachine` record which we store in a
   * database but we can also use to invoke operations (RPC). The `stop()` method is an operation/action we want to
   * define but it returns an object with some keys that is not related to the `VirtualMachine` and used to keep track
   * of the shutdown. For that we need to use an ACTIVE post action handler so we return this object instead of the
   * library thinking this object represents the `VierualMachine` model.
   */
  post?: PostActionHandler | PostActionMetadata;

  validation?: ValidationSchedule;

  /**
   * An alias (or alias list) for methods names that reference this action.
   *
   * > The library will create a reference to the action methods for each alias in the list.
   */
  alias?: string | string[];

  /**
   * Declare the number of parameters that the action accepts.
   * When set, if the number of params is less then the hint an empty option object is added at the
   * hint location.
   *
   * The library assumes that the last parameter in an action method signature is the option object.
   *
   * > The value is the length, not last index.
   *
   *
   * > This will eliminate the need to validate the options object on actions where options object is optional.
   *
   * If you are using other optional parameters or union types you will need to verify the options manually and do not
   * define a hint. In such cases it is probably better to reconsider the implementation, remove parameters from the
   * signature and put them in the options object.
   */
  paramHint?: number;
}

export abstract class ActionMetadata extends BaseMetadata {
  method: ActionMethodType;
  isCollection: boolean | undefined;
  collInstance: boolean | undefined;
  pre?: PreActionHandler;
  post?: PostActionMetadata;
  validation: ValidationSchedule;
  alias?: string[];
  paramHint: number;

  constructor(
    public readonly metaArgs: ActionMetadataArgs<any>,
    info: DecoratorInfo
  ) {
    super(info);

    Object.assign(this, metaArgs);
    if (metaArgs.post) {
      if (isFunction(metaArgs.post)) {
        this.post = { handler: metaArgs.post };
      } else if (metaArgs.post && isFunction(metaArgs.post.handler)) {
        this.post = metaArgs.post;
      }
    }
    if (isString(metaArgs.alias)) {
      this.alias = [metaArgs.alias];
    }
    this.paramHint = metaArgs.paramHint || 0;
  }

  /**
   * The adapter class this action represents
   */
  static adapterClass: AdapterStatic<any, any>;
}
