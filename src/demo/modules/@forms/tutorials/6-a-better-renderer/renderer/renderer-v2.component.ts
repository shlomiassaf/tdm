import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import './renderer-v2.types';
import { RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'tutorial-renderer-v2',
  templateUrl: './renderer-v2.component.html',
  styleUrls: ['./renderer-v2.component.scss' ]
})
export class TutorialRendererV2Component implements DynamicFormControlRenderer {
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  fArray: FormArray | undefined;
  fControl: FormControl | undefined;
  fGroup: FormGroup | undefined;
}
