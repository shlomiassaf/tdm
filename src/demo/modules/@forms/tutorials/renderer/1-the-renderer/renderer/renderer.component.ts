import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { RenderInstruction, TDMModelForm, DynamicControlRenderContext } from '@tdm/ngx-dynamic-forms';

import './renderer.types';

@Component({
  selector: 'renderer-v1',
  templateUrl: './renderer.component.html'
})
export class RendererV1Component implements DynamicControlRenderContext {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray: FormArray | undefined;
  fControl: FormControl | undefined;
  fGroup: FormGroup | undefined;
}
