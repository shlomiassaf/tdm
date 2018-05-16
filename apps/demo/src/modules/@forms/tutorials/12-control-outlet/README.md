<!--@tdm-example:part1-->
# Control Outlet
In the angular vocabulary, an **outlet** usually represent a location
in the view that acts as a placeholder for dynamic content injection.

Outlets provide a declarative and elegant solution when we want to
show content in a specific place but renderer it in isolation.

The `router-outlet` component is a good example, it is a location in
the view that marks the place where the router will inject components
based on the URL.

<div class="info">
Outlet's are powerful because they allow to define and render content
with specific context and inject it elsewhere, outside of the block
the context is bound to, while keeping access to that context.
</div>

Let's see a quick example:
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->

What did we do?

We took the **superPower** field showing a **select** component and
moved it outside of the form inside a container with a red background.

We've also added an **H3** tag header where the control used to be.

This was all done through the template, let's review the code:
```html
<dynamic-form #dynForm [model]="model"></dynamic-form>

<div class="red-super-power-box">
  <h3 *dynamicControlOutlet="'superPower'; let ctx; dynForm: dynForm" class="red-super-power-title">Super Power Is In The Red Box</h3>
</div>
```

`DynamicControlOutletDirective` is the outlet, like
<a class="tdm-anchor-trap" href="../local-override">local custom templates</a>
it also contains query information that is used to pair it with one or
more controls, the API is identical.

The outlet should be defined with the parameters for the
query, there are 2:
  1. **One or more control names/paths**  
  Can be a string or an array of string.
  2. **One or more visual types**  
  Can be a visual type or an array of visual types.

You can combine one of the parameters or both.

The outlet has an additional parameter required, the dynamic form
instance. In the example above we referenced the dynamic from within
the template using the local template variable `dynForm`

## Optionally Structural
`DynamicControlOutletDirective` can work in 2 modes:

  1. Replace and project
  2. Project only

The mode to use depends on the way the outlet directive is used, if it
is used as a structural directive or not.
 
### 1. Replace and project
This first mode, **replace and project** is used when the outlet is a
structural directive.

In this mode all controls matching the query definition are replaced
with the template that the directive is on. 

Then all the controls we removed will get injected to the location where
the directive is at, the original location i.e. the placeholder.

It's a swap between the template and the controls.

**This is the mode used in the example above**

### 2. Project only
The second mode, **project only** is used when the outlet is used as a
regular directive, i.e without `*`.

In this mode all controls matching the query definition are **removed**
and nothing is set to replace them. 

All the controls we removed will get injected to the location where
the directive is at, the original location i.e. the placeholder.

```html
<div dynamicControlOutlet="superPower"
     [dynamicControlOutletDynForm]="dynForm"></div>
```

The input's here are a bit longer.

<div class="alert">
Similar to `<router-outlet>` the content is injected to the view
container for the outlet, this means next to it as a sibling and not
inside.
</div>

## Outlet usage
With the outlet we can pick the controls we want and display them
somewhere else, outside of the UI boundaries of the dynamic form.

At this point it might seem that it does not have much use, why would we
want to take a checkbox and move it outside of the form?

Up tp this point we used simple models in the examples, having only
primitive properties. These are simple data structures, flat models.

Once we introduce complex data structures such as arrays, child forms,
objects and the combination of all the outlet becomes a valuable tool.

We will demonstrate outlet use with all complex data structure.

## Outlet's and Override's
Setting a local custom template and an outlet for the same control does
not conflict, the custom template will render and then injected into
the outlet.
<!--@tdm-example:part2-->
