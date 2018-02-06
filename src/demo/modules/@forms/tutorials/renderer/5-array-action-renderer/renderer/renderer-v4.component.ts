import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import {
  RenderInstruction, TDMModelForm, DynamicFormControlRenderer,
  DynamicFormComponent
} from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface RenderDef<T extends keyof FormElementType = keyof FormElementType> {
    identityKey?: string;
  }
}

@Component({
  selector: 'renderer-v4',
  templateUrl: './renderer-v4.component.html',
  styleUrls: ['./renderer-v4.component.scss' ]
})
export class RendererV4Component implements DynamicFormControlRenderer {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;
  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  selectedItem: number;
  inlineEdit: number;

  constructor(public dynForm: DynamicFormComponent) { }

  removeFromList(): void {
    const { item, fArray } = this;
    if (this.selectedItem >= 0) {
      this.dynForm.emitArrayActionRequest(
        { renderInstruction: item, action: 'remove', formArray: fArray, atIdx: this.selectedItem }
      );
      this.selectedItem = undefined;
    }
  }

  editFromList(): void {
    if (this.selectedItem >= 0) {
      this.inlineEdit = this.selectedItem;
    } else {
      this.inlineEdit = undefined;
    }
  }

  hasError(errorName: string): boolean {
    if ( this.fControl ) {
      return this.fControl.hasError(errorName);
    } else if ( this.fArray ) {
      return this.fArray.hasError(errorName);
    } else if ( this.fGroup ) {
      return this.fGroup.hasError(errorName);
    }
    return false;
  }
}
