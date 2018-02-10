<!--@tdm-example:part1-->
# Child Form
A child form is a property of a model that:
  - Has a type that is also a model *AND;*
  - Explicitly declared as a `childForm`

A property in a modal with a type that is also a model is a *potential*
child form.

```ts
class Hero {
  nemesis: Hero;
}
```

**nemesis** is a property in the `Hero` model. The type of **nemesis**
is `Hero` which is a model thus it is a *potential* child form.

Potential because it also requires explicit declaration:

```ts
@Model({
  form: true
})
class Hero {
  @Prop({
    form: {
      childForm: true
    }
  })
  nemesis: Hero;
}
```   

## Nested models
Model transform to `FormGroup`, A child form is a model which means it
also transform to `FormGroup`.

The end result is a `FormGroup` containing another `FormGroup`.  

In angular forms, when a `FormGroup` contains one or more `FormGroup`
instances, *directly or indirectly*, they are referred to as
**nested models** or **nested forms**.

<div class="info">
  **Directly**: The nested model is a value of a property on the parent
  <br>
  **Indirectly**: The nested model is an item in a `FormArray` instance
  that is a value of a property on the parent
</div>

## A **known model**
Angular forms does not recognize types, only structures. A form is
an instance of `FormGroup` that is the root control.

The library is based on types, classes, in dynamic forms the definition
for a form is a bit more specific, a form is a `FormGroup` from an
instance of a **known model**.

A **known model** is a class decorated with `@FormModel`. The class is
"known" to the library.

## Explicitly declared
A child form is described as a property with a type that is a model,
i.e. a child form is a **known model** which means that a child form
is also a form by itself, being the root to of the child controls in it.

The other requirement is explicit declaration which means there is
another state, a **known model** that is not a child form.

A child form is then a **flag**, this flag affect both logical and
visual aspects which is not covered by this chapter, the only thing we
need to know is that a **known model** always transform into a
`FormGroup` weather it is a child form or not. 

<div class="info">
Known models that are not a child form are handled but other complex
data structures, we will cover these scenarios in the relevant chapters.
</div>

Back to our model:
```ts
@Model({
  form: true
})
class Hero {
  @Prop({
    form: {
      childForm: true
    }
  })
  nemesis: Hero;
}
```  

The `nemesis` property in the `Hero` class is a child form because it:

  1. Refer to a **known model**, the `Hero` model
  2. Explicitly declared as a child form via `childForm: true`

<div class="info">
Note that `childForm` is set on the metadata but not in the `render`
object, it is a logical definition not a visual definition. The library
will set the visual type of a child form to `form` which is used by
the renderer.
</div>

## Adding address
To demonstrate child forms we need to extend our model, we need to
create a new model class and add a property to `Hero` that has the
new model as type.

We add create the `HeroAddress` model, a flat structure that represents
an address:

```ts
export class HeroAddress {
  street: string;
  city: string;
  zip: string;
}
```

Adding the property to `Hero`:
```ts
@Prop({
  form: {
    required: true,
    render: {
      vType: 'form',
      label: 'Address'
    },
    childForm: true
  }
})
address: HeroAddress; 
```

<div class="info">
You can review the full models with decorators in the source code view.
</div>

## Displaying a child form
We've mentioned that a child form is a form by itself, if we take an
instance of `Hero` with the **address** property set with an instance
of `HeroAddress` we can use a dynamic form to display the address:

```html
<dynamic-form [model]="hero.address" ></dynamic-form>
```

But how do we display a child form as a child, what will display for
**address** when we display the hero instance
```html
<dynamic-form [model]="hero" ></dynamic-form>
```

This is where visual display becomes challenging, there are multiple
ways to display nested forms, some are based on preferred style and some
based on the context. The challenge is to allow freedom so the user can
choose the one right for him.

<div class="info">
Common visual styles are inline and external. External options are
dialog window, tabs, pages etc... 
</div>

The library provide tools that help achieve this freedom but at the end
it is up to the **renderer**. The renderer can choose a strict "my way"
implementation, An implementation that pass the responsibility to the
user or something in between a configuration driven (metadata) approach.

There is always a trade-off, strict is simple to use but not flexible
and as we offer more flexibility we also add more complexity for the
user. 

