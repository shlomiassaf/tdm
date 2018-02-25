# Data Access Object
The data access object is a famous design pattern for handling data
models.

It is the API that maps an instance of a resource to an action and sends
them to the **Adapter** for execution.
 
<div class="alert">
`@tdm/data` comes with an abstract DAO that all adapters must implement,
some adapters might extend it.
</div> 

## Actions
An **Action** is a definition for an operation.

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
You can define custom actions on a model or generally available in a
DAO, we will cover custom actions in future chapters.
</div>
   
## Getting the DAO
You can get the DAO from angular's DI:

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

## Basic DAO API
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

Invoking a `GET` for the `Customer` model:

```ts
this.ngDAO.get(Customer).findById('ALFKI');
``` 

### Action response
The DAO API is promise based, every call returns a `Promise` to a new
instance of our model. It is also immutable, a call always return a new
instance.

When an exception is throw, we can catch it by registering a `catch`
handler.

### Action life-cycle
The promise API is simple, the life-cycle of an action has only a start
and an end, which is enough for most use-cases. 

Some scenarios require access to the internal life-cycle hooks, such
as progress notification.

We can access these notification through the resource control, which
is covered in the next chapter. 
 
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
