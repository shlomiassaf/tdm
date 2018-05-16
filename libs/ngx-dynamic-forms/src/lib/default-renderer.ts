import { Type, InjectionToken } from '@angular/core';
import { FormElementType } from './interfaces';
import { DynamicControlRenderContext } from './tdm-model-form/tdm-model-form';

/**
 * A renderer component.
 */
export type ControlRenderer = Type<DynamicControlRenderContext>;

/**
 * A map of visual types and the default renderer component to use for the visual type.
 * To set a fallback/catch all component use '*' as the key.
 */
export type DefaultRendererMap = Partial<
  Record<keyof FormElementType | '*' | '[]', ControlRenderer>
>;

/**
 * Default renderer definition.
 * Can be a ControlRenderer or a DefaultRendererMap
 */
export type DefaultRenderer = ControlRenderer | DefaultRendererMap;

/**
 * A Token for the component that renders form controls
 */
export const FORM_CONTROL_COMPONENT = new InjectionToken<
  DynamicControlRenderContext
>('DynamicControlRenderContext');
