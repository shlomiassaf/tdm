<!--@tdm-example:PART-1-->

In this chapter we will review `@angular/forms` and see where
`ngx-dynamic-forms` comes in, why it is needed and how it integrates.
We will then review `@tdm` in general and explore some of the
concepts used in `ngx-dynamic-forms`.

<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
## Why?
Quoting from the angular documentation:
> Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.
  
> **It may be more economical to create the forms dynamically, based on metadata that describes the business object model.**

If you have 3-4 forms in you'r application dynamic forms is definitely
an overkill but for larger, business oriented apps with business model
entities, domain logic and complex flows this is a must.

## How
Creating a form with `@angular/forms` can be split to 3:
  1. Creating a form instance including child form control instances
  2. Creating a template with UI elements corresponding the form controls
  3. Binding the UI elements in the template to the form controls. 

The 1st step is purely schematic, we are modeling our form so it can
represent the domain model we are working with. We do this in template
and model driven forms.

With template-driven forms modeling is embedded within the templates and
later extracted to create form, with model-driven forms it is more
visible especially when using the form builder.

Let's examine it using the `Hero` class (model):
```ts
export class Hero {
  id: number;
  name: string;
}
```

Let's build a form factory for it:
```ts
function heroForm(builder: FormBuilder): FormGroup {
  return builder.group({
    id: null,
    name: null    
  });
}    
```

We get back a `FormGroup` instance representing the structure of the 
`Hero` class, in low detail (no type information)

To visualize the structure we get back, think of this class: 
```ts
class HeroFormGroup {
  id: FormControl;
  name: FormControl;
}
```

It is similar to our `Hero` class but with no type information, just a
structure.

Notice how a `FormControl` has no type information, it accepts any
value. Enforcing a type is done via validators and the UI element bound
to the control.

<div class="alert">
  `HeroFormGroup` is given here as a visual aid, it does not represent
   a `FormGroup` instance. It is just a way to look at it's basic model.
</div>

The 2nd & 3rd steps are purely descriptive, it requires taking the form
instance created in the 1st step and for each child control it has
create a UI element in the template and bind the element to the control.

 
`ngx-dynamic-forms` reduce the effort involved in form generation.  
It knows enough about your model so it can create form instances from it
and merge these forms back into the model.  
It takes metadata about your model and use it to dynamically build a UI
bound to a form.

<!--@tdm-example:PART-2-->
<!--@tdm-example:PART-3-->
`@tdm` is a typed metadata driven transformation framework.

In simple words, with `@tdm` you can take a structure X and transform it to Y and then back to X.

This is not restricted to data structures, you can transform a structure into an **action** and then an action back to a structure.
For example, using `@tdm/ngx-http-client` you can transform a resource into an HTTP request, parse the response and update the resource.

The process is always the same, define a data structure (class / model / resource)
and define rules and guidelines for that data structure (metadata).
The metadata contains instructions required for transforming X to Y.

## @tdm

`@tdm` is highly extensible (and not limited to angular), based on
2 core packages:

  - **@tdm/core**: A powerful metadata foundation library with that provides
   core metadata definitions, transformation and a powerful store for 
   retrieving and manipulating metadata. Additionally, it provides factories
   for creating new metadata definition blocks and corresponding decorators.

  - **@tdm/data** A core package for creating action oriented data libraries.  
  `@tdm/data` provides the execution pipeline for actions with support
  for both DAO and Active Record (via plugin) design patterns while keeping types intact.  
  The data library includes a `rxjs` plugin enabling powerful and reactive resources.

`ngx-dynamic-forms` depends on the `@tdm/core` package.

## Model < - > Form
When moving between a model and a form it is first important to take a minute
to understand the concepts and process.

An instance of a form is a full or partial clone of the model.  
A form is not bound to the model, there is not connection between then.  
When a user updates a form control the form will update but the model will not change.  
When we want to update the model we need to merge the value of the form into the model.  

This is the transformation, from a model to a `FormGroup` instance and back.

The library does just that, it takes a model and serialize it into a form
instance (`FormGroup`) and backwards, from a form instance into the model.
It knows how to serialize and deserialize because it has type information
and additional metadata input for the model.

> A form is a partial clone of the model when not all properties of the
model are mapped into form control. 

## Form rendering
Moving between a model and a form is not enough, Having a form instance
generated for us is nice but its only half way. In `@angular/forms` world
it is equivalent to generating a `FormGroup` from a `FormBuilder`...

We still need to put it on a template so it can render as UI controls.

While it is possible to render a form from it's `FormGroup` instance alone
this is not dynamic, we need a controller.

The library comes with a set of tools and services that make it easy to
manage the transformation and a controller class `TDMModelForm` that
encapsulate a model and a form and manage the transformation between them.  
 
> While the services, tools and the `TDMModelForm` instance are core
components, this tutorial will not cover them in depth as they
involve imperative coding and we aim for the declarative approach.
Suffice to say that they are used by the library to provide the declarative
experience building dynamic forms.

`TDMModelForm` provides, among other things, access to the metadata
required to render a form (not to confuse with creating a form instance).  
Each metadata object represents a property on the model and a form control in the form.  
By iterating over the metadata objects (`ngFor`) we can render the controls
(thing `ngSwitchCase`) based on the type defined within the metadata.

We need a component that can take advantage of `TDMModelForm`, add some sugar
and provides the perfect dynamic form experience...

`DynamicFormComponent` is what we need.

## DynamicFormComponent (`dynamic-form`)
`DynamicFormComponent` abstracts `TDMModelForm` and exposes a declarative
API and additional features such add local control template override,
events, array control notification and more.

`DynamicFormComponent` knows how to render a form just by giving it
and instance but it does not have a concrete UI implementation, it 
requires external help.

## Agnostic UI
We know that A form control instance represents a UI element that we need to show
the user so we can get input, but how does it look?

A simple `text` control, will it be material style? bootstrap style? custom style?

The library does not know and can not decide that for the user, it must
work with every component that can host a form control.

You are responsible to teach the library what to render for each field.
As mentioned before, we have a list of metadata objects of fields we need to render
and for each field we need to have a template, this is a classic `ngSwitchCase` solution
or manually using a `ViewContainerRef`.
<!--@tdm-example:PART-3-->
