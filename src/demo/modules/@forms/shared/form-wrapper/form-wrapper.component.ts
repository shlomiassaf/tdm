import '!!style-loader!css-loader!sass-loader!./form-wrapper.global.scss';

import { highlightAuto } from 'highlight.js';
import { debounceTime } from 'rxjs/operators';
import {
  AfterContentInit,
  Input,
  Component,
  ContentChild,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { DynamicFormComponent } from '@tdm/ngx-dynamic-forms';
import { ExtractedCode } from '@webpack-ext/tdm-code-sample/client';

@Component({
  selector: 'form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: [ './form-wrapper.component.scss' ]
})
export class FormWrapperComponent implements AfterContentInit, OnChanges {

  form: AbstractControl;
  @ContentChild(DynamicFormComponent) dynForm: DynamicFormComponent;

  formOrModelJson: string;
  showSpinner: boolean;

  @Input() rightDrawerOpened: boolean;
  @Input() title: string;
  @Input() jsonView: 'model' | 'form' | undefined;
  @Input() code: ExtractedCode[];
  @Input() noDashboard: boolean;

  onJsonViewChange(source: 'form' | 'model'): void {
    this.jsonView = this.jsonView !== source ? source : undefined;
    if (this.jsonView) {
      this.refreshJsonView();
    }
  }

  onCommitToModel(): void {
    this.dynForm.tdmForm.commitToModel();
    this.refreshJsonView();
  }

  ngOnChanges(change: SimpleChanges): void {
    if ('rightDrawerOpened' in change) {
      this.rightDrawerOpened = coerceBooleanProperty(this.rightDrawerOpened);
    }
    if ('noDashboard' in change) {
      this.noDashboard = coerceBooleanProperty(this.noDashboard);
    }
  }

  ngAfterContentInit(): void {
    if (this.dynForm) {
      this.form = this.dynForm.form;
      this.dynForm.valueChanges.pipe(debounceTime(150))
        .subscribe( v => this.refreshJsonView() );
    }
  }

  refreshJsonView(): void {
    const rawCode = this.jsonView === 'form'
      ? this.dynForm.form.getRawValue()
      : this.jsonView === 'model' ? this.dynForm.tdmForm.model : '';
    this.formOrModelJson = highlightAuto(JSON.stringify(rawCode, null, 2), ['json']).value;
  }
}
