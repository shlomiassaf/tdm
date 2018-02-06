## Nested models and `@angular/forms`
In angular, a form is a container of form controls. We reviewed the 3
building blocks of angular forms: `FormGroup`, `FormArray` and
`FormControl`.

From the 3, `FormGroup` and `FormArray` are containers and they can
contains instances of all of the blocks **but only** `FormGroup` is the
container we use to describe a key/value structure, i.e. a model.

When a `FormGroup` contains other `FormGroup` instances, *directly or
indirectly*, they are referred to as **nested models** or
**nested forms**

In angular, a **form** means the `FormGroup` instance that is the root
of all other form controls, but it is still a `FormGroup`.

<div class="info">
  **Directly**: The nested model is a value of a property on the parent
  <br>
  **Indirectly**: The nested model is an item in a `FormArray` instance
  that is a value of a property on the parent
</div>

## Nested models and `@tdm/ngx-dynamic-forms`
The library's definition for a form is a bit more specific, a form can
be an instance of a known **model**.

A known **model** is a class decorated with `@FormModel`. The class is
"known" to the library.

We've already seen how we can create nested models using
**flattening declaration**. These nested models are not **known models**,
they are data structures but the are not known to the library.

A flattened declaration becomes a `FormGroup` hence, it is a valid
**nested model**.

## Child forms
To prevent confusion in terminology let's define a new term:
**child form**

A child form is a **known model** that is, *directly or indirectly*
referenced by a property of a **known model** (parent) **AND** it is
explicitly declared as a child form.

Let's see an example:
```ts
@Model({
  form: true
})
export class Hero {
  @Prop({
    form: {
      childForm: true
    }
  })
  nemesis: Hero;
}
```   

The `nemesis` property in the `Hero` class is a child form because it:

  1. Refer to a **known model**, the `Hero` model
  2. Explicitly declared as a child form via `childForm: true`

<div class="info">
Note that `childForm` is set on the metadata but not in the `render`
object, it is a logical definition not a visual definition.
</div>

Let's review another example, this time a child form is **not** defined:
```ts
@Model({
  form: true
})
export class Hero {
  @Prop()
  badNemesis: Hero;

  @Prop({
    form: {
      flatten: {
        id: {
          render: {
            vType: 'number',
            label: 'Nemesis ID'
          }
        }
      }
    }
  })
  notAChildNemesis: Hero;  
}
```

`badNemesis` is just a property, it's not being defined as a form
control.

`notAChildNemesis` is a form control and it is a **known model** but
it is not explicitly defined as a **childForm**, instead we use a
**flattening declaration** for it, it is a **nested model** but not a
child form.

Like **nested models**, child forms can be referenced indirectly, which
makes the following a valid child form:
```ts
@Model({
  form: true
})
export class Hero {
  @Prop({
    type: () => Hero,
    form: {
      childForm: true
    }
  })
  nemesis: Hero[];
}
```
