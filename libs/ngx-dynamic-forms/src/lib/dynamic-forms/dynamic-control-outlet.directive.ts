import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { FormElementType } from '../interfaces';
import { DynamicFormComponent } from './dynamic-form.component';
import {
  DynamicFormOverrideContext,
  ControlSelectorBase
} from './dynamic-form-override.directive';

@Directive({
  selector: '[dynamicControlOutlet]',
  exportAs: 'dynamicControlOutlet'
})
export class DynamicControlOutletDirective extends ControlSelectorBase
  implements OnChanges, OnDestroy {
  // tslint:disable
  @Input('dynamicControlOutlet') controlName: string | string[];
  @Input('dynamicControlOutletDynForm') dynForm: DynamicFormComponent;
  @Input('dynamicControlOutletVType')
  vType: keyof FormElementType | Array<keyof FormElementType>;
  // tslint:enable

  /**
   * @internal
   */
  _vcRef: ViewContainerRef;
  _tRef?: TemplateRef<DynamicFormOverrideContext>;

  constructor(
    vcRef: ViewContainerRef,
    @Optional() tRef: TemplateRef<DynamicFormOverrideContext>
  ) {
    super();
    this._vcRef = vcRef;
    this._tRef = tRef;
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if ('dynForm' in changes) {
      if (changes.dynForm.previousValue) {
        this.dynForm.detachControlOutlet(this);
      }
      if (this.dynForm) {
        this.dynForm.attachControlOutlet(this);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.dynForm) {
      this.dynForm.detachControlOutlet(this);
    }
  }
}
