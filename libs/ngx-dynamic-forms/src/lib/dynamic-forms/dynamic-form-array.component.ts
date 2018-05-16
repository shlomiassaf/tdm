import {
  ComponentFactoryResolver,
  Component,
  Input,
  ViewContainerRef,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import {
  TDMModelForm,
  RenderInstruction,
  DynamicControlRenderContext
} from '../tdm-model-form/index';
import { DynamicFormComponent } from './dynamic-form.component';

export abstract class DynamicFormArray implements OnChanges {
  dynForm: DynamicFormComponent;
  fArray: FormArray;
  fGroup: FormGroup;
  item: RenderInstruction;
  tdmForm: TDMModelForm<any>;
  abstract vcRef: ViewContainerRef;

  private ready: boolean = false;

  constructor(
    private cfr: ComponentFactoryResolver,
    dynForm: DynamicFormComponent<any>
  ) {
    if (dynForm) {
      this.dynForm = dynForm;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tdmForm || changes.fArray || changes.item || changes.fGroup) {
      if (
        this.ready !==
        !!(
          this.tdmForm &&
          this.fArray &&
          this.fGroup &&
          this.item &&
          this.item.isArray
        )
      ) {
        this.ready = !this.ready;
        this.updateControls();
      }
    }
  }

  private updateControls(): void {
    this.vcRef.clear();
    if (this.ready) {
      const component = this.dynForm.getComponentRenderer(this.item);
      const componentFactory = this.cfr.resolveComponentFactory(component);

      for (let childControl of this.fArray.controls) {
        for (let childItem of this.item.children) {
          const c = childItem.resolveFormArrayChild(childControl);
          const override = this.dynForm.getOverride(childItem);
          if (override) {
            const $implicit: DynamicControlRenderContext = <any>{
              item: childItem,
              fGroup: this.fGroup,
              tdmForm: this.tdmForm,
              [c instanceof FormArray ? 'fArray' : 'fControl']: c
            };
            this.vcRef.createEmbeddedView(override.template, { $implicit });
          } else {
            const cmpRef = this.vcRef.createComponent<
              DynamicControlRenderContext
            >(componentFactory, this.vcRef.length);
            const { instance } = cmpRef;
            instance.item = childItem;
            instance.fGroup = this.fGroup;
            instance.tdmForm = this.tdmForm;
            if (c instanceof FormArray) {
              instance.fArray = c;
            } else {
              instance.fControl = <any>c;
            }
            if (typeof instance.tdmOnControlContextInit === 'function') {
              instance.tdmOnControlContextInit();
            }
          }
        }
      }
    }
  }
}

// tslint:disable-next-line
@Component({
  selector: 'dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html'
})
export class DynamicFormArrayComponent extends DynamicFormArray {
  @Input() dynForm: DynamicFormComponent;
  @Input() fArray: FormArray;
  @Input() fGroup: FormGroup;
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @ViewChild('viewRef', { read: ViewContainerRef })
  vcRef: ViewContainerRef;

  constructor(
    cfr: ComponentFactoryResolver,
    dynForm: DynamicFormComponent<any>
  ) {
    super(cfr, dynForm);
  }
}
