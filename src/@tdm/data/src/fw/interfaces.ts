export * from '../active-record/interfaces';
export * from '../metadata/meta-types/schema/interfaces';

import { ActionMetadata } from '../metadata';
import { ExecuteContext, ExecuteParams } from '../core/execute-context';

export interface AdapterResponse {
  /**
   * An id representing this call.
   */
  id: any;

  response: Promise<ExecuteResponse>;

  /**
   * The raw request object
   * This is optional, the type of the request changes between adapters.
   */
  request?: any;
}

export interface ExecuteResponse {
  /**
   * The data object, this is the object that the library will deserialize into the instance.
   */
  data: any;

  /**
   * When set to true, the library will not deserialize the `data` object into the instance.
   */
  skipDeserialize?: boolean;

  /**
   * The raw response object
   * This is optional, the type of the response changes between adapters.
   */
  response?: any;
}

export interface ActionOptions {

}

export interface AdapterStatic<T extends ActionMetadata, Z extends ActionOptions> {
  new(): Adapter<T, Z>;
  prototype: Adapter<T, Z>;
}

export interface Adapter<T extends ActionMetadata, Z extends ActionOptions> {
  supports: {
    cancel: boolean;
  };

  /**
   *
   * @param ctx Context for the execution
   * @param options The options supplied (after possible transformation from 'pre')
   * @param args the arguments used to invoke the action
   */
  execute(ctx: ExecuteContext<T>, options: Z,  params: ExecuteParams): AdapterResponse;

  cancel(id: any): void;
}

export type IdentityValueType = string | number;
