import { Component } from '@angular/core';

@Component({
  selector: 'ngx-http-creating-a-model',
  templateUrl: './creating-a-model.component.html',
  styleUrls: [ './creating-a-model.component.scss' ],
})
export class CreatingAModelComponent {
  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "NgxHttpCreatingAModelComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'creating-a-resource',
    name: 'Creating A Resource'
  };
  /* @tdm-ignore:* */
}
