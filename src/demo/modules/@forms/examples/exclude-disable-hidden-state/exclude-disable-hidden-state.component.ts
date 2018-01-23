import { Component } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'form-exclude-disable-hidden-state',
  templateUrl: './exclude-disable-hidden-state.component.html',
  styleUrls: [ './exclude-disable-hidden-state.component.scss' ]
})
export class ExcludeDisableHiddenStateComponent {

  model = new User();
  modelExcludeDisabled = new User();
  code: any = require('!!tdm-code-sample!./_code-exapmle-extraction.ts'); /* @tdm-ignore-line */

  controlState = { exclude: [], disabled: [], hidden: [] };
  controlStateExcludeDisabled = { exclude: ['name'], disabled: [], hidden: [] };

  handleControlState(state: string[], name: string): void {
    setTimeout(() => {
      const idx = state.indexOf(name);
      if (idx === -1) {
        state.push(name);
      } else {
        state.splice(idx, 1);
      }
    });
  }
}
