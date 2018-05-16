import { Component } from '@angular/core';
import { TdmFeatureListItem } from '@shared';

import { SWClient } from '@shared/client';

const client = new SWClient();

client.ready
  .then( () => {
    console.log('CLIENT CREATED');
    client.restoreDB()
      .then(data => console.log('DB RESTORED') )
      .catch( err => console.error(err) );
  })
  .catch( err => console.error(err) );

@Component({
  selector: 'ngx-http-app',
  styleUrls: [ './ngx-http-app.component.scss' ],
  templateUrl: './ngx-http-app.component.html'
})
export class NgxHttpAppComponent {
  code: any = require('./__tdm-code__.ts');
  features: TdmFeatureListItem[] = this.code
    .filter( c => c.file === 'FEATURES.md')
    .map( c => {
      return {
        title: c.title,
        description: c.code,
        md: true
      };
    });
}
