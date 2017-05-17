The base for the resource event system.

The base unit in the root publisher of events for every resource instance.
From this root, specific implementation can extend the logic.

The global resource event emitter does not depend on an external library
but it implements an interface similar to rxjs so rxjs based implementation
can override this implementation and use rxjs instead.
