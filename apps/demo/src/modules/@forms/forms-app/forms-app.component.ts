import { Component, VERSION as NG_VERSION } from '@angular/core';
import { TdmFeatureListItem } from '@shared';
import { UIDeveloper } from './model';

@Component({
  selector: 'forms-app',
  styleUrls: [ './forms-app.component.scss' ],
  templateUrl: './forms-app.component.html'
})
export class FormsAppComponent {
  readonly version = require('../../../../../../libs/ngx-dynamic-forms/package.json').version;
  readonly ngVersion = NG_VERSION.full;

  model = new UIDeveloper();
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
