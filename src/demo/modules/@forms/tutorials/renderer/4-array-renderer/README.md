When we built the first version of the renderer we mentioned that it
does not handle `FormArray` and `FormGroup`. If we try to create a 
dynamic form using the updated `Hero` model the new properties we added
will not render.

Let's start with the most basic implementation, refactor the template
of our renderer:

Array is a container and it will also reflect in the UI, we can't use
the current control template, we need a specific one for arrays.

Changing the first line so it will not render if it is an array. 
```html
<div [ngSwitch]="item.type" [style.display]="item.hidden ? 'none' : undefined">
```

Becomes

```html
<div *ngIf="!item.isArray" [ngSwitch]="item.type" [style.display]="item.hidden ? 'none' : undefined">
``` 


And now the array implementation:

```html 
<div *ngIf="!item.isArray" [ngSwitch]="item.type" [style.display]="item.hidden ? 'none' : undefined">
    <!-- NO CHANGE FROM PREVIOUS VERSION -->
</div>
<div *ngIf="item.isArray" [formGroup]="fGroup" [style.display]="item.hidden ? 'none' : undefined">
  <div [formArrayName]="item.name">
    <div *forFormArray="let c of fArray; tdmForm: tdmForm; fGroup: fGroup; item: item">
     <dynamic-form-row [tdmForm]="c.tdmForm" [item]="c.item" [fGroup]="c.fGroup" [fArray]="c.fArray" [fControl]="c.fControl"></dynamic-form-row>
    </div>
  </div>

  <mat-error *ngIf="hasError('required')">Required</mat-error>
</div>
```


Let's review it line by line

we start with a container only rendering if it is an array and another
container with binding to the array instance.

The 2nd container is not mandatory, the library provides the proper
information so it is optional.

Binding to a `[formGroup]` is is required if `[formArrayName]` is used!

It would be nice to do `[formArray]=fArray` but angular does not have a
direct `[formArray]` directive so we are referencing it by name.
This is why `[formGroup]` binding is mandatory with `[formArrayName]`.

```html
<div *ngIf="item.isArray" [formGroup]="fGroup" [style.display]="item.hidden ? 'none' : undefined">
 <div [formArrayName]="item.name">
```

Now, looping through each item in the array, we render it.

```html
  <div *forFormArray="let c of fArray; tdmForm: tdmForm; fGroup: fGroup; item: item">
    <renderer-v3 [tdmForm]="c.tdmForm" [item]="c.item" [fGroup]="c.fGroup" [fArray]="c.fArray" [fControl]="c.fControl"></renderer-v3>
  </div>
```

We want to loop over the controls in the `FormArray`, and for each
control we need it's matching `RenderInstruction` instance. `item` is
not the right instruction set, it belong to the array not to each item.

This can be done in the template manually but "lucky us" the library
provides `ForFormArrayDirective` which is a specific iteration
directive on top of `ngFor`, it will do all the work for us and
transform the control into `DynamicFormControlRenderer`. 

Once we have the collection of `DynamicFormControlRenderer` we need to
render each of them which requires a recursive operation.

One option is to create `<ng-template>`s within the template and use
`ngTemplateOutlet` passing the context.

Another is to define `@Input` for each of the properties on our renderer
so we can use it in templates, we pick this approach because it allows
re-using the renderer in other places, such as local custom overrides. 

#### Few things to note
  - This is a generic list of controls, it will work well for primitives
  but pretty bad for child forms.
  - The `basesDestroyed` array, using **flattening** definition is useless.  
  It is hard to understand the boundaries between each instance in the UI.  
  We will refactor it to be a child model.
  - The implementation does not support array actions, i.e. adding,
  removing or moving items in the array

We will address these issues and others.

<div class="info">
  This is a basic implementation, you can extend by using `[ngSwitch]`
  or other flow control styles and support various scenarios either by
  type or by custom `data` 
</div>