export * from '../active-record/interfaces';
export * from '../metadata/meta-types/schema/interfaces';

import { ActionMetadata } from '../metadata';
import { ExecuteContext } from '../core/execute-context';

export interface AdapterResponse {
  /**
   * An id representing this call.
   */
  id: any;

  response: Promise<ExecuteResponse>;
}

export interface ExecuteResponse {
  data: any;
  response?: any;
  request?: any;
}

/**
 *
 */
export interface ActionOptions {

}

/**
 * @public
 */
export interface AdapterStatic<T extends ActionMetadata, Z extends ActionOptions> {
  new(): Adapter<T, Z>;
  prototype: Adapter<T, Z>;
}

/**
 * @public
 */
export interface Adapter<T extends ActionMetadata, Z extends ActionOptions> {
  supports: {
    cancel: boolean;
  }

  /**
   *
   * @param ctx Context for the execution
   * @param options The options supplied (after possible transformation from 'pre')
   * @param args the arguments used to invoke the action
   */
  execute(ctx: ExecuteContext<T>, options: Z, args: any[]): AdapterResponse;

  cancel(id: any): void;
}

/**
 * @public
 */
export type IdentityValueType = string | number;
