<!--@tdm-example:part1-->
# Render Container
The library prepares the controls for rendering, each control is then
used to create an instance of the renderer, a single component that the
library add to the view.

The renderer implementation we are currently using does not apply style
on it's host an so the host's layout flow is inline, i.e. each control
is rendered inline.

We can control the flow using CSS  or we can wrap the renderer with
our own renderer and control the styles there.

We will go with the 2nd option, wrapping the original form will give us
more control over the layout.

## DynamicFormElementComponent
The renderer we currently use does not apply layout to the components
it renders, this allows flexibility between inline and blocking controls.

`DynamicFormElementComponent` expose properties using `@Input()` so we
can use it in templates.
 
The renderer also implements labels as placeholders, where available and
allow to switch of labels using the `@Input()` property **showLabels**

We will use this feature to render labels inline, left to the control
instead of placeholders.

## DynamicFormRowComponent
We call the new renderer `DynamicFormRowComponent`, before we jump into
the implementation let's describe what we are going to implement: 

  1. The renderer will use a flex layout creating 2 columns, left column
   for the label and the right column for the control.
  
  2. `DynamicFormElementComponent` is used inside the right column with
  the `showLabels` set to false
  
  3. `DynamicFormRowComponent` will also expose it's interface as
   `@Input()` so it can be used by other templates.
   
  4. The property **custom** is exposed (also as `@Input()`) which when
  set to true will not use `DynamicFormElementComponent` to render
  the control, instead it will show the content project into it.

Bullet 3 & 4 are important they will allow us to use local overrides to
render custom controls without breaking the layout, we will re-use this
renderer as provide the implementation as projected content.

Let's jump into the implementation followed by an example:
<!--@tdm-example:part1-->

<!--@tdm-example:part2-->
## Registering a new renderer
We are still running in the same angular application, the default
renderer registered did not change and if we leave the configuration
as is `DynamicFormElementComponent` will be used.

To set `DynamicFormRowComponent` as the default renderer we need to
create a new provider configuration and set it in the `providers` of
the current component we use to show this page

```ts
providers: [
  { provide: FORM_CONTROL_COMPONENT, useValue: DynamicFormRowComponent }
]
```

You can also see it in the source code view. 
<!--@tdm-example:part2-->
