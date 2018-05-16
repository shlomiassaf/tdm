<!--@tdm-example:PART-1-->
# Resource Events
The `ResourceControl` comes with the following events:

  - ActionStart
  - ActionError
  - ActionSuccess
  - ActionEnd
  - ActionCancel

When no errors, the order of events is:
  - ActionStart
  - ActionSuccess | ActionSuccess
  - ActionEnd
  
When an error was thrown:
  - ActionStart
  - ActionError


Resource events has the following base interface:
```ts
interface ResourceEvent {
  readonly resource: any;
  readonly type: string;
}
```

Some errors might extend it, for example the `ActionError` extends it
by adding the **error** property.

<!--@tdm-example:PART-1-->

<!--@tdm-example:PART-2-->

You can use the `isResourceEvent` function to apply the proper type
to the event.

The example above will log the entire progress of the action and at
the end it will print the result.

`promise.then( c => console.log(c) );` will log last.

We don't apply a catch statement because we catch the errors within the
subscription.

Notice how we `unsubscribe`, this is similar to **RxJS** but it does
not the **RxJS** library, it's is just a similar API.

<!--@tdm-example:PART-2-->
