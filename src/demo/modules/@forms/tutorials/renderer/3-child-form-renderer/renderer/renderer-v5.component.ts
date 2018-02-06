import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import {
  RenderInstruction, TDMModelForm, DynamicFormControlRenderer,
  DynamicFormComponent
} from '@tdm/ngx-dynamic-forms';

@Component({
  selector: 'renderer-v5',
  templateUrl: './renderer-v5.component.html',
  styleUrls: ['./renderer-v5.component.scss' ]
})
export class RendererV5Component implements DynamicFormControlRenderer, AfterViewInit {
  @Input() item: RenderInstruction;
  @Input() tdmForm: TDMModelForm<any>;
  @Input() fArray: FormArray | undefined;
  @Input() fControl: FormControl | undefined;
  @Input() fGroup: FormGroup | undefined;

  selectedItem: number;
  inlineEdit: number;
  externalTdmForm: TDMModelForm<any>;

  constructor(public dynForm: DynamicFormComponent) { }

  ngAfterViewInit(): void {
    if (this.item && this.item.hash.externalTdmForm) {
      this.externalTdmForm = this.item.hash.externalTdmForm;
    }
    if (this.item && this.item.hash.inEdit === true && this.externalTdmForm) {
      this.inlineEdit = 1;
    }
  }

  listItemClicked(index: number): void {
    this.selectedItem = this.selectedItem === index ? undefined : index;
  }

  editChildFrom(): void {
    if (this.inlineEdit) {
      this.inlineEdit = 0;
    } else {
      if (!this.externalTdmForm) {
        const value = this.fControl.value === null
          ? undefined
          : this.tdmForm.getValueModel(this.item.getRuntimePath(this.fControl))
        ;
        this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, value);
        this.fGroup.setControl(this.item.name, this.externalTdmForm.form);
        this.item.markAsChanged({ inEdit: true, externalTdmForm: this.externalTdmForm } );
      }
      this.inlineEdit = 1;
    }
  }

  editFromList(): void {

    if (this.inlineEdit === this.selectedItem) {
      this.inlineEdit = undefined;
      this.externalTdmForm = undefined;
    } else if (this.selectedItem >= 0) {
      this.inlineEdit = this.selectedItem;
      if (this.item.isChildForm) {
        const c = this.fArray.get([this.selectedItem]);
        const value = c.value === null
          ? undefined
          : this.tdmForm.getValueModel(this.item.getRuntimePath(c))
        ;
        this.externalTdmForm = this.tdmForm.createChildForm(this.item.fullName, value);
        this.fArray.setControl(this.inlineEdit, this.externalTdmForm.form);
      }
    }
  }

  addToList(): void {
    this.dynForm.emitArrayActionRequest({renderInstruction: this.item, action: 'add', formArray: this.fArray });
  }

  removeFromList(): void {
    const { item, fArray } = this;
    if (this.selectedItem >= 0) {
      this.dynForm.emitArrayActionRequest(
        { renderInstruction: item, action: 'remove', formArray: fArray, atIdx: this.selectedItem }
      );
      this.selectedItem = undefined;
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
