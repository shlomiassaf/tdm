# @tdm/angular-forms-mapper

Map data models defined with `@tdm/transformation` and `@tdm/core` into and back from `@angular/forms` **FormGroup** / **FormArray**
 
```ts
import { Prop, Exclude, Identity } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/angular-forms-mapper';
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
  import { NgFormsBoundMapper } from '@tdm/angular-forms-mapper';

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