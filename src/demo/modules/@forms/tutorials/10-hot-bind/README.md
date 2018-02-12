By default, the model instance and the form are different entities, the
model is not bound to the form in any way.

This is usually the preferred setup <sup>More on that in the next chpater</sup>

If you wish to bind the form and the model together you can do that
using the `hotBind` attribute.

```html
<dynamic-form [model]="model" hotBind></dynamic-form>
```

Hot bind is an `@Input` so you can toggle it on and off.

#### Important notes about **hotBind**
  - **Binding is not syncing**  
  When hot bind is switched **on** it does not sync previous changes. If
  you switch it off, update the form, then switch it on the model will
  not reflect the changes.
  
  - **Binding is *one-way***  
  Hot binding is **one-way**, from the FORM to the MODEL. Updates to the
  model will not reflect in the form.
  
  - **Binding does not care about validity**  
  The binding does not check for validity of the control, when the form
  updates the model updates. 
