import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { RendererV5Component } from '../renderer'; /* @tdm-ignore-line */
import { ArrayActionRequestEvent } from '@tdm/ngx-dynamic-forms';
import { Hero } from './model';

@Component({
  selector: 'form-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: [ './child-form.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV5Component }
  ]
  /* @tdm-ignore:* */
})
export class ChildFormComponent {
  model = new Hero();

  onArrayActionRequest(event: ArrayActionRequestEvent): void {
    if ( event.action === 'add' ) {
      // we need to create a form control instance, it can be FormControl but can also be FormGroup or FormArray
      // we need to the serializer for that, so we use the helper function on [[TDMModelForm]]
      event.tdmForm.appendControl(event.fullName);
      event.formArray.markAsDirty();
    } else if ( event.action === 'remove' ) {
      event.formArray.removeAt(event.atIdx);
      event.formArray.markAsDirty();
    } else if ( event.action === 'edit' ) {

    }
  }
  code: any = System.import(/* webpackChunkName: "ChildFormComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'child-form',
    name: 'Child Form'
  };
  /* @tdm-ignore:* */
}
