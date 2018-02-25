import { Component } from '@angular/core';

import { Hero } from './model';

@Component({
  selector: 'form-creating-a-model',
  templateUrl: './creating-a-model.component.html',
  styleUrls: [ './creating-a-model.component.scss' ],
})
export class CreatingAModelComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "FormsCreatingAModelComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'creating-a-model',
    name: 'Creating A Model'
  };
  /* @tdm-ignore:* */
}
