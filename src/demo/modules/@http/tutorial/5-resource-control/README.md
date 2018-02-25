# Resource Control
A resource represents a domain model with actions. We've seen how the
DAO allows us to invoke these actions on the resource.

Resource, DAO and Actions, they are all static, metadata that we can use
to eventually get a resource **instance**.

Once an action is fired, some questions pop up:
  - How do we provision the running action?
  - how do we manage the instance? things like
    - The instance state
    - controlling a running action (e.g cancel)
    - and more..

This is where `ResourceControl` comes in.

A `ResourceControl` instance allow us to control an instance of a
resource and to listen to notification coming from running actions.

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

Note that we use the promise returned from the DAO API to track the
resource control.

`ResourceControl.get` accepts the promise or the resource instance.
The resource instance does not help us, we get it once all is done, so
we use the promise.


## Resource Events
The `ResourceControl` comes with the following events:

  - ActionStart
  - ActionError
  - ActionSuccess
  - ActionEnd
  - ActionCancel

`ActionEnd` will fire last, when there is not error, i.e. after
`ActionSuccess` or `ActionCancel`.

When error is thrown, `ActionError` event is fired but `ActionEnd` will
not follow.

Resource events has the following base interface:
```ts
interface ResourceEvent {
  readonly resource: any;
  readonly type: string;
}
```

Some errors might extend it, for example the `ActionError` extends it
by adding the **error** property.

You can use the `isResourceEvent` function to apply the proper type
to the event:

```ts
import { ResourceControl, isResourceEvent } from '@tdm/data';

const promise = this.ngDao.get(Customer).findById('ALFKI');
promise.then( c => console.log(c) );

const rc = ResourceControl.get(promise);
rc.events$.subscribe(event => {
  if (isResourceEvent('ActionError', event)) {
    console.error(event.error);
  } else {
    console.log(event.type);
  }
});
```

The example above will log the entire progress of the action and at
the end it will print the result.

`promise.then( c => console.log(c) );` will log last.

We don't apply a catch statement because we catch the errors within the
subscription.

Notice how we we `unsubscribe`, this is similar to **RxJS** but it does
not the **RxJS** library, it's is just a similar API.

## Canceling
You can cancel in-flight requests, this is done by calling the `cancel()`
method.

