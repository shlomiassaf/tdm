# Resource Control
A resource represents a domain model with actions. We've seen how the
DAO allows us to invoke these actions on the resource.

Resource, DAO and Actions are all static. It is metadata that we can use
to eventually get a resource **instance**.

Once an action is fired, some questions pop up:

  - How do we provision the running action?
  
  - how do we manage the instance? things like
    - The instance state
    - controlling a running action (e.g cancel)
    - and more..

This is where `ResourceControl` comes in.

`ResourceControl` allow us to control an instance of a resource and to
listen to notification coming from running actions.

A single instance of `ResourceControl` controls a single instance of
a resource. i.e. for every instance of our model a single resource
control is created.

## Getting the resource control
To get a resource control for a resource instance:

```ts
const promise = this.ngDAO.get(Customer).findById('ALFKI');
const rc = ResourceControl.get(promise);

promise.then( resource => {
 // ...
});
``` 

Note that we use the reference to the promise returned from the DAO API
as the token to find the resource control.

`ResourceControl.get` accepts a promise or the resource instance.
The resource instance is used when working in ActiveRecord mode.

Make sure not to send a "chained" promise to `ResourceControl.get`,
doing so will return `undefined` as the promise is not recognized.

```ts
const promise = this.ngDAO.get(Customer).findById('ALFKI')
.then( resource => {
 // ... 
});
const rc = ResourceControl.get(promise);

```

`rc` is undefined because `promise` is not the promise returned from
`findById`, it is a chained promise.

## Busy
For the same instance, **actions** are not allowed to run in parallel. An error is thrown when a resource is in the
middle of executing an action and an other action is fired.

The property `busy` on the `ResourceControl` instance indicates if a resource is in the middle of executing an action
(true) or it is idle (false).

Because DAO methods return a new resource for every call this have almost no effect. When using Active Record the same
instance is used so the `busy` flag can be used as a guard.

Of course, the most obvious use for `busy` is UI/UX, things like UI blockers, spinners, etc...

Some notes:
  - This limitation is required to ensure data integrity, a resource is populated with the data coming from an action.
  - The `rx-resource-control` plugin add's a `busy$` observable fitting best for angular templates. 

  
## Plugin based
`ResourceControl` comes with a very basic feature set, including event handling API, promise control flow and
request cancellation. We wil discuss these in the following chapters.

Additional features for `ResourceControl` are provided as plugins that require explicit opt-in, these plugins and
the features they add are discussed in the plugins section.  

## Active Record
The resource control is frequently used when working with the Active Record pattern, mainly because it provides async
control flow API (`next()`) which the Active Record lacks. This does not mean it is only for active record, DAO users
can work with it as well.
