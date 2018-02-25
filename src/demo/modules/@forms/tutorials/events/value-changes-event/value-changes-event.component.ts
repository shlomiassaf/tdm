import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormComponent, TdmFormChanges } from '@tdm/ngx-dynamic-forms';
import { DynamicFormRowComponent } from '../../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../../4-element-metadata';

@Component({
  selector: 'form-value-changes-event',
  templateUrl: './value-changes-event.component.html',
  styleUrls: [ './value-changes-event.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ValueChangesEventComponent {
  code: any = System.import(/* webpackChunkName: "FormsValueChangesEventComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  model = new Hero();
  disabledControls: string[] = ['id'];

  valueChanges($event: TdmFormChanges, dynForm: DynamicFormComponent): void {
    for (let c of $event) {
      switch (c.key) {
        case 'name':
          const len = c.currentValue && c.currentValue.length;
          dynForm.tdmForm.setValue('id', len);
          break;
        case 'doubleAgent':
          if (c.currentValue) {
            this.disabledControls.push('hasTracking');
            dynForm.tdmForm.setValue('hasTracking', false);
          } else {
            const idx = this.disabledControls.indexOf('hasTracking');
            if (idx > -1) {
              this.disabledControls.splice(idx, 1);
            }
          }
          break;
        default:
          break;
      }
    }
  }

  /* @tdm-ignore:* */
  static tutorial = <any> {
    id: 'value-changes-event',
    name: 'Event: (valueChanges)'
  };
  /* @tdm-ignore:* */
}
