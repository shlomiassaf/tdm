# Rx Resource Control
Rx Resource control is a plugin that extends the `ResourceControl` class and add's async workflow control tools
using RxJS.

This is a great addition to angular app's and provides solid integration with angular templates.

Currently, there are 2 streams:

## self$
An observable that emits when an `ActionSuccess` event is triggered.

This observable does not throw, it will ignore error or cancel events.
<div class="info">
The observable is hot, connected to a `BehavioralSubject`.
</div>

## busy$
An observable that emits when the value of the `busy` property when it changes.

This observable does not throw.

This is a great utility for UI blocking tasks like spinners, loaders, etc... when using OnPush strategy.

<div class="info">
The observable is hot, connected to a `BehavioralSubject`.
</div>

In the following example, we bind the `busy$` observable using the `async` pipe.  
We also add a counter, to count the amount of successful requests.
