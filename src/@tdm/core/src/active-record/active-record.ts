import { Type } from '@tdm/tixin';

import { DefinePropertyTyped } from '../utils';
import { ActiveRecordState } from './active-record-state';
import { ARProps } from './active-record-interfaces';

// TODO: TDModel to implement & ActiveRecord $ar and return it in type
export function activeRecordClassFactory<T>(model: Type<T>): Type<T> {

  class TDModel extends (model as Type<{}>) {
    $ar: ActiveRecordState<T>;

    constructor(...args: any[]) {
      super(...args);

      /**
       * Make active record prop future proof for refactoring.
       */
      (Object.defineProperty as DefinePropertyTyped<typeof ARProps, ActiveRecordState<T>>)
        (this, '$ar', { value: new ActiveRecordState<T>(this as any) });
    }

    toString(): string {
      return this.constructor.name;
    }
  }
  Object.defineProperty(TDModel, 'name', { configurable: true, value: model.name });

  return TDModel as any //as Type<T & TDModel>;
}
