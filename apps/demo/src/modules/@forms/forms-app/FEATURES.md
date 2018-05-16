<!--@tdm-example:UIAgnostic-->
Weather you use material, bootstrap, custom made or any other framework
out there, the library will work with it.
<!--@tdm-example:UIAgnostic-->
<!--@tdm-example:VirtualGroups-->
Split fields and show in different areas, e.g same model, multiple
section with a header for each.
<!--@tdm-example:VirtualGroups-->
<!--@tdm-example:HideDisableExclude-->
Programmatically control the state of a form, react to changes in value
or state and trigger hide, disable or remove to form controls.
<!--@tdm-example:HideDisableExclude-->
<!--@tdm-example:HotColdBinding-->
By default your model is disconnected from the form until committed.  
You can opt-in for hot binding where a form change is synced to the model in real time.
<!--@tdm-example:HotColdBinding-->
<!--@tdm-example:CustomTemplates-->
Form control templates are defined once, for all Form instances.  
When you need local customization you can override a specific field or
the default field for a specific dynamic form instance.
<!--@tdm-example:CustomTemplates-->
<!--@tdm-example:FlexibleFields-->
A form's field definitions are static, displaying identical component.

Some scenarios require flexibility, when the display change based on
some logic, state or value.

For example, a select component with options fetched from a server or a
numeric component that might change to string based on the locale.
<!--@tdm-example:FlexibleFields-->

<!--@tdm-example:AsynchronousRendering-->
Rendering of fields is synchronous by default.

You opt-in for an async rendering or a field/s.

For example, a select component showing a list of users, fetched from a
server.

> The form will notify when it's ready and when it's not, so you can
show a nice spinner.
<!--@tdm-example:AsynchronousRendering-->

<!--@tdm-example:ComplexDataStructures-->
Working with data, sometime we need to adapt to complex structure, the
following is supported:
### Flattening
Transforming a complex nested object so it can render as a flat object.

### Arrays
Displaying lists including notification pipeline for array related
operations (add/remove/move).

### Child Forms
When a model has a reference to an other model, they can both render
into forms.
<!--@tdm-example:ComplexDataStructures-->