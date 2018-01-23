/* @tdm-example:TDM-DEMO */
import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { DynamicFormComponent, DynamicFormOverrideContext } from '@tdm/ngx-dynamic-forms';

import { User } from '../models';

@Component({
  selector: 'form-override',
  templateUrl: './override.component.html',
  styleUrls: [ './override.component.scss' ]
})
export class OverrideComponent implements AfterViewInit {
  model = new User();
  code: any = require('!!tdm-code-sample!./_code-exapmle-extraction.ts'); /* @tdm-ignore-line */
  code2: any = require('!!tdm-code-sample!./_code-exapmle-extraction2.ts'); /* @tdm-ignore-line */

  /* @tdm-ignore:TDM-DEMO */
  @ViewChild('dynFormCustomOverride') dynFormCustomOverride: DynamicFormComponent;
  @ViewChild('emailFieldOverrideTpl', { read: TemplateRef })
  emailFieldOverrideTpl: TemplateRef<DynamicFormOverrideContext>;
  @ViewChild('defaultFieldOverrideTpl', { read: TemplateRef })
  defaultFieldOverrideTpl: TemplateRef<DynamicFormOverrideContext>;

  ngAfterViewInit(): void {
    this.dynFormCustomOverride.addOverride('email', this.emailFieldOverrideTpl, false);
    this.dynFormCustomOverride.addOverride('*', this.defaultFieldOverrideTpl, true);
  }
  /* @tdm-ignore:TDM-DEMO */
}
/* @tdm-example:TDM-DEMO */
