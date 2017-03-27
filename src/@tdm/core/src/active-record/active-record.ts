import { Type } from '@tdm/tixin';

const onCreateNewCallbackArray: Array<(instance: any) => void> = [];

export function onCreateNew(cb: (instance: any) => void) {
  onCreateNewCallbackArray.push(cb);
}

export function activeRecordClassFactory<T>(model: Type<T>): Type<T> {

  class TDModel extends (model as Type<{}>) {

    constructor(...args: any[]) {
      super(...args);
      for (let i=0, len=onCreateNewCallbackArray.length; i<len; i++) {
        onCreateNewCallbackArray[i](this);
      }
    }

    toString(): string {
      return this.constructor.name;
    }
  }
  Object.defineProperty(TDModel, 'name', { configurable: true, value: model.name });

  return TDModel as any //as Type<T & TDModel>;
}
