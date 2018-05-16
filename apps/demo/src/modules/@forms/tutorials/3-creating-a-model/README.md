<!--@tdm-example:part1-->
# The Model
In the overview we covered the relationship between a model and a form
and explained the evolution from HTML forms to `@angular/forms` and
finally dynamic forms.

A **Model** is the fundamental building block driving dynamic forms.

## Fundamental for all
The model is in-fact the fundamental building block for the entire
**@tdm** framework.

Let's revisit our definition for the concept:

> The concept is simple, provide a way to describe information and use
  that information to perform an operation.
    
> Provide a way to describe how a property should manifest in a form
  and use that information to display it.

The first paragraph is abstract, the 2nd is specific to dynamic forms.  
The concept in the 1st paragraph apply to all libraries in the `@tdm`
framework: describe -> manage -> process -> execute  

When designing models keep that in mind. The same model that describes
a form can also describe HTTP calls, database operations, etc...

## The `@Model()` decorator

Starting from scratch, our `Hero` class:

```ts
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

This is a simple class, it is not known to the library which means it
is still not a model.

We register it as a model using the `@Model` decorator:
 
```ts
import { Model } from '@tdm/ngx-dynamic-forms';

@Model()
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

We mentioned that the library is part of the `@tdm` framework and it
depends on `@tdm/core`. The `Model` decorator comes from `@tdm/core` and
re-exported by the library for convenience.

The decorator accepts an optional metadata argument `ModelMetadataArgs`
that contains metadata for the model.
 
## A model and a form
A model is the first step, we now need to declare that the model is also
capable of becoming a form. There a 2 ways of doing so, the regular way
and the short-syntax way. We will show both

#### Regular
```ts
import { Model, FormModel } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

#### Short syntax

```ts
import { Model } from '@tdm/ngx-dynamic-forms';

@Model({
  form: true // or metadata arguments
})
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

<div class="alert">
Going forward we will use the short-syntax.
</div>

Similar to `@Model`, the `@FormModel` also accepts an optional metadata
argument with form specific information:

```ts
export interface FormModelMetadataArgs {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}
```

## Describing form controls
The next step is to decorate the properties that we want to render
as form controls, we do it using the `@FormProp` decorator which also
has a regular and short syntax.

Decorating form properties requires more detail, let's start with just
the `id` property:

#### Regular

```ts
import { Model, FormProp } from '@tdm/ngx-dynamic-forms';

@FormProp({
  render: {
    vType: 'number',
    label: 'Hero ID'
  }
})
id: number;
```

#### Short syntax

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

<div class="alert">
Going forward we will use the short-syntax.
</div>

`@FormProp` accepts an optional metadata argument `FormPropMetadataArgs`
with form control specific information.

For now we only define the `render` property. `render` is an object
of type `RenderDef` and it is where UI related definitions are set.

When `render` is not set the property will have a form control within
the form instance but will not display.

`RenderDef` and `FormPropMetadataArgs` comes with a lot of other options
to configure and setup, they are all optional and we will cover most of
them as we progress, to get a better understanding you can explore these
types and read the JSDoc comments attached to each option.

Zooming in on the `renderer` object we defined 2 properties:

#### vType
**vType** stands for visual type, a value that the renderer will use
to choose which UI element to render.

Note that visual type is not the property type. A type can have many
visual types, for example A `boolean` type can display as a slide toggle
or as a checkbox. A  `number` type display as input or slider...

`vType` is not a string, it accepts a specific set of literal string
values defined by the renderer. 

#### label
The label to display next to the control, in the material renderer
this will be the placeholder.

Now, let's complete the whole class:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Model({
  form: true
})
export class Hero {
  @Prop({
    form: {
      render: {
        vType: 'number',
        label: 'Hero ID'
      }
    }
  })
  id: number;

  @Prop({
    form: {
      render: {
        vType: 'text',
        label: 'Hero Name'
      }
    }
  })
  name: string;

  @Prop({
    form: {
      render: {
        vType: 'boolean',
        label: 'Super Hero'
      }
    }
  })
  superHero: boolean;
}
```

## The Form
We have our first model ready, we have a renderer set we just need
to use the `dynamic-form` component and attach a model to it.

Make sure to check the source code view.
 