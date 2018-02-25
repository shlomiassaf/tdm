import { Component, ViewChild } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { FormWrapperComponent } from '../../shared/form-wrapper/form-wrapper.component'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-disable-form',
  templateUrl: './disable-form.component.html',
  styleUrls: [ './disable-form.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class DisableFormComponent {
  disabled: boolean = true;
  model = new Hero();
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "FormsDisableFormComponent" */ './__tdm-code__.ts');
  @ViewChild(FormWrapperComponent) formWrapper: FormWrapperComponent;

  constructor() {
    const waitForAnUpdate = () => {
      setTimeout( () => {
        if ( this.formWrapper && this.formWrapper.form ) {
          this.formWrapper.form.updateValueAndValidity();
        } else {
          waitForAnUpdate();
        }
      });
    };
    waitForAnUpdate();
  }

  static tutorial = {
    id: 'disable-form',
    name: 'Disable Form'
  };
  /* @tdm-ignore:* */
}
