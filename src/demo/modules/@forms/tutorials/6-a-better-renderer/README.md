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

## Adding a new type
A form property metadata includes information about the type of the
form property.

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

This is not the TypeScript type, it is the visual type we want this
property to render as.

The library comes with 5 built-in types, all defined in the
`FormElementType` interface:
 
```ts
export interface FormElementType {
  text: 'text';
  boolean: 'boolean';
  number: 'number';
  form: 'form';
  array: 'array';
}
```

To add a new type we need to extend the interface or TS will throw.

Extending is simple, let's extend with some types we want to implement:

<!--@tdm-example:part1-->
<!--@tdm-example:part2-->

Now we can use these literal string values in the `type` property.

<div class="info">
  We have just extended the types for the type system, no runtime changes
  made. We still need to implement these types in the renderer.
</div>

## Custom metadata
Some components require specific metadata to operate, for example a
**slider** which requires a range (mix/max) or a **select**
which requires the options to select from.

This type of information can be sent through the `data` property.

Let's try it with the **slider** component:

```ts
import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Prop({
  form: {
    render: {
      type: 'number',
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
      type: 'select',
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

<div class="info">
  Setting up the contract is up to you, data can be any object.
</div>

## Better Renderer
Below is the source code for our new, better renderer.  

Notice that the only change is in the template.
<!--@tdm-example:part2-->