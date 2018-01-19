import { NgFormsSerializeMapper } from './core/angular-forms-mapper';

/**
 * Run-time path and Static path are different in how they express arrays.
 * A run-time path will express an array index because it refers to instances.
 * A static path will not express an array index because it refer to types, complex or primitive but an array in the
 * static world is only a container of types (Array of T) and does not play a role in static type lookup.
 *
 * ## Example
 * A User class with an info property, info is an object with a name property (string) and an addresses property
 * which is array of address objects. address objects have a street property (string).
 *
 * Run-time path expressions:
 *  1. info.name
 *  2. info.addresses
 *  3. info.addresses.0.street
 *
 * Static path expressions:
 *  1. info.name
 *  2. info.addresses
 *  3. info.addresses.street
 *
 * Only 3 is different since it's an array.
 *
 * Run-time path expressions is used with runtime instance of form controls, static path expressions are used when
 * working with @tdm metadata and it's form serializers and deserializers.
 */

/**
 * Creates a form control based on metadata of a given property in a given model.
 * If a value is provided the form control will be populated with the value.
 *
 * You can provide a string (`prop`) representing the property name, OR if you want to create a control for a property
 * in a nested object (Only for `@FormProp` declarations with `flatten` expressions OR `childForm` set to true) you
 * you can provide a tuple a tuple with 2 values the first value is a string representing the
 * property name at the root level (exposed property that `@FormProp` decorates), the second value is a dot notation
 * path to the nested property within the flatten expression / Child model.
 *
 * For example, in the following flatten expression:
 *
 * ```ts
 * @FormProp({
 *   flatten: Object.assign({}, basicFlatten, {
 *     additional: {
 *       flatten: {
 *         work: { }
 *       }
 *     }
 *   })
 * })
 * myProp: any;
 * ```
 * If we want to get the control for `work` the path will be: ` ['myProp', 'additional.work'] `
 *
 * > When using a deep path and providing a `value`, the value should be the value to be assign at the resolved path
 * and not the root value, i.e. the value is not evaluated with each step in the path.
 *
 * NOTE: Array's are NOT SUPPORTED by design.
 * This function DOES NOT support arrays, if a given property is an Array<T> the returned form will be T.
 * Make sure not to send an array instance with `value`.
 *
 * Why?
 * The purpose of this function is to create form controls to be added to FormArrays.
 * These can be empty controls or populated with a given `value`.
 * To support all features (e.g. "flatten") and allow empty form controls array are not supported because a property
 * with type Array<T> and no values in the array will return an empty FormArray.
 *
 * If you want to create a FormArray control simple call createControl for each item in the array and add it to the
 * FormArray:
 *
 * ```ts
 * new FormArray(items.map( item => createControl(MyType, 'myProp', item) ));
 * ```
 */
export const createControl = NgFormsSerializeMapper.createControl;
export type createControl = typeof NgFormsSerializeMapper.createControl;
