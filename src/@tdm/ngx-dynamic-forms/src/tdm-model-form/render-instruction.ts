import { AbstractControl, FormArray } from '@angular/forms';
import { FormElementType, RenderDef } from '../interfaces';

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
export class RenderInstruction<T = any> implements RenderDef<T> {
  required?: boolean;

  /**
   * The order of the control in the form
   */
  ordinal?: number;

  /**
   * The label to display (e.g. placeholder, description etc...)
   */
  label?: string;

  /**
   * The type of the element.
   *
   * The rendering component will use this type to render the component.
   *
   * If no type is set the library will try to assign a primitive (string, number or boolean) based
   * on the type information. If no primitive was matched an error is thrown.
   */
  type?: keyof FormElementType;

  /**
   * Extra data to be used by the renderer.
   *
   * Examples:
   *   - regex, min/max, etc.. for validation
   *   - selections (options) array for a select type
   */
  data?: T;

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
   * This is why a virtual field will not be part of the rendering array but will be the parent of a falttened property.
   */
  isVirtual: boolean;

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

  constructor(renderDef: RenderDef, public name: string, public parent?: RenderInstruction) {
    Object.assign(this, renderDef);
  }

  /**
   * Returns the static path for this rendering item.
   * The static path is the path for metadata lookup, where all arrays are meaning less and only their type is required.
   */
  getStaticPath(): string {
    if (this.flattened) {
      return this.flattened.join('.') + '.' + this.name;
    } else {
      return this.name;
    }
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
      const name = parent instanceof FormArray ? parent.controls.indexOf(control) : this.name;
      return `${this.parent.getRuntimePath(parent)}.${name}`;
    }
  }
}
