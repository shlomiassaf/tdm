import {
  AbstractControl,
  FormArray,
  ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';
import { FormPropMetadata } from '../core/metadata/form-prop';
import { FormElementType, RenderDef } from '../interfaces';
import { getValidators } from '../validation';
import { PropNotify } from '../prop-notify';

/**
 * Render definition with the name of the control.
 *
 * The internal logic for handling render instruction is array based (due to ordering) but the
 * user-defined `RenderDef` is object based (hash) and does not require name (name inferred from key).
 *
 * When moving user-defined render definition into an array we need to preserve the name, this interface
 * defines the contract.
 *
 * @internal
 */
export class RenderInstruction<
  T extends keyof FormElementType = keyof FormElementType
> implements RenderDef<T> {
  /**
   * A object used to mark changes in the instruction for ngFor iterations.
   *
   * @internal
   */
  hash: any;

  /**
   * Marks the hidden state of the control.
   */
  hidden?: boolean;

  @PropNotify() required: boolean;

  /**
   * The order of the control in the form
   */
  @PropNotify() ordinal?: number;

  /**
   * The label to display (e.g. placeholder, description etc...)
   */
  @PropNotify() label?: string;

  /**
   * The visual type of the element.
   *
   * The rendering component will use this type to render the component.
   *
   * If no type is set the library will try to assign a primitive (string, number or boolean) based
   * on the type information. If no primitive was matched an error is thrown.
   */
  @PropNotify() vType: T;

  @PropNotify() validators: ValidatorFn | ValidatorFn[] | null;

  @PropNotify() asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null;

  /**
   * Extra data to be used by the renderer.
   *
   * Examples:
   *   - regex, min/max, etc.. for validation
   *   - options (options) array for a select type
   */
  data: FormElementType[T];

  /**
   * When set indicated this is form control flattened from a nested object.
   * The string represents the path **from the root control** (NgForm) to the parent of this flattened control.
   *
   * The path support the same values accepted by the `get` method in `AbstractControl`, i.e.
   * you can use dot notation / Array<string | number> to describe deep paths.
   * See https://angular.io/api/forms/AbstractControl#get
   */
  flattened?: Array<string | number>;

  /**
   * When true the type of the value is a primitive, i.e. the form control is FormControl.
   * else, the type of the value is complex, i.e. FormGroup.
   *
   * If the current instruction is an array (has children) this represents the type of the children.
   */
  isPrimitive: boolean;

  /**
   * A virtual instruction is an instruction that is not part of the rendering flow but represents a physical control.
   * A virtual instruction is used for form graph control hierarchy, it is the parent of all properties of a flatten
   * expression.
   * When flattening, the UI is required to show a nested object or parts of it at the same level of the root, this has
   * not depth limitation as you can nest flatten declaration. The form is bound to the model and it can not change it's
   * structure so the library manages the transformation between UI and Data model.
   *
   * This is why a virtual field will not be part of the rendering array but will be the parent of a flattened property.
   */
  isVirtual: boolean;

  get isChildForm(): boolean {
    return this.formProp.childForm;
  }

  /**
   * Valid on when isVirtual is true.
   * Contains the child properties of a complex object, this will usually match the corresponding FormGroup instance
   * `controls` property where this array is reduces to a key->value object where the keys are the name property of each
   * instance in the array.
   */
  virtualChildren?: RenderInstruction[];

  /**
   * When true indicates that the instruction is for a FormArray.
   */
  isArray: boolean;

  /**
   * When set indicates that the instruction is for a FormArray.
   */
  children?: RenderInstruction[];

  /**
   * The path to the current item relative to the child of the first array up the ancestor tree.
   *
   * The path is set only for flattening expression of an array, in that scenario the data model structure for the UI,
   * which is the form, is different from the render instructions data structure.
   *
   * The `FormArray` instance contains `FromGroup` instances while the render instruction matching the `FormArray`
   * instance contains the elements we need to render, i.e. the primitives flattened controls.
   *
   * We need to resolve the `FormControl` matching each child using the `FormGroup` item, this path enables that
   * because it is relative to the first item in the array, which is our `FormGroup`
   *
   * Example:
   * ```ts
   * @Prop({
   *   form: {
   *     flatten: {
   *       y: {
   *         flatten: {
   *           z: {
   *             render: {
   *               vType: 'number'
   *             }
   *           }
   *         }
   *       }
   *     }
   *   }
   * })
   * x: Array<{
   *   y: {
   *     z: number;
   *   }
   * }>;
   * ```
   *
   * The property above describes an array of an object defined using a flattening expression.
   * The object has an inner object `y` and `y` has a property `z`.
   *
   * The flattening expression extract's `z`.
   *
   * The renderer will get a `FormArray` instance with each child being a `FormGroup` with item `x`.
   * the render instructions will represent and array with each child representing `z`.
   *
   * We need to resolve the control bound to the UI element, the control that matches `z` but we have `FormGroup` `x`
   * which contains that control.
   *
   * This path will resolve that and it's value will be `y.z`. We have `x` so we get `y` then from `y` we get `z`.
   *
   * This will work with any level
   *
   * @internal
   */
  _arrayPath?: string;

  /**
   * The full name.
   * The full name is usually identical to the name, except for instructions that are part of a `flattening` expression.
   *
   * When the instruction is part of a `flattening` expressions the full name is also refered to as the `static path`
   * The static path is used for metadata lookup, where all arrays are meaningless and only their type is required.
   *
   * > It is recommended to use the full name at all times, except for visual display purpose.
   */
  get fullName(): string {
    const fullName = this.flattened
      ? this.flattened.join('.') + '.' + this.name
      : this.name;
    Object.defineProperty(this, 'fullName', {
      value: fullName,
      writable: false
    });
    return fullName;
  }

  constructor(
    public name: string,
    private formProp: FormPropMetadata = FormPropMetadata.EMPTY,
    public parent?: RenderInstruction
  ) {
    if (formProp.required) {
      this.required = true;
    }
    if (formProp.validators) {
      this.validators = formProp.validators;
    }
    if (formProp.asyncValidators) {
      this.asyncValidators = formProp.asyncValidators;
    }

    Object.assign(this, formProp.render);
    this.hash = this;
  }

  /**
   * Call this function when changing properties in this [[RenderInstruction]] instance, before calling
   * [[DynamicFormComponent.redraw]] or when you want a specific control to re-render.
   *
   * You can set a custom hash, you can use it to pass data between new renderer instances.
   */
  markAsChanged(hash?: { [key: string]: any }): void {
    this.hash = hash === this.hash ? {} : hash || {};
  }

  /**
   * A helper method that merge's (assign) the provided value into the existing `data` object.
   * If a `data` object is undefined it will create one.
   */
  mergeData(value: any): void {
    this.data = Object.assign(this.data || {}, value);
  }

  /**
   * A helper method that return the value of the property `key` in `this.data`
   */
  getData(key: string): any | undefined {
    return this.data && this.data[key];
  }

  /**
   * Returns the run-time path for this rendering item, relative to the root control.
   * The run-time path is the path for form lookup which can be used in [[AbstractControl.get]].
   *
   * Because an @angular form control does not know it's name but does know it's parent we can use the rendering
   * instructions to get the name and move up to the parent up to root to get the full path.
   * If we find a parent that is an array we lookup the index and use it instead of the name.
   */
  getRuntimePath(control: AbstractControl): string {
    const { parent } = control;
    if (!parent || parent === control.root) {
      return this.name;
    } else {
      const name =
        parent instanceof FormArray
          ? `${this.name}.${parent.controls.indexOf(control)}`
          : this.name;
      return this.parent
        ? `${this.parent.getRuntimePath(parent)}.${name}`
        : name;
    }
  }

  /**
   * Use this method to resolve the `FormControl` instance from children of `FormArray`.
   *
   * If you will not use this method to resolve the form control and use the child control directly it will create
   * issues when using flattening expressions with arrays.
   */
  resolveFormArrayChild(control: AbstractControl): AbstractControl {
    return this._arrayPath ? control.get(this._arrayPath) : control;
  }

  getValidators() {
    return getValidators(this, this);
  }
}
