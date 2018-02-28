<!--@tdm-example:PART-1-->
# Active Record
The active record is a famous design pattern for handling data
models where resources "know" how to persist themselves. Instead of
using a DAO to read/write an resource we can just can methods on the
resource itself.

Let's jump straight into a demo, click on the **play** button:
<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
<br>
This example is identical to the DAO example with one difference, it is
using active record instead of DAO.

The DAO API returns promises, which resolve the resource or reject an
error. Active record works differently, the returned value is based on
the instance.

 

## Getting the DAO
The DAO is available through angular's DI, ready to use.

```ts
import { NgDAO } from '@tdm/ngx-http-client';

@Component({
  selector: 'ngx-http-dao',
  templateUrl: './dao.component.html',
  styleUrls: [ './dao.component.scss' ],
})
export class DaoComponent {
  constructor(ngDAO: NgDAO) {
  
  }
}
```

## DAP API
Let's look at the DAO API:

```ts
export class HttpDao<T> {
  query: (options?: HttpActionOptions) => Promise<T[]>;
  findAll: (options?: HttpActionOptions) => Promise<T[]>; alias for query

  findById: (id: IdentityValueType, options?: HttpActionOptions) => Promise<T>;

  find: (options: HttpActionOptions) => Promise<T>;
  findOne: (options: HttpActionOptions) => Promise<T>; // alias for find

  create: (data: T | Partial<T>, options?: HttpActionOptions) => Promise<T | void>;

  update: (data: T | Partial<T>, options?: HttpActionOptions) => Promise<T | void>;

  replace: (data: T | Partial<T>, options?: HttpActionOptions) => Promise<T | void>;

  remove: ( (id: IdentityValueType | T, options?: HttpActionOptions) => Promise<void> );
}
```

These are pretty straight forward, they represent the DAO interface
for the `HttpResource` adapter.

Adjacent methods with no empty line between them are alias methods, they
are identical.

### Response
The DAO API is promise based, every call returns a `Promise` of the
result.

  - When the remote server returns an **object**, it is assumed to be in
  the shape and structure of the resource and the library will
  deserialize it into a new instance and resolve it.
  
  - When the server returns a **primitive** (string, number, null, etc...)
  the library will return the primitive value (no deserialization)
    
  An example is **POST / PUT / PATCH / DELETE** calls that usually
  return null.

When an exception is throw, we can catch it by registering a `catch`
handler.

## Additional info

  - Post processing, transforming, or changing the process and/or
  response is possible by extending existing or creating new **Actions**
  which we will cover in the future. 
  
  - The promise API is simple, the life-cycle is a simple start and an
  end, which is enough for most use-cases.  
  Some scenarios require access to the internal life-cycle hooks, such
  as progress notification, cancellation and more...
  
  We can access these notification through the resource control, which
  is covered in the next chapter. 

### Actions
An **Action** is a definition of an operation.

It is similar to angular's `HttpClient` where call requires a
configuration. The url, http verb, headers, params, etc...

In `HttpClient` each call requires a configuration but **Actions** are
static, they define an action for the resource that does not change.

You can think of an action as a factory function. When you have the
same GET call for all of your models you will probably use a factory
function to execute the `HttpClient` with some parameters fixed.

The DAO exposes the actions as methods. Each methods is bound to and
action and when invoked will bundle the action and the instance and
send them to the adapter for processing.

<div class="info">
We will explore **Actions** in-depth when we cover custom actions. Right
now, the actions we use come with the library.
</div>

## DAO and Active Record
The **ActiveRecord** pattern takes a different approach, each call
returns an instance of the model, rather then a `Promise`.

The operation is still async, the data will be assigned when it arrive.

Active record also add actions that we can invoke from the instance
itself, these will return the **same** instance, updating the instance
when the data arrive.

When we return an instance we have no idea what happens, when something
arrives and if we had an error in between, we use the resource control
for that.

 
<div class="alert">
`@tdm/data` comes with an abstract DAO that all adapters must implement,
some adapters might extend it.
</div> 
<!--@tdm-example:PART-2-->

