<!--@tdm-example:part1-->

Virtual groups allows splitting the same form instance over multiple
dynamic forms.

Each dynamic form is therefor a virtual group.

To create a virtual group a master/slave relationship between the
dynamic forms is required.

One dynamic form, usually the top-most, is the master and all other
dynamic forms in the group are set as slaves.

In the following example, we have 2 independent forms, both are `master`
forms 
```html
<dynamic-form [model]="model"></dynamic-form>
<dynamic-form [model]="model"></dynamic-form>
```

Converting them to a master/slave array:
```html
<dynamic-form #master [model]="model"></dynamic-form>
<dynamic-form [slaveOf]="master"></dynamic-form>
```

## `[slaveOf]` rules:
  - A `[model]` is not allowed when on a slave
  - Slave's does not emit events and have most of their features turned
  off, you can access them in the master.
  - Slave form support `exclude` and `override`
  - Salve's are just for the UI, all interaction should be done with the
  master.
 
<div class="info">
  `exclude` and `override` will be covered by future chapters 
</div> 

<div class="alert">
  When working with a master/slave setup make sure not to display the
  same form control in more then one dynamic form.
  
  Sync is not guaranteed and you might experience unexpected results. 
</div>

In the following example the form is split to 2 groups:
<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
In the following example an inner split was added within the **Other**
section, using a tab component.
<!--@tdm-example:part2-->
