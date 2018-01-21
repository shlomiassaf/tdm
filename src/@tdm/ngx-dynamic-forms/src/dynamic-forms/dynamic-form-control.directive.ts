import {
  Directive,
  Input,
  Type,
  forwardRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  InjectionToken
} from '@angular/core';

import { DynamicFormControlRenderer, RenderInstruction } from '../tdm-model-form/index';
import { DynamicFormComponent } from './dynamic-form.component';

/**
 * A Token for the component that renders form controls
 */
export const FORM_CONTROL_COMPONENT = new InjectionToken<DynamicFormControlRenderer>('DynamicFormControlRenderer');

/**
 * An container/wrapper used to project the user-define renderer.
 * DynamicFormControlDirective is much like `NgComponentOutlet`, they both do the same job.
 *
 * DynamicFormControlDirective is more specific to the use case, it accepts {@link RenderInstruction}
 * as input and renders a component that it get's from the DI.
 * @internal
 */
@Directive({
  selector: '[dynamicFormControl]'
})
export class DynamicFormControlDirective {

  get dynamicFormControl(): RenderInstruction {
    return this.render;
  }

  @Input() set dynamicFormControl(value: RenderInstruction) {
    if (this.render === value) {
      return;
    }
    this.render = value;

    this.vcRef.clear();

    if (value) {
      const injector = this.vcRef.parentInjector;
      const resolver = injector.get(ComponentFactoryResolver);
      const componentFactory = resolver.resolveComponentFactory(this.component);
      const override = this.dynForm.getOverride(value);
      if (override) {
        const $implicit: DynamicFormControlRenderer  = <any> {};
        this.dynForm.tdmForm.bindRenderingData($implicit, value);
        this.vcRef.createEmbeddedView(
          override.template, { $implicit } );
      } else {
        this.cmpRef = this.vcRef.createComponent<DynamicFormControlRenderer>(
          componentFactory,
          this.vcRef.length,
          injector
        );
        this.dynForm.tdmForm.bindRenderingData(this.cmpRef.instance, value);
      }
    }
  }

  private render: RenderInstruction;
  private cmpRef: ComponentRef<DynamicFormControlRenderer>;

  constructor(private vcRef: ViewContainerRef,
              @Inject(FORM_CONTROL_COMPONENT) private component: Type<DynamicFormControlRenderer>,
              @Inject(forwardRef(() => DynamicFormComponent)) public dynForm: DynamicFormComponent<any>) {
  }

}
