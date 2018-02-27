<!--@tdm-example:PART-1-->
# Tutorial: HTTP with @tdm

HTTP Resource is a bridge between your models and your REST API, using
angular's `HttpClient`.
<!--@tdm-example:PART-1-->

<!--@tdm-example:PART-2-->

It is simple and intuitive, applying common conventions so you can start
building quickly but also highly **extensible** (via plugins) to cover
all of your needs.

Some terms:
  - **Model**: A class representing a structure
  - **Action**: An HTTP operation that the model supports (a.k.a operation)
  - **Adapter**: A logical unit that executes an **Action** on a **Model**
  - **Resource**: A **Model** bound to an **Adapter** with mapped **Actions**. 
  - **Resource Control**: An object bound to an instance of a **Resource**
  that exists throughout the lifecycle of an **Action**, used for
  controlling the action (notifications, cancel, etc...)

Don't worry about the terms, we will cover them in-depth later.

## Data Access Object  
HTTP Resource implements the **Data Access Object Pattern** (DAO) out of
the box, which allows full control over the model and actions.

A data access object is used to invoke actions and also to listen to
action notifications and control the resource using the resource control
object.

## Active Record
**Active Record Pattern** is supported by registering the active record
plugin. The active record pattern is less pure, adding to the structure
of your model but provides highly usable API, easy to work with and easy
to control.

Active record, combined with the **rx-resource-control** plugin, provide
the ultimate angular experience.

<div class="info">
Active record comes with FULL type support embedded into the model.
</div>

## Tutorial Structure
This tutorial is based on examples, each topic is covered by a relevant
example with source code attached.

We will start with the most simple example and climb up to more complex
scenarios.

All of the examples are live and run within a small dashboard that
display's information and allow interaction with the running action,
let's see it in action.

Click on the **play** button on the top-right corner to start:

<!--@tdm-example:PART-2-->
<!--@tdm-example:PART-3-->
<br>

There are 3 areas of interest

### 1. Top Bar
The top bar display the title for the example, a LED indicator and a
START / CANCEL button.

#### Start / Cancel button
The button is located at the right with a "play arrow" icon. When
the action is "in-flight" it turns into a stop button which cancel's the
action.

#### Real time HTTP status indicator LED.  
The LED is located at the top left, it is an indicator for the current
or last known status reported.
<!--@tdm-example:PART-3-->
<!--@tdm-example:PART-4-->

### 2. Requests
Located on the left, contains a list of requests with their status.
Clicking on a request will reveal the event's submitted by adapter for
that request. Clicking will also display the **input** / **output**
values in the *main view*.

<div class="info">
Event's are part of the **Resource Control**
</div>

### 3. Main view
This is the main view, by default it will display code this example
is executing. When a there is a selected request, it becomes a
input / output display, show the **request** object
(input) used to create the HTTP call, and the output which may be one or
more of the following:
  - Result (serialized)
  - Error
  - HTTP Response

Clicking on a selected request will close it and show the code view
again.

## Demo Server
To demonstrate the capabilities and features of the library the examples
in this tutorial perform all CRUD operations, custom actions and more...

For the optimal learning experience it is always best if issue HTTP
calls to a server, real or mock, but a server. This will allow us to:

  - Inspect XHR request/response in the DevTool
  - Persist changes (for multi-call processes)
  - Demonstrate complex scenarios
  - and more...

A simple mock is not enough, we want to mimic the entire process.

A remote REST API is not an option (cost, maintenance, etc...).

### Hello ServiceWorker
We chose to put the demo server inside a service worker, running
**in your browser**. (npm: `service-mocker`)

It is a an express like server, using a routing based middleware
solution, just like express.

To persist data, we store it using using **IndexDB**. (npm: `localForage`)

<div class="alert">
A delay of ~1000ms was deliberately added to most of the API calls in
the server.
</div>

### Domain Model
The examples in this demo share a common domain model, based on the
**Northwind** database.

Demo Server In-Depth
--------------------
The server & persistent layers in this demo are all based on **@tdm**
packages, including packages built especially for this demo, the
following describes the server implementation in-depth, read it if you
want to understand the power of **@tdm**.

------

The concept we used is very common, models represents tables on the
database, our persistent layer and controllers are used to expose an
API to access these models, each controller represents a model. Inside
the controller, methods are used to expose endpoint and http verbs.

Because the client and the server share the same domain model we are
using interfaces to create a contract between the 2. This is not
mandatory and used here for reference.

> The source code for the server and client implementations, including
source code for the packages all exist in this repository
 
### Server
The server is based on routing and middlewares, same concept as in
an **express** server but with less features.

The basic service worker setup, routing and registration is done by
an external npm package called **service-worker**, which we can use
directly but we want a server build with the same mindset,
a server we can build and configure with decorators and metadata.

With that goal in mind we built **@tdm/service-mocker**, a package for
building class-based model/controller server inside a service worker
using an express like routing system.

**@tdm/service-mocker** wraps the **service-worker** package and expose
easy to use building blocks (decorators) to quickly setup a server.

