import {
  ViewEncapsulation,
  Component,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { RenderInstruction } from '@tdm/ngx-dynamic-forms';

import { MaterialStoreTemplateContext, TemplateStore } from './material-store-template-context';

const VALID_INPUTS = [
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  // 'date',
  // 'datetime-local',
  // 'time',
  'url',
  'week'
];

/*
      IMPORTANT NOTE !!!

      ALL methods on `MaterialTemplateStoreComponent` are static, not instance methods!
      This component is only created ONCE throughout the entire app.
 */

/**
 * A "singleton" component that does never meet a view that has one purpose which is to be a store for templates
 * so each control renderer does not need to use queries and store templates within it's core template.
 *
 * For more information see https://github.com/angular/angular/issues/15275
 * TODO: When angular's IVY renderer is the default renderer try using it for dynamic templates instead of a component
 */
@Component({
  selector: 'material-template-store',
  templateUrl: './material-template-store.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MaterialTemplateStoreComponent implements TemplateStore {

  @ViewChild('boolean', { read: TemplateRef }) boolean: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('slideToggle') slideToggle: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('slider') slider: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('radio') radio: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('textarea') textarea: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('select') select: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('date') date: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('input') input: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('childForm') childForm: TemplateRef<MaterialStoreTemplateContext>;
  @ViewChild('formArray') formArray: TemplateRef<MaterialStoreTemplateContext>;

  getTemplate(item: RenderInstruction): TemplateRef<MaterialStoreTemplateContext> {
    if ( item.isArray ) {
      return this.formArray;
    } else if (item.isChildForm) {
      return this.childForm;
    } else {
      if ( VALID_INPUTS.indexOf(item.vType) > -1 ) {
        return this.input;
      } else {
        return this[item.vType];
      }
    }
  }
}
