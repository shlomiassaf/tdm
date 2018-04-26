# Method Extensions
This library contains extensions for methods, pieces of metadata
that are used to fine-tune a method.

## Extension definition
Extensions are metadata classes, like any other `MetaClass` definition.

This library contains the full metadata classes and their respective
*XXXMetadataArgs* interfaces.

Extensions might provide `proxy` support (See `MetaClass`) so they
might include type extensions for `ServiceMockMethodMetadataArgs`.

## Extension Decorators
The decorators for each extensions are in the **decorators** library.

## Extension registration
The extensions are not registered by default, they must be set using the
`registerMethodExtensions` method.

`registerMethodExtensions` accept 2 parameters, a **key** and the 
metadata class that is bound to this key (`MetadataClassStatic`)

The 2 parameters are bound together using the interface
`ServiceMockMethodExtensions`.

The **key** must be a valid key of `ServiceMockMethodExtensions` and the
metadata class must be the type of that property.

Each extension is responsible for type extending the interface
`ServiceMockMethodExtensions`.

When an extension is set, the instance (metadata) is hosted on the
`ServiceMockMethodMetadata` instance, this is why
`ServiceMockMethodMetadata` implements `ServiceMockMethodExtensions`.

Each extension is responsible for type extending
`ServiceMockMethodMetadata` to include the property.

## Extension logic
The extensions are not part of the method or controller however,
extensions apply some logic when processing a request in runtime.

This logic is handled in the request handler, create per ctrl/method
combination.

> Currently, all extensions are internal, later the handler can provide
hooks so external extensions can be added.
