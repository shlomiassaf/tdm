import { TDMModel, TDMCollection, errors, TargetMetadata, MapperFactory } from '@tdm/core/tdm';

import { findProp } from '../utils';
import { defaultConfig } from '../default-config';
import { ActionMetadata } from '../metadata';
import { IdentityValueType } from '../fw';

/**
 *
 */
export interface ExecuteParams<T = any> {
  /**
   * Data object supplied by the creator of this execution.
   * This is a placeholder for an object that the creator of the execution can pass.
   *
   * For example, in:
   * ```ts
   * DAO.of(SomeAdapter, SomeTarget, { a: 'b' }).findById(12, 'abc');
   * ```
   *
   * `factoryArgs` will be { a: 'b' }
   *
   */
  factoryArgs?: T;

  /**
   * Arguments used when calling the action.
   * These are the arguments that the user passed in runtime.
   *
   * For example, in:
   * ```ts
   * DAO.of(SomeAdapter, SomeTarget).findById(12, 'abc');
   * ```
   *
   * `args` will be [12, 'abc']
   */
  args?: any[];
}

// TODO: TS 2.3 (set the instance type)
// export class ExecuteContext<T = any, Z extends ActionMetadata = ActionMetadata> {
export class ExecuteContext<T extends ActionMetadata> {
  /**
   * Optional data, usually an action pre hook will use this to pass information to the adapter.
   */
  data?: any;

  get targetMeta(): TargetMetadata {
    return this.meta;
  }

  /**
   * The instance representing this execution context.
   *
   * The instance not set, to set the instance use the setInstance() method.
   * Note that calling any method in ExecuteContext that requires the instance (setIdentity, deserialize,
   * serialize  etc...) will automatically init a new instance.
   *
   * This also mean that the instance can be set from an action's "pre" handler.
   * An instance set must be an instance of the target or an instance of ActiveRecordCollection.
   * (i.e. return true from the call to ExecuteContext#instanceOf)
   */
  get instance(): any { // TODO: TS 2.3 TDMModel<T> | TDMCollection<T> {
    return this._instance;
  }

  private get safeInstance(): TDMModel<any> | TDMCollection<any> {
    return this._instance || (this.setInstance(), this._instance);
  }

  private _instance: TDMModel<any> | TDMCollection<any>;
  private mapper: MapperFactory;

  constructor(private readonly meta: TargetMetadata, public readonly action: T, mapper?: MapperFactory) {
    this.mapper = this.mapper || findProp('mapper', defaultConfig, meta.model());
  }

  /**
   * The the instance for this execution context.
   * If no value supplied the instance set is a new instance or a new TDMCollection (based on the action)
   * @param value
   */
  setInstance(value?: TDMModel<any> | TDMCollection<any>): void {
    if (this._instance) {
      throw new Error('Instance exists');
    }

    if (!value) {
      value = this.meta.model().factory(this.action.isCollection);
    } else if (!this.instanceOf(value)) {
      throw new Error('Instance does not match type');
    }

    this._instance = value;
  }

  /**
   * Returns true if an object is an instance of the target type of this execution context.
   * The target type is ActionRecordCollection when the action of this execution context
   * is true (ActionMetadata#isCollection) otherwise it is the target.
   * @param obj
   */
  instanceOf(obj: any): boolean {
    return this.action.isCollection
      ? TDMCollection.instanceOf(obj)
      : obj instanceof this.meta.target
    ;
  }

  getIdentity(): IdentityValueType {
    return this.safeInstance[this.meta.getIdentityKey()];
  }

  setIdentity(identity: IdentityValueType): void {
    this.safeInstance[this.meta.getIdentityKey()] = identity;
  }

  /**
   * Serialize the instance in this execution context.
   */
  serialize(): any {
    return this.meta.serialize(this.mapper.serializer(this.safeInstance));
  }

  /**
   * Deserialize an object into the instance of the current execution context.
   * If an instance does not exist, it will be created on the fly.
   * @param data
   */
  deserialize(data: any): void {
    if (data) { // only if exists (false, 0, '' and all falsy's === not exists)
      const mapper = this.mapper.deserializer(data, this.meta.target);
      const isColl = !!this.action.isCollection;

      if (mapper.isCollection !== isColl) {
        errors.throw.modelSingleCol(<any> this.safeInstance, isColl);
      }

      this.meta.deserialize(mapper, this.safeInstance);
    }
  }

  /**
   * Returns a context-free copy of the current execution context.
   * The returned execution context does not contain the instance and/or data that existed in the source execution
   * context.
   */
  clone(instance?: TDMModel<any> | TDMCollection<any>): ExecuteContext<T> {
    const ctx = new ExecuteContext(this.meta, this.action, this.mapper);
    if (instance) {
      ctx.setInstance(instance);
    }
    return ctx;
  }

}
