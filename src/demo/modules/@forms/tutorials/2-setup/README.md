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

## Setup `DynamicFormsModule`
We're building a new app, our root module is called `DynamicFunAppModule`

```ts
  import { NgModule } from '@angular/core';
  import { DynamicFormsModule } from '@tdm/ngx-dynamic-forms';
  
  @NgModule({
    ...
    imports: [
      DynamicFormsModule.forRoot( /* FORM CONTROL RENDERER */ )
    ],
    ...
  })
  export class DynamicFunAppModule { }
}
```

We imported `DynamicFormsModule` using the `DynamicFormsModule.forRoot`,
this method will return a module with all services setup for use.

`DynamicFormsModule.forRoot` accepts 1 parameter, a component class,
which is the default form control renderer. It is commented out right now
we will get to it in the next step.

<div class="alert">
  Using the `forRoot` is mandatory when registering our root module and
  forbidden in child modules.
</div>