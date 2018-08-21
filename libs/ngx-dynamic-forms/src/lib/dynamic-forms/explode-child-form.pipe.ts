import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { forceNextUpdateValueAndValidityWith } from '../utils';
import { DynamicControlRenderContext } from '../tdm-model-form/tdm-model-form';

/**
 * A pipe that accepts a `DynamicControlRenderContext` of a child form and transform it to
 * and array of `DynamicControlRenderContext` with each representing a property of the child form.
 */
@Pipe({
  name: 'explodeChildForm',
})
export class ExplodeChildFormPipe implements PipeTransform {
  transform(ctx: DynamicControlRenderContext, silent = false): DynamicControlRenderContext[] {
    if (!ctx.item.isChildForm) {
      if (silent) {
        return [];
      }
      throw new Error('ExplodeChildFormPipe accepts a parent context that represents a child form.');
    }

    const formGroup: FormGroup = ctx.fControl instanceof FormGroup
      ? ctx.fControl as any
      : undefined
    ;

    const model = ctx.tdmForm.getValueModel(ctx.item, ctx.fControl);
    const tdmForm = ctx.tdmForm.createChildForm(
      ctx.item.fullName,
      model,
      formGroup
    );

    /*
      The child form might not be a FormGroup instance, this happens when it's null or undefined which causes the library to set it as FormControl
      we need to set the new FormGroup instnace in the parent form.
      This is done through `FormGroup.setControl` which triggers an update because it internally calls `FormGroup.updateValueAndValidity`.
      We need to avoid this becasuse it causes an unwanted behaviour, a new form will show invalid error message because of the event being fired.
      `FormGroup.setControl` does not allow us to control this so we need to workaround it.
    */
    if (!formGroup) {
      const { form } = ctx.tdmForm;
      forceNextUpdateValueAndValidityWith(form, { emitEvent: false });
      form.setControl(ctx.item.fullName, tdmForm.form);
    }

    return tdmForm.renderData.map( item => {
      const newCtx: DynamicControlRenderContext = {} as any;
      tdmForm.bindRenderingData(newCtx, item);
      return newCtx;
    });
  }
}
