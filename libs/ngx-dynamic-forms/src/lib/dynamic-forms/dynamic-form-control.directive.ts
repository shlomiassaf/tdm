import {
  Directive,
  Input,
  forwardRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injector
} from '@angular/core';

import {
  DynamicControlRenderContext,
  RenderInstruction
} from '../tdm-model-form/index';
import { DynamicFormComponent } from './dynamic-form.component';

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

  @Input()
  set dynamicFormControl(value: RenderInstruction) {
    if (this.render === value) {
      return;
    }
    this.render = value;

    this.vcRef.clear();
    const outlet = this.dynForm.getOutlet(value);
    this.vcRef = outlet ? outlet._vcRef : this.defaultVCRef;
    this.vcRef.clear();

    if (outlet && outlet._tRef) {
      this.defaultVCRef.clear();
      const $implicit: DynamicControlRenderContext = <any>{};
      this.dynForm.tdmForm.bindRenderingData($implicit, value);
      this.defaultVCRef.createEmbeddedView(outlet._tRef, { $implicit });
    }

    if (value) {
      const override = this.dynForm.getOverride(value);
      if (override) {
        const $implicit: DynamicControlRenderContext = <any>{};
        this.dynForm.tdmForm.bindRenderingData($implicit, value);
        this.vcRef.createEmbeddedView(override.template, { $implicit });
      } else {
        const injector = this.defaultVCRef.injector;
        const resolver = injector.get(ComponentFactoryResolver);
        const component = this.dynForm.getComponentRenderer(value);
        const componentFactory = resolver.resolveComponentFactory(component);
        this.cmpRef = this.defaultVCRef.createComponent<DynamicControlRenderContext>(componentFactory, this.defaultVCRef.length, injector);
        this.dynForm.tdmForm.bindRenderingData(this.cmpRef.instance, value);
        if (typeof this.cmpRef.instance.tdmOnControlContextInit === 'function') {
          this.cmpRef.instance.tdmOnControlContextInit();
        }
        if (outlet) {
          this.cmpRef.hostView.detectChanges();
          this.vcRef.insert(this.defaultVCRef.detach());
        }
      }
    }
  }

  private render: RenderInstruction;
  private cmpRef: ComponentRef<DynamicControlRenderContext>;
  private vcRef: ViewContainerRef;

  constructor(private defaultVCRef: ViewContainerRef,
              @Inject(forwardRef(() => DynamicFormComponent)) public dynForm: DynamicFormComponent<any>) {
    // tslint:disable-line
    this.vcRef = defaultVCRef;
  }
}
