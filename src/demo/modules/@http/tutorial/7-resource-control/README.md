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

<div class="info">
The `ResourceControl` class comes from `@tdm/data` with a limited set
of features and a basic event mechanism implementation. 
<br>
<br>
Plugins can extend it with additional features, for example
the **rx-resource-control** plugin add's **RxJS** support to
`ResourceControl` allowing `Observable` bases event stream, observable
states and more...
</div>

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
