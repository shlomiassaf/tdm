## Install
You can use either the npm or yarn command-line tool to install packages.
Use whichever is appropriate for your project in the examples below.

#### NPM
```shell
npm install --save @tdm/ngx-http-client @tdm/tixin @tdm/core @tdm/data
```

#### Yarn
```shell
yarn add @tdm/ngx-http-client @tdm/tixin @tdm/core @tdm/data
```

<div class="info">
  The library depends on 3 libraries from the `@tdm` framework.
</div>

## NgModule setup
We're building a new app, our root module is called `NgxHttpFunAppModule`

We need to import `HttpClientResourceModule` and along with angular's
http client:

```ts
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
  import { HttpClientResourceModule, HttpDefaultConfig } from '@tdm/ngx-http-client';

  @NgModule({
    ...
    imports: [
      HttpClientModule,
      HttpClientResourceModule
    ]
    ...
  })
  export class NgxHttpFunAppModule { }
}
```

## Module configuration
The module comes with default configuration predefined so it works
out of the box.

You can provide configuration of your own to customize the behaviour
and layout of the API.

```ts
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';
  import { HttpClientResourceModule, HttpDefaultConfig } from '@tdm/ngx-http-client';

  @NgModule({
    ...
    imports: [
      HttpClientModule,
      HttpClientResourceModule
    ],
    providers: [
      {
        provide: HttpDefaultConfig,
        useValue: HttpDefaultConfig.create({ baseUrl: '/api' })
      }
    ]
    ...
  })
  export class NgxHttpFunAppModule { }
}
```

In the example above we've added a base url to the API we work with, so
every model we define will have `/api/` added to the url.

Notice how we use `HttpDefaultConfig.create` to setup a configuration,
this will ensure default values that we do not set are set to their
defaults.

There are additional values that we can set, we will will cover them
as we progress, for now `baseUrl` will suffice.

<div class="info">
If you wish to explore the options, have a look at `HttpDefaultConfig`.
<br>
<br>
Note that most of the options are part of a cascading structure, where
`HttpDefaultConfig` is the last to pick from, we will cover the
cascading setup as we progress.
</div>

## HttpDefaultConfig and angular's DI
`HttpDefaultConfig` is an angular provider token, it means that child
`NgModule`s might have a different instance then their parent, or even
a component might.

The library has limited support for that, it is not recommended to apply
multiple setups in the same application.

If you must, note that you can only define it on the module level and
it will only work with DAO, ActiveRecord will not work.
