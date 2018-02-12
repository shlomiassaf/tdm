import { ChangeDetectorRef, Component } from '@angular/core';
import { FORM_CONTROL_COMPONENT } from '@tdm/ngx-dynamic-forms'; /* @tdm-ignore-line */
import { DynamicFormRowComponent } from '../5-renderer-container'; /* @tdm-ignore-line */
import { DynamicControlRenderContext, createChildFormEvent, TDMModelForm } from '@tdm/ngx-dynamic-forms';
import { Hero } from './model';

@Component({
  selector: 'form-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: [ './child-form.component.scss' ],
  /* @tdm-ignore:* */
  providers: [
    { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
  ]
  /* @tdm-ignore:* */
})
export class ChildFormComponent {
  code: any = System.import(/* webpackChunkName: "ChildFormComponent" */ './__tdm-code__.ts'); /* @tdm-ignore-line */ // tslint:disable-line
  model = new Hero();
  childForm: TDMModelForm<any>;
  rightDrawerOpened: boolean;
  showChildForm: boolean;

  constructor(private cdr: ChangeDetectorRef) { }

  editExternalForm(context: DynamicControlRenderContext): void {
    this.rightDrawerOpened = true;
    this.showChildForm = true;
    if (!this.childForm) {
      const event = createChildFormEvent(context);
      if ( event.isNew ) {
        event.context.fControl = <any> context.tdmForm.createControl(context.item.fullName, null, true);
        event.context.fGroup.setControl(context.item.name, event.context.fControl);
        event.context.item.markAsChanged();
      }
      this.childForm = event.createTDMModelForm();
      this.cdr.detectChanges();
    }
  }

  hasError(errorName: string, ctx: DynamicControlRenderContext): boolean {
    if ( ctx.fControl ) {
      return ctx.fControl.hasError(errorName);
    } else if ( ctx.fArray ) {
      return ctx.fArray.hasError(errorName);
    } else if ( ctx.fGroup ) {
      return ctx.fGroup.hasError(errorName);
    }
    return false;
  }
  /* @tdm-ignore:* */
  static tutorial = {
    id: 'child-form',
    name: 'Child Form'
  };
  /* @tdm-ignore:* */
}
