In `@angular/forms` arrays are represented by the `FormArray` class.

Quoting from the angular docs:
> `FormArray` is one of the three fundamental building blocks used to
define forms in Angular, along with `FormControl` and `FormGroup`.

Structure wise, we can catalog `FormArray` and `FormGroup` as
**containers** because they contain other control, including themselves.

The array container is unique because it is considered dynamic, we can
add remove or move items in it.

<div class="alert">
  While there is no limitation on removing or adding controls to a
  `FormGroup` the library does not support that.
   
  `FormGroup` represents the structure of a model and it does not make
   sense to change the structure of a typed model. 
</div> 

In angular, An instance of `FormArray` is not bound to a specific type.
This makes since because a control has no type information, it doesn't
care about the value it holds.

The library however, works in a typed environment and assumes that
and array has a defined type for items in it.

<div class="info">
  This assumption does'nt mean you can not work with untyped arrays, it
  only means it is not supported out of the box and you will need to
  handle it manually.  
</div> 

Using array's doesn't require specific metadata, the library will figure
out that an array is required just by the annotated type.

Both primitives and complex types are supported, including the `flatten`
feature and `childForm` feature.

Let's add a list of allies to the `Hero` class, an ally is referenced
by name, so it's an array ot strings:

```ts
  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Allies'
      }
    }
  })
  allies: string[];
```

<div class="info">
  Setting `required` validation on an array means it must have at least
  one item 
</div>

Using the same structure of the hero's base camp, let's add a list of
all of the bases the hero has destroyed:

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
  basesDestroyed: Array<{
    name: string;
    coordinates: {
      lng: number;
      lat: number;
    }
  }>;
```

In both samples the metadata is **identical** to the single (not array)
version of it.

<div class="alert">
  Although possible, and demonstrated above, `flattening` of array types
  is not recommended as it is difficult to reflect each item in the
  array. The entire array becomes a flat object with repeated keys.
  <br>
  Working with array actions will target specific keys and not the
  entire item.
</div>
