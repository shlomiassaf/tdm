import { Component, ViewChild } from '@angular/core';
import { BeforeRenderEventHandler, DynamicFormComponent } from '@tdm/ngx-dynamic-forms';

import { STATES } from '../before-render-event';
import { User } from '../models';

@Component({
  selector: 'form-field-sync-redraw',
  templateUrl: './field-sync-redraw.component.html',
  styleUrls: [ './field-sync-redraw.component.scss' ]
})
export class FieldSyncRedrawComponent {
  model = new User();
  code: any = require('!!tdm-code-sample!./_code-exapmle-extraction.ts'); /* @tdm-ignore-line */

  stateFieldType: 'select' | 'radio';

  @ViewChild('dynForm') dynForm: DynamicFormComponent;

  beforeRender($event: BeforeRenderEventHandler): void {
    const addressState = $event.instructions['address.state'];
    if (addressState) {
      // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
      // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
      const p = new Promise( r => setTimeout(r, 1000 ))
        .then( () => {
          addressState.mergeData({
            selections: STATES
          });
        });
      // mark this field as async, no render until promise completes.
      $event.async(p);

      if (addressState.data && addressState.data.selections !== STATES) {
        this.stateFieldType = addressState.type = 'select';
      } else {
        this.fieldSync();
      }
    }
  }

  fieldSync(): void {
    const ri = this.dynForm.instructions['address.state'];
    if (ri && this.stateFieldType !== ri.type) {
      ri.type = this.stateFieldType;

      if (this.stateFieldType === 'radio') {
        ri.mergeData({ vertical: true });
      }
      ri.markAsChanged();
    }
  }
}