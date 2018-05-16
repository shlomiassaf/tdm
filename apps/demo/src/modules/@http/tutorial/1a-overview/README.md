# Overview
`ngx-http-client` is a library that acts as an **Adapter**, it can take
a **Resource** and apply **Actions** on it.

It provides an API to **Control** (running) **Actions** and listen to
**Adapter** notification for a specific **Resource**.

The final result is a collection of models describing a remote HTTP
server as a data source, with easy to work with API.

Adapters, Actions, Resources and ResourceControl are concepts which are
not unique to `ngx-http-client`, they all come from `@tdm/data`.

Before we start, it is worth taking 5 minutes to understand the concepts
behind `@tdm/data` and how they work with each other. 

<div class="info">
You might skip this section if you feel like jumping straight into
action, however it is **important** that you come back after a chapter
or two, understanding these concepts will make this tutorial easier to
read. 
</div>

## From **Model** to **Resource**
The **Model** is a fundamental building block in `@tdm/core`, it
provides a way to describe information and use that information to
perform an operation.

`@tdm/ngx-dynamic-forms` is a good example of a library that makes use
of the model to describe relationship between a class and a form.

<div class="info">
If you use `@tdm/ngx-dynamic-forms` you already know how to define a
model using the `@Model()` decorator, which is covered in the
<a class="tdm-anchor-trap" href="../../../forms/tutorial/creating-a-model">dynamic forms tutorial</a>
</div>

The *operations* we can do with a model are limited and involve the
transformation from one structure to another using serialization and 
deserialization, validation, etc...

Let's say we want to take an instance of a model and be able to create
an HTTP *POST* call from it? save it to local storage? save it to disk?
save it to a database? you get the point...

While the tasks above undergo the same process, each task has a unique
implementation, requiring specific logic.   

This is where `@tdm/data` comes in. An extension to `@tdm/core` that
provides a managed process and an API for working with adapters.

### Adapters and Actions
In `@tdm/data` an **Adapter** is a logical unit that knows how to
execute well defined operations.

We call these operations **Actions**, each adapter has it's own set of
actions.

We use the adapter and actions to perform operations on a model.

In `@tdm/data`, a **Model** bound to an **Adapter** is called a **Resource**.
it is an extended **Model**, it has all of it's features but it also
requires an **Adapter**.

A **Resource** is a concept, a concrete resource is the combination of a
model and adapter.

`ngx-http-client` is based on `@tdm/data`, it provides an **Adapter**
that knows how to execute http operations (using angular's `HttpClient`)
and actions for that adapter. To bind a model and an adapter together
a decorator is used, `@HttpResource()` which replaces `@Model()`.

Let's recap:

  - **Model**: A class representing a structure
  - **Action**: An HTTP operation that the model supports (a.k.a operation)
  - **Adapter**: A logical unit that executes an **Action** on a **Model**
  - **Resource**: A **Model** bound to an **Adapter** with mapped **Actions**. 

We will not use the term **Model** from here on but note that when we
refer to a **Resource** it is also a **Model**.


<div class="alert">
Because a **Resource** is an extension of a **Model** we can use a
the same class decorated as a **Resource** to describe dynamic form
definitions. 
</div>

## Resource Control
Resources, Actions and Adapters are used by `@tdm/data` as an API to
describe actions for a resource and how to execute them.

In addition, `@tdm/data` comes with an API to control (running) actions,
listen to resource events and work with resources.

For example, cancelling a running actions, replay a previous action,
clone a resource, etc...
