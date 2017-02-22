import { Tixin } from '@tdm/tixin';
import { ActiveRecordCollection, ActionMethodType, BaseActiveRecord, IdentityValueType, ExecuteContext } from '@tdm/core';

import { MockActionOptions } from './core/interfaces';
import { MockAction, MockActionMetadata } from './metadata';

export class BaseMockResource {
  @MockAction({
    method: ActionMethodType.CREATE,
    validation: 'both' as 'both',
    sendBody: true
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
    sendBody: true
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
    validation: 'incoming' as 'incoming'
  })
  static query: (options?: MockActionOptions) => ActiveRecordCollection<any>;

  @MockAction({
    method: ActionMethodType.READ,
    validation: 'incoming' as 'incoming',
    pre: (ctx: ExecuteContext<MockActionMetadata>, id: IdentityValueType, options: MockActionOptions) => {
      ctx.data[ctx.adapterStore.identity] = id;
      return options;
    }
  })
  static find: (id: IdentityValueType, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.DELETE,
    validation: 'skip' as 'skip',
    pre: (ctx: ExecuteContext<MockActionMetadata>, id: IdentityValueType, options: MockActionOptions) => {
      ctx.data[ctx.adapterStore.identity] = id;
      return options;
    }
  })
  static remove: (id: IdentityValueType, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.CREATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, data: any, options: MockActionOptions) => {
      ctx.deserialize(data);
      return options;
    }
  })
  static create: (data: any, options?: MockActionOptions) => any;

  @MockAction({
    method: ActionMethodType.UPDATE,
    validation: 'both' as 'both',
    pre: (ctx: ExecuteContext<MockActionMetadata>, data: any, options: MockActionOptions) => {
      ctx.deserialize(data);
      return options;
    }
  })
  static update: (data: any, options?: MockActionOptions) => any;
}

export interface BaseMockResourceStatic<T> {
  find(id: IdentityValueType, options?: MockActionOptions): Tixin<T, BaseActiveRecord<T> & BaseMockResource>;
  query(options?: MockActionOptions): ActiveRecordCollection<Tixin<T, BaseActiveRecord<T> & BaseMockResource>>;
  create(data: Partial<T>, options?: MockActionOptions): Tixin<T, BaseActiveRecord<T> & BaseMockResource>;
  update(data: Partial<T>, options?: MockActionOptions): Tixin<T, BaseActiveRecord<T> & BaseMockResource>;
  remove(id: IdentityValueType, options?: MockActionOptions): Tixin<T, BaseActiveRecord<T> & BaseMockResource>;
}
