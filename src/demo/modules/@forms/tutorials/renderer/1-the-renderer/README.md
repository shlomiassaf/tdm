<!--@tdm-example:part1-->
Building a form with `@angular/forms` requires a specific template
definition for each control within the form, it is required for both
**template-driven** and **model-driven** (reactive) forms.

  - With **template-driven** forms, all work is done in the templates.  
  - With **model-driven** forms some work is done in templates while other
  is offloaded to the component.

In any case, we end up with work required on the template.

This is by design, it means that the UI style, behaviour and
implementation of controls is setup by the developer and not by the
forms library, otherwise forms are bound to a specific look & feel
making them useless to most.

`ngx-dynamic-forms` works the same way, how form controls look, behave
and work is up to the developer. The library's UI responsibility is to
render the control in the right place with the correct data and state. 

For every form we want to show, `@angular/forms` requires these
templates, quoting from the angular docs:

> Building handcrafted forms can be costly and time-consuming,
especially if you need a great number of them, they're similar to
each other, and they change frequently to meet rapidly changing
business and regulatory requirements.

In the last chapter we created a model with metadata describing how it
interacts with a form, this information can now be used to create UI
elements and bind them to the form.

We do this using a form control renderer ("**renderer**").

## Form Control Renderer
A **renderer** is an angular `@Component` that "knows" how to display
all possible, form related, UI elements.

The **renderer**'s "job" is to describe visually and logically, the form
control based on the context it receives. <sub>see comment below</sub>
 
Here are some of the things a **renderer** is responsible for:

  - Rendering a UI control based on the type
  - Passing metadata to the UI control
  - Rendering errors

Here are some of the things a **renderer** is NOT responsible for:

  - State & Error management
  - Positioning of form controls
  - Adding or Removing of form controls
  - Metadata for a form control
  - Validation logic

Because the **renderer** is UI specific, i.e. it targets a specific UI
implementation, it does not come with the library and must be defined
by the user.

<div class="info">
  A **renderer** component is reusable across applications.

  A **renderer** targeting the `@angular/material` package can be used
  in all app's that use the `@angular/material` framework. Same goes for
  other UI framework like bootstrap, etc...

  The demo application contains a comprehensive **renderer** targeting
  the `@angular/material` framework, it is planned to release that as
  a plugin in `@tdm/ngx-dynamic-forms`, other targets might follow.
</div>

Another way to look at it is that the **renderer** is an adapter,
it takes a form control and metadata about it and creates a UI element.

#### Describing a form control
A form control is bound to a single element in the UI, this is the
**logical description**

The **visual description** is a template, which includes the single
element bound to the form control (logical description) but *might* also
include other such as layout, label, errors, hints, etc...

`@angular/forms` has 3 fundamental building blocks used to define forms:
`FormControl`, `FormGroup` and `FormArray` and the renderer should
be able to describe all of them.

A `RendererInstruction` instance, providing metadata and tools is
attached as context for each rendering instance along with the form
control instance.

Additionally, the library provides other tools, directive and components
to help handling form control types.


#### Implementation
There are multiple ways to implement a **renderer**, in this tutorial we
will use the __declarative__ approach, the renderer implementation will
live mostly in the template using `ngSwitchCase` statement.

Here's a pseudo sample: 

  - switch TYPE
    - if TYPE is `text` render `<input type="text" />`
    - if TYPE is `select` render `<select><option></option></select>`
    - ...

<div class="info">
  `TYPE` represents the visual type describing how this control should
  look like.
</div>

Another is the __imperative__ approach, the renderer implementation will
be mostly in the class, programmatically finding the component to render
and using angular API to instantiate and push it into view. 

This approach give the **renderer** a scent similar to to the
`@angular/router`, where each page has a component attached and the
router is the renderer, when a location has changed the router get's
metadata information (URL) and display the proper component.

## Building a Renderer
The renderer is required to handle all 3 types a form control can
represent: `FormControl`, `FormGroup` and `FormArray`.

`FormControl` can be compared to a *primitive*, a single value with no
references.

`FormGroup` and `FormArray` are form control containers, `FormArray`
contains a list of form controls and `FormGroup` contains a map of
for controls. They are both defined by the form controls they reference
to.

The implementation we are about to build will handle `FormControl` and
ignore the container types which we will discuss later.

For now, all we need to know is that rendering a `FormGroup` involves
a nested form, i.e new dynamic form. Rendering a `FormArray` involves
rendering of lists of form controls and action buttons (add/remove/move).

<div class="info">
  Container controls point to other controls which is a recursive
  attribute in a component world. This is why we will only focus on
  `FormControl` so the example is simple and abstractions are minimal.
  We will get to each of the containers as we progress and improve our
  renderer.  
</div>

One of the definitions for the renderer was: 

> The **renderer**'s "job" is to describe visually and logically, the
form control based on the context it receives.

  - What is the context?
  - How do we access it?
  - When can we access it?

##### What is the context
The context contains the metadata we defined in the `@Prop` decorator
with some additional information populated by the library.

The context also contains the form control instance to be rendered and
other form control instances related to that control.

##### How do we access it
The context is applied onto the **renderer** instance, making it
accessible from the renderer's template.

For that reason a **renderer** must implement the
`DynamicControlRenderContext` interface.
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
We will cover this interface in-depth as this tutorial progress.

For now, we only care about 2 properties:
  - **item**: A instance of `RenderInstruction`, contains all the
   properties we defined in the `render` object within `@Prop` and
   additional properties and methods for use.

  - **fControl**: The instance of `FormControl`, this is the form
  control instance we need to bind to the UI element.

<div class="alert">
  Binding of `FormControl` to an UI element requires the element to be
   an angular directive/component that implements the
   `ControlValueAccessor` interface from `@angular/forms`
</div> 

##### When can we access it
The context is applied right after the **renderer** class is
instantiated, before the `OnInit` angular life-cycle hook.


## The Simple Renderer
Let's implement a simple renderer. Our renderer is required to render
`text` and `number` fields, that is it.

<div class="alert">
  The `text` and `number` fields have corresponding visual types defined
  for them, these are defined by us and not the library, we will cover
  this in depth in the next chapter.  
</div>

We base our model on the famous `Hero` class:
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
The **class** implementation is simple, there is no logic or actual
implementation other then creating the class and implementing some
properties. Everything is done in the HTML template.

The **template** is a `switch` expression, written in angular's
declarative syntax, it's 100% declarative.

<div class="alert">
  This is simplified **renderer** example, not to be used in real
  application, as we progress we will re-shape it for that purpose.
</div>

#### Rendering the dynamic form
First, we need to send our new renderer component to the `forRoot`
method so it will be the default component to render.

> The `fotRoot` method will automatically register it as `enterComponent`
but it must still register in the `declaration` array

<!--@tdm-example:part3-->
<!--@tdm-example:part4-->
You can see that a form is showing, not a glimmering one but a form it is.

Notice how **superHero** does not render a form control, it is of type
`boolean` and we did not provide a switch statement for that.

You can toggle the source code button to view it and use the JSON View
to toggle Model/Form views. Note that model view will reflect form changes
only when you commit the form.

<!--@tdm-example:part4-->