export * from '../active-record/interfaces';
export * from '../metadata/meta-types/schema/interfaces';

import { Observable } from 'rxjs/Observable';
import { ActionMetadata } from '../metadata';
import { TargetMetadata } from '@tdm/transformation';

/**
 *
 * @public
 */
export interface ExecuteContext<T extends ActionMetadata> {
  /**
   * The target metadata for this execution.
   */
  targetMeta: TargetMetadata;

  action: T;

  /**
   * The instance representing this execution context.
   *
   * The instance not set until request, i.e. it is lazy.
   * The first request creates it, if it does not exists.
   * This can be directly or indirectly (by calling setIdentity, deserialize, serialize  etc...)
   *
   * This also mean that the instance can be set from an action's "pre" handler.
   * An instance set must be an instance of the target or an instance of ActiveRecordCollection. (i.e. return true from the call to ExecuteContext#instanceOf)
   */
  instance: any;

  /**
   * Optional body to be sent if set.
   */
  body?: any;

  /**
   * Returns true if an object is an instance of the target type of this execution context.
   * The target type is ActionRecordCollection when the action of this execution context is true (ActionMetadata#isCollection)
   * otherwise it is the target.
   * @param obj
   */
  instanceOf(obj: any): boolean;


  getIdentity(): IdentityValueType;
  setIdentity(identity: IdentityValueType): void;

  /**
   * Serialize the instance in this execution context.
   */
  serialize(): any

  /**
   * Deserialize an object into the instance of the current execution context.
   * If an instance does not exist, it will be created on the fly.
   * @param data
   */
  deserialize(data: any): void
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
  execute(ctx: ExecuteContext<T>, options: Z): Observable<ExecuteResponse>;
}

/**
 * @public
 */
export type IdentityValueType = string | number;
