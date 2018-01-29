<!--@tdm-example:part1-->
  - The renderer is a `@Component`
  - An instance of the renderer shows 1 form control
  - The renderer has a context structured by `DynamicFormControlRenderer`
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
  - We set our renderer in the `forRoot` method, it will be the default renderer.

```ts
  import { NgModule } from '@angular/core';
  import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';

  import { TutorialSimpleRendererComponent } from './renderer/renderer.component';
  
  @NgModule({
    ...
    imports: [
      DynamicFormsModule.forRoot(TutorialSimpleRendererComponent)
    ],
    ...
  })
  export class DynamicFunAppModule { }
}
```
<!--@tdm-example:part2-->
<!--@tdm-example:part3-->
  - A model is just a TypeScript class
  - To create a FORM from a model we need to define metadata on the model and it's properties
  - The metadata is used to define the look, behavior, and actions
  - There are a lot of metadata options, we will cover most in this tutorial

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
<!--@tdm-example:part3-->
<!--@tdm-example:part4-->
  - A dynamic form only needs the model instance
  - The dynamic form has an extensive API with powerful events, we will
  cover them by showcasing scenarios they solve.

```html
<dynamic-form [model]="model"></dynamic-form>
```
This will render a dynamic form.
<!--@tdm-example:part4-->
