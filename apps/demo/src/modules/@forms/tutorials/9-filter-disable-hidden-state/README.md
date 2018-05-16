<!--@tdm-example:part1-->
# Filter / Disabled / Hidden
 
Filter, Disabled and Hidden are states of a control. They are toggle
states, i.e. on/off.

The 3 states have nothing in common, they are grouped because they are
toggled using the same mechanism, an array of control paths.

A state is toggled on when the path of the control is added to the
array of state and toggled off when removed.

  - **Filter**: Controls in this list are filtered out
  - **Hidden**: Controls in this list are marked as hidden
  - **Disabled**: Controls in this list are marked as disabled.

<div class="info">
**Filter** and **Hidden** are states unique to dynamic forms and does
not modify value or state in the form control.<br>
The **Disabled** state is an angular forms state. A change in the
disabled state will change the state of the form control
</div>

The states are part of the `DynamicFormComponent` API, each state is
exposed through an `@Input()` and tracked by the component.

## Hidden implementation
The library treats the hidden state as purely logical, no UI
implementation is done by the library because there are many ways to
hide an element.

Renderer's are required to implement this feature on the UI side.

Here is an example from the previous renderer
```html
<div [ngSwitch]="item.type" [style.display]="item.hidden ? 'none' : undefined">
  ...
</div>
```

## Filter and `filterMode`
By default, values in the `filter` array are excluded (filtered out),
i.e. all fields are included except those in the `filter` array.

This is good when we have specific fields we want to exclude.

We can also invert the filter so values in the `filter` array are
included (filtered in), i.e. all fields are excluded except those in the
`filter` array.

To invert the filter set the `filterMode` attribute to `include`.
To get back to the default mode set the `filterMode` attribute to 
`exclude`.

In the following example:
  - `superPower` is **filtered**
  - `hasTracking` is **hidden**
  - `name` and `id` are **disabled**

<!--@tdm-example:part1-->
<!--@tdm-example:part2-->
### Excluding required fields
In the following form the name field is excluded but it is also required
so the form can never enter into a valid state. To work around that you
can disable the excluded field which causes the form to ignore it when
computing validation.

In the form below the `name` field has a **required** validation but
it is also excluded, it can never get a value assigned by the form.

Fill the `Hero ID` in the form below and watch the status LED turn red.  
Disable the `name` field on the left panel and watch the status go green.  
<!--@tdm-example:part2-->