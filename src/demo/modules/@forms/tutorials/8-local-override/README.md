<!--@tdm-example:part1-->
# Local Override
A dynamic form component will render a form control using the default
renderer it has access to.

There are scenarios where a custom implementation is required, locally
for a specific dynamic form.

The library supports that using local custom templates.

## Custom Templates
A local custom template is an instance of 
`TemplateRef<DynamicFormControlRenderer>`.

The context of the template is `DynamicFormControlRenderer` which is the
exact context available to the **renderer**. 

A local custom template is mapped to a specific control using the unique
path of the control or globally, to all fields in the dynamic form by
setting the path to `*`
 
There are 2 ways you can assign a local custom template, declarative
using a directive and imperative using the API of `DynamicFormComponent`

### Declarative
Defining a local custom template inside a template is done using the
structural directive `DynamicFormOverrideDirective`.

```html
<dynamic-form [model]="model">
  <div  *dynamicFormOverride="'name'; let ctx">
      <!-- LOCAL IMPLEMENTATION -->
  </div>
</dynamic-form>
```

In the example above we assign the local custom template to the field
`name`, the template's lifespan is the lifespan of the dynamic form that
is the host of the template.

The context (**ctx** in the template above) for the template is the
same context assigned to the **renderer**, `DynamicFormControlRenderer`

To create a default local custom template use `*` as the key:

```html
<dynamic-form [model]="model">
  <div  *dynamicFormOverride="'*'; let ctx">
      <!-- LOCAL IMPLEMENTATION -->
  </div>
</dynamic-form>
```

This time the template apply to all fields.
  
In the following example, the `name` field is replaced with a local
custom override. Instead of an `input` element an `auto-complete`
element, with predefined names, is used. 
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
### Imperative
Local custom templates can also be set using the dynamic component API.

Get a hold of the `DynamicFormComponent` instance and a `TemplateRef` 
instance and use `DynamicFormComponent.addOverride()` method.

You can use any `TemplateRef<DynamicFormControlRenderer>`.

The following example is a nice demonstration of a "control-less" form
that shows the form as readonly html elements. The local custom template
in this case is a default custom template (`*`) the will apply to all
fields.

This form is a slave of the form in the previous example.

Because it is a slave it is bound to the same form as the master,
try changing values in the form on the top.

<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
## Precedence
 The following represents the precedence when choosing how to render:
   1. Specific local custom template
   2. Default local custom template
   3. Default renderer
<!--@tdm-example:part3-->