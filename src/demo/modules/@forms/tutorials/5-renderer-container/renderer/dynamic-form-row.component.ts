import { ChangeDetectionStrategy, ViewEncapsulation, Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DynamicFormComponent, RenderInstruction, TDMModelForm, DynamicFormControlRenderer } from '@tdm/ngx-dynamic-forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'dynamic-form-row',
  templateUrl: './dynamic-form-row.component.html',
  styleUrls: [ './dynamic-form-row.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormRowComponent implements DynamicFormControlRenderer, OnChanges {
  @Input() custom: boolean;
  @Input() dynForm: DynamicFormComponent;
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;

  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  ngOnChanges(change: SimpleChanges): void {
    if ('custom' in change) {
      this.custom = coerceBooleanProperty(this.custom);
    }
  }
}
