import { Component, ViewChild } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { BeforeRenderEventHandler, DynamicFormComponent } from '@tdm/ngx-dynamic-forms';
import { DynamicFormRowComponent } from '../../5-renderer-container'; /* @tdm-ignore-line */
import { Hero } from '../../4-element-metadata';
import { getSuperPowersAsync } from '../before-render-event';

@Component({
  selector: 'form-field-sync-redraw',
  templateUrl: './field-sync-redraw.component.html',
  styleUrls: [ './field-sync-redraw.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class FieldSyncRedrawComponent {
  model = new Hero();
  code: any = System.import(/* webpackChunkName: "FieldSyncRedrawComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

  stateFieldType: 'select' | 'radio' = 'select';

  @ViewChild('dynForm') dynForm: DynamicFormComponent;

  beforeRender($event: BeforeRenderEventHandler): void {
    const superPower = $event.instructions['superPower'];
    if (superPower) {
      // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
      // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
      const existingPowers = superPower.getData('options') || [];
      const p = getSuperPowersAsync().then(newPowers => {
        if (existingPowers.length !== 10) {
          existingPowers.push(...newPowers);
        }
        superPower.mergeData({ options: existingPowers });
      });
      // mark this field as async, no render until promise completes.
      $event.async(p);

      if (existingPowers.length !== 10) {
        this.stateFieldType = superPower.vType = 'select';
      } else {
        this.fieldSync();
      }
    }
  }

  fieldSync(): void {
    const superPower = this.dynForm.instructions['superPower'];
    if (superPower && this.stateFieldType !== superPower.vType) {
      superPower.vType = this.stateFieldType;

      if (this.stateFieldType === 'radio') {
        superPower.mergeData({ vertical: true });
      }
      superPower.markAsChanged();
    }
  }
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'field-sync-redraw',
    name: 'Field Sync / Redraw'
  };
  /* @tdm-ignore:* */
}
