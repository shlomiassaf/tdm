export * from '../active-record/interfaces';
export * from '../metadata/meta-types/schema/interfaces';

import { Observable } from 'rxjs/Observable';
import { ActionMetadata } from '../metadata';
import { TargetAdapterMetadataStore } from '../metadata/target-adapter-metadata-store';

/**
 * @public
 */
export interface ExecuteContext<T extends ActionMetadata> {
  adapterStore: TargetAdapterMetadataStore;
  action: T;

  /**
   * The instance currently executing
   */
  instance: any;

  /**
   * Optional body to be sent if set.
   * If not set the body is a serialized value of data.
   *
   * Applies only if the action is configured to send body.
   */
  rawBody?: any;

  getIdentity(): IdentityValueType;
  setIdentity(identity: IdentityValueType): void;
  serialize(): any
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
