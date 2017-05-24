import { tdm } from '@tdm/core';

import { ExecuteResponse, ActionOptions, ValidationSchedule, AdapterStatic } from '../../fw';
import { ExecuteContext } from '../../core';

const { isFunction, isString, targetStore, stringify } = tdm;

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

export type PostActionHandler = (response: ExecuteResponse, options: ActionOptions) => void;
export type PostActionMetadata =  {
  handler: PostActionHandler;
  skipDeserialize?: boolean;
}

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
   * @param data
   * @param args
   */
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any,
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
   * If you are using other optional parameters or union types you will need to verify the options manually and do not define a hint.
   * In such cases it is probably better to reconsider the implementation, remove parameters from the signature and put them in the options object.
   */
  paramHint?: number;
}

export abstract class ActionMetadata extends tdm.BaseMetadata {
  method: ActionMethodType;
  isCollection: boolean | undefined;
  collInstance: boolean | undefined;
  pre?: (ctx: ExecuteContext<any>, ...args: any[] )=> any;
  post?: PostActionMetadata;
  validation: ValidationSchedule;
  alias?: string[];
  paramHint: number;

  constructor(public readonly metaArgs: ActionMetadataArgs<any>, info: tdm.DecoratorInfo) {
    super(info);

    Object.assign(this, metaArgs);
    if (metaArgs.post) {
      if (isFunction(metaArgs.post)) {
        this.post = { handler: metaArgs.post }
      } else if (metaArgs.post && isFunction(metaArgs.post.handler)) {
        this.post= metaArgs.post;
      }
    }
    if (isString(metaArgs.alias)) {
      this.alias = [metaArgs.alias]
    }
    this.paramHint = metaArgs.paramHint || 0;
  }

  static register(this: tdm.MetaClassMetadata<ActionMetadataArgs, ActionMetadata>,
                  meta: tdm.MetaClassInstanceDetails<ActionMetadataArgs<any>, ActionMetadata>): void {
    if (!this.target.adapterClass) {
      throw new Error(`Class ${stringify(this)} must implement a static property 'adapterClass' that points to the Adapter it uses`);
    } else if (!isFunction(this.target.adapterClass.prototype.execute)) {
      throw new Error(`Class ${stringify(this)} points to an invalid Adapter class`);
    }
    targetStore.setMetaFormFactory(meta);
    targetStore.getAdapter(this.target.adapterClass).addAction(meta);
  }

  static extend(from: Map<PropertyKey, ActionMetadata>, to: Map<PropertyKey, ActionMetadata> | undefined, meta): Map<PropertyKey, ActionMetadata> {
    tdm.MapExt.asValArray(from)
      .forEach( v => targetStore.getAdapter(this.adapterClass).addAction(v, meta.to) );

    return to
      ? tdm.MapExt.mergeInto(to, from) // TODO: on mixins we override, on "extends" class we dont... this overrides at all times (wrong behaviour for class extends)
      : new Map<PropertyKey, ActionMetadata>(from.entries())
      ;
  }

  /**
   * The adapter class this action represents
   */
  static adapterClass: AdapterStatic<any, any>;
}