In this tutorial we use the material renderer. The material renderer
does not render child forms, instead it renders an edit button which
when clicked emits the **(rendererEvent)** event, a listener should
handle the display of the child form.
 
We will not use the **(rendererEvent)**, instead we will use a
*control outlet*. Using event's is an excellent solution but we want to
demonstrate the use of *outlet*, **(rendererEvent)** is used in
the chapter about <a class="tdm-anchor-trap" href="../arrays">Arrays</a>

<div class="alert">
A child form is one of several complex data structures, there are others
and they can merge, for example **array of child forms**. We will cover
them as we progress

<br><br>

Trying to navigate through complexity, the render implementations that
ship with this package will take the less complex options, i.e.
using the basic non configurable implementation which the user can
override using tools from the library.  
</div>


### Control Outlet
We covered <a class="tdm-anchor-trap" href="../control-outlet">control
outlet's</a> in the basic section of the tutorial. Outlet's allow to
replace the display of a control while showing the original control
somewhere else. This is great for tabs, dialogs, etc...

In the following example we want show the `HeroAddress` child form in
a different view as an external form.

To do that we define an outlet in the left drawer that will open
once the user want's to edit the address.

To interact with the drawer we use a structural outlet that shows
an **edit** button to open/close the left drawer when clicked. The
original location of the **address** control is replaced with the
template we define for the outlet.

Because the material renderer use a dynamic form to render child forms
we know a complete new dynamic form will display in the left drawer.

<div class="info">
In the chapter about the
<a class="tdm-anchor-trap" href="../render-container">Render Container</a>
we described the features it provides. The renderer has a layout of 2
columns, 1 for labels and 1 for the original renderer with an option to
replace the original renderer. This is a good example how we leverage the
container to keep the layout, show the label but use our control, in
this case the **edit** button, instead.
</div>
<!--@tdm-example:part1-->

<!--@tdm-example:part2-->
Notice how the **required** error appears next to the edit button and
disappear after clicking the edit button, why is that?

The **address** property has a `required` validation. The model we are
showing is a new model with an empty address thus the error.

When the user click's on the edit we need to create a new address.

<div class="alert">
This is **not** an instance of `HeroAddress`, it is the `FormGroup`
version of it as we **never** update the model, we update the form!
</div>

But how can we create the `FormGroup`? We do that using the
<a class="tdm-anchor-trap" href="../control-panel">control
panel</a> discussed earlier.

```ts
editExternalForm(ctx: DynamicControlRenderContext): void {
  this.rightDrawerOpened = true;
  if (ctx.fControl.value === null) {
      const heroAddressFormGroup = ctx.tdmForm.createControl(ctx.item.fullName, null, true);
      ctx.fGroup.setControl(ctx.item.name, heroAddressFormGroup);
      ctx.item.markAsChanged();
  }
}
```

With `ctx.fControl.value === null` we check if the **address** is null
which means empty, this will always be null when a child form is not
set.

When `null` we need to create the `FormGroup` which we do by calling
`ctx.tdmForm.createControl(ctx.item.fullName, null, true)` which mean
*create a control for the type in `tx.item.fullName`, which I don't have
a value for (`null`) but I want you to create a new one (`true`)*. 

Once we have the new `FormGroup` instance we need to set it instead of
the current one, which is `null`. We use the parent form group (which is
the form group for the hero model) and we set the **address** property
of it to our new form group (`ctx.item.name`).

The last thing we need to do is to mark that this control has changed so
it will be picked up by change detection.
 
## A note on the renderer
Although custom renders are covered in specific section dedicated to
the renderer this topic involves some aspects on the user side.
 
Custom renderer implementation can offer flexibility by extending
the metadata a user can provide for a child form and using that to
take decisions. These are sort of *presets* of layouts the user can
choose from.

This way add's a lot of complexity on the renderer's implementation and
also on the user's as more options might lead to confusion.

Remember that the user can always use outlets and creating a solution
that covers all scenarios is not practical, this is why we chose the
basic approach.

That said, it might be that the same visual style is applied repeatedly
in many forms and the same behaviour using the same outlet configuration
is done over and over. This is where adding some logic might help and
creating a preset might simplify the process.
<!--@tdm-example:part2-->