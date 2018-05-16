# Control Panel
To create a dynamic form we need an instance of a model which we
bind to the `[model]` attribute.
```html
<dynamic-form [model]="model">
```

The dynamic form component will use the model to create a `FormGroup`
instance and render that instance.

The **model** and the **form group** represent the same entity, the user
can edit the form and once done we commit the changes done in the form
onto the model.

The model and the form group are linked, an operation on one requires
the other and there are tasks that apply on both.

We need a container we can put them both in and let the container
manage them internally and expose an interface for us, a **control
panel**

## TDMModelForm
When we assign an instance of a model to a dynamic form component the
component create's smart container that handle's all the operations
required from a model and a form group, that container is `TDMModelForm`

<div class="info">
Most of the topics we are about to cover relate to topics not yet
covered by the tutorial, mostly around complex data structures.
</div>

### commitToModel
Taking the value of the form and merging the changes onto the model.

This topic was covered in the previous chapter.
 
### Read/Write 
Using `getValue` and `setValue` we can read/write values from/to the
**form**.

Using `getValueModel` we can read values from the **model**.

All read/write methods support deep paths using dot notation strings
or deep path arrays.

```ts
getValueModel(path: Array<string | number> | string): any | null
``` 

Angular forms comes with built-in support for deep paths using the
same API, in-fact the library mimic the API. This means `getValue` and
`setValue` are just proxies.

`getValueModel` add's value because it aligns the API allowing easy
access to values on the model based on path's from the form.

<div class="alert">
Read/Write operations are common when working with complex data structure
such as Array's or nested objects. We will revisit them in the relevant
chapters. 
</div>

### Sync/Reset
The `sync` and `reset` methods are self explaining, they both
require the model and the form.

### addControl / removeControl
Adding and removing controls are operations performed on forms with
arrays, these are `FormArray` controls.

When we want to add an item to a `FormArray` we can not added a new
instance of the item, we need to add the form control that represent
that item.

For example, a model with the property **names** of type `string[]`, if
we want to push a new string to the **names** property we can not use
the model (`model.push('new name')`) instead we need to push a new
`FormControl` to the `FormArray` that represent **names**.

What if **names** is not `string[]` but an array of a complex type, a
nested model. Now we can't push a `FormControl` we need a `FormGroup`.

To simplify the process the `addControl` will do all the work for us
```ts
appendControl(path: Array<string | number> | string, value?: any): FormGroup | FormControl
```

We just need to provide the full path and a new form control is added.
If we provide a **value** it will be used to populate the new control.

`removeControl` works the same

```ts
removeControl(path: Array<string | number> | string, query: number | AbstractControl): AbstractControl | undefined
```

Here we also need a **query** which is the index we want to remove at
or a control which the method will use to resolve the index to remove.

<div class="alert">
The **path** in the add/remove methods must point to an instance of `FormArray`
</div>

## createChildForm

```ts
createChildForm<Z = any>(path: Array<string | number> | string, model?: Z): TDMModelForm<Z> {
```

`createChildForm` is a method that returns a new instance of `TDMModelForm`
based on the type the **path** points at.

The type must be a *known model* and explicitly declared as a `childForm`

The optional **model** parameter is used to populate the form, this is
where we need to use `getValueModel`

<div class="alert">
`createChildForm` is used when working with complex data structures,
child forms in particular. 
</div>