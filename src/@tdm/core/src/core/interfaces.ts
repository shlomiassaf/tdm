import { Observable } from 'rxjs/Observable';
import { ActionMetadata } from '../metadata';
import { TransformDir } from '../metadata/meta-types';
import { TargetAdapterMetadataStore } from '../metadata/reflection';



/**
 * @public
 */
export interface ExecuteContext<T extends ActionMetadata> {
  adapterStore: TargetAdapterMetadataStore;
  action: T;
  data: any;
  serialize(): any
  deserialize(data: any): void
}

export interface ExecuteResponse {
  response: any;
  request?: any;
  deserialized?: any;
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
 * Performs a deserialization from the result of an action handler
 * Can be sync or async.
 * @public
 */
export interface Deserializer<T> {
  deserialize(response: T): any | Promise<any>;
}

/**
 * @public
 */
export interface TargetFactoryParams {
  identity?: IdentityValueType;
  ctorArgs?: any[]
}


/**
 * @public
 */
export type DeserializerFactory = () => Deserializer<any>;

/**
 * @public
 */
export type IdentityValueType = string | number;

/**
 * @public
 */
export interface NamingStrategyFn extends Function{
  (propertyName: string): string;
}

/**
 * @public
 */
export type NamingStrategyConfig =  { [P in TransformDir]: NamingStrategyFn }
