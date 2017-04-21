This example shows how to create app wide components for dynamic form rendering.  

The implementation is template based, that is, using angular template syntax to render the right element.  
Another approach, not implemented in this example, is to use manually compile and inject components into the template.

The first approach is easier to implement and understand, the 2nd approach is more performent.

The example below are based on the components defined in this directory.

### Rendering a whole form
```html
<dynamic-form [model]="user"></dynamic-form>  
```

OR

```html
<dynamic-form [model]="[user, User]"></dynamic-form>  
```

> First example is implicit, the type is taken from the user instance (user.constructor)

### Rendering elements
```html
<div #tdmForm="tdmModelForm" [tdmModelForm]="data.user">
   <form [formGroup]="tdmForm.form" novalidate>
       <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
           <dynamic-form-element [parent]="tdmForm.form" [item]="item"></dynamic-form-element>
       </div>
   </form>
</div>
```

The `tdmModelForm` directive is used here, you can also use the `TDMModelFormService` service to provide the metadata:

```ts
@Component({...})
export class MyPage<T> {
  tdmForm: TDMModelForm<any>;

  constructor(tdmModelFormService: TDMModelFormService) {
    this.tdmForm = ttdmModelFormService.setContext(new User(), User);
  }
}
```

And remove the top div, internal content left unchanged
```html
<form [formGroup]="tdmForm.form" novalidate>
   <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
       <dynamic-form-element [parent]="tdmForm.form" [item]="item"></dynamic-form-element>
   </div>
</form>
```

### Manual rendering
Using the code from the last example, let's add some manual touch:

```html
<form [formGroup]="tdmForm.form" novalidate>
   <div *ngFor="let item of tdmForm.props; trackBy: tdmForm.trackBy" class="row">
       <ng-container [ngSwitch]="item.type">
       
         <div *ngSwitchCase="'boolean'">NOT SUPPORTED</div>
                              
         <dynamic-form-element *ngSwitchDefault [parent]="tdmForm.form" [item]="item"></dynamic-form-element>
       </ng-container>
   </div>
</form>
```

The example above overrides the renderer for the `boolean` type.