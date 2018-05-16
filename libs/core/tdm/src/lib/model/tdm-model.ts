import { TixinFree } from '@tdm/tixin';
import { Constructor } from '../fw';
import { MapperFactory } from '../mapping/mapper';

const TDMModelMark = Symbol('TDMModel instance mark');

export interface TDMModel<T> {}

export class TDMModelBase<T> implements TDMModel<T> {
  toString(): string {
    return this.constructor.name;
  }

  // SEE IMPLEMENTATION IN src/@tdm/core/src/core.ts
  /**
   * Clone's (deep) the resource.
   * This is a deep clone done using serialization -> deserialization, which means that all rules apply (i.e @Exclude)
   *
   * @param resource the resource (instance) to clone
   * @param mapperFactory Optional, The [[MapperFactory]] to use, defaults to [[directMapper]].
   */
  static clone: <T>(resource: T, mapperFactory?: MapperFactory) => T;

  static instanceOf(instance: any): instance is TDMModelBase<any> {
    return instance[TDMModelMark] === true;
  }

  static factory<T, Z>(
    model: Z & Constructor<T>
  ): Z & Constructor<TDMModelBase<T>> {
    class TDModel extends (model as Constructor<{}>) {}

    Object.defineProperty(TDModel, 'name', {
      configurable: true,
      value: model.name
    });
    Object.defineProperty(TDModel, Symbol.hasInstance, {
      value: TDMModelBase.instanceOf
    });

    TixinFree(TDModel, TDMModelBase, 'proto');

    // TODO: copy other TS reflection info
    const paramTypes = (Reflect as any).getOwnMetadata(
      'design:paramtypes',
      model
    );
    (Reflect as any).defineMetadata('design:paramtypes', paramTypes, TDModel);

    return TDModel as any;
  }
}

Object.defineProperty(TDMModelBase.prototype, TDMModelMark, { value: true });
