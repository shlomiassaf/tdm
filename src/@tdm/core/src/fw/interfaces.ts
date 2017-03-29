export * from '../active-record/interfaces';
export * from '../metadata/meta-types/schema/interfaces';

import { Observable } from 'rxjs/Observable';
import { ActionMetadata } from '../metadata';
import { ExecuteContext } from '../core/execute-context';

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
  execute(ctx: ExecuteContext<T>, options: Z): Observable<ExecuteResponse>;
}

/**
 * @public
 */
export type IdentityValueType = string | number;
