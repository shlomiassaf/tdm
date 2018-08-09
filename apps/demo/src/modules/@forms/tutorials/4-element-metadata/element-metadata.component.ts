import { Component } from '@angular/core';

import { Hero } from './model';

@Component({
  selector: 'form-element-metadata',
  templateUrl: './element-metadata.component.html',
  styleUrls: [ './element-metadata.component.scss' ],
})
export class ElementMetadataComponent {
  model = new Hero();

  /* @tdm-ignore:* */
  code: any = import(/* webpackChunkName: "FormsElementMetadataComponent" */ './__tdm-code__'); // tslint:disable-line
  static tutorial = {
    id: 'element-metadata',
    name: 'Element Metadata'
  };

  constructor() {
    this.model.hobbies = ['Baseball', 'Soccer'] as any;
  }
  /* @tdm-ignore:* */
}
