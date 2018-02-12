# Overview
The dynamic forms library is based on HTML forms and the
`@angular/forms` library.

A dynamic form is built from static metadata. A data structure and
information describing how it should display as a form.

It is a model-driven and a metadata-driven library.

## Why?
Quoting from the angular documentation:
> Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.
  
> **It may be more economical to create the forms dynamically, based on metadata that describes the business object model.**

If you have 3-4 forms in you'r application dynamic forms is definitely
an overkill but for larger, business oriented apps with business model
entities, domain logic and complex flows this is a must.

## A Model, A Form
A form is the visual presentation of a data structure, a **model**.
The form provides an interface for the user to update the model.

A simple login form with a *username* and a *password* field has a
data structure, the model. Even if we build it with HTML only.

```ts
class Login {
  username: string;
  password: string;
}
```

We know that an instance of a login form can accept a value that follows
the structure of `Login` and will output a value the follows the
structure of `Login`.

<div class="info">
We can say that a form is also a data structure, a model.
</div>

## A Modeled Form
The HTML spec for forms is abstract, the model/form relationship is not
visible.

`@angular/forms` takes the model/form relationship to the next level by
introduction models into HTML.

Angular forms is built around 3 fundamental building blocks used to
define forms: `FormControl`, `FormGroup` and `FormArray`.

When we create a form, **template-driven** or **model-driven**, we
create a model using these building blocks.

<div class="alert">
**template-driven** or **model-driven**? this might imply that template
driven is not built around models, it is!
<br> 
<br>
Model's are built through the template, it is also easy to extract
the model from a template driven form. 
</div>

<div class="info">
These blocks are all we need to describe a data structure, a model bound
to the form.
</div>

## A Model, A Form, A Class
With angular forms we create model definitions on the fly and the forms
library create's instances of the model which we can use in templates
binding them to controls such as input, checkbox, select, etc...

Let's build a model definition using the `FormBuilder`:
```ts
const fb: FormBuilder;
const Hero = fb.group({
  id: ['', Validators.required ],
  name: ['', Validators.required ],
  superHero: [''],
});
```

If we are going to use this form in multiple places we will probably
need to create a factory function:
```ts
function createHeroForm(fb: FormBuilder): FormGroup {
  return = fb.group({
     id: ['', Validators.required ],
     name: ['', Validators.required ],
     superHero: [''],
   });
}
```

Now we can use this from different pages, it will always return the
same structure.

Can we build a `class` representing the structure of the `FormGroup`?

```ts
export class Hero {
  id: any;
  name: any;
  superHero: any;
}
```

Notice how all of the property types are `any`. Angular forms does not
handle types, a `FormControl` can be any value, even an object the
library does not care, if the user want's to display that control it
will need to handle it in the template.

But wait, we are using *TypeScript*, we can use types:

```ts
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

We have a lot of information now.

  - We know the structure of model, we can create a `FormGroup` from it
  - We know the type for each control, we can use it to decide what to render

It looks like we have enough information to dynamically create a form.
We can create a `FormGroup` dynamically and render the proper control
dynamically.

The real model driven.

## Metadata
Knowing the structure and types of the model is not enough, it is a
good place to start with but it will not get us far, we need more
information.

We need to find a way which allow's us to describe the relationship
between a model and a form with high resolution, the relationship
between each property and the control.

We call this information **metadata**, we decorate our model with
metadata and we decorate the properties with metadata.

This is not alien territory, this is how angular works, **decorators**:

```ts
@Model()
@FormModel()
export class Hero {
  @FormProp({
    render: {
      vType: 'number',
      label: 'Hero ID'
    }
  })
  id: number;

  @FormProp({
    render: {
      vType: 'text',
      label: 'Hero Name'
    }
  })
  name: string;

  @FormProp({
    render: {
      vType: 'boolean',
      label: 'Super Hero'
    }
  })
  superHero: boolean;
}
```

The concept is simple, provide a way to describe information and use
that information to perform an operation.

Provide a way to describe how a property should manifest in a form
and use that information to display it.

Because we are using *TypeScript* we can use **decorators** to describe
metadata, which also means that metadata is a contact, we know what to
describe.

## Displaying metadata
The final piece in the puzzle is the user interface. Rendering the
metadata we have into a form.

Similar to `@angular/forms` the library can not render the user
interface, it is a choice of preference.

The library drive's the process, taking a model and creating a form
dynamically following all of the descriptions provided and applying all
logic but the final step of rendering a control is up to the **renderer**

The **renderer** is a component that accepts an agreed upon structure
that is the metadata for a control and is required to display that
control, i.e render it.

The **renderer** is usually a concrete implementation of a UI framework,
e.g `@angular/material`, `bootstrap` but might also be a custom
implementation.

Chapters in this tutorial that demonstrate features will use the
material renderer, a renderer that makes use of UI components from the
`@angular/material` library.

The material renderer is not part of the library but comes with the
package as a plugin.

Chapters that demonstrate how to build a renderer will use a custom
implementation of the renderer which also make use of the material
library.