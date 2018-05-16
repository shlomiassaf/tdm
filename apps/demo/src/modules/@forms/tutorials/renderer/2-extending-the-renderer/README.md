<!--@tdm-example:part1-->
The renderer we built was simple, just to get us started. Moving forward
we need something more capable.

In this chapter we will refactor the renderer and include support
for more types and add custom types.

<div class="alert">
  To demonstrate functionality this tutorial will use the
  `@angular/material` framework as the core UI framework for forms.

  This should not have an effect, even if you are not familiar with
  material. 
</div> 

## Managing visual types
A form property metadata includes information about the visual type of
the form control it represent's, it is defined in the `renderer.vType`
property:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      vType: 'number',
      label: 'Hero ID'
    }
  }
})
id: number;
```

This is not the TypeScript type, it is the visual type we want this
property to render as. Based on this value the renderer decides what
element to use, it is a **contract** between the renderer and the
developer building the model.

Because this is a contract, we enforce it using TypeScript. The `vType`
property accept's a specific set of literal string values and any value
not in this set will cause TS to throw.

The library comes with 2 built-in visual types, `none` and `form`, they
describe logical controls, controls that does not render on their own.

Each renderer should come with it's predefined list of valid virtual
types, extending the library's list.

#### Adding visual types
To add a visual type we need to:
  1. Extend the list of visual types in the type system  
  *Design-time* only, effecting the type system. (no run time effect)
  2. Implement handling for the visual type in the renderer  

The visual types are set in the `FormElementType` interface, let's
review the library definition for `FormElementType`:

```ts
export interface FormElementType {
  none: any;
  form: any;
}
```

The property names in the interface are the values acceptable by the
`vType` property, the type for each property is used to for `data`
object (more on `data` in a bit...)

So, at this point the TypeScript type for `vType` is:
```ts
  type vType: 'none' | 'form';
```

The simple renderer we built in the previous chapter was capable
of rendering `text` and `number`, let's review how we implemented the
type extension:

```ts
import { FormElementType } from '@tdm/ngx-dynamic-forms';

declare module '@tdm/ngx-dynamic-forms/src/interfaces' {
  interface FormElementType {
    text: any;
    number: any;
    boolean: any;    
  }
}
```

This will extend the TypeScript type for `vType`, which is now:
```ts
  type vType: 'none' | 'form' | 'text' | 'number' | 'boolean';
```

<div class="info">
The `declare module` syntax does not compile to runtime code, it is
used for type declaration. Because `FormElementType` exists TypeScript
will performs augmentation, i.e. extending the type `FormElementType`.
<br>
<br>
Note that we reference the location of the definition file,
`@tdm/ngx-dynamic-forms/src/interfaces` and not `@tdm/ngx-dynamic-forms`
</div>

The new renderer we are building is using `material` which is rich with
UI elements, let's extend the visual types so we can use them:

<!--@tdm-example:part1-->
<!--@tdm-example:part2-->

This will extend the TypeScript type for `vType`, which is now:
```ts
  type vType: 'none' | 'form' | 'text' | 'number' | 'boolean' | 'radio' | 'select' | 'password' | 'slider' | 'slideToggle' | 'textarea';  
```

We can see we have visual types that represent the same runtime type:

  - **boolean** and **slideToggle**  
  Both represent a boolean, true or false. Our renderer will show a
  checkbox for **boolean** and a slide toggle for **slideToggle**

  - **radio** and **select**  
  Both represent a type that is taken from a specific list.

  - **text**, **number**, **password**, **textarea** ...  
  All represent a type, usually `string` but also `number`.  
  The visual type will be `input` but can also be `textarea`...

This is just a subset of the possibilities.
 

Now we can use these literal string values in the `vType` property.

## Custom metadata (`renderer.data`)
Some visual types require specific metadata, a good example is a
**select** element which requires the options to select from.

To pass specific metadata set it in the `data` property.

Let's try it with the **slider** component:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      vType: 'number',
      label: 'BMI Index',
      data: { min: 1, max: 35 }
    }
  }
})
bmi: number;
```

The renderer implementation

```html     
<mat-slider *ngSwitchCase="'slider'"
            [formControl]="fControl"
            thumbLabel="true"
            [tickInterval]="1"
            [min]="item.data?.min" [max]="item.data?.max"></mat-slider>
```


And now with a **select** component:


```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      vType: 'select',
      label: 'Super Power',
      data: { options: [
        { value: 'selfHealing', label: 'Self Healing' },
        { value: 'flying', label: 'Flying' },
        { value: 'cloking', label: 'Cloaking' },
        { value: 'cloning', label: 'Cloaning' },
        { value: 'invisibility', label: 'Invisibility' }
      ]}
    }
  }
})
superPower: string;
```

```html
<mat-form-field *ngSwitchCase="'select'">
  <mat-select [formControl]="fControl"
              [placeholder]="item.label">
    <mat-option *ngFor="let sel of item.data.options" [value]="sel.value">{{sel.label || sel.value}}</mat-option>
  </mat-select>
</mat-form-field>
```

The structure for the metadata is different, depending on the visual
type. The library doesn't validate `data` at runtime but you can use
TypeScript to enforce the type using `FormElementType` by setting the
type annotation for the property.

<div class="alert">
To disable type enforcement use `any` as the type for all visual types
in `FormElementType`
</div>

If you want to enable type enforcement, just set the type to use next to
the visual type.

Taking **select** as an example:
```ts
select: { options: Array<{ value: any; label?: string; }> };
``` 

Type enforcement is currently limited because the inferred object from
the `data` property is as a `union type` of all of the types in
`FormElementType`.
 
It means that:

  - A valid type for `data` is any of the types set in `FormElementType`
  - Setting at lest one type in `FormElementType` to `any` will disable
  the enforcement and anything can be set.
  - A visual type that does not require metadata must set the type to
  `never`. `data` can still have a value, which is the `union type` of
  all other types.
  - The `data` property is optional, it can not be forced to become
  mandatory. 

This limitation will probably go way once TypeScript 2.8 will be used.

<div class="info">
When the library will use TypeScript 2.8 the plan is to dynamically
control the `data` property using the type set for it.
<br>
Currently `data` is optional at all times, with TS 2.8 it will be
mandatory when a type is set and optional when `never` is set (`x?: any`)
<br>
We will also provide an extra type to set a type but make it optional.
</div> 

## Validation Errors
There are many ways to display form errors, most common are per control
or per form.

When errors are displayed per form it is probably best to handle them
outside of the renderer but when the errors are displayed per control
it is probably best to let the renderer do the job.

In this tutorial errors are displayed per control and the renderer
uses the `material` `mat-error` component for that.  

<div class="alert">
  We will covert validation in the next chapter. 
</div>

## Better Renderer
Below is the source code for our new, better renderer.  

Notice that the only change is in the template.
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
<div class="info">
  Notice the only change happens in the model, component and template does not change!
</div>

<div class="alert">
  Validation support in this renderer is minimal, showing `required` errors
  only.
   
  To support more errors, especially custom errors, we need to change
  the way we display errors from a hard-coded approach to a service
  approach where a service, inject to the renderer, can be queried for
  error keys and reply with the error itself (good for I18N as well)

</div>


<!--@tdm-example:part3-->