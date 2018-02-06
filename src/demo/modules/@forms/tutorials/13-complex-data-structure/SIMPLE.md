# Complex data structures
Let's examine the `Hero` model, there is something common to all
properties, what is it:

```ts
class Hero {
  id: number;
  name: string;
  hasTracking: boolean;
  doubleAgent: boolean;
  bmi: number;
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
}
```

The type off all properties is one of `boolean`, `number` or `string`.

These are all **primitive** types.

<div class="alert">
The JavaScript standard defines 7 data types. 6 primitive types and the
`Object` type.
</div>

The common to all properties is that they are all primitives, we call
this model a flat model, it has a depth of 1.

Here is how an instance might look like:
```js
{
  id: "99",
  name: "Super Man",
  hasTracking: false,
  doubleAgent: true,
  bmi: 18,
  superPower: "flying"
}
```

We can imagine how a form will display, labels next to values, flat
models are easy to display.

## Adding depth
A **non-primitive** type is any type that extends `Object`, these are
all types except the 6 primitive types defined by the standard.

Within all **non-primitive** types we have 2 sub-groups: `Array` 
and `Object`.

Let's see some examples for depth:

```ts
@Model({
  form: true
})
export class Hero {  
  Prop2: Hero;
  Prop3: { value: string; id: number };
  Prop4_1: number[];
  Prop4_2: Hero[];
  Prop4_3: {
    value: string;
    id: number,
    more: {
      deep: {
        sea: boolean
      }
    }
  }[];
}
```

<div class="info">
  1. `Object` is the base type for all non primitive types, `Hero` is an
  object.
  <br>
  <br>
  2. `Array` is therefor also an `Object` but it is a special case,
  handled different.
</div>

Let's review how to work with both types, in the end we will inspect
how to perform operations required when working with complex data
structures.
 
## Object
Our `Hero` model is an object with all properties being primitives.

```js
{
  id: "99",
  name: "Super Man",
  hasTracking: false,
  doubleAgent: true,
  bmi: 18,
  superPower: "flying"
}
```

It is also known as a *document*.

Once we add properties that are objects we create *embedded documents*

```ts
interface Nemesis {
  id: number;
  name: string;
}

class Hero {
  ...

  nemesis: Nemesis;
}
```

```js
{
  id: 99,
  name: "Super Man",
  hasTracking: false,
  doubleAgent: true,
  bmi: 18,
  superPower: "flying",
  nemesis: {
    id: 100,
    name: "Bat Man"
  }
}
```

How do we display `nemesis`?

If the renderer we use has a *visual type* for this specific type, easy:
```ts
@Model({
  form: true
})
class Hero {
  @Prop({
    form: {
      render: {
        vType: 'Nemesis`
      }
    }
  })
  nemesis: Nemesis;
}
```

But that's very specific, renderer's will usually handle primitives.

We have 2 options:
  1. Using a child form
  2. Flattening `nemesis`

### 1. Using a child form
A Child form is how we tell the library that the property type is a **
known model**. The library will treat this property as a form and the
display depends on the renderer we use.

There are a lot of ways for renderer to implement child forms. Dialog,
inline, projection, etc...

<div class="info">
A **known model** is a class decorated with `@FormModel`. The class is
"known" to the library.
<br>
<br>
`Hero` is a known model.
</div>

```ts
@Model({
  form: true
})
class Hero {
  @Prop({
    form: {
      childForm: true
    }
  })
  nemesis: Nemesis;
}
```

<div class="info">
Note that `childForm` is set on the metadata but not in the `render`
object, it is a logical definition not a visual definition.
<br>
Visual definitions are handled by the **renderer**
</div>

<div class="alert">
Setting `childForm: true` is valid only when the type of the property
is a **known model**.
</div>


### 2. Flattening `nemesis`
We've opened this chapter by saying the `Hero` is a flat model, what if
we can define how to flatten the `nemesis` property so all of it's
properties will be on the `Hero` class?

 
```ts
class Hero {
  ...

  id: number;
  name: string;
}
```

We can, it is called flattening and we do it by providing a flattening
definition:

```ts
@Model({
  form: true
})
class Hero {
  @Prop({
    form: {
      flatten: {
        id: {
          required: true,
          render: {
            vType: 'number',
            label: 'Nemesis ID',
          }
        },
        name: {
          required: true,
          render: {
            vType: 'text',
            label: 'Nemesis Name',
          }
        }
      }              
    }
  })
  nemesis: Nemesis;
}
```

It might look odd, we are flattening out the `id` and `name` properties
from `Nemesis` which already exist in `Hero`. There is no issue because
this is not a **structural** change in the model but only in the display.
The form remains an identical representation of the model the only thing
that change is the order and structure of the control we renders.

Flattening definitions work on both known and unknown models. They are
not limited in depth (i.e. you can define nested flattening definitions)

The actual structure of the model we work with and the structure of the
form:
```js
{
  id: 99,
  name: "Super Man",
  hasTracking: false,
  doubleAgent: true,
  bmi: 18,
  superPower: "flying",
  nemesis: {
    id: 100,
    name: "Bat Man"
  }
}
```

However, the way they are presented:
```js
{
  id: 99,
  name: "Super Man",
  hasTracking: false,
  doubleAgent: true,
  bmi: 18,
  superPower: "flying",

  id: 100,
  name: "Bat Man"
}
```

The user will see the labels, not the property names.

## Arrays
Array's are unique, they create a structure that an `Object` can not
represent directly. An indexed list.

Let change the `nemesis` for the `Hero` so we can set multiple rivals,
a list of `Nemesis`:
```ts
class Hero {
  ...

  nemesis: Array<Nemesis>;
}
```

When we look at the type: `Array<Nemesis>`, Array of T. The type of an
Array is bound to the type of the children it contains.

Working with array's does not require special metadata definitions,
the definitions set on `@FormProp` are those you would define on the
type the array is bound to. Almost like the array is not there.

#### Array of primitive
When an array is bound to a primitive the metadata definitions are those
of the primitive, the array is only used in the type annotation.

#### Array of `Object`
When the array is bound to a complex type the definitions are those
of the complex type an so, all the options we covered above are valid.

Yes, you can define an flattening definition for the interface `Nemesis`
applied for on a list.

#### Working with arrays
Working with array's it is best to keep things simple.

Simple means array of primitives.
 
When in need to show an array of complex types prefer `childForm` while
showing a list of models and editing each externally.

<div class="alert">
Avoid flattening declaration over an array.
<br>
<br>
Unless you are building you'r own custom renderer and you are prepared
for surprises. This will not end well.
</div>

## Tools
Working with flat does'nt involve operations on the structure of the
model.

Working with complex data types does. Adding and/or removing items
from an array, assigning a form control to a `childForm` property...

The library provide the tools to simplify the process, we covered
them in the **Control Panel** chapter, using `TDMModelForm`.

It is a good time to revisit that chapter. 