<!--@tdm-example:part1-->

In the UI, when a list is shown inside a form it is used as an interface
for the user to do 1 or more of the following actions:
     
  1. Edit list items **inline**  
  2. Edit list items **externally**  
  3. Add / Remove / Move item's in the list

If it does none of the above it's simply a read-only list.

Editing inline (1) is supported by default, editing externally (2)
and modifying the array (3) is not.

These features require user actions, the user needs to interact with
elements in the UI to trigger editing, removing, adding, etc...

The renderer can handle this task, it knows when it is an array and
it can show buttons or any other UI of choice and handle logic internally.

But there is a problem, the renderer can do all of the above but it
can not apply the logic for the action itself, it does not know about
the context, business logic and other stuff required.
 
Moreover, the renderer has no direct connection to the host of the
dynamic form running it so it.

Let's demonstrate using a user story:
  - A component is showing a page
  - The page has a dynamic form
  - The form has a renderer
  - The renderer shows a **delete** button
  - The user clicked the **delete** button
  - The renderer should notify the page component about it.

Using a service injected to the renderer won't work, it will be very
hard to identify the source when using multiple forms on the same page
and will also require a lot of setup for each form.

To allow that communication, the dynamic form provides an API for array
actions, an internal API for the renderer to notify the dynamic form and
an external API (`@Output`) so the host can listen to array action
notifications.

## Host facing API
The host component (e.g. page) only needs to register for notifications:

```html
  <dynamic-form [model]="model"
                (arrayActionRequest)="onArrayActionRequest($event)"></dynamic-form>
```  

And in the component:
```ts
  onArrayActionRequest(event: ArrayActionRequestEvent): void {
    if ( event.action === 'add' ) {
      /* HANDLE ADD EVENT */
    } else if ( event.action === 'remove' ) {
      /* HANDLE REMOVE EVENT */
    } else if ( event.action === 'move' ) {
      /* HANDLE MOVE EVENT */
    } else if ( event.action === 'edit' ) {
      /* HANDLE EDIT EVENT */
    }
  }
```

<div class="alert">
  Working with complex data structures require interaction with the
  form, especially when adding form controls that does not exist.
  <br>
  A good example is adding a new item to a `FormArray` or assigning a
  new value to a child form.
  <br>
  The library provide tools for these kind of interactions. Because
  this chapter is focused on the renderer we will not cover that.
</div>

## Renderer facing API
The renderer use's the `emitArrayActionRequest` method on the dynamic
form instance. The method accepts an object describing the action and
it will extend that action and notify the host.

The event object sent to the host is `ArrayActionRequestEvent` which is
an union type of the following:

```ts
export interface ArrayActionMoveRequestEvent extends ArrayActionRequest {
  action: 'move';
  fromIdx: number;
  toIdx: number;
}

export interface ArrayActionAddRequestEvent extends ArrayActionRequest {
  action: 'add';
  atIdx?: number;
}

export interface ArrayActionRemoveRequestEvent extends ArrayActionRequest {
  action: 'remove';
  atIdx: number;
}

export interface ArrayActionEditRequestEvent extends ArrayActionRequest {
  action: 'edit';
  atIdx: number;
}
```

And `ArrayActionRequest`:

```ts
export interface ArrayActionRequest {
  renderInstruction: RenderInstruction;
  formArray: FormArray;
  fullName: string;
  runtimePath: string;
  tdmForm: TDMModelForm;
  data?: any;
}
```

`emitArrayActionRequest` accepts a partial of `ArrayActionRequestEvent`
which have the properties `tdmForm, fullName, runtimePath` omitted.
 
We mentioned that `emitArrayActionRequest` extends the event object, it
will add this properties back and emit the full version of `ArrayActionRequestEvent`

For example, to add an item:

```ts
this.dynForm.emitArrayActionRequest({
  action: 'add',
  renderInstruction: this.item,  
  formArray: this.fArray
});
```

Remove:
```ts
const INDEX_TO_REMOVE = 1;
this.dynForm.emitArrayActionRequest({
  action: 'remove',
  renderInstruction: item,
  formArray: this.fArray,
  atIdx: INDEX_TO_REMOVE
});
```

## Renderer implementation
To implement this feature we need to take a decision about how we
display lists's in our UI, do we allow editing? do we inline array's
with complex data structures (i.e. not primitive)? if not then how should
they display?

The answer to all of the above is different from one app to the other
and these are not complete, there are a lot of things that might require
host intervention, roles, disabling actions based on logic, etc...

For this demonstration we will show array's as list's with a checkbox
used for selection. A list of primitives (e.g. `string[]`) will display
as is, a list of a complex type will only show a read only value which
is the identity of the object, when an edit is in place the form will
show an inline version of the model in edit.

Before we analyze, let's see the final result in action. All properties
that are not array's are excluded to minimize the noise.
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
Most of the work is done on the template side, the component is used
to handle the logic for emitting array actions and internal logic for
inline editing and selection management. 

