## Install
You can use either the npm or yarn command-line tool to install packages.
Use whichever is appropriate for your project in the examples below.

#### NPM
```shell
npm install --save @tdm/ngx-dynamic-forms @tdm/tixin @tdm/core
```

#### Yarn
```shell
yarn add @tdm/ngx-dynamic-forms @tdm/tixin @tdm/core
```

<div class="info">
  The library depends on 2 libraries from the `@tdm` framework.
</div>

## NgModule setup
We're building a new app, our root module is called `DynamicFunAppModule`

We need to import `DynamicFormsModule` and setup the default renderer.

### The default `ControlRenderer`
The library requires access to a default `ControlRenderer`.  

The role of a `ControlRenderer` is to display the control based on
information it has about it.

Setting up a default renderer is done through the static `forRoot`
method on the ng-module or manually using angular's DI:

```ts
providers: [
  { provide: FORM_CONTROL_COMPONENT, useValue: MyRenderer }
]
```

The value passed can be a `ControlRenderer` or another type that
we will discuss later.

For now all we need to know is that we need to provide a component
that renders UI elements.
 
### Setup using Material plugin module
For the first part of the tutorial we will use a predefined renderer,
not a part of the library but provided with the package as a plugable
module.

```ts
  import { NgModule } from '@angular/core';
  import { MaterialDynamicFormsModule } from '@tdm/ngx-dynamic-forms/plugin/material';
  
  @NgModule({
    ...
    imports: [
      MaterialDynamicFormsModule.forRoot()
    ],
    ...
  })
  export class DynamicFunAppModule { }
}
```

`MaterialFormControlRenderer` is the renderer exported by 
**@tdm/ngx-dynamic-forms/plugin/material**, it is an angular component
that render form controls using UI components from the `@angular/material`
UI framework.

In the example above we are using the `MaterialDynamicFormsModule`
provided with the plugin to automatically register the library with
the renderer. `MaterialDynamicFormsModule` also exports
`DynamicFormsModule` so we do not need to explicitly import it.

<div class="info">
`MaterialDynamicFormsModule.forRoot()` accepts a `DefaultRenderer` as an
optional parameter, if provided it will be used at the default
renderer, you can pass the component class or a map of vType/component.
<br>
<br>
This is useful when you want to wrap a renderer with a container to
control layout, label, etc...
</div>

### Setup using `DynamicFormsModule`
`MaterialDynamicFormsModule` is just sugar, a *helper* module.
We can register the renderer without it.

```ts
  import { NgModule } from '@angular/core';
  import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';
  import { MaterialFormControlRenderer } from '@tdm/ngx-dynamic-forms/plugin/material';
  
  @NgModule({
    ...
    imports: [
      DynamicFormsModule.forRoot(MaterialFormControlRenderer)
    ],
    ...
  })
  export class DynamicFunAppModule { }
}
```

This is also how we would register a custom built renderer.

<div class="alert">
  It is recommended to use the module that comes with the
  plugin/renderer, when such provided.
  <br> 
  <br>
  Modules import other modules and components used by the renderer.
  When not imported properly angular will throw an exception.
  <br> 
  <br>
  For example, `MaterialDynamicFormsModule` imports modules from the
  `@angular/material` framework that are used by the renderer.
</div>

## Renderer hierarchy
`DynamicFormsModule.forRoot(MaterialFormControlRenderer)` registers
the `MaterialFormControlRenderer` as the **default renderer**.

When rendering, the library picks the first renderer it finds through
angular's dependency injection, i.e. the renderer is picked based
on DI hierarchy - *FIFO*.
 
You can change the renderer for a component or module using a provider:
 
```ts
providers: [
  { provide: FORM_CONTROL_COMPONENT, useValue: SomeOtherRenderer }
]
```