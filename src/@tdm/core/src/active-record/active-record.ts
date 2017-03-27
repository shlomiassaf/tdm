import { Type } from '@tdm/tixin';

export function activeRecordClassFactory<T>(model: Type<T>): Type<T> {

  class TDModel extends (model as Type<{}>) {

    toString(): string {
      return this.constructor.name;
    }
  }
  Object.defineProperty(TDModel, 'name', { configurable: true, value: model.name });

  return TDModel as any //as Type<T & TDModel>;
}
