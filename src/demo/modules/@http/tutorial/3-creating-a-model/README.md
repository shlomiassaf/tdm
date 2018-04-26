<!--@tdm-example:part1-->
# Creating a Resource

In the <a class="tdm-anchor-trap" href="../overview">Overview</a> we've
established some of the concepts being used, let's see how we use them:


## The `@HttpResource()` decorator

Starting from scratch, let's build a `Customer` class:

```ts
class Customer {
  CustomerID: string;
  CompanyName: string;
  Phone: string;
}
```

> This is a striped-down `Customer` for simplicity.

This is a simple class, it is not known to the library which means it
is still not a resource.

We register it as a resource using the `@HttpResource` decorator:
 
```ts
import { HttpResource } from '@tdm/ngx-http-client';

@HttpResource({
  endpoint: 'customers'
})
class Customer {
  CustomerID: string;
  CompanyName: string;
  Phone: string;
}
```

We mentioned the A **Resource** is an abstract term, a concrete resource
is the combination of a model and adapter.

An **Adapter** is something that knows how to executes actions, in our
case we need something that knows how to execute HTTP calls through
angular's `HttpClient`.

`HttpResource` is the concrete resource, it is a model with a bound
adapter.

### HttpResource configuration
The decorator accepts an optional metadata argument `HttpResourceMetadataArgs`
that contains metadata for the resource.

Again, a **Resource** is an extension of a **Model**, so no surprise,
`HttpResourceMetadataArgs` extends `ModelMetadataArgs`. All options
we can configure for a `@Model` are also available here.

With `HttpResource`, configuration is mandatory, specifically one
property, the **endpoint**.

The **endpoint** is used to define that pathname for this resource
and it is used as the scope for pathname's defined by actions on this
resource.

## Describing the structure
A resource by itself is not enough, we need to define the data model.

```ts
import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';

@HttpResource({
  endpoint: 'customers'
})
class Customer {
  @Identity()
  @UrlParam('id')
  @Prop()
  CustomerID: string;

  @Prop()
  CompanyName: string;

  @Prop()
  Phone: string;
}
```

We decorate each property with `@Prop`, this tells library to analyze
it when processing data (inwards and outwards).

`@Prop()` does not do much in our simple example but it is important and
contains a lot of options that configure how a property behaves,
we will cover these as we progress.

We've also decorated **CustomerID** with `@Identity()` and **UrlParam()**.

### The `@Identity()` decorator
An identity field is a field that holds a value that is unique to a
specific instance of a resource, amongst all other resource of the same
type.

It is not mandatory but highly recommended. Some actions require an
identity (i.e. findById), and will not work if one is not set.

<div class="info">
`@Identity` is not specific to `@HttpResource`, it is used by other
libraries, some might extend it. For example `@AutoIdentity` from
`@tdm/local-forage` which will create a new UUID for new resources it
create.
</div>

### The `@UrlParam()` decorator
Marks the field as part of the URL.

A URL parameter can be a path parameter or a query string parameter.

The name of the parameter is the name of the property, unless explicitly
defined. In our example, the name `id` is explicitly defined but if
not, `CustomerID` would be the name.

```ts
  @Identity()
  @UrlParam()
  @Prop()
  CustomerID: string;
```

When the resolved URL contains a path parameter matching the one defined
by a `@UrlParam`, it will be used as a path parameter, otherwise it is
used as a query string.

<div class="info">
A resolved URL contains the **endpoint** defined in `@HttpResource` and
with additions from the actions, when set.
</div>

#### URL parameters for specific verbs
We said that `@UrlParam` accepts nothing or a string, this is the
simplest form.

Sometimes you might want to define a URL parameter only for a specific
http VERB, e.g just for GET.

This is supported by providing an configuration object to `@UrlParam`,
you can even decorate multiple `@UrlParam`s on the same property.

See `UrlParamMetadataArgs` for more details.

----
We are now ready to use this model with the Data Access Object

----
