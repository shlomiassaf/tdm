import {
  Directive,
  Input,
  Inject,
  forwardRef,
  TemplateRef,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { isString } from '@tdm/core/tdm';

import { FormElementType } from '../interfaces';
import { RenderInstruction } from '../tdm-model-form/render-instruction';
import { DynamicControlRenderContext } from '../tdm-model-form/tdm-model-form';

export interface DynamicFormOverrideContext {
  $implicit: DynamicControlRenderContext;
}

export class ControlSelectorBase implements OnChanges {
  controlName: string | string[];
  vType: keyof FormElementType | Array<keyof FormElementType>;

  /**
   * Returns true when the control name is catch all
   */
  get isCatchAll(): boolean {
    return this.controlName === '*';
  }

  protected filter = {
    names: [] as string[],
    vTypes: [] as Array<keyof FormElementType>
  };

  isMatching(rd: RenderInstruction): boolean {
    return (
      (!this.vType || this.filter.vTypes.indexOf(rd.vType) > -1) &&
      (this.controlName &&
        (this.controlName === '*' || this.controlName.indexOf(rd.name) > -1))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('controlName' in changes || 'vType' in changes) {
      this.syncQuery();
    }
  }

  syncQuery(): void {
    this.filter.names = Array.isArray(this.controlName)
      ? this.controlName
      : isString(this.controlName) ? [this.controlName] : [];

    this.filter.vTypes = Array.isArray(this.vType)
      ? this.vType
      : isString(this.vType) ? [this.vType] : [];
  }
}

/**
 * A directive that allows override the default renderer for a form control name.
 *
 * @example
 *
 * ```html
 * <dynamic-form #df [model]="data.user" [exclude]="['remotePassword']">
 *   <md-input-container *dynamicFormOverride="'localUser'; let ctx" [formGroup]="ctx.fGroup" >
 *     <input type="password" [formControl]="ctx.fControl" mdInput [placeholder]="ctx.item.label">
 *   </md-input-container>
 * </dynamic-form>
 * ```
 *
 */
@Directive({
  selector: '[dynamicFormOverride]',
  exportAs: 'dynamicFormOverride'
})
export class DynamicFormOverrideDirective extends ControlSelectorBase {
  @Input('dynamicFormOverride') controlName: string | string[];
  @Input('dynamicFormOverrideVType')
  vType: keyof FormElementType | Array<keyof FormElementType>;

  constructor(public template: TemplateRef<DynamicFormOverrideContext>) {
    // tslint:disable-line
    super();
  }
}