**@tdm/service-mocker** was built for this demo but it was crafted as
a package, allowing fully customization and control. It servers as great
example of how to use **@tdm/core** for other use-cases /solutions in
the browser or in node.

The concept is not new, you can find express implementation like
[routing-controls](https://github.com/typestack/routing-controllers) or
[nest.js](https://docs.nestjs.com/) which does the same thing just for
express.

<div class="info">
**@tdm/service-mocker** has more then just controllers and methods, it
is a full solution providing a client, server and a fully typed
messaging system using decorators. 
</div>

### Persistent
For storing and retrieving data we use **localForage**, a very popular
library for working with browser based persistent layers. We can use
**localForage** directly but we want to build it with the same mindset,
using decorators and metadata.

Our server is based on model/controller architecture, we need to read/write them and we know
how (localForage).

With that goal in mind we built the package **@tdm/local-forage**. A
`@tdm/data` based data adapter the wrap's the package **localForage**
and ex[pose easy to use building blocks (decorators) to quickly setup
a localForage persistent later.

In fact, **@tdm/local-forage** is just like **ngx-http-client** they
both serve the same purpose but for different persistent layers.

**@tdm/service-mocker** & **@tdm/local-forage** are not covered in
this tutorial. They might get a tutorial of their own in the future.

### Examples

**client**
```ts
import { Client, ClientBase, OnMessage } from '@tdm/service-mocker/client';
import { ClientPostMessageEvent, ServerRequest, ClientResponse } from '@tdm/service-mocker/shared';

@Client({
  scriptURL: './sw.js'
})
export class SWClient extends ClientBase {
  @OnMessage()
  installed(data: ServerRequest<'installed'>): Promise<ClientResponse<'installed'>> {
    return <any> Promise.resolve(12);
  }

  /**
   * Sending a command to the server, to restore the database with
   * the provided object
   */
  restoreDB(): Promise<ClientPostMessageEvent<'restoreDb'>> {
    return System.import('./json-db/index') // json files as database
      .then( module => this.send('restoreDb', module.DB, 1000 * 60) );
  }

}
```

**Server**
```ts
import { targetStore } from '@tdm/core/tdm';
import { DAO } from '@tdm/data';
import { MockerResponse } from 'service-mocker/server';
import {
  OnMessage,
  ServerBase,
  Server,
  HttpError,
  FallbackRoute,
  Response
} from '@tdm/service-mocker';
import { ClientRequest, ServerResponse } from '@tdm/service-mocker/shared';
import { CategoryController } from './controllers';

@Server({
  baseUrl: '/api',
  controllers: [
    CategoryController,
    /* More controllers here... */
  ]
})
class MyServer extends ServerBase {
  @FallbackRoute()
  handle404(@Response() res: MockerResponse): Promise<any> | any {
    return res.status(404).json(HttpError.createKnown('404'));
  }

  /**
   * A hanlder for the message "restoreDb".
   * All messages are typed, based on a contract between the server
   * and the client.
   */
  @OnMessage()
  private async restoreDb(data: ClientRequest<'restoreDb'>): Promise<ServerResponse<'restoreDb'>> {
    for ( let tName of Object.keys(data) ) {
      const target = targetStore.findTarget(tName);
      if ( target ) {
        const dao = DAO.localForage(target);
        await dao.clear();
        await dao.createBulk(data[tName]);
      }
    }

    return;
  }
}

const server = new MyServer();
```

**model** (local forage)
```ts
import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'categories'
})
export class Category implements modelContract.Category {
  @Identity()
  @Prop()
  CategoryID: number;
  @Prop()
  CategoryName: string;
  @Prop()
  Description: string;
  @Prop()
  Picture: string;
}
```

**controller** (for the above model)
```ts
import { Constructor } from '@tdm/core';
import { DAO } from '@tdm/data';
import {
  ServiceMockController,
  ServiceMockGet,
  ServiceMockPost,
  ServiceMockPut,
  ServiceMockPatch,
  Body,
  Param
} from '@tdm/service-mocker';
import { Category } from '../models';

@ServiceMockController({
  path: '/categories'
})
export class CategoryController {

  @ServiceMockGet({
    path: '/'
  })
  getAll(): Promise<T[]> {
    return new DAO().query(Category);
  };

  @ServiceMockGet({
    path: '/:id'
  })
  get(@Param('id') id: number): Promise<Category> {
    return new DAO().findById(Category, id);
  };

  @ServiceMockPost({
    path: '/',
    httpCode: 204
  })
  create(@Body() body): Promise<T | void> {
    return new DAO().create<Category>(Category, body);
  };

  @ServiceMockPatch({
    path: '/:id',
    httpCode: 204
  })
  update(@Body() body): Promise<void> {
    return new DAO().update(Category, body).then(() => null );
  };

  @ServiceMockPut({
    path: '/:id',
    httpCode: 204
  })
  replace(@Body() body): Promise<void> {
    return new DAO().replace(Category, body).then(() => null );
  };
}
```
<div class="info">
Real implementation consists of 1 base class with all methods with
controllers inheriting and only changing the `resName`
</div>

<!--@tdm-example:PART-4-->