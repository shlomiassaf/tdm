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
  code: any = System.import(/* webpackChunkName: "ExcludeDisableHiddenStateComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line

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
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'exclude-disable-hidden-state',
    name: 'Exclude / Disabled / Hidden state'
  };
  /* @tdm-ignore:* */
}
