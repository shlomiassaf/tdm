import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { ArrayActionRequestEvent } from '@tdm/ngx-dynamic-forms';
import { RendererV4Component } from '../renderer'; /* @tdm-ignore-line */
import { Hero } from '../16-arrays';

@Component({
  selector: 'form-array-actions',
  templateUrl: './array-actions.component.html',
  styleUrls: [ './array-actions.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: RendererV4Component }
  ]
  /* @tdm-ignore:* */
})
export class ArrayActionsComponent {
  model: Hero;
  code: any = System.import(/* webpackChunkName: "ArrayActionsComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

  constructor() {
    this.model = new Hero();
    this.model.allies = ['Thor', 'Captain America'];
    this.model.basesDestroyed = [
      {
        name: 'Bat Cave',
        coordinates: {
          lng: 10,
          lat: -10
        }
      },
      {
        name: 'Themyscira',
        coordinates: {
          lng: 99,
          lat: -99
        }
      }
    ];
  }

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

  /* @tdm-ignore:* */
  static tutorial = {
    id: 'array-actions',
    name: 'Array Actions'
  };
  /* @tdm-ignore:* */
}
