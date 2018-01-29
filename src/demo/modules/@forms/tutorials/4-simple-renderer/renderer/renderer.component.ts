import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'tutorial-simple-renderer',
  templateUrl: './renderer.component.html'
})
export class TutorialSimpleRendererComponent implements DynamicFormControlRenderer {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray: FormArray | undefined;
  fControl: FormControl | undefined;
  fGroup: FormGroup | undefined;
}
