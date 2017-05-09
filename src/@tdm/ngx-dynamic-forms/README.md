# @tdm/ngx-dynamic-forms

Transform models into angular forms. 

The library has 3 layers:

  - **Transform layer (core)**  
    Metadata definition (decorators) and model <---> form mapping.
    
  - **Service layer**
    Workflow and logic to bind a model to a form.
    
  - **Component layer**
    Angular components that use the service layer to render angular forms from a model.
    
Each layer is built on top of the previous one, extending functionality.  

## Transform layer
Defines the constructs used to define the relationships between properties of a model and form controls.  
Provides a mapper to transform a model into a form and vice versa, based on the metadata definitions.  
 
```ts
import { Prop, Exclude, Identity } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';
import { Validators } from '@angular/forms';


@Exclude()
@FormModel()
export class User {

  @Identity()
  @FormProp({ validators: [Validators.required] })
  id: string;

  @Prop({ typeGetter: () => Pet })  
  @FormProp({ validators: [Validators.required] })
  pets: Pet[];
}


@Exclude()
@FormModel()
export class Pet {

  @Identity()
  @FormProp({ validators: [Validators.required] })
  name: string;

  @FormProp({ validators: [Validators.required] })
  type: string;

  @FormProp({ validators: [Validators.required] })
  age: string;

}
```

In your component:

```ts
  import { NgFormsBoundMapper } from '@tdm/ngx-dynamic-forms';

  const user = new User();
  user.pets = [new Pet()];
  this.mapper = new NgFormsBoundMapper(User, user);
  this.form = this.mapper.serialize();
  
  // this.form is a FormGroup, it also holds a pets control of type FormArray
  
  /* do your thing, display the form in the UI, update etc */
  
  // NgFormsBoundMapper is a container for the instance and serializers
  // it allows easy deserialization once form is done.
  // model and form are not hot, i.e. changing the form WILL NOT change the model.
  
  // once done:
  if (form.dirty) {
    this.mapper.deserialize();
  }
 
  // now user (or this.mapper.instance) is updated with new form data.
  
```

## Dynamic Forms
A set of components and directives that support dynamic form creates based on a model.  

The library is UI agnostic, same as `@angular/forms`, it provide tools and logic but not UI controls.  

`@tdm/ngx-dynamic-forms` comes with built-in metadata helpers that provides the ability to create dynamic forms based on a model.

Note that the library does not provide a complete Form rendering component  
This is by design since form elements are UI elements, each application requires different elements/styles.  
For example, one application might use the material design component library while other the bootstrap.

Instead, TDMModelForm exposes the metadata required to dynamically create forms as a template friendly api.  

While element types supplied with `@tdm/ngx-dynamic-forms` are minimal new types can be added.
Each type (existing and added types) must be handled by the application.
 
The common best practice is to create a dynamic element component that use's metadata to render an element.  
Additionally, a custom top-level form component can be used so creating a form sum up to 1 template line.  

```html
<dynamic-form [model]="data.user"></dynamic-form>
```

> `dynamic-form` is a custom application component.

In most cases, you will use these components to render forms but you can still render them manually.

See [the example directory](https://github.com/shlomiassaf/tdm/tree/master/src/%40tdm/ngx-dynamic-forms/example/README.md) for creating the above components, extending types and consuming it all.
