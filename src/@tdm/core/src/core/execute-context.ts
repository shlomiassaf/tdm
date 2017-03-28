import { TargetMetadata, MapperFactory } from "@tdm/transformation";

import { findProp } from '../utils';
import { defaultConfig } from '../default-config';
import { ActionMetadata } from '../metadata';
import {
  IdentityValueType,
  ExecuteContext,
  ResourceError,
  TDMModel,
  TDMCollection
} from '../fw';

export interface ExecuteParams {
  async?: boolean;
  args?: any[]
}

export class ExtendedContext implements ExecuteContext<any> {
  get targetMeta(): TargetMetadata {
    return this.meta;
  }

  get instance(): TDMModel<any> | TDMCollection<any> {
    if (!this._instance) {
      this._instance = this.meta.factory(this.action.isCollection);
    }

    return this._instance;
  }

  set instance(value: TDMModel<any> | TDMCollection<any>) {
    if (this._instance) {
      throw new Error('Instance exists');
    }

    if ( !this.instanceOf(value) ) {
      throw new Error('Instance does not match type');
    }

    this._instance = value;
  }

  private _instance: TDMModel<any> | TDMCollection<any>;
  private mapper: MapperFactory;


  constructor(private readonly meta: TargetMetadata, public readonly action: ActionMetadata) {
    this.mapper = findProp('mapper', defaultConfig, meta);
  }

  instanceOf(obj: any): boolean {
    return this.action.isCollection
      ? TDMCollection.instanceOf(obj)
      : obj instanceof this.meta.target
      ;
  }

  getIdentity(): IdentityValueType {
    return this.instance[this.meta.getIdentityKey()];
  }

  setIdentity(identity: IdentityValueType): void {
    this.instance[this.meta.getIdentityKey()] = identity;
  }

  serialize(): any {
    return this.meta.serialize(this.mapper.serializer(this.instance));
  }

  deserialize(data: any): void {
    if (data) { // only if exists (false, 0, '' and all falsy's === not exists)
      const mapper = this.mapper.deserializer(data, this.meta.target);
      const isColl = !!this.action.isCollection;

      if (mapper.isCollection !== isColl) {
        throw ResourceError.coll_obj(this.instance, isColl);
      }

      this.meta.deserialize(mapper, this.instance);
    }
  }

  clone(instance?: TDMModel<any> | TDMCollection<any>): ExtendedContext {
    const ctx = new ExtendedContext(this.meta, this.action);
    if (instance) {
      ctx.instance = instance;
    }
    return ctx;
  }
}
