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

  formJson: string;
  modelJson: string;
  showSpinner: boolean;

  @Input() rightDrawerOpened: boolean;
  @Input() title: string;
  @Input() jsonView: boolean;
  @Input() code: ExtractedCode[];
  @Input() noDashboard: boolean;

  ledBlinking: boolean;
  ledColor: 'red' | 'blue' | 'yellow' | 'green';

  toggleJsonView(): void {
    this.jsonView = !this.jsonView;
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
      this.form.statusChanges.subscribe( status => {
        switch (status) {
          case 'VALID':
            this.ledColor = 'green';
            this.ledBlinking = false;
            break;
          case 'INVALID':
            this.ledColor = 'red';
            this.ledBlinking = true;
            break;
          case 'PENDING':
            this.ledColor = 'blue';
            this.ledBlinking = true;
            break;
          case 'DISABLED':
            this.ledColor = 'yellow';
            this.ledBlinking = false;
            break;
          default:
            this.ledColor = <any> '';
        }
      });
    }
  }

  refreshJsonView(): void {
    if (this.jsonView) {
      this.formJson = highlightAuto(JSON.stringify(this.dynForm.form.getRawValue(), null, 2), ['json']).value;
      this.modelJson = highlightAuto(JSON.stringify(this.dynForm.tdmForm.model, null, 2), ['json']).value;
    }
  }
}
