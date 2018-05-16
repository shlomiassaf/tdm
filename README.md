[![Build Status](https://travis-ci.org/shlomiassaf/tdm.svg?branch=master)](https://travis-ci.org/shlomiassaf/tdm)

# TDM - Typed data models

A TypeScript transformation framework. Highly extensible, super typed.

Given a data structure, instructions and some logic we can do a lot.  
Transform an object into an http request and and incoming payload into an object or maybe a model into a form?

Transformation can be cosmetic or even 1:1 but can also completely change the way an object looks like.  

TDM is is a collection of libraries that use Models, Meta-Programming and adapters to abstract away mundane by natively describing schematic rules that translate into operations. 

```ts
@Exclude()
export class MyModel {
 
  @Identity()
  @Prop()
  id: number;
  
  @Prop()
  name: string;
}
```

In words, the code above says:  
There is a `data structure / Model` called **MyModel** that has 2 properties: `id` and `name`.  
**MyModel** is strict (`@Exclude`) so only selected properties can play the transformation game.  
The property **id** is also the identity (`@Identity()`).  

Reviewing the opening statement:  
> Given a data structure, instructions and some logic we can do a lot.  
 
Our `data structure / Model` is the class.
The `instructions / Meta-Programming` are part of the model defined via decorators.  

We can now use logic units (adapters) to transform the model.  
We can change the logic units or build custom logic.  
We can extends the required instructions to supports more complex logic units.
 
TDM is built on top of the low level libraries `@tdm/tixin`, `tdm/transformation`, `@tdm/core`.  

TDM relays on adapters, currently the only adapter is for Angular 2.

Status - Alpha.

Main packages:

### @tdm/transformation  
Extensible metadata storage and a Class transformation library (serialize / deserialize)

```ts
@Exclude()
export class MyClass {
 
  @Identity()
  @Prop()
  id: number;
  
  @Prop()
  name: string;
}
```

Supports custom mapping (transforming) implementations.
Comes with a built in direct mapper. Direct mapping means 1:1 mapping, no schema or document structure.

> A JSON API mapper can be used in `@tdm/json-api-mapper`

Create custom mappers by implementing the required interface.
 
`@tdm/transformation` comes with basic relationship (`@Relation`) support.
 
### @tdm/core
Core library, extends `@tdm/transformation`.
`@tdm/core` comes with a lot of features...

  - Customizable Action based commands
  - Build in CRUD actions
  - Advanced Relationships (BelongsTo, Owns)
  - Static/instance level Actions (e.g.: `query` is always static)
  - Hooks for built in actions
  - Adapter architecture
  - Event stream (using observables)
  - DAO pattern
  - Active records pattern with full Type support. (plugin, need to opt in)
  - more..

### @tdm/angular-forms-mapper (name might change)
Map data models defined with `@tdm/transformation` and `@tdm/core` into and back from `@angular/forms` **FormGroup** / **FormArray**

### @tdm/angular-http (name might change)
An adapter implementation for the angular (2) library.

With `@tdm/angular-http` Model classes become Resource much like in angular 1 `ng-resource` but now with full typescript Type support for model properties, methods and Active record methods.

> This is an Active record implementation, you can also go pure and use a DAO leaving your models clean.

```ts
@HttpResource({
  endpoint: '/api/users/:id?',
  urlParams: {
    limit: '5' // not in endpoint so will fallback to query string
  },
  noBuild: true
})
class User_ {

  @Identity()
  @UrlParam({ // optionally set what methods to use the param on.
    methods: [HttpActionMethodType.Get,
              HttpActionMethodType.Delete,
              HttpActionMethodType.Patch,
              HttpActionMethodType.Put]
  }) id: number; // this will go into the "endpoint" from the instance!

  @Prop({
    validation: { // custom validation
      name: 'test-validator',
      validate(ctx) {
        return false;
      },
      errorMessage(ctx) {
        return 'validation error';
      }
    }
  })
  username: string;


  @Prop({
    alias: 'motto_abc' // server returns motto_abc
  })
  @Exclude()
  motto: string;

  constructor() { }

  @Hook({event: 'before', action: '$refresh'})
  bfRef() {
    console.log('BeforeRefresh');
  }

  @HttpAction({ // custom HTTP actions
    method: HttpActionMethodType.Get,
    raw: {
      handler: User_.prototype.rawDeserializedHandler,
      deserialize: true
    }
  })
  rawDeserialized: (options?: HttpActionOptions) => RestMixin<User_>;
  private rawDeserializedHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    raw: User_.prototype.rawHandler
  })
  raw: (options?: HttpActionOptions) => RestMixin<User_>;
  private rawHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }


  @Hook({event: 'before', action: 'query'}) // static hooks (for static actions, like query)
  static bfQuery(this: ActiveRecordCollection<RestMixin<User_>>) {
    this.$ar.next()
      .then( coll => {
        console.log(`BeforeQuery-AfterQuery: got ${coll.collection.length}`)
      });
    console.log('BeforeQuery');
  }

  @ExtendAction({ // extending a built in action, useful if you need the user to provide more params)
    pre: (ctx: ExecuteContext<any>, id: IdentityValueType, a:number, b: number, options: HttpActionOptions) => {
      ctx.data[ctx.adapterStore.identity] = id;
      return options;
    }
  })
  static find: (id: IdentityValueType, a:number, b: number, options?: HttpActionOptions) => RestMixin<User_>;
}

export const User = RestMixin(User_);
export type User = RestMixin<User_>;
```

You can also do
```ts
@HttpResource({
  endpoint: '/api/users/:id?',
  urlParams: { // there are hard coded params
    limit: '5' // not in path so will go to query string (?param=15)
  },
})
export class User extends RestMixin(User_) { }
```

TDM supports multiple ways to declare a Resource, you can see them all in `src/demo/resource/Users`  
Using `RestMixin` is mandatory, at least until the TypeScript team will implement type reflection for `ClassDecorator`

> `@tdm/angular-http` Supports AOT but currently Resources are not injectable!


**You can then use the resources:**

```ts
User.find(2).username;                             // OK
const user: User = new User();                     // OK
user.id = 15;
user.$refresh().username;                                          // OK
user.$refresh().abcd;                                                // SHOULD ERROR

// Using async system with promises:
user.$ar.next().then( u => u.id );                                   // OK
user.$ar.next().then( u => u.f34 );                                  // SHOULD ERROR

// hadnling collections, coll.collection is of type User[]
UserBaseClass.query().$ar.next().then(coll => coll.collection );     // OK
UserBaseClass.query().$ar.next().then(coll => coll.sdfd );           // SHOULD ERROR

// Using async system with observables
user.$ar.events$.subscribe(...)

// `$events` is an observable of resource events (succes, failure, cancelled etc...)



// Cacnelling 
user.$ar.cancel()

// disconnecting all observables
user.$ar.disconnect()

// busy (in-flight) indicator
user.$ar.busy // true / false

// busy (in-flight) indicator STREAM
user.$ar.busy$.subscribe(...) // true / false
```

> The `$ar` object is an optional extension, you can opt in via `import '@tdm/core/add/active-record-state';`


> The promise extension `next()` is optional extension, you can opt in via `import '@tdm/core/add/active-record-state/next';`