An `<ng-template>` was added, it is the template for array's, we can
split it to 3 sections:

 1. Handling primitives
 2. Handling complex types
 3. Action row (buttons)

We use the `<mat-list>` component to wrap the first 2 sections.
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
This part is simple, we use the `isPrimitive` property of `RenderInstruction`
to check what type we are dealing with. Note that it is used on the
array's instruction: `item.isPrimitive`.

If it is a primitive we use `ForFormArrayDirective` to iterate over
all items an call the renderer again, recursively, to render the control.

Just before that we add a checkbox, bound to the index of the item, so
we cant track selections.
<!--@tdm-example:part3-->
<!--@tdm-example:part4-->
Handling complex objects is a bit more *complex*...

<div class="alert">
  The following analysis is complex and it is only used to render
  a form control that is an array and it has a **flattening** definitions.
  <br>
  If you are not planning to define flattening definitions over an array,
  which is recommend not to do, you can skip this part.
</div>

We decided that list's with complex objects will not render form controls
for each item, instead they will show a single field representing the
item, as a read only element, the identity of the model.

When editing, the read only element goes away and we show the controls
inline, just for that item.

<div class="alert">
  This is just one way of doing it, there are other... dialogs,
  expanding rows, etc...
</div>

To identify the field we should display when not editing we need the
user to define it, let's extend the `RenderDef` interface for that:
```ts
declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface RenderDef<T extends keyof FormElementType = keyof FormElementType> {
    identityKey?: string;
  }
}
```

The template will show the item only if it is not a primitive and
it has an identity key set.

```html
<ng-container *ngIf="!item.isPrimitive && item.identityKey">
```

When showing primitives we used `ForFormArrayDirective` to iterate over
all items, we can't do that now because each item in `FormArray` can
translate to multiple fields if it has a **flattening** definition, the
other option is that it is a child form which is not handled in this
renderer.

So instead we will manually iterate of the items in `FormArray`
```html
<mat-list-item *ngFor="let c of fArray.controls; index as i;">
```

we show the checkbox and then we check if the item is in edit mode or
not, when not we will show the identity of the item.
```html
<span *ngIf="inlineEdit !== i">{{c.get(item.identityKey)?.value}}</span>
```

The expression takes the `FormGroup` (**c**) and try's to get the child
control matching the identity, if it is found it will show the value.

When we are **in** edit mode we will render all the controls within
the item, we now need to add a nested for loop, iterating over all
`RenderInstruction` items, the children our array.

```html
<ng-container *ngIf="inlineEdit === i">
  <renderer-v4 *ngFor="let child of item.children"
               [tdmForm]="tdmForm"
               [item]="child"
               [fControl]="child.resolveFormArrayChild(fArray.controls[i])"></renderer-v4>
</ng-container>
```

This is a bit confusing, let analyze:

We have 2 objects we work with:
  - `fArray` - An instance of `FormArray`  
  It contains `FormGroup` instances representing the complex objects we
  want to show.
  - `item` - An instance of `RenderInstruction`  
  The instruction for `fArray`, instructions how to render
  the array. It also has children, instances of `RenderInstruction`

The tricky part lies here:  

**While `item` and `fArray` correlate their children does not.**

This happens because we are rendering an array with **flattening**
definition.

The children of `fArray` are the objects we want to render, they are
all of the same type, what is the type?

The children of `item` are the instructions for the objects we are about
to render, together they are the type, a collection of properties that
create a structure.

`item` is static metadata describing an array of a type/class (`Array<T>`)
which `fArray` contains in runtime.

So, for each `FormGroup` instance in `fArray` we have a nested for loop
iterating over all of the properties/controls in that `FormGroup` and
display them using the renderer, recursively.

When we call the renderer we send it the instructions for the property
we want to render and we also need to send the form control for that
property.

The instruction is `child`. `item.children` contains the properties so each
iteration is a property, i.e. `child`.

The control can be `c`, let's recall:
```html
<mat-list-item *ngFor="let c of fArray.controls; index as i;"
```

We are in an iteration, the item is `c` which is a `FormGroup` so it is
not the control we need because it's the whole object, we need the
property that match's `child`, for that we need to use the method
`resolveFormArrayChild` in `RenderInstruction` that resolves the
control.

<div class="info">
  The `FormGroup` instance `c` represent the object.<br>
  `child` represents the property we want from the object.<br>
   It might look intuitive to call `c.get(child.name)`, i.e. getting the
   property from an object, but it is not.
   <br>
   <br>
   Flattening definitions can be nested, it means that we can flatten
   deep. `c.get(child.name)` will work for depth 1 but to get  depth n
   we need to call `resolveFormArrayChild`
</div>
<!--@tdm-example:part4-->
<!--@tdm-example:part5-->
The action row is straight forward, it uses the array action API to
broadcast actions, the implementation it self is not important.

Below you can see the final source code for the renderer:
<!--@tdm-example:part5-->