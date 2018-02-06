import '@tdm/core';

export {
  FormElementType,
  RenderDef
} from './interfaces';

export {
  FormModel,
  FormProp,
  FormModelMetadataArgs,
  FormPropMetadataArgs,
  ngFormsMapper,
  NgFormsBoundMapper
} from './core/index';

export {
  RenderInstruction,
  DynamicFormControlRenderer,
  TDMModelFormDirective,
  TDMModelFormService,
  TDMModelForm
} from './tdm-model-form/index';

export {
  ArrayActionRequestEvent,
  ArrayActionAddRequestEvent,
  ArrayActionRemoveRequestEvent,
  ArrayActionEditRequestEvent,
  ArrayActionMoveRequestEvent,
  DynamicFormComponent,
  DynamicFormControlDirective,
  DynamicFormOverrideDirective,
  DynamicFormOverrideContext,
  DynamicFormArrayComponent,
  ForFormArrayDirective,
  BeforeRenderEventHandler,
  FORM_CONTROL_COMPONENT,
  TdmFormChange,
  TdmFormChanges
} from './dynamic-forms/index';

export { DynamicFormsModule, TDMFormsModule } from './module';

export { clone, objectToForm } from './utils';

export { createControl } from './create-control';

// re-export common types from core.
export {
  Prop,
  Model,
  Exclude,
  Type
} from '@tdm/core';
