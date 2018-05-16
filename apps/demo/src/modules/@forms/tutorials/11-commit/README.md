By default, the model instance and the form are different entities, the
model is not bound to the form in any way.

This is usually the preferred setup, it allows easy cancellation and
prevents hard to find bugs, especially when working with nested forms.

To sync the model and form (merge the form value into the model) we need
to invoke a *commit*  

```ts
// dynamicForm: DynamicFormComponent

dynamicForm.tdmForm.commitToModel()
```

<div class="info">
  <p>`commitToModel` accepts an optional boolean parameter `onlyIfDirty`.</p>
  When set to `true` it will commit only if the form is dirty.
</div>

After the commit the model and form are now synced.