import { AfterContentInit, Input, Component, ContentChild, SimpleChanges, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DynamicFormComponent } from '@tdm/ngx-dynamic-forms';

import '!!style-loader!css-loader!sass-loader!./form-wrapper.global.scss';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CodeViewItem } from '@shared';

@Component({
  selector: 'form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: [ './form-wrapper.component.scss' ]
})
export class FormWrapperComponent implements AfterContentInit, OnChanges {

  form: AbstractControl;
  @ContentChild(DynamicFormComponent) dynForm: DynamicFormComponent;

  @Input() rightDrawerOpened: boolean;
  @Input() title: string;
  @Input() jsonView: 'model' | 'form' | undefined;
  @Input() code: CodeViewItem[];

  ngOnChanges(change: SimpleChanges): void {
    if ('rightDrawerOpened' in change) {
      this.rightDrawerOpened = coerceBooleanProperty(this.rightDrawerOpened);
    }
  }

  ngAfterContentInit(): void {
    if (this.dynForm) {
      this.form = this.dynForm.form;
    }
  }
}
