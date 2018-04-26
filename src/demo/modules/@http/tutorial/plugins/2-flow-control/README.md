# Flow Control
Flow Control is a plugin that extends the `ResourceControl` class and add's workflow control tools that enable
composition of a process.

## replay
The `replay()` method will execute the last request.

If the resource is `busy` it will throw.  
If there are no previous requests (this is the 1st) it will throw.


## replayAfter
The `replayAfter()` method will execute the last request once the provided resources finish their current operation.

For the current resource, the same rules that apply on `replay()` apply on `replayAfter`, i.e. the busy state must be
false and the resource should have been executed at least once.

`replayAfter()` accepts 2 parameters
  1. A resource instance **or** a promise for a resource instance **or** an array them.
  2. Error handling strategy - Whether to reply or not if an error is thrown from some or all of the resources.
    - always: Always execute the reply operation
    - some: Execute the reply operation if at least one item did not throw.
    - never: Don't execute the reply operation if at least one item threw.

Note that when providing a promise (single, or inside an array) in parameter 1 you must provide the original promise
and not the chained one (see DAO).

## Snapshots
API for creating and restoring a single snapshot of the resource.

  - **hasSnapshot** - Check if a snapshot exist for this resource.
  - **createSnapshot** - Creates a snapshot of the current instance and stores it.
  - **restoreSnapshot** - Restores a previously created snapshot into the current instance (merge).

<div class="info">
Snapshots are created / restored using serialization / deserialization. This means that all transformation rules set in
`@Model()`, `@Prop()`, etc... apply.
</div>


## Clone
The `clone()` method return a deep clone of the current resource.

<div class="info">
Similar to snapshots, clone are created using serialization / deserialization . This means that all transformation rules
set in `@Model()`, `@Prop()`, etc... apply.
</div>