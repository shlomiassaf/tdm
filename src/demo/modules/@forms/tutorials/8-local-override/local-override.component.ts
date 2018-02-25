/* @tdm-example:tdmModel */
/* @tdm-example:tdmModel2 */
import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { DynamicFormComponent, DynamicFormOverrideContext } from '@tdm/ngx-dynamic-forms';
import { Hero } from '../4-element-metadata';

@Component({
  selector: 'form-local-override',
  templateUrl: './local-override.component.html',
  styleUrls: [ './local-override.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class LocalOverrideComponent implements AfterViewInit {
  model = new Hero();

  /* @tdm-ignore:tdmModel */
  @ViewChild('dynFormCustomOverride')
  dynFormCustomOverride: DynamicFormComponent;

  @ViewChild('defaultFieldOverrideTpl', { read: TemplateRef })
  defaultFieldOverrideTpl: TemplateRef<DynamicFormOverrideContext>;

  ngAfterViewInit(): void {
    this.dynFormCustomOverride.addOverride({ controlName: '*' }, this.defaultFieldOverrideTpl, true);
  }
  /* @tdm-ignore:tdmModel */
  /* @tdm-ignore:* */
  code: any = System.import(/* webpackChunkName: "FormsLocalOverrideComponent" */ './__tdm-code__.ts'); // tslint:disable-line
  static tutorial = {
    id: 'local-override',
    name: 'Local Override'
  };
  /* @tdm-ignore:* */
}
/* @tdm-example:tdmModel */
/* @tdm-example:tdmModel2 */
