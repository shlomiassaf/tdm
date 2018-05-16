import { TemplateRef } from '@angular/core';
import {
  RenderInstruction,
  DynamicControlRenderContext,
  FormElementType
} from '@tdm/ngx-dynamic-forms';

export interface MaterialStoreInstance {
  editSingleChildForm(context: DynamicControlRenderContext): void;

  addToList(): void;

  editFromList(): void;

  removeFromList(): void;

  hasError(errorName: string, ctx: DynamicControlRenderContext): boolean;
}

export interface MaterialStoreTemplateContext {
  $implicit: DynamicControlRenderContext;
  showLabels?: boolean;
  self: MaterialStoreInstance;
}

export interface TemplateStore {
  registerTemplate(
    name: keyof FormElementType,
    templateRef: TemplateRef<MaterialStoreTemplateContext>
  ): void;
  getTemplate(
    item: RenderInstruction
  ): TemplateRef<MaterialStoreTemplateContext>;
}
