import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'renderer-v3',
  templateUrl: './renderer-v3.component.html',
  styleUrls: ['./renderer-v3.component.scss' ]
})
export class RendererV3Component implements DynamicFormControlRenderer {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;
  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

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
