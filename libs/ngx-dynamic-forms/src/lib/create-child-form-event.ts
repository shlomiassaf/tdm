import { DynamicControlRenderContext, TDMModelForm } from './tdm-model-form';
import { ChildFormEditRendererEvent } from './dynamic-forms';

function cloneContext(baseCtx: DynamicControlRenderContext, mergeCtx?: Partial<DynamicControlRenderContext>): DynamicControlRenderContext {
  return Object.assign(
    {
      item: baseCtx.item,
      tdmForm: baseCtx.tdmForm,
      fArray: baseCtx.fArray,
      fControl: baseCtx.fControl,
      fGroup: baseCtx.fGroup
    },
    mergeCtx || {}
  );
}

export function createChildFormEvent(ctx: DynamicControlRenderContext, mergeCtx?: Partial<DynamicControlRenderContext>): ChildFormEditRendererEvent {
  ctx = cloneContext(ctx, mergeCtx);
  let createdTDMModelForm: TDMModelForm<any>;
  const rootTdmForm = ctx.tdmForm;

  return {
    type: 'childFormEdit',
    isNew: ctx.fControl.value === null,
    context: ctx,
    createTDMModelForm(): TDMModelForm<any> {
      if (createdTDMModelForm) {
        throw new Error('');
      }
      return (createdTDMModelForm = ctx.tdmForm.createChildForm(
        ctx.item.fullName,
        ctx.fControl.value,
        <any>ctx.fControl
      ));
    },
    reset(): void {
      // new that is not an array is inline, this requires reset of that specific control because it
      // needs to be set to FormControl(null), which is a null FormGroup of child form.
      if (this.isNew && !this.context.item.isArray) {
        rootTdmForm.resetControl(ctx.item.fullName);
      } else if (createdTDMModelForm) {
        // we don't publish up, because it will change the state (pristine, dirty, etc) of the parent which
        // on arrays is not true
        createdTDMModelForm.reset({ onlySelf: this.isNew });
      }
    }
  } as ChildFormEditRendererEvent;
}
