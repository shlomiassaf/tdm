export interface FormElementType {
  /**
   * A generic text type.
   * This type is auto-assigned when no type is set and the property type is String
   */
  text: 'text';

  /**
   * A generic boolean type.
   * This type is auto-assigned when no type is set and the property type is Boolean
   */
  boolean: 'boolean';

  /**
   * A generic number type.
   * This type is auto-assigned when no type is set and the property type is Number
   */
  number: 'number';

  /**
   * A generic select type.
   */
  array: 'array';
}

/**
 * Represents render definitions for an element
 */
export interface RenderDef<T = any> {
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
}
