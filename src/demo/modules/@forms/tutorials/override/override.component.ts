/* @tdm-example:TDM-DEMO */
/* @tdm-example:TDM-DEMO2 */
import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { DynamicFormComponent, DynamicFormOverrideContext } from '@tdm/ngx-dynamic-forms';
import { bySection } from '@webpack-ext/tdm-code-sample/client';
import { User } from '../models';

/* @tdm-ignore:* */
const code: any = () => System.import(/* webpackChunkName: "OverrideComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
const code1 = () => code().then( c => bySection(c, 'TDM-DEMO', true) );
const code2 = () => code().then( c => bySection(c, 'TDM-DEMO2', true) );
/* @tdm-ignore:* */

@Component({
  selector: 'form-override',
  templateUrl: './override.component.html',
  styleUrls: [ './override.component.scss' ]
})
export class OverrideComponent implements AfterViewInit {
  model = new User();
  code1: any = code1(); code2: any = code2(); /* @tdm-ignore-line */

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
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'override',
    name: 'Override'
  };
  /* @tdm-ignore:* */
}
/* @tdm-example:TDM-DEMO */
/* @tdm-example:TDM-DEMO2 */
