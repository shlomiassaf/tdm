import { TargetFactoryParams } from './interfaces';
import { ActiveRecordCollection } from '../active-record/active-record-collection';
import { TargetTransformer } from './target-transformer';
import { TargetValidator } from './target-validator';
import { defaultConfig  } from '../default-config';
import { LazyInit } from '../utils/decorators';
import { findProp } from "../utils/index";
import { TransformStrategy, ValidationError } from '../metadata/meta-types/schema/interfaces';
import { TargetAdapterMetadataStore } from '../metadata/reflection/target-adapter-metadata-store';
import { ActionMetadata } from '../metadata/meta-types';

export class TargetController<T /* extends ActiveRecord<any, any> */> {

  @LazyInit(function (this: TargetController<any>): string | undefined {
    return this.adapterStore.resource.identity;
  })
  identity: string | undefined;

  @LazyInit(function (this: TargetController<any>): TargetTransformer {
    const resource = this.adapterStore.resource;
    const transformNameStrategy = findProp('transformNameStrategy', defaultConfig, resource);

    return new TargetTransformer(this.adapterStore.target, transformNameStrategy);
  })
  private transformer: TargetTransformer;

  @LazyInit(function (this: TargetController<any>): TransformStrategy {
    return findProp('transformStrategy', defaultConfig, this.adapterStore.resource);
  })
  private strategy: TransformStrategy;

  @LazyInit(function (this: TargetController<any>): TargetValidator {
    return new TargetValidator(this.adapterStore.target);
  })
  private validator: TargetValidator;

  constructor(private adapterStore: TargetAdapterMetadataStore) {
  }

  createCollection(): ActiveRecordCollection<T> {
    return new ActiveRecordCollection<T>();
  }

  create(params: TargetFactoryParams = {} as any): T {
    const instance = params.ctorArgs
        ? new this.adapterStore.target(...params.ctorArgs)
        : new this.adapterStore.target()
      ;

    if (params.hasOwnProperty('identity')) {
      instance[this.identity] = params.identity;
    }

    if (params.data) {
      this.fromPlain(instance, params.data);
    }

    return instance;
  }

  validate(instance: any): Promise<ValidationError[]> {
    return this.validator.validate(instance);
  }

  fromPlain(instance: T, plainObject: Partial<T>): void {
    this.transformer.transform(plainObject, instance, 'incoming', this.strategy);
  }

  toPlain(instance: T): any {
    const plain = {};
    this.transformer.transform(instance, plain, 'outgoing', this.strategy);
    return plain;
  }

}
