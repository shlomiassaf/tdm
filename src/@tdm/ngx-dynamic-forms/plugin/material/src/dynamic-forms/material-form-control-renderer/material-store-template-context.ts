import { TemplateRef } from '@angular/core';
import { RenderInstruction, DynamicControlRenderContext } from '@tdm/ngx-dynamic-forms';

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
  getTemplate(item: RenderInstruction): TemplateRef<MaterialStoreTemplateContext>;
}
