import { TixinFree } from '@tdm/tixin';
import { Constructor } from '@tdm/transformation';

const TDMModelMark = Symbol('TDMModel instance mark');

export interface TDMModel<T> {

}

export class TDMModelBase<T> implements TDMModel<T> {

  toString(): string {
    return this.constructor.name;
  }



  static instanceOf(instance: any): instance is TDMModelBase<any> {
    return instance.hasOwnProperty(TDMModelMark);
  }

  static factory<T, Z>(model: Z & Constructor<T>): Z & Constructor<TDMModelBase<T>> {
    class TDModel extends (model as Constructor<{}>) { }

    Object.defineProperty(TDModel, 'name', { configurable: true, value: model.name });
    Object.defineProperty(TDModel, Symbol.hasInstance, { value: TDMModelBase.instanceOf });

    TixinFree(TDModel, TDMModelBase, 'proto');

    return TDModel as any;
  }
}

Object.defineProperty(TDMModelBase.prototype, TDMModelMark, { value: true });
