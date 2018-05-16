import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { RenderInstruction, TDMModelForm, DynamicControlRenderContext } from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'renderer-v4',
  templateUrl: './renderer-v4.component.html',
  styleUrls: ['./renderer-v4.component.scss' ]
})
export class RendererV4Component implements DynamicControlRenderContext {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;
  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  externalTdmForm: TDMModelForm<any>;

  editChildFrom(): void {
    if (!this.externalTdmForm) {
      if (this.fControl.value === null) {
        this.fControl = <any> this.tdmForm.createControl(this.item.fullName, null, true);
        this.fGroup.setControl(this.item.name, this.fControl);
      }

      this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, this.fControl.value, <any> this.fControl);
    }
  }

  hasError(errorName: string): boolean {
    if ( this.fControl ) {
      return this.fControl.hasError(errorName);
    } else if ( this.fArray ) {
      return this.fArray.hasError(errorName);
    } else if ( this.fGroup ) {
      return this.fGroup.hasError(errorName);
    }
    return false;
  }
}
