import { Component } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'form-hot-bind',
  templateUrl: './hot-bind.component.html',
  styleUrls: [ './hot-bind.component.scss' ]
})
export class HotBindComponent {
  hotBind: boolean = true;
  model = new User();
  code: any = require('!!tdm-code-sample!./_code-exapmle-extraction.ts'); /* @tdm-ignore-line */
}
