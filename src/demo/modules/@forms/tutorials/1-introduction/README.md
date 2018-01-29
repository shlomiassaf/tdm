<!--@tdm-example:PART-1-->
# Tutorial: Forms with @tdm

This tutorial will take you through the wonders of dynamic forms using
the `ngx-dynamic-forms` package from `@tdm`.

We will start with the basics, working with the simplest of forms and
climb up into the wild west world of complex forms.

By the end of the tutorial you will be able to do the following:

  - Create a model and render a FORM from it.
  - Split a single form into Virtual Groups, rendering in different places.
  - Hide, Disable or Exclude controls
  - Create a hot binding between a form and a model instance (instant change)
  - Override the template for a specific control in a specific form.
  - Populate control metadata in real time (e.g. A select box of users fetched from a changing source) 
  - Render a form asynchronously, while fetching data from a server (e.g. Fetching the user list from a remote source)
  - Update the UI when a form is not ready (e.g. blocker, spinner)
  - Changing the type of a control on the fly and on demand
  - Work with arrays, get notified on add/remove/move requests and apply
  - Flatten nested objects in a model into a single level form  
  - Invoke and control child forms (model within a model) 
  - And more, with cool examples

<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
## The Dashboard
The tutorial contains a lot of examples, in most of them you'll find a
container called the dashboard, this is an important tool, let's review
it quickly:
<!--@tdm-example:PART-2-->
<!--@tdm-example:PART-3-->


Before we start rocking let's review the environment you're about to use.  
The examples in this tutorial are all real time angular code, running
in your browser.  
Each example comes with a dashboard that provides tools to inspect and
interact with the example, it's internal form/s and library instances.  

The dashboard is the top panel, above the form showcased in the example.

**You've already seen the dashboard, it right above...**

Let's review what we can do with the dashboard:

### Real time form status indicator LED.  
The LED is located at the right side.

Each color represents a form status:
  - Blinking Red: form is in an invalid state
  - Blinking Blue: form is pending (async validation call)
  - Yellow: form is disabled
  - Green: Form is valid
 
### Source code view:
The source code view can be toggled by the **< >** button located in
the left section of the dashboard.  

The source code view replace the form view, toggle it to see the form again.  

An example comes with a complete source code for the component/s, template/s,
style/s, model/s and any other code used by it.

### Form / Model interaction menu
Next to the source code button you will find the interaction menu.  
In the menu you will find some tools to help you interact with the
example and inspect the current state:

  - **{ JSON View }**
  Toggle's (show/hide) real time JSON view of the model or the form.  
  Appears in the **right panel** (we will get to panels in a bit)
  > If you don't know the difference between JSON view of model and form
  please read the **Know your framework** section at the bottom.

  - **Sync Form**
  Sync the form, this operation will updates the form values and validity status.  
  It just calls `updateValueAndValidity()` on the form.

  - **Commit**
  Takes the current form and commit's it to the model.
  > If you don't understand why we need to commit a form please read
  the **Know your framework** section at the bottom.

### Panels
The dashboard comes with 2 side panels, one on the left and one on the right.
  
The **right panel** is **usually** used to display general, cross example
information. A good example is the JSON View for model or form.
 
The **left panel** is **usually** used to display example specific information.  
It can not be opened from the top panel, and it might not exist, depending on the example.  

If it does exist, optional buttons to control will display above the form.

The **Exclude / Disabled / Hidden state** example makes use of the left panel.

<!--@tdm-example:PART-3-->


