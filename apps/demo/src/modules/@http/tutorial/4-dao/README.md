<!--@tdm-example:PART-1-->
# Data Access Object
The data access object is a famous design pattern for handling data
models.

It is the API that maps an instance of a resource to an action and sends
them to the **Adapter** for execution.

Let's jump straight into a demo, click on the **play** button:
<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
<br>
Let's describe what is happening in the code:

  1. We create a data access object (DAO) for the `Customer` resource.
  2. We use the DAO to retrieve (GET) a customer with a specific identifier.
  3. With the customer we got, we update some values and call replace (PATCH) to
  persist the changes in the server.
  4. We now query (GET) the entire collection (table) of customers, we
  expect to get back an array of `Customer` instances.
  5. Doing a useless test to check our customer exists in the list and
  it has the updated values. 

<div class="info">
We are using **async/await**, this helps to simplify the code,
especially when the example has a complex flow with multiple requests.
<br> 
<br> 
If you are not familiar with **async/await**, we recommend catching up.
<br>
For the time being, when you see an **await** token remember this:
<br> 
<br>
The entire expression to the right (of await) returns a promise.
<br>
The entire expression to the left is the value **resolved** from the
promise.
<br> 
<br>
In between magic happens and an invisible **then** handler was registered.
<br> 
<br>
The program will pause until the promise resolved, then set it to the
value on the left an continue. No callback clutter.
</div>

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

