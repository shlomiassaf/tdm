### Definition
A **Complex Data Structure** refers to all properties in a model,
decorated by `@FormProp`, with a type that is not **primitive**.

<div class="alert">
The JavaScript standard defines 7 data types. 6 primitive types and the
`Object` type.
</div>

The type of a property in a model / class can be a:
  1. Primitive
  2. Class of a *known model*
  3. Interface / Type / Class of an unknown model
  4. Array of 1-3 

<div class="info">
A *known model* is a class decorated with `@FormModel`. The class is
"known" to the library.
</div>

```ts
@Model({
  form: true
})
export class Hero {
  Prop1: number;
  Prop2: Hero;
  Prop3: { value: string; id: number };
  Prop4_1: number[];
  Prop4_2: Hero[];
  Prop4_3: { value: string; id: number }[];
}
```

In the example above, `Prop1` is not a complex data structure.

### What is it?
A **Complex Data Structure** represents a type.

The resolved type of a **Complex Data Structure** is the combination of
the annotated type and the metadata provided for each `@FormProp`.

The annotated type and the resolved **Complex Data Structure** type
usually match but not always.

### What does it mean?
It means that for a property that is not a primitive we can have 2
different structures which we use together, the extra structure is used
to describe a different UI layout.
 

In simple words, a the form instance will always represent the model's
structure. The rendered form will represent **Complex Data Structure**.






## Complex Data structures
`@angular/forms` has 3 fundamental building blocks used to define forms:
`FormControl`, `FormGroup` and `FormArray`.

When we create a dynamic form for the model `Hero` the library will take
all the properties in the `Hero` class that are decorated with
`@FormProp` and create a form control for it, one of the 3 building
blocks, using the metadata defined.

**For each property we have a form control and a runtime type.**

Can we conclude that a property of a complex data type always create a
complex form control? 

No, let's see why.

### Primitive & Complex form controls
Angular forms doesn't explicitly recognize the terms `primitive` and
`complex` but we can try:

  - `FormControl` is always primitive
  - `FormGroup` is always complex
  - `FormArray` is primitive or complex based on the type it contains.

These definitions are used to drive the UI, how the layout is set and
how a control is going to display.

When creating a form control for a given property the library will use
the type along with other metadata provided to create the control.

It means that a property of a complex type can be a `FormControl`.


### Complex Data Structure
Complex data structure we refer to the  

 the data type of the value attached to a control
does not define 


 
When we refer to a **complex data structure** we refer data type that
extends the `Object` data type.
 
A primitive type can never become a **complex data structure*** but
an `Object` can 
 



