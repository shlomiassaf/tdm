# Validation

## Passthrough 
Validation is not managed by the library, it is passed through to
the forms engine and so validation is implemented similar to the way
it is done in reactive forms.

Validation is applied on 2 levels:
  - Model level
  - Property level

To apply validation on the model level just use the metadata argument
in the `@Model` decorator.

To apply validation on the property level just use the metadata argument
in the `@Prop` decorator.

Validation is applied the same way it is done in `@angular/forms`:

```ts
  import { Validators } from '@angular/forms';

  @Prop({
    form: {
      render: { ... },
      validators: Validators.compose([ Validators.min(1000), Validators.max(999999) ])
    }
  })
  id: number;
```

And of course async validation: 

```ts
  import { ValidationErrors, Validators, AbstractControl } from '@angular/forms';

  // WILL CHECK IF THE NAME STARTS WITH "A" or "a", if so it fails!
  function fakeCheckName(c: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => { ... }, 1000);
    });
  }

  @Prop({
    form: {
      render: { ... },
      asyncValidators: fakeCheckName
    }
  })
  name: string;
```

## Required
The `required` validation is unique because it also validates the
structure of an object, additionally `required` is a common validator, 
widely used.

For these reasons it can be set using a specific property.

```ts
  @Prop({
    form: {
      required: true,
      render: { ... }
    }
  })
```

Let see it all in action:

<div class="info">
  When setting the `name`, watch how the status LED turns to blinking 
  blue, this means **PENDING** state.
</div>

