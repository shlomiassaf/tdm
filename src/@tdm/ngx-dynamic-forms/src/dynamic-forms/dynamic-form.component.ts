import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  Input,
  EventEmitter,
  Output,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy,
  Type,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  KeyValueDiffer,
  KeyValueDiffers,
  KeyValueChangeRecord, ElementRef, ViewChild, Renderer2, AfterViewInit, DoCheck, OnChanges, SimpleChanges
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { RenderInstruction } from '../interfaces';
import { TDMModelForm, TDMModelFormService } from '../tdm-model-form/index';

import { DynamicFormOverrideDirective } from './dynamic-form-override.directive';
import { BeforeRenderEventHandler } from './before-render-event-handler';

export interface LocalRenderInstruction extends RenderInstruction {
  /**
   * User to show/hide controls
   * @internal
   */
  display: 'none' | undefined;
}


/**
 * Allow rendering a form using @tdm/ngx-dynamic-forms and DynamicFormElementComponent
 *
 * <form [formGroup]="tdmForm.form" novalidate>
 *   <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
 *     <dynamic-form-element [tdmForm]="tdmForm" [item]="item"></dynamic-form-element>
 *    </div>
 * </form>
 */
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent<T = any> implements AfterContentInit, AfterViewInit, OnChanges, DoCheck, OnDestroy {
  /**
   * The [[TDMModelForm]] instance that is used by the component
   * > This is created after a model is set.
   */
  tdmForm: TDMModelForm<any>;

  /**
   * The [[FormGroup]] instance used by [[TDMModelForm]].
   * Available after [[TDMModelForm]] instance is created.
   */
  get form(): FormGroup | undefined {
    return this.tdmForm && this.tdmForm.form;
  }

  @ContentChildren(DynamicFormOverrideDirective) overrides: QueryList<DynamicFormOverrideDirective>;

  @ViewChild('formElRef') formElRef: ElementRef;

  /**
   * Real time binding between the form and the model.
   *
   * When true, every value change event emitted from the from will trigger and update to the model.
   *
   * When false (default) the form data model and the model instance are not bound, to update the model
   * you need to invoke the TDMModelForm.commitToModel
   *
   * > A hot bind is one way, from form update to the model.
   *
   * @default false
   */
  @Input() hotBind: boolean;

  /**
   * A expression to apply on the form control container class.
   *
   * Use as if this was an `ngClass` directive.
   *
   * > The class will apply on the container that wraps the rendered control and not on the control itself.
   */
  @Input() controlClass: string|string[]|Set<string>|{[klass: string]: any};

  /**
   * Pass through for @angular/forms `ngNativeValidate` attribute that enables native browser validation
   *
   */
  @Input() get ngNativeValidate(): any { return this._ngNativeValidate };
  set ngNativeValidate(value: any) {
    const native = value != null && `${value}` !== 'false';
    if (this._ngNativeValidate !== native) {
      this._ngNativeValidate = native;
      this.setNativeValidation();
    }
  };

  /**
   * The instance and type (class) to dynamically render as form.
   * You can supply the instance only, in that case the type is the constructor property (instance.constructor)
   * To supply both instance and type use a tuple.
   *
   * @example
   * `<dynamic-form [model]="user"></dynamic-form>`
   * `<dynamic-form [model]="[user, User]"></dynamic-form>`
   *
   * @param value {*|[*, *]}
   */
  @Input() set model(value: T | [T, Type<T>]) {
    if (this.slaveMode) {
      throw new Error('Setting a model is not allowed when in slave mode.');
    }
    this.slaveMode = false;

    const [instance, type] = Array.isArray(value) ? value : [value, <any>value.constructor];
    this.instance = instance;
    this.type = type;

    this.valueDiffer = undefined;

    if (!this.tdmForm) {
      this.tdmForm = this.tdmModelFormService.create(this.instance, this.type);
      this.applyFormListener();
    } else {
      this.tdmForm.setContext(this.instance, this.type);
    }
    this.update();
  }

  /**
   * Setting the dynamic form as a slave of another dynamic form.
   * You can this feature to split forms of complex models.
   *
   * A form in slave mode has very limited functionality, it can only exclude controls and override controls.
   * All other options (hidden state, disabled state, hot binding etc..) are not supported in the slave and should be
   * handled in the master.
   *
   * Make sure you are not rendering the same controls more then once. A group of master and all of it's slave should
   * render only one instance of a control across the whole group. If you render the same control multiple times
   * you will get unexpected behaviour and unsynced controls.
   *
   * You can set any number of slaves.
   * You can not change or remove the master.
   * You can not set a model when using slave mode.
   *
   * A slave does not handle form state, it only handles internal rendering and this is why only exclude and override
   * are supported, hidden and disabled are drived by the form state...
   * @param dynForm
   */
  @Input() set slaveOf(dynForm: DynamicFormComponent<T>) {
    if (this.slaveMode === true) {
      return; // TODO: warn? error? slave mode can only be set once.
    } else if (this.slaveMode === false) {
      throw new Error('Slave mode does not work when setting a model');
    }
    this.tdmForm = dynForm.tdmForm;
    this.instance = dynForm.instance;
    this.type = dynForm.type;
    this.overrideMap = dynForm.overrideMap;
    this.slaveMode = true;
  }

  @Input() set exclude(value: string[]) {
    this.filters.exc = value;
    this.update();
  }

  /**
   * An array of form control names, each name in this array will be disabled.
   */
  @Input() disabledState: Array<keyof T>;

  /**
   * An array of form control names, each name in this array will be hidden.
   */
  @Input() hiddenState: Array<keyof T>;

  /**
   * Event emitted when a form value changes.
   */
  @Output() valueChanges = new EventEmitter<KeyValueChangeRecord<string, any>[]>();

  /**
   * Event emitted before rendering a form control.
   *
   *   - Excluded controls are not emitted.
   *   - Overridden controls are not emitted {@link DynamicFormOverrideDirective}
   *
   * Use this event to modify form control/s rendering instructions (metadata) before they are rendered.
   * For example, given a `select` form control, you can use this event to create dynamic, ad-hoc, select options.
   *
   * ```html
   *  <dynamic-form [model]="model" (beforeRender)="beforeRender($event)">
   * ```
   *
   * ```ts
   * @Component({ ... })
   * export class MyComponent {
   *   beforeRender(event: BeforeRenderEventHandler) {
   *     event.selections = [ { value: 'X', label: 'Y' } ] // more...
   *   }
   * }
   * ```
   * You can modify all the of properties in {@link RenderInstruction}... the render type, order and more.
   *
   * ### Asynchronous rendering logic
   * There are scenarios where the modification logic is asynchronous, for example, populating the
   * selections (options) of a form control from a remote server
   *
   * ```ts
   * @Component({ ... })
   * export class MyComponent {
   *   beforeRender(event: BeforeRenderEventHandler) {
   *     let resolve, p = new Promise( (res, rej) => { resolve = res; });
   *
   *     event.async(p); // notify to use async logic
   *
   *     // do some async stuff...
   *     setTimeout(() => {
   *       event.selections = [ { value: 'X', label: 'Y' } ] // more...
   *       resolve();
   *     }, 1000);
   *   }
   * }
   * ```
   *
   * > You can use the `renderState` event to reflect asynchronous rendering in the UI.
   *
   * NOTE:  Instructions are immutable and does not persist between rendering.
   *        Each `beforeRender` event requires re-applying the logic.
   *
   */
  @Output() beforeRender = new EventEmitter<BeforeRenderEventHandler>();

  /**
   * Event emitted when the rendering state changes.
   * True states that the form is rendering, False states and idle, the form is rendered.
   *
   * Since rendering in angular is synchronous a True rendering state can only occur when implementing
   * async logic within `beforeRender` event {@link BeforeRenderEventHandler}
   *
   * Use this event to reflect (UX/UI) in that the form is not ready.
   */
  @Output() renderState: Observable<boolean>;

  /**
   * The instructions to render
   * @internal
   */
  controls = new BehaviorSubject<LocalRenderInstruction[]>([]);

  private instance: T;
  private type: Type<T>;
  private subscriptions: Subscription[] = [];
  private valueDiffer: KeyValueDiffer<string, any>;
  private stateDiffer: { disabled?: IterableDiffer<keyof T>; hidden?: IterableDiffer<keyof T>; } = {};
  private filters = { exc: [] as string[], ow: [] as string[] };
  private afterInit: boolean;
  private rendering$ = new BehaviorSubject<boolean>(false);
  private _ngNativeValidate: any = false;
  private slaveMode: boolean;
  private overrideMap = new Map<RenderInstruction, DynamicFormOverrideDirective>();

  constructor(private tdmModelFormService: TDMModelFormService,
              private kvDiffers: KeyValueDiffers,
              private itDiffers: IterableDiffers,
              private renderer: Renderer2) {
    this.renderState = this.rendering$.asObservable();
  }

  getOverride(item : RenderInstruction): DynamicFormOverrideDirective | undefined {
    return this.overrideMap.get(item);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.disabledState) {
      const disabled = changes.disabledState;
      if (!disabled.currentValue && this.stateDiffer.disabled) {
        const diff = this.stateDiffer.disabled.diff([]);
        diff && this.handleDiff('disabled', diff);
        this.stateDiffer.disabled = undefined;
      } else if (!disabled.previousValue && disabled.currentValue) {
        this.stateDiffer.disabled = this.itDiffers.find(disabled.currentValue).create();
      }
    }

    if (changes.hiddenState) {
      const hidden = changes.hiddenState;
      if (!hidden.currentValue && this.stateDiffer.hidden) {
        const diff = this.stateDiffer.hidden.diff([]);
        diff && this.handleDiff('hidden', diff);
        this.stateDiffer.hidden = undefined;
      } else if (!hidden.previousValue && hidden.currentValue) {
        this.stateDiffer.hidden = this.itDiffers.find(hidden.currentValue).create();
      }
    }
  }

  ngDoCheck() {
    if (this.disabledState && this.stateDiffer.disabled) {
      const diff = this.stateDiffer.disabled.diff(this.disabledState);
      diff && this.handleDiff('disabled', diff);
    }

    if (this.hiddenState && this.stateDiffer.hidden) {
      const diff = this.stateDiffer.hidden.diff(this.hiddenState);
      diff && this.handleDiff('hidden', diff);
    }
  }

  ngAfterContentInit(): void {
    this.afterInit = true;
    this.updateOverrides();

    const s = this.overrides.changes.subscribe(() => this.updateOverrides());
    this.subscriptions.push(s);
  }

  ngAfterViewInit(): void {
    if (this._ngNativeValidate === true) {
      this.setNativeValidation();
    }
  }

  ngOnDestroy(): void {
    let subs: Subscription;
    while (subs = this.subscriptions.pop()) {
      subs.unsubscribe();
    }
    this.beforeRender.complete();
    this.valueChanges.complete();
  }

  /**
   * Returns the form control for a given key
   * @param key
   * @returns
   */
  getControl(key: keyof T): AbstractControl | null {
    return this.tdmForm.get(key);
  }

  private updateOverrides(): void {
    this.filters.ow = this.overrides.map(ow => ow.dynamicFormOverride);
    this.update();
  }

  private update(): void {
    if (!this.tdmForm || !this.afterInit) {
      return;
    }

    const controlsReady: Promise<any>[] = [];
    const controls: LocalRenderInstruction[] = [];
    const controlsPromiseSetter = done => controlsReady.push(done);
    this.overrideMap.clear();

    this.tdmForm.renderData.forEach(rd => {
      if (!this.filters.exc || this.filters.exc.indexOf(rd.name) === -1) {
        const localRd: LocalRenderInstruction = Object.create(rd);
        const override = this.overrides.find(ow => ow.dynamicFormOverride === localRd.name);
        if (override) {
          this.overrideMap.set(localRd, override);
        }
        const renderEvent = new BeforeRenderEventHandler(localRd, controlsPromiseSetter);
        this.beforeRender.emit(renderEvent);

        // update hidden state of each item
        if (this.hiddenState && this.hiddenState.indexOf(<any>localRd.name) > -1) {
          localRd.display = 'none';
        }

        controls.push(localRd);
      }
    });

    if (controlsReady.length > 0) {
      this.rendering$.next(true);
    }

    Promise.all(controlsReady)
      .then( () => {
        this.controls.next(controls.sort((a, b) => a.ordinal - b.ordinal));
        if (this.rendering$.value === true) {
          this.rendering$.next(false);
        }
      });
  }

  private applyFormListener(): void {
    const s = this.tdmForm.form.valueChanges.subscribe(formValue => {
      if (!this.valueDiffer) {
        this.valueDiffer = this.kvDiffers.find(formValue).create();
        this.valueDiffer.diff(formValue); // for some reason objects do not commit the 1st time
      } else {
        const arr: KeyValueChangeRecord<string, any>[] = [];
        const diff = this.valueDiffer.diff(formValue);
        if (diff) {
          diff.forEachChangedItem(change => {
            if (this.hotBind === true) {
              this.instance[change.key] = change.currentValue;
            }
            arr.push(change);
          });
          this.valueChanges.next(arr);
        }

      }
    });
    this.subscriptions.push(s);
  }

  private setNativeValidation(): void {
    if (this.formElRef) {
      if (this._ngNativeValidate === true) {
        this.renderer.removeAttribute(this.formElRef.nativeElement, 'novalidate');
      } else {
        this.renderer.setAttribute(this.formElRef.nativeElement, 'novalidate', '');
      }
    }
  }

  private handleDiff(type: 'disabled' | 'hidden', diff: IterableChanges<keyof T>): void {
    switch (type) {
      case 'disabled':
        diff.forEachAddedItem( record => this.getControl(record.item).disable());
        diff.forEachRemovedItem( record => this.getControl(record.item).enable());
        break;
      case 'hidden':
        diff.forEachAddedItem( record => {
          const item = this.controls.value.find( c => c.name === record.item);
          if (item) {
            item.display = 'none';
          }
        });
        diff.forEachRemovedItem( record => {
          this.controls.value.find( c => c.name === record.item).display = undefined;
        });
        break;
    }
  }
}
