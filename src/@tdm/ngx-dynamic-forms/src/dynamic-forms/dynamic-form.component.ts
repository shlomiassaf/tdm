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
  KeyValueDiffer,
  KeyValueDiffers,
  KeyValueChangeRecord
} from '@angular/core';

import { Constructor } from '@tdm/transformation';
import { TDMModelForm, TDMModelFormService, RenderInstruction } from '../tdm-model-form';

import { DynamicFormOverrideDirective } from './dynamic-form-override.directive';
import { BeforeRenderEventHandler } from './before-render-event-handler';

export interface LocalRenderInstruction extends RenderInstruction {
  /**
   * If set, indicates that the instruction is overridden by a user-defined content template.
   */
  override: DynamicFormOverrideDirective | undefined;
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
  template:
`<form [formGroup]="tdmForm.form" novalidate>
  <div *ngFor="let item of controls | async; trackBy: tdmForm.trackBy" class="row">
    <ng-container *ngIf="!item.override; else override">
      <ng-container *dynamicFormControl="item"></ng-container>
    </ng-container>
    <ng-template #override
                 [ngTemplateOutlet]="item.override?.template"
                 [ngTemplateOutletContext]="{ $implicit: item.override, dynamicFormOverride: item.override, meta: item }">
    </ng-template>
  </div>

  <ng-content></ng-content>
</form>`
})
export class DynamicFormComponent<T> implements AfterContentInit, OnDestroy {
  tdmForm: TDMModelForm<any>;

  @ContentChildren(DynamicFormOverrideDirective) overrides: QueryList<DynamicFormOverrideDirective>;

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
  @Input() set model(value: T | [T, Constructor<T>]) {
    const [instance, type] = Array.isArray(value) ? value : [value, <any>value.constructor];
    this.instance = instance;
    this.type = type;

    this.differ = undefined;

    if (!this.tdmForm) {
      this.tdmForm = this.tdmModelFormService.create(this.instance, this.type);
      this.applyFormListener();
    } else {
      this.tdmForm.setContext(this.instance, this.type);
    }
    this.update();
  }

  @Input() set exclude(value: string[]) {
    this.filters.exc = value;
    this.update();
  }

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

  controls = new BehaviorSubject<LocalRenderInstruction[]>([]);

  private instance: T;
  private type: Constructor<T>;
  private subscriptions: Subscription[] = [];
  private differ: KeyValueDiffer<string, any>;
  private filters = { exc: [] as string[], ow: [] as string[] };
  private afterInit: boolean;
  private rendering$ = new BehaviorSubject<boolean>(false);

  constructor(private tdmModelFormService: TDMModelFormService, private differs: KeyValueDiffers) {
    this.renderState = this.rendering$.asObservable();
  }


  ngAfterContentInit(): void {
    this.afterInit = true;
    this.updateOverrides();

    const s = this.overrides.changes.subscribe(() => this.updateOverrides());
    this.subscriptions.push(s);
  }

  ngOnDestroy(): void {
    let subs: Subscription;
    while (subs = this.subscriptions.pop()) {
      subs.unsubscribe();
    }
    this.beforeRender.complete();
    this.valueChanges.complete();
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

    this.tdmForm.renderData.forEach(rd => {
      if (!this.filters.exc || this.filters.exc.indexOf(rd.name) === -1) {
        const localRd: LocalRenderInstruction = Object.create(rd);
        localRd.override = this.overrides.find(ow => ow.dynamicFormOverride === localRd.name);

        const renderEvent = new BeforeRenderEventHandler(localRd, controlsPromiseSetter);
        this.beforeRender.emit(renderEvent);
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
      if (!this.differ) {
        this.differ = this.differs.find(formValue).create();
      } else {
        const arr: KeyValueChangeRecord<string, any>[] = [];
        const diff = this.differ.diff(formValue);
        if (diff) {
          diff.forEachChangedItem(change => arr.push(change));
          this.valueChanges.next(arr);
        }

      }
    });
    this.subscriptions.push(s);
  }

}