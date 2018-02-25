import { Component, NgZone } from '@angular/core';
import { TdmFeatureListItem } from '@shared';

import { SWClient } from '@http/client';

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

  private client: SWClient;

  constructor(private ngZone: NgZone) { }

  initClient() {
    if (this.client) {
      this.client.dispose();
    }
    this.ngZone.runOutsideAngular(() => {
      const client = this.client = new SWClient();
      client.ready
        .then( () => console.log('CLIENT CREATED') )
        .catch( err => console.error(err) );
    });
  }

  restoreDB() {
    if (this.client) {
      this.client.restoreDB()
        .then(data => console.log('DB RESTORED') )
        .catch( err => console.error(err) );
    }
  }

  fetch(url: string, method: string = 'GET') {
    fetch(url, { method })
      .then( response => response.json() )
      .then( response => {
        console.log(`URL: ${url}, METHOD: ${method}, RESPONSE: ${JSON.stringify(response, null, 2)}`);
      })
      .catch( err => {
        console.log(`URL: ${url}, METHOD: ${method}, ERR: ${err.toString()}`);
      });
  }
}
