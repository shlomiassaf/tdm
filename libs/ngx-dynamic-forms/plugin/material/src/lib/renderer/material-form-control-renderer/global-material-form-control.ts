import { Directive, Input, TemplateRef } from '@angular/core';
import { FormElementType } from '@tdm/ngx-dynamic-forms';

import { MaterialStoreTemplateContext } from './material-store-template-context';
import { storeContainer } from './material-form-control-renderer.component';

@Directive({
  selector: '[globalMaterialFormControl]'
})
export class GlobalMaterialFormControlDirective {
  @Input('globalMaterialFormControl')
  set name(value: keyof FormElementType) {
    if (value && !this._name) {
      this._name = value;
      storeContainer.store.registerTemplate(value, this.tRef);
    }
  }

  private _name: string;

  constructor(public tRef: TemplateRef<MaterialStoreTemplateContext>) {}
}
