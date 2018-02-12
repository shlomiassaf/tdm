export interface FormElementType {
  none: never;

  /**
   * A child form reference.
   * Set automatically when the [[FormPropMetadataArgs.childForm]] is set to true.
   */
  form: never;
}

/**
 * Represents render definitions for an element
 */
export interface RenderDef<T extends keyof FormElementType = keyof FormElementType> {
  /**
   * The order of the control in the form
   */
  ordinal?: number;

  /**
   * The label to display (e.g. placeholder, description etc...)
   */
  label?: string;

  /**
   * The visual type of the element.
   * The rendering component will use this type to render the component.
   *
   * This is strict, even when the type is not needed.
   *
   * There are 2 reserved types:
   *   - none: A non-visual visual type, this is a default value to be used for special cases, e.g. when flattening.
   *   - form: The type for child forms, set when childForm is true.
   *
   *
   * If no type is set an error is thrown
   */
  vType: T;

  /**
   * Extra data to be used by the renderer.
   *
   * Examples:
   *   - regex, min/max, etc.. for validation
   *   - options (options) array for a select type
   */
  data?: FormElementType[T];
  // TODO: When moving to TS 2.8 apply conditional types to make this property go away when FormElementType[T] is never
  // this way we can define when it is optional and when not (we can also let 'any' be partial, others mandatory)
  // See more in end of this file.
  // data: FormElementType[T];
}

/*
  The idea is to rename RenderDef to something local and export a type RenderDef
  The type will be set based on a conditional type expression

  export type RenderRef<T extends keyof FormElementType = keyof FormElementType>
    = FormElementType[T] extends never ? Omit<RenderRefLocal<T>, 'data'> :
      FormElementType[T] extends any ? Overwrite<RenderRefLocal<T>, { data?: any } :
      RenderRefLocal<T>;

  SEE: https://github.com/Microsoft/TypeScript/pull/21316
 */
