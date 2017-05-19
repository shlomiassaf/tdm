import { Tixin } from '@tdm/tixin';
import { isPrimitive } from '@tdm/core';
import { TDMCollection, ActionMethodType, TDMModel, IdentityValueType, ExecuteContext } from '@tdm/data';

import { MockActionOptions } from './core/interfaces';
import { MockAction, MockActionMetadata } from './metadata';
import { MockDao } from './core/mock-dao'

export class MockActiveRecord extends MockDao<any> {
  @MockAction({
    method: ActionMethodType.CREATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, options?: MockActionOptions) => {
      ctx.body = ctx.serialize();
      return options;
    }
  })
  $create: (options?: MockActionOptions) => this;

  @MockAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming'
  })
  $refresh: (options?: MockActionOptions) => this;

  @MockAction({
    method: ActionMethodType.UPDATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, options?: MockActionOptions) => {
      ctx.body = ctx.serialize();
      return options;
    }
  })
  $update: (options?: MockActionOptions) => this;

  @MockAction({
    method: ActionMethodType.DELETE,
    validation: 'skip' as 'skip'
  })
  $remove: (options?: MockActionOptions) => this;

  @MockAction({
    method: ActionMethodType.READ,
    isCollection: true,
    collInstance: true,
    validation: 'incoming' as 'incoming',
    alias: 'findAll'
  })
  static query: (options?: MockActionOptions) => TDMCollection<any>;
  static findAll: (options?: MockActionOptions) => TDMCollection<any>;

  @MockAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<MockActionMetadata>, id: IdentityValueType, options?: MockActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  static findById: (id: IdentityValueType, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming'
  })
  static find: (options: MockActionOptions) => any;
  static findOne: (options: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.DELETE,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<MockActionMetadata>, id: IdentityValueType | any, options?: MockActionOptions) => {

      if (isPrimitive(id)) {
        ctx.setIdentity(id);
      } else if (ctx.instanceOf(id)) {
        ctx.setInstance(id);
      } else {
        ctx.deserialize(id);
      }
      return options;
    }
  })
  static remove: (id: IdentityValueType, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.CREATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, data: any, options?: MockActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.body = ctx.serialize();

      return options;
    }
  })
  static create: (data: any, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.UPDATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, data: any, options?: MockActionOptions) => {
      if (ctx.instanceOf(data)) {
        ctx.setInstance(data);
      } else {
        ctx.deserialize(data);
      }

      ctx.body = ctx.serialize();

      return options;
    }
  })
  static update: (data: any, options?: MockActionOptions) => any;
}

export interface MockActiveRecordStatic<T> {
  findById(options: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;
  find(id: IdentityValueType, options?: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;
  findOne(id: IdentityValueType, options?: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;

  query(options?: MockActionOptions): TDMCollection<Tixin<T, TDMModel<T> & MockActiveRecord>>;
  create(data: Partial<T>, options?: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;
  update(data: Partial<T>, options?: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;
  remove(id: IdentityValueType, options?: MockActionOptions): Tixin<T, TDMModel<T> & MockActiveRecord>;
}
