import { Component } from '@angular/core';

@Component({
  selector: 'ngx-http-resource-control',
  templateUrl: './resource-control.component.html',
  styleUrls: [ './resource-control.component.scss' ],
})
export class ResourceControlComponent {
  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "NgxHttpResourceControlComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'resource-control',
    name: 'Resource Control',
    subHeader: 'Resource Control'
  };
  /* @tdm-ignore:* */
}
