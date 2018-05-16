/* @tdm-example:tdmDemo */
/* @tdm-example:tdmDemoInteractive */
/* @tdm-example:tdmDemoExcludeRequired */
import { Component } from '@angular/core'
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */;
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-filter-disable-hidden-state',
  templateUrl: './filter-disable-hidden-state.component.html',
  styleUrls: [ './filter-disable-hidden-state.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class FilterDisableHiddenStateComponent {

  model = new Hero();
  /* @tdm-ignore:tdmDemo */
  modelExcludeDisabled = new Hero(); /* @tdm-ignore-line:tdmDemoInteractive */
  code: any = import(/* webpackChunkName: "FormsFilterDisableHiddenStateComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  controlState = { exclude: [], disabled: [], hidden: [] }; /* @tdm-ignore-line:tdmDemoExcludeRequired */ // tslint:disable-line
  controlStateExcludeDisabled = { exclude: ['name'], disabled: [], hidden: [] }; /* @tdm-ignore-line:tdmDemoInteractive */

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
  /* @tdm-ignore:tdmDemo */

  /* @tdm-ignore:* */
  static tutorial = {
    id: 'filter-disable-hidden-state',
    name: 'Filter / Disabled / Hidden state'
  };
  /* @tdm-ignore:* */
}
/* @tdm-example:tdmDemo */
/* @tdm-example:tdmDemoInteractive */
/* @tdm-example:tdmDemoExcludeRequired */
