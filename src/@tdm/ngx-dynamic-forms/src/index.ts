import '@tdm/core';

export {
  FormElementType,
  RenderDef,
  RenderInstruction
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
  TDMModelFormDirective,
  TDMModelFormService,
  TDMModelForm
} from './tdm-model-form/index';

export {
  DynamicFormComponent,
  DynamicFormControlDirective,
  DynamicFormOverrideDirective,
  DynamicFormControlRenderer,
  BeforeRenderEventHandler,
  FORM_CONTROL_COMPONENT
} from './dynamic-forms/index';

export { TDMFormsModule } from './module';

