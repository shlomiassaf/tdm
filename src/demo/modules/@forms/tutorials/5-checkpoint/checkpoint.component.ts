import { Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms';
import { TutorialSimpleRendererComponent } from '../4-simple-renderer';
import { Hero } from '../4-simple-renderer/model';

@Component({
  selector: 'form-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: [ './checkpoint.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: TutorialSimpleRendererComponent }
  ]
  /* @tdm-ignore:* */
})
export class CheckpointComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code4: any = System.import(/* webpackChunkName: "SimpleRendererComponent" */ '../4-simple-renderer/__tdm-code__.ts'); // tslint:disable-line
  code: any = System.import(/* webpackChunkName: "CheckpointComponent" */ './__tdm-code__.ts'); // tslint:disable-line

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  static tutorial = {
    id: 'checkpoint',
    name: 'Checkpoint'
  };
  /* @tdm-ignore:* */
}
