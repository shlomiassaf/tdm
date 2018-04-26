import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Component,
  TemplateRef,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef, Optional
} from '@angular/core';

import {
  RenderInstruction,
  TDMModelForm,
  DynamicControlRenderContext,
  DynamicFormComponent,
  createChildFormEvent
} from '@tdm/ngx-dynamic-forms';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { MaterialStoreTemplateContext, MaterialStoreInstance, TemplateStore } from './material-store-template-context';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface RenderDef<T extends keyof FormElementType = keyof FormElementType> {
    identity?: string;
  }
}

export const storeContainer: { store: TemplateStore } = { store: undefined };

@Component({
  selector: 'material-form-control-renderer',
  templateUrl: './material-form-control-renderer.component.html',
  styleUrls: [ './material-form-control-renderer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialFormControlRenderer implements MaterialStoreInstance, DynamicControlRenderContext, OnChanges { // tslint:disable-line
  /**
   * Optional, set if the provider tree where you render this template is not an ancestor of [[DynamicFormComponent]].
   * This is usually the case when using an override template with a template defined out of scope.
   */
  @Input()
  get dynForm(): DynamicFormComponent {
    return this._dynForm;
  }

  set dynForm(value: DynamicFormComponent) {
    if ( value ) {
      this._dynForm = value;
    }
  }

  @Input() showLabels: boolean = true;
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  template: TemplateRef<MaterialStoreTemplateContext>;

  selectedItem: number;
  self = this;
  externalTdmForm: TDMModelForm<any>;

  private _dynForm: DynamicFormComponent;

  constructor(@Optional() dynForm: DynamicFormComponent, private cdr: ChangeDetectorRef) {
    if ( dynForm ) {
      this.dynForm = dynForm;
    }
  }

  tdmOnControlContextInit(): void {
    if (!this.template) {
      this.template = storeContainer.store.getTemplate(this.item);
      this.cdr.detectChanges();
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    if ( 'showLabels' in change ) {
      this.showLabels = coerceBooleanProperty(this.showLabels);
    }
    if ( 'item' in change ) {
      this.template = storeContainer.store.getTemplate(this.item);
      if ( this.item.isChildForm && this.fControl instanceof FormGroup ) {
        const model = this.tdmForm.getValueModel(this.item, this.fControl);
        this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, model, this.fControl);
      }
    }
  }

  editSingleChildForm(context: DynamicControlRenderContext): void {
    const event = createChildFormEvent(context);
    if ( event.isNew ) {
      event.context.fControl = <any> context.tdmForm.createControl(context.item.fullName, null, true);
      event.context.fGroup.setControl(context.item.name, event.context.fControl);
      event.context.item.markAsChanged();
    }
    this.dynForm.emitRendererEvent(event);
  }

  addToList(): void {
    if ( this.item.isPrimitive || this.item.isChildForm ) {
      // we create a new control, `appendControl` will push the right one, either primitive or child form.
      const newControl = this.tdmForm.appendControl(this.item.fullName, null, this.item.isChildForm);
      this.fArray.markAsDirty();

      // fire child form edit event.
      if ( this.item.isChildForm ) {
        const event = createChildFormEvent(this, { fControl: <any> newControl });
        event.isNew = true;
        this.dynForm.emitRendererEvent(event);
      }
    }
  }

  editFromList(): void {
    const event = createChildFormEvent(this, { fControl: <any> this.fArray.controls[ this.selectedItem ] });
    this.dynForm.emitRendererEvent(event);
  }

  removeFromList(): void {
    if ( this.selectedItem >= 0 ) {
      if ( this.item.isPrimitive || this.item.isChildForm ) {
        this.tdmForm.removeControl(this.item.fullName, this.selectedItem);
        this.fArray.markAsDirty();
      }

      this.selectedItem = undefined;
    }
  }

  hasError(errorName: string, ctx: DynamicControlRenderContext): boolean {
    if ( ctx.fControl ) {
      return ctx.fControl.hasError(errorName);
    } else if ( ctx.fArray ) {
      return ctx.fArray.hasError(errorName);
    } else if ( ctx.fGroup ) {
      return ctx.fGroup.hasError(errorName);
    }
    return false;
  }
}
