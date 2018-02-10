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
  DynamicControlRenderContext,
  TDMModelFormDirective,
  TDMModelFormService,
  TDMModelForm
} from './tdm-model-form/index';

export { FORM_CONTROL_COMPONENT, ControlRenderer, DefaultRenderer, DefaultRendererMap } from './default-renderer';

export {
  RENDERER_EVENTS,
  RendererEvent,
  RendererEventBase,
  CustomRendererEvent,
  ChildFormEditRendererEvent,
  ArrayAddRendererEvent,
  ArrayMoveRendererEvent,
  ArrayRemoveRendererEvent,

  DynamicFormComponent,
  DynamicFormControlDirective,
  DynamicFormOverrideDirective,
  DynamicFormOverrideContext,
  DynamicFormArrayComponent,
  ForFormArrayDirective,
  BeforeRenderEventHandler,
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
