import {
  ComponentFactoryResolver,
  Directive,
  Inject,
  Input,
  ViewContainerRef,
  Optional,
  Type,
  TemplateRef,
  SimpleChanges,
  IterableDiffers,
  IterableDiffer,
  TrackByFunction,
  SimpleChange,
  OnChanges,
  IterableChanges,
  IterableChangeRecord,
  DoCheck
} from '@angular/core';
import { NgForOf, NgForOfContext } from '@angular/common';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

import { TDMModelForm, RenderInstruction, DynamicFormControlRenderer } from '../tdm-model-form/index';
import { DynamicFormComponent } from './dynamic-form.component';
import { FORM_CONTROL_COMPONENT } from './dynamic-form-control.directive';

import { DynamicFormArray } from './dynamic-form-array.component';

const forFormArrayContextKeys: Array<keyof ForFormArrayDirective> = [
  'item',
  'tdmForm',
  'fGroup',
  'dynForm'
];

@Directive({
  selector: '[dynamicFormArray]',
})
export class DynamicFormArrayDirective extends DynamicFormArray {
  // tslint:disable
  @Input('dynamicFormArrayDynForm') dynForm: DynamicFormComponent;
  @Input('dynamicFormArrayFArray') fArray: FormArray;
  @Input('dynamicFormArrayFGroup') fGroup: FormGroup;
  @Input('dynamicFormArrayItem') item: RenderInstruction;
  @Input('dynamicFormArrayTdmForm') tdmForm: TDMModelForm<any>;
  // tslint:enable

  vcRef: ViewContainerRef;

  constructor(vcRef: ViewContainerRef,
              cfr: ComponentFactoryResolver,
              @Inject(FORM_CONTROL_COMPONENT) component: Type<DynamicFormControlRenderer>,
              @Optional() dynForm: DynamicFormComponent<any>) {
    super(cfr, component, dynForm);
    this.vcRef = vcRef;
  }
}

@Directive({
  selector: '[forFormArray]',
})
export class ForFormArrayDirective extends NgForOf<DynamicFormControlRenderer> implements OnChanges, DoCheck {
  // tslint:disable
  @Input('forFormArrayOf') fArray: FormArray;
  @Input('forFormArrayTrackBy') ngForTrackBy: TrackByFunction<DynamicFormControlRenderer>;

  @Input('forFormArrayDynForm') dynForm: DynamicFormComponent;
  @Input('forFormArrayFGroup') fGroup: FormGroup;
  @Input('forFormArrayItem') item: RenderInstruction;
  @Input('forFormArrayTdmForm') tdmForm: TDMModelForm<any>;

  // TODO: warn or throw when setting context after one of the values in the context was set manually
  @Input('forFormArrayContext') set context(value: DynamicFormControlRenderer) {
    if (value) {
      for (let k of forFormArrayContextKeys) {
        this[k] = value[k];
      }
    }
  };
  // tslint:enable

  private ready: boolean = false;
  private formArrayDiffer: IterableDiffer<AbstractControl> | null = null;
  private grouped: DynamicFormControlRenderer[][] = [];

  constructor(tRef: TemplateRef<NgForOfContext<DynamicFormControlRenderer>>,
              private differs: IterableDiffers,
              vcRef: ViewContainerRef,
              @Optional() dynForm: DynamicFormComponent<any>) {
    super(vcRef, tRef, differs);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ready !== !!(this.tdmForm && this.fArray && this.fGroup && this.item && this.item.isArray) ) {
      this.ready = !this.ready;

      if (changes.fArray) {
        const controls = this.fArray && this.fArray.controls;
        this.trySetDiffer(controls);
        changes.ngForOf = new SimpleChange(this.ngForOf, [], changes.fArray.isFirstChange());
        this.ngForOf = changes.ngForOf.currentValue;
        super.ngOnChanges(changes);
      }
    }
  }

  ngDoCheck(): void {
    if (this.formArrayDiffer) {
      const changes = this.formArrayDiffer.diff(this.fArray && this.fArray.controls);
      if (changes) {
        this.applyFormArrayChanges(changes);
        super.ngDoCheck();
      }
    }
  }

  private applyFormArrayChanges(changes: IterableChanges<AbstractControl>) {
    const renderers: DynamicFormControlRenderer[] = <any> this.ngForOf;
    changes.forEachOperation(
      (item: IterableChangeRecord <any>, adjustedPreviousIndex: number, currentIndex: number) => {
        if (item.previousIndex == null) {
          const values = this.convert([this.fArray.controls[item.currentIndex]]);
          const prevValues =  this.grouped[currentIndex - 1];
          this.grouped[currentIndex] = values;
          if (prevValues && prevValues.length > 0) {
            currentIndex += prevValues.length;
          }
          renderers.splice(currentIndex, 0, ...values);
        } else if (currentIndex == null) {
          const values = this.grouped.splice(adjustedPreviousIndex, 1)[0];
          renderers.splice(adjustedPreviousIndex, values.length);
        } else {
          const values = this.grouped.splice(adjustedPreviousIndex, 1)[0];
          renderers.splice(adjustedPreviousIndex, values.length);

          this.grouped[currentIndex] = values;
          renderers.splice(currentIndex, 0, ...values);
        }
      });
    changes.forEachIdentityChange((record: any) => {
      const values = this.grouped.splice(record.currentIndex, 1)[0];
      const newValues = this.convert([this.fArray.controls[record.currentIndex]]);
      renderers.splice(record.currentIndex, values.length, ...newValues);
    });
  }

  private convert(controls: AbstractControl[]): DynamicFormControlRenderer[] {
    const result: DynamicFormControlRenderer[] = [];
    for (let childControl of controls) {
      for (let childItem of this.item.children ) {
        const c = childItem.resolveFormArrayChild(childControl);
        const $implicit: DynamicFormControlRenderer  = <any> {
          item: childItem,
          fGroup: this.fGroup,
          tdmForm: this.tdmForm,
          [c instanceof FormArray ? 'fArray' : 'fControl']: c
        };
        result.push($implicit);
      }
    }
    return result;
  }

  private trySetDiffer(value: AbstractControl[]): void {
    if (!this.formArrayDiffer && value) {
      try {
        this.formArrayDiffer = this.differs.find(value).create();
      } catch (e) {
        throw new Error(`Cannot find a differ supporting object '${value}' of type '${getTypeNameForDebugging(value)}'.\
         NgFor only supports binding to Iterables such as Arrays.`);
      }
    }
  }
}

export function getTypeNameForDebugging(type: any): string {
  return type['name'] || typeof type;
}
