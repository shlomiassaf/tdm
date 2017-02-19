import { TargetFactoryParams } from './interfaces';
import { ResourceError } from './errors';
import { ActiveRecordCollection } from '../active-record/active-record-collection';
import { TargetTransformer } from './target-transformer';
import { TargetValidator } from './target-validator';
import { defaultConfig  } from '../default-config';
import { LazyInit } from '../utils/decorators';
import { findProp } from "../utils";
import { TransformStrategy, ValidationError } from '../metadata/meta-types/schema/interfaces';
import { TargetMetadataStore } from '../metadata/reflection/target-metadata-store';
import { BaseActiveRecord } from '../active-record/active-record-interfaces';
import { DeserializeMapper, SerializeMapper } from '../mapping';

export class TargetController<T /* extends ActiveRecord<any, any> */> {

  @LazyInit(function (this: TargetController<any>): TargetTransformer {
    const resource = this.targetStore.resource;
    const transformNameStrategy = findProp('transformNameStrategy', defaultConfig, resource);

    return new TargetTransformer(this.targetStore.target, transformNameStrategy, this.strategy);
  })
  protected transformer: TargetTransformer;

  @LazyInit(function (this: TargetController<any>): TransformStrategy {
    return findProp('transformStrategy', defaultConfig, this.targetStore.resource);
  })
  protected strategy: TransformStrategy;

  @LazyInit(function (this: TargetController<any>): TargetValidator {
    return new TargetValidator(this.targetStore.target);
  })
  protected validator: TargetValidator;

  constructor(protected targetStore: TargetMetadataStore) {}

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

    return instance;
  }

  serialize(mapper: SerializeMapper): any {
    return this.transformer.serialize(mapper);
  }

  deserialize(mapper: DeserializeMapper, target: BaseActiveRecord<any> | BaseActiveRecord<any>[], plain: boolean = false): void {
    if (mapper.isCollection) {

      if (!Array.isArray(target)) {
        throw ResourceError.coll_obj(target, true);
      }

      while(mapper.next()) {
        const t: any = plain ? {} : this.create();
        this.transformer.deserialize(mapper, t);
        target.push(t);
      }
    } else {

      if (Array.isArray(target)) {
        throw ResourceError.coll_obj(undefined, false);
      }

      this.transformer.deserialize(mapper, target);
    }
  }


  validate(instance: any): Promise<ValidationError[]> {
    return this.validator.validate(instance);
  }
}

