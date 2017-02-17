import { TargetFactoryParams } from './interfaces';
import { ActiveRecordCollection } from '../active-record/active-record-collection';
import { TargetTransformer } from './target-transformer';
import { TargetValidator } from './target-validator';
import { defaultConfig  } from '../default-config';
import { LazyInit } from '../utils/decorators';
import { findProp } from "../utils";
import { TransformStrategy, ValidationError } from '../metadata/meta-types/schema/interfaces';
import { TargetMetadataStore } from '../metadata/reflection/target-metadata-store';
import { BaseActiveRecord } from '../active-record/active-record-interfaces';
import { MapperFactory, DeserializeMapper, SerializeMapper } from '../mapping';

export class TargetController<T /* extends ActiveRecord<any, any> */> {

  @LazyInit(function (this: TargetController<any>): TargetTransformer {
    const resource = this.targetStore.resource;
    const transformNameStrategy = findProp('transformNameStrategy', defaultConfig, resource);

    return new TargetTransformer(this.targetStore.target, transformNameStrategy, this.strategy);
  })
  private transformer: TargetTransformer;

  @LazyInit(function (this: TargetController<any>): TransformStrategy {
    return findProp('transformStrategy', defaultConfig, this.targetStore.resource);
  })
  private strategy: TransformStrategy;

  @LazyInit(function (this: TargetController<any>): TargetValidator {
    return new TargetValidator(this.targetStore.target);
  })
  private validator: TargetValidator;

  constructor(private targetStore: TargetMetadataStore, private mapper: MapperFactory) {}

  createCollection(): ActiveRecordCollection<T> {
    return new ActiveRecordCollection<T>();
  }

  create(params: TargetFactoryParams = {} as any): T {
    const instance = params.ctorArgs
        ? new this.targetStore.target(...params.ctorArgs)
        : new this.targetStore.target()
      ;

    if (params.hasOwnProperty('identity')) {
      instance[this.targetStore.getIdentity()] = params.identity;
    }

    if (params.data) {
      this.deserialize(instance, params.data, false);
    }

    return instance;
  }

  serialize(instance: BaseActiveRecord<any> | ActiveRecordCollection<any>): any {
    const mapper = instance instanceof ActiveRecordCollection
      ? this.mapper.serializer(instance.collection)
      : this.mapper.serializer(instance)
    ;

    return this.transformer.serialize(mapper);
  }

  deserialize(source: any, target: BaseActiveRecord<any> | BaseActiveRecord<any>[], isCollection: boolean): void {
    const mapper = this.mapper.deserializer(source);

    if (mapper.isCollection !== !!isCollection) {
      throw new Error(`Expected ${isCollection ? 'Collection' : 'Object'} but got ${isCollection ? 'Object' : 'Collection'}`);
    }

    this._deserialize(mapper, target);
  }

  private _deserialize(mapper: DeserializeMapper, target: BaseActiveRecord<any> | BaseActiveRecord<any>[]): void {
    if (mapper.isCollection) {
      while(mapper.next()) {
        const t = this.create();
        this.transformer.deserialize(mapper, t);
        (target as Array<any>).push(t);
      }
    } else {
      this.transformer.deserialize(mapper, target);
    }
  }

  validate(instance: any): Promise<ValidationError[]> {
    return this.validator.validate(instance);
  }

  static deserialize(targetStore: TargetMetadataStore, mapper: DeserializeMapper): BaseActiveRecord<any> | BaseActiveRecord<any>[] {
    const tc = new TargetController(targetStore, undefined);
    const result: any = mapper.isCollection ? [] : tc.create();
    tc._deserialize(mapper, result);
    return result;
  }
}
