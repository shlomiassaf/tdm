<!--@tdm-example:part1-->
A **Model** is a class with metadata information.
The metadata can be anything, but at the core every model contains information about the
properties and methods it has including information about their types.

This alone is not enough information to render a form, we need more
information such as label, order, type, etc...

<div class="info">
  Although a **Model** contains type information for the properties it
  has, they differ from the **type** required for a form control.
  
  A `boolean` type can display as a slide toggle or as a checkbox. A
  `number` type display as input or slider...
</div>

We start with a simple class, our famous hero:
```ts
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

Now, let's make it a model by decorating the class:

```ts
import { Model } from '@tdm/ngx-dynamic-forms';

@Model()
export class Hero {
  id: number;
  name: string;
  superHero: boolean;
}
```

<div class="info">
  A `Model` is the most basic representation, defined in `@tdm/core`, it is
  extended by other `@tdm` packages to provide more functionality.
</div>

<div class="info">
  A `@Model()` decorator accepts an optional metadata argument object.
</div>

We need to declare this model as a model that can render to and from a
form, we do that by decorating with `@FormModel`:

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

or, use the short syntax:
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

The `@FormModel` decorator (and short-syntax) accepts an optional
metadata argument object:

```ts
export interface FormModelMetadataArgs {
  validator?: ValidatorFn;
  asyncValidator?: AsyncValidatorFn;
}
```

Great, our model class can now transform from a `Hero` instance into a
`FormGroup` instance and backwards.

Our next step is to define how the properties in this model render as
form controls, this involves a bit more detail, let's start with just
the `id` property:

```ts
import { Model, FormProp } from '@tdm/ngx-dynamic-forms';

@FormProp({
  render: {
    type: 'number',
    label: 'Hero ID'
  }
})
id: number;
```

or, use the short syntax:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      type: 'number',
      label: 'Hero ID'
    }
  }
})
id: number;
```

<div class="info">
  `@Prop()` is also a `@tdm/core` decorator, same as `@Model` but for
  class members. It is also extended by other `@tdm` packages.

  It is recommended to use `@Prop` over `@FormProp` as `@Prop` is used
  by other `@tdm` packages.

  For example, A model can be used to created forms (**FormModel**) and
  as a resource (**HttpResource**) for making HTTP requests via
  `ngx-http-client`.
</div>


The `@FormProp` decorator (and short-syntax) accepts the
`FormPropMetadataArgs` object.

We only defined the `render` property which configure how a form
renders, other properties offer additional features and behaviour
settings. The `render` object contains other optional properties as well.

We will cover most of the options as we progress, to get a better
understanding you can explore the `FormPropMetadataArgs` and any child
type and read the JSDoc comments for every option.

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
        type: 'number',
        label: 'Hero ID'
      }
    }
  })
  id: number;

  @Prop({
    form: {
      render: {
        type: 'text',
        label: 'Hero Name'
      }
    }
  })
  name: string;

  @Prop({
    form: {
      render: {
        type: 'boolean',
        label: 'Super Hero'
      }
    }
  })
  superHero: boolean;
}
```

Straight forward, for every property we want rendered in a form
we defined a type and a label for display.

<div class="info">
  We will be using the short-syntax notation where possible.  
  
  Because `@Model` and `@Prop` are `@tdm/core` constructs you might bump
  into different import statements for them:  
  
    - `import { Model, Prop } from '@tdm/core';`  
    - `import { Model, Prop } from '@tdm/ngx-http-client';`  
    - `import { Model, Prop } from '@tdm/ngx-dynamic-forms';`  
    
    
  These are all similar, re-exported for convenience.
  
</div>
<!--@tdm-example:part1-->



