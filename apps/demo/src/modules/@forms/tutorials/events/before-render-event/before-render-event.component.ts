import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../../5-renderer-container'; /* @tdm-ignore-line */
import { BeforeRenderEventHandler } from '@tdm/ngx-dynamic-forms';
import { Hero } from '../../4-element-metadata';

export function getSuperPowersAsync(): Promise<Array<{ labe?: string; value: string; }>> {
  return new Promise( r => setTimeout(r, 1000 ))
    .then( () => {
      return [
        { value: 'atomicVision', label: 'Atomic Vision' },
        { value: 'teleportation', label: 'Teleportation' },
        { value: 'physicalRestoration', label: 'Physical Restoration' },
        { value: 'timeTravel', label: 'Time Travel' },
        { value: 'mindReading', label: 'Mind Reading' }
      ];
    });
}

@Component({
  selector: 'form-before-render-event',
  templateUrl: './before-render-event.component.html',
  styleUrls: [ './before-render-event.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class BeforeRenderEventComponent {
  code: any = import(/* webpackChunkName: "FormsBeforeRenderEventComponent" */ './__tdm-code__'); /* @tdm-ignore-line */ // tslint:disable-line
  model = new Hero();

  beforeRender($event: BeforeRenderEventHandler): void {

    const bmi = $event.instructions['bmi'];
    if (bmi) {
      bmi.vType = 'number';
    }

    const superPower = $event.instructions['superPower'];
    if (superPower) {
      // ASYNC CALLS THAT BLOCK THE WHOLE FORM FROM RENDERING, GOOD FOR GETTING DATA FROM REMOTE SERVER.
      // E.G.: GETTING GROUPS LISTED UNDER A USER, ETC...
      const p = getSuperPowersAsync().then(newPowers => {
        const existingPowers = superPower.getData('options') || [];
        existingPowers.push(...newPowers);
        superPower.mergeData({ options: existingPowers });
      });
      // mark this field as async, no render until promise completes.
      $event.async(p);
    }
  }
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'before-render-event',
    name: 'Event: (beforeRender)',
    subHeader: 'Events'
  };
  /* @tdm-ignore:* */
}
