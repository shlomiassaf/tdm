import { Component } from '@angular/core';

import { UIDeveloper } from './model';

@Component({
  selector: 'form-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: [ './architecture.component.scss' ]
})
export class ArchitectureComponent {
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "ArchitectureComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'architecture',
    name: 'Architecture'
  };
  /* @tdm-ignore:* */
}
