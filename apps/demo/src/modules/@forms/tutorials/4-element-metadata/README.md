# Element Metadata
UI elements are bound to form controls, they can access the value and
update it.

Sometimes the value by itself is not enough, there are a lot of common
scenarios where additional information is required to properly display
a form control.

The most common of all is the select box, the user select a value from
a fixed list of values, that value is assign to the form control.

What about the fixed list? where does it come from?

## Passing form control `data`
The `RenderDef` object has an optional `data` property that can be used
to pass data to renderer.
 
The renderer can pass it to UI elements or use it internally.

The `data` property can have a specific type, based on the `vType`
defined or can have a wide `any` type, this is up to the renderer's
implementation.

<div class="alert">
  The value sent to `data` depends on the **renderer**.
  <br> 
  <br>
  Renderer implementation should use the same types for all common
  visual types however this is not guaranteed 
</div>

Let's add the `superPower` property to the `Hero` model which represents
the super power assigned to the `Hero`. There are only 5 known super
powers, we can not assign an arbitrary value.

```ts
type SUPER_POWER = 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
```

This is a classic **select** component, we will define the `superPower`
property with an additional `data` property providing the list of
super power's for selection:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      vType: 'select',
      label: 'Super Power',
      data: {
        options: [
          { value: 'selfHealing', label: 'Self Healing' },
          { value: 'flying', label: 'Flying' },
          { value: 'cloaking', label: 'Cloaking' },
          { value: 'cloning', label: 'Cloning' },
          { value: 'invisibility', label: 'Invisibility' }
        ]
      }
    }
  }
})
superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
```

Zooming in on the type of the `data` object:
```ts
{
  options: Array<{ value: any; label: string; }>
};
```

`data` is a simple array of value/label pairs, very similar to how
an `<option>` element looks like.


The type sent to `data` for the **select** visual type is not defined
by the library, it comes from the renderer.

The following code is a made up example of how a renderer defines the
type definition of `data`:
 
```ts
interface FormElementType {
  text: never;
  number: never;
  boolean: never;

  radio: { options: Array<{ value: any; label?: string; }> };
  select: { options: Array<{ value: any; label?: string; }> };
  password: never;
  slider: { min?: number, max?: number};
  slideToggle: never;
  textarea: never;
}
```

The keys are the valid visual type values we can set to **vType** and
the type of each key's is the valid type for the `data` property.

We can see the type for `select`. Notice the `label` property is optional
which imply that if not set it is taken from `value, this renderer needs
proper documentation.
 
<div class="alert">
A renderer might not implement strict types for the data property and
it might also choose not to implement a strict type for `vType`
</div>

## Extending `Hero`
Before we move on we need to add some properties to the `Hero` model
so we are able to demonstrate some of the features.

The new model might include options we have not reviewed yet, no worries
we will get to them soon.

There is nothing special about the properties we are about to add. The
code below is the new `Hero` model followed by a live form example.

