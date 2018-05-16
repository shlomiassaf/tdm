<!--@tdm-example:part1-->
# Flattening
Flattening literally means taking an object and making it flat.

In the <a class="tdm-anchor-trap" href="../complex-data-structures">Overview</a>
about complex data structures we described flat models, flattening is
done on non-flat models, models that have properties that are arrays or
objects.

To visualise, flattening to show only **d** and **f**:
```js
{
  a: {
    b: {
      f: "f",
      c: {
        d: "d"
      }
    }
  }
}
```

```js
{
  f: "f",
  d: "d"
}
```

Model's are used to describe entities in a domain, things like products,
users, roles etc. The process of designing the structure of a model
does not care how a model will look like in a form.

It is common to have models with nested objects and a form that takes
pieces, in different depths, to create a flat form.

## Nested forms
In the previous chapter we covered
<a class="tdm-anchor-trap" href="../child-form">Child Forms</a> and
the concept of **nested forms**.

A nested form is form with at least one child that is not a
`FormControl`, i.e. a child that is `FormGroup` or `FormArray`.

`FormArray`'s are covered in a dedicated chapter, we will focus on
`FormGroup`.

We already covered one approach (out of 2) to handle nested forms, the 
**child form** which is a **known model** explicitly declared as a child
form.

The 2nd approach for handling nested forms apply on non child forms.
i.e. all property types that represent and object and are not child
forms.

## Flattening
The 2nd approach is to flatten a nested object(s) so it appears as all
of the fields in that object belong to the root form.

It does'nt change the structure of the model, it's is a virtual change
that apply visually, i.e. it will change the layout, the visual
structure.

### Flattening Renderer
While flattening is applied visually it does not require specific action
from the **renderer**. It is completely transparent.

### Objects, not types
Notice the terminology used:

> The 2nd approach is to flatten a nested object(s)
 
Flattening is done on **objects** and not on models, a model is an
object but an object is not a model.

It means that flattening works with models (without `childForm: true`)
and it also works with plain JS object, this is important as it
allows ad-hoc object *to* form definitions.
 
Let's refactor our `Hero` model to include a nested object, we add the
`base` property that represents the base camp for our hero. The base
has a name and coordinates which is also a nested object.

```ts
  base: {
    name: string;
    coordinates: {
      lng: number;
      lat: number;
    }
  };
```

When we add this to the `Hero` class we get into a depth of 3:

` root -> base -> coordinates `

We want to flatten this structure so in the UI we will display something
like this:

```ts
export class Hero {
  id: number;
  name: string;
  hasTracking: boolean;
  doubleAgent: boolean;
  bmi: number;
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';

  // Flattened base 
  name: string;
  lng: number;
  lat: number;
}
```

<div class="info">
Notice that the `name` property from `base` collides with the `name`
property on the `Hero`. Because this is not a structural change we do
not care, the user will see the `label` of each field.
</div>

Now let's define the schema for flattening `base`, we will start with
the `name` property first:

```ts
  @Prop({
    form: {
      flatten: {
        name: {
          required: true,
          render: {
            vType: 'text',
            label: 'Base Name',
          }
        }
      }
    }
  })
  base: {
    name: string;
    coordinates: {
      lng: number;
      lat: number;
    }
  };
```

Instead of setting a `render` object we set a `flatten` object.

`flatten` is an object with property names that match the property names
of the object we are flattening and the values are `FormPropMetadataArgs`

```ts
flatten: { [key: string]: FormPropMetadataArgs };
```

It's is like we are defining a new model class without the class and
decorators, just with plain objects.

<div class="info">
If it is not clear don't worry, we will try to explain it from a
different angle at the end. For now let's continue with the flat
definition
</div>

```ts
  @Prop({
    form: {
      flatten: {
        name: {
          required: true,
          render: {
            vType: 'text',
            label: 'Base Name',
          }
        },
        coordinates: {
          flatten: {
            lng: {
              render: {
                vType: 'number',
                label: 'Base Longitude'
              }
            },
            lat: {
              render: {
                vType: 'number',
                label: 'Base Latitude'
              }
            }
          }
        }
      }
    }
  })
```

You can nest `flatten` definitions as much as you want, there is not
limit.

`FormPropMetadataArgs` definitions within a flatten definition are
identical to `FormPropMetadataArgs` defined on the root. You can see
the `required` validation on `name` above, it will work just like any
required definition on the root.

In the following example you can see the output for the flattening
declaration of **base**.
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
The underlying structure of our model and the form are left unchanged
and the structure of the model and the form are identical. 

The visual display is different, it looks like the `Hero` model has
3 properties, `baseName`, `baseLng`, `baseLat` but we know it's not the
case.

On the left is the actual `Hero` model, on the right is a `Hero` model
that one might infer from the display:
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
<div class="info">
You can view the final structure of our `Hero` in the source code view
of the dashboard below.
</div>

<div class="info">
 To simplify the example the **address** field is filtered out.
</div>

## Don't flat out
Flattening is a powerful feature, it allows re-modeling of complex
objects without much effort, however there is a cost:

  - Flattening is not type safe
  - Flattening is cumbersome, it is not clear as models and classes and
  most definitely harder to maintain.
  - Access to flattened metadata is done with dot notation (magic string)
  - Some scenarios require manual type (TypeScript) definitions,
   we will cover those later

Use it wisely.

## Another view
We promised another view, let's try:

If we take the `flatten` definition we just defined and try to build
model classes out of it? what would it looks like?
<!--@tdm-example:part3-->
<!--@tdm-example:part4-->

The metadata is identical, only TypeScript types are missing and that
can also be defined manually, as we will see later.

If we remove the decorators we are left with the same objects.

Another view, the last one, let's think of a similar library like `@tdm`,
written in JS and not TS, if we go out of the type world straight into
plain old JS world, how would we describe the metadata to that library? 

We will demonstrate with the `coordinates` object but it's the same for 
all others.

```ts
const coordinates = {
  lng: {            /* THIS IS THE METADATA OBJECT IN @Prop */
    form: {
      render: {
        vType: 'number',
        label: 'Base Longitude'
      }
    }    
  },
  lat: {
    form: {
      render: {
        vType: 'number',
        label: 'Base Latitude'
      }
    }
  }
}
```

<!--@tdm-example:part4-->
