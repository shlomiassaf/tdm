<!--@tdm-example:part1-->
# Arrays
An array is a collection of items which we add, remove or move.  
This is a unique data structure which requires specific handling in both
logical and visual aspects.

## FormArray
In `@angular/forms` arrays are represented by the `FormArray` class.

Quoting from the angular docs:
> `FormArray` is one of the three fundamental building blocks used to
define forms in Angular, along with `FormControl` and `FormGroup`.

Structure wise, we can catalog `FormArray` and `FormGroup` as
**containers** because they contain other control, including themselves.

The array container is unique because it is considered dynamic, we can
add remove or move items in it.

<div class="alert">
  While there is no limitation on removing or adding controls to a
  `FormGroup` the library does not support that.
   
  `FormGroup` represents the structure of a model and it does not make
   sense to change the structure of a typed model. 
</div> 

In angular, An instance of `FormArray` is not bound to a specific type.
This makes since because a control has no type information, it doesn't
care about the value it holds.

The library however, works in a typed environment and assumes that
array has a defined type.

<div class="info">
  This assumption does'nt mean you can not work with untyped arrays, it
  only means it is not supported out of the box and you will need to
  handle it manually.  
</div> 

## Array metadata
Form control definitions have no reference to the use of arrays.  
Using arrays does not require specific annotation, except for 1 specific
case which is not related to the library and will be covered next.

It means that we define our models and the metadata as is, nothing
special for arrays. It also mean that array's support, out of the box,
the use of other complex data structures including the `flatten`
feature and `childForm` feature.

<div class="alert">
While **flattening** is supported it is highly recommended **not** to
use flattening with arrays.
<br>
<br>
The are many reason to avoid this scenario, use `childForm` instead.
<br>
<br>
Using **flattening** declarations with arrays will most definitely
require custom renderer implementation, a very complex one. 
</div>

## Displaying arrays
Similar to <a class="tdm-anchor-trap" href="../child-form#displaying-a-child-form">Child Forms</a>
displaying arrays is a challenge. There are multiple ways to display
arrays, some are based on preferred style and some based on the context.
Do we allow add/remove/move operations or only modifying existing items?
Where do we put the buttons? how do the buttons apply text, icons? Can
we multi-select? it has no end.

This is a greater challenge, it requires control over the layout,
behaviour and state of UI elements. For example, when the user want to
disable the **add** or **edit** buttons based on domain logic.

### Tools
The library provide tools that help working with arrays, we covered some
of the imperative tools that help us manipulate the form in the
<a class="tdm-anchor-trap" href="../control-panel">Control Panel</a> chapter.

There are also declarative tools, one of them is the `*forFormArray`
structural directive which is a `*ngFor` like directive that accepts a
`FormArray` instance and it's `RendererInstruction` and returns a
collection of `DynamicControlRenderContext` to iterate over, i.e give me
the form array and the instructions for it and I will return a
collection of context items to render. `DynamicControlRenderContext` is
what sent to the renderer, it is what we render with.

Same as child forms, the renderer's implementation decides what we can
and can not do and what trade-off's apply. 

### Material renderer
The material renderer comes with array support.

Support requires choosing style, this is why the array support is
*opinionated*,

Array's are rendered using the `mat-list` component and an action row
for add/remove/edit.

Primitives are rendered inline, i.e. they appear as is within a list.  
Child forms are rendered as a single readonly value and editable via the
**edit** button. The renderer will not show any child form when edit is
clicked, it will emit an event which the user can use to render the
child form. 

> Child forms are rendered as a single readonly value

A child form is a model, to display a child form as a single readonly
value the material renderer extends the `RenderDef` type so it now
accepts the optional property **identity**, this is the property name
on the child form to display as a readonly value representing the model.

If not set the child form will not display as an array!

## Example
The example below uses the material renderer. While primitive arrays
will work as is array's of child form types will require the host of
the form to provide a way to show them.

For this we use the **(rendererEvent)** `@Output` and listen to the
`ChildFormEditRendererEvent` event. When the event fire we will show
the new form and hide the previous form from the view. We will do it
using animation like it is done in the material tab component.

What we get is a *chainable form*, a form that can jump to another
form and back without a limit to the depth of the chain.

The component implements internal logic to manage the stack of forms
and the animation. The logic for add/remove and reset of forms comes
from the material renderer. 

To demonstrate array's we need to have them in `Hero, we will add a
primitive array and a child form array.

### Extending `Hero`
First array we add is an array of a primitive type, a list of allies
referenced by name:

```ts
  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Allies'
      }
    }
  })
  allies: string[];
```

<div class="info">
  Setting `required` validation on an array means it must have at least
  one item 
</div>

The second array is an array of a `HeroAddress` making our **address**
property an array instead of a single instance.

```ts
  @Prop({
    type: () => HeroAddress,  // SEE "The array type limitation" below
    form: {
      required: true,
      render: {
        vType: 'form',
        label: 'Address',
        identity: 'street'
      },
      childForm: true
    }
  })
  address: HeroAddress[];
```

Notice how there is no change to the form definitions.

<div class="alert">
We mentioned that material require array of child forms to specify the
identity property, here we set it to **street**, which is what we
will see as a readonly value in the list.
<br>
<br>
This is not the identity of a model, as defined in `@tdm/core`.
</div>

Another property added is the **brother** property:
```ts
@Prop({
  form: {
    render: {
      vType: 'form',
      label: 'Brother'
    },
    childForm: true
  }
})
brother: Hero;
```

The brother property is child form of `Hero`, it is added just to show
the chainable form behaviour, it allows adding infinite number of chains.

In chapter <a class="tdm-anchor-trap" href="../child-form#displaying-a-child-form">Child Forms</a>
we used an outlet to show the child form, here we use the
renderer event to capture a new child form and show it as a chained
form, this time it's not part of the array.

<div class="info">
This page implementation of a chainable form could be ported into a
component of it's own, wrapping `<dynamic-component>`,
e.g. `<chainable-dynamic-component>`.
</div>

We populate the hero with some data, specifically 2 `HeroAddress`
instances, with 1 of them invalid.

<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
## The array type limitation
We mentioned 1 specific case when we need to modify our metadata when
using arrays, this is when we want the library to know what is the type
the array contains.

Using `address: HeroAddress` the property type is known to the library.  
Using `address: HeroAddress[]` the property type is **not** known and
the library will use `Object` as the type. This is a TS limitation.

In most cases, dynamic forms can work without it but in some scenarios
it is required.

Working with `childForm: true` requires information about the type of
the child form which requires the type.

To provide that we use `type: () => HeroAddress` which is a function
that return the type.

Note that `type` is set outside of `form`, it belongs to `@Prop` and
comes from `@angular/core`, if you are using `@FormProp` as the
decorator you can set the type in the special `rtType` property

```ts
  @FormProp({    
    required: true,
    rtType: () => HeroAddress,
    render: {
      vType: 'form',
      label: 'Address'
    },
    childForm: true
  })
  address: HeroAddress[];
```

<div class="alert">
Using `type` solves other issues similar to those solved by `forwardRef`
from `@angular/core`.
</div>
<!--@tdm-example:part2-->