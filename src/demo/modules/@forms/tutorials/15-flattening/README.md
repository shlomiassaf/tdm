<!--@tdm-example:part1-->

## Nested forms
At the UI level, form's are usually flat and it is a common practice to
avoid nested form's within a form.

When facing nested forms they are usually opened in a separate page, a
dialog window, a different tab, etc...

The library supports that out of the box, the manual way is to filter out
the field that is a nested form and display it in a different dynamic
form somewhere else.

There are other methods which we will cover in the next chapters.

## Flattening
Another approach is to flatten a nested object(s) so it appears as all
of the fields in that object belong to the root form.

This is does not change the structure, it's is a virtual change that is
applied only for the UI.

<div class="info">
The **renderer** does not nor care about flattening, it is completely
transparent.
</div>

### Objects, not types
Notice the terminology used:

> Another approach is to flatten a nested object
 
Flattening is done on **objects** and not on models, a model is an
object but an object is not a model.

It means that plain JS object can be used, this is important as it
allows ad-hoc object to form definitions.
 
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

We want to flatten this structure so in the UI we will see something
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

Now let's defined the schema for flattening `base`, we will start with
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

<div class="info">
You can view the final structure of our `Hero` in the source code view
of the dashboard below.
</div>
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->

<div class="info">
 **childForm** will be covered later.
</div>

## Another view
We promised another view, let's try:

If we take the `flatten` definition we just defined and try to build
model classes out of it? what would it looks like?
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->

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

<!--@tdm-example:part3-->
