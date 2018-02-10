import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import './renderer-v2.types';
import { RenderInstruction, TDMModelForm, DynamicControlRenderContext } from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'renderer-v2',
  templateUrl: './renderer-v2.component.html',
  styleUrls: ['./renderer-v2.component.scss' ]
})
export class RendererV2Component implements DynamicControlRenderContext {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray: FormArray | undefined;
  fControl: FormControl | undefined;
  fGroup: FormGroup | undefined;

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
