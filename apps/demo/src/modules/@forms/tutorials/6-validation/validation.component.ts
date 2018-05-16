import { Component } from '@angular/core';
import { DynamicFormComponent, FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from './model';

@Component({
  selector: 'form-validation',
  templateUrl: './validation.component.html',
  styleUrls: [ './validation.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ValidationComponent {
  model = new Hero();
  required: boolean = false;
  requiredChanged(dynForm: DynamicFormComponent, value: boolean): void {
    const ri = dynForm.tdmForm.renderData.find( r => r.name === 'id');
    this.required = value;
    ri.required = value;
  }

  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsValidationComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'validation',
    name: 'Validation'
  };
  /* @tdm-ignore:* */
}
