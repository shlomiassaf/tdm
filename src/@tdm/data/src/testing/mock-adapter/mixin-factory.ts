/* tslint:disable:max-line-length */
import { Tixin, Type } from '@tdm/tixin';
import { tdm } from '@tdm/core';
import { TDMModel, store, plugins } from '@tdm/data';
import { MockAdapter } from './core';

import { MockActiveRecord, MockActiveRecordStatic  } from './mock-active-record';


/* GENERATED BY scripts/generic_codegen.js */
export function MockMixin<Model, TypeofModel>(): Type<Model & TDMModel<Model> & MockActiveRecord> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel;
export function MockMixin<Model, TypeofModel>(model: TypeofModel & Type<Model>): Type<Model & TDMModel<Model> & MockActiveRecord> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel;
export function MockMixin<Model, TypeofModel, T1, C1>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>): Type<Model & TDMModel<Model> & MockActiveRecord & T1> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2, T3, C3>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2 & T3> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2 & C3;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2, T3, C3, T4, C4>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2 & T3 & T4> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2 & C3 & C4;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2 & T3 & T4 & T5> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2 & C3 & C4 & C5;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2 & T3 & T4 & T5 & T6> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2 & C3 & C4 & C5 & C6;
export function MockMixin<Model, TypeofModel, T1, C1, T2, C2, T3, C3, T4, C4, T5, C5, T6, C6, T7, C7>(model: TypeofModel & Type<Model>, m1: C1 & Type<T1>, m2: C2 & Type<T2>, m3: C3 & Type<T3>, m4: C4 & Type<T4>, m5: C5 & Type<T5>, m6: C6 & Type<T6>, m7: C7 & Type<T7>): Type<Model & TDMModel<Model> & MockActiveRecord & T1 & T2 & T3 & T4 & T5 & T6 & T7> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & TypeofModel & C1 & C2 & C3 & C4 & C5 & C6 & C7;


export function MockMixin<Model, TypeofModel, TMIXIN, CMIXIN>(model?: TypeofModel & Type<Model>, ...mixins: Array<CMIXIN & Type<TMIXIN>>): Type<Model & TDMModel<Model> & MockActiveRecord & TMIXIN> & MockActiveRecordStatic<Model> & typeof MockActiveRecord & CMIXIN & TypeofModel {
  plugins.assertPlugin('ActiveRecord');

  if (!model) {
    model = <any>class {};
  }
  // a model might not be a target at this point (i.e. it has no metadata)
  tdm.targetStore.registerTarget(model);

  /**
   * Marking the mixin BaseRestResource for model.
   * Since model is an extending class, it's type will be traversed and looked up for mixins
   * so the deriving class (base) will get all the actions from the BaseRestResource
   *
   */
  store.markMixins(model, MockAdapter, MockActiveRecord, ...mixins);

  // we can't send ...mixin to Tixin since the type limits the ..mixins amount
  const result = (Tixin as any)(model, MockActiveRecord, ...mixins);

  const tMeta = tdm.targetStore.getTargetMeta(result);
  if (tMeta.hasModel) {
    tMeta.model().build(true);
  }

  return result as any;
}
export type MockMixin<Model> = Model & TDMModel<Model> & MockActiveRecord;

/* tslint:disable:max-line-length */
