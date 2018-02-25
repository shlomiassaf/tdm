<!--@tdm-example:PART-1-->
# Tutorial: HTTP with @tdm

HTTP Resource is a bridge between your models and your REST API, using
angular's `HttpClient`.

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

### REST API Server
Examples require a REST API which we can preform CRUD operations on.

For this, we are using a local server, running **in your browser** as
a service worker. An express like server.

The database we use is also **in browser**, using **localForage** which
uses *LocalStorage*, *IndexDB* or *WebSQL* (defaults *IndexDB*)

The domain model for our server is the **Northwind** database.

Because the client and the server share the same domain model we are
using interfaces to create a contract between the 2. This is not
mandatory and used here for reference.

### The server is `@tdm`!
The local server, running inside a service worker, is using a *@tdm*
package called **@tdm/service-mocker**.

**@tdm/service-mocker** is a package for building class-based
model/controller server inside service workers using an express like
routing system.

**@tdm/service-mocker** was built for this demo but it was crafted as
a package, allowing fully customization and control. It servers as great
example of how to use **@tdm/core** for other use-cases /solutions in
the browser or in node.

The concept is not new, you can find express implementation like
[routing-controls](https://github.com/typestack/routing-controllers) or
[nest.js](https://docs.nestjs.com/) which does the same thing just for
express.

### The database is `@tdm`
Storing and retrieving data is also done using a *tdm* package called
**@tdm/local-forage** which uses `localForage` under the hood.

**@tdm/local-forage** is much like **ngx-http-client** they both serve
the same purpose but for different end points.

**@tdm/local-forage** was also built for this demo.

> **@tdm/service-mocker** & **@tdm/local-forage** are not covered in
this tutorial. They might get a tutorial of their own in the future.

### Sections
The tutorial is split to 3 sections:

Starting with the **Data Access Models**, covering most of the thing
required for basic use and then move to **Active Record** explaining
the subtle difference in configuration.

After that we will explore the various features available, mainly around
customization of actions, angular integration etc...

By the end of the tutorial you will be able to do the following:

  - Define a model and use it to invoke CRUD operations using the
  DAO pattern.
  - Extend the built-in actions (**operations**)
  - Create custom HTTP actions.
  - Controlling a Resource
    - Register to resource event.
    - Cancel a running action
    - and more...        
  - Register and use the **Active Record** pattern plugin
  - Connect resources to templates and automatically response to events.
  - more...

<!--@tdm-example:PART-1-->
