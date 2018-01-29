A form control is represented by an instance of `RenderInstruction`,
these instructions are then used to render the control, i.e. create a UI
representation of it.
In other words, the render instructions are context for the form control templates.

Render instructions are created based on the metadata in the model,
they are static and so each instance of a `DynamicFormComponent` has a
unique set of render instructions based on the static instructions.

There are scenarios where you need to dynamically update the metadata
for form control, such might be a requirement for different type of
control based on a predicate or populating a selection box from a remote
source

The `(beforeRender)` event is fired on the first render and then
whenever the `redraw()` method is invoked.

The event provide's access to the `RenderInstruction`s instance used by
the form and it can alter each instance to change the way it will render
or what data it will render with.

The event handler can notify that it is async by providing a promise and
the rendering can not complete until the promise resolves, this is a
good place to fetch data from a remote server.


This example changes the email field rendering type to a slide-toggle.

In addition it mocks an async call in the `address.state` field and
fetch's a list of all state, you can see this list is the complete one.
The mock creates 1000ms timeout which in that time the form will not
render.

> You can use the `(renderState)` event to get notification when a form
is ready to render, this is the place to add the proper UX like
spinners, blockers etc...