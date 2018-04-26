<!--@tdm-example:PART-1-->
# Active Record
The active record is a famous design pattern for handling data
models where resources "know" how to persist themselves. Instead of
using a DAO to read/write an resource we can just can methods on the
resource itself.

Let's jump straight into a demo, click on the **play** button:
<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
<br>

<div class="alert">
In the example above we make use of the `ResourceControl` discussed in the previous chapter. In the active record
pattern it is available on the instance through the `$rc` property (which can be customized).
</div>

This example is identical to the DAO example with one difference, it is
using active record instead of DAO.

We work with the resource's directly, creating new instances using the `new` keyword and not via DAO.

The DAO API returns promises, which resolve the resource or reject an
error. Active record works differently, the returned value is based on
the instance.

For this reason, we need to use the `ResourceControl` more often, but it's easy to access.

## Active Record API
The active record API offer's the same functionality as in the DAP API, on the resource itself.

### Static API
The static API is applied on the class as static methods.

Static methods return the **instance**, or a collection.

### Instance API
The instances API is applied on the instance of the resource, as instance methods.

Instance methods return the **resource control**.

### ResourceControl.next()
In the example we make use of the `next()` method. The `next()` method return a promise to the instance.

Remember that when we invoke a request we get back the instance or resource control, they are values.

The `next()` method will return the instance (or reject an error) once the request ends. 

## Installing the plugin
The active record plugin comes as sub-package within `ngx-http-client`, to use it you must register it.

```ts
import '@tdm/data/plugin/active-record';

import '@tdm/data/plugin/active-record/src/$rc';

import { plugins } from '@tdm/data';

plugins.ActiveRecord.init({ resourceControl: '$rc' });
```

Let's review line by line:

```ts
import '@tdm/data/plugin/active-record';
```
Import the plugin runtime files and load them (plugin is still not active, but it is loaded).


```ts
import '@tdm/data/plugin/active-record/src/$rc';
```
Load design time (TS types) type injection of the resource control property, in this case `$rc`.  
This line has **no** runtime effect, it will only add the `$rc` property for easy access to resource control from the
resource (instance).

This import is a predefined template that defined the property `$rc`, you can provide your own template placing the
resource control on another property.

```ts
import { plugins } from '@tdm/data';
plugins.ActiveRecord.init({ resourceControl: '$rc' });
```
Import the `plugins` object to activate the plugin.

The plugin accepts an option object which we use to specify the property used for the resource control.

### Replacing `$rc` property
As mentioned, we can replace the property `$rc` with a custom property, this is done by augmenting the property into
the core constructs of `@tdm` for resource and resource collection.

Let's demonstrate by changing `$rc` to `$resourceControl`:

```ts
import { TDMModel, TDMCollection } from '@tdm/core';
import { plugins, ResourceControl } from '@tdm/data';
import '@tdm/data/plugin/active-record';

declare module '@tdm/core/tdm/src/model/tdm-model' {
  interface TDMModel<T> {
    readonly $resourceControl: ResourceControl<this & T>;
  }

  interface TDMModelBase<T> {
    readonly $resourceControl: ResourceControl<this & T>;
  }
}

export interface StatefulActiveRecordCollection<T>
  extends TDMCollection<T>, TDMModel<StatefulActiveRecordCollection<T>> { }

declare module '@tdm/core/tdm/src/model/tdm-collection' {
  interface TDMCollection<T> {
    readonly $resourceControl: ResourceControl<this & StatefulActiveRecordCollection<T>>;
  }
}

plugins.ActiveRecord.init({ resourceControl: '$resourceControl' });
```

Key points:
  - We augment existing types
  - We apply this to runtime by activating with the right resource control property option.

<div class="alert">
Make sure not to include a custom type augmentation and the default provided one, as it will augment
a property that does not exists at runtime.
</div>

<!--@tdm-example:PART-2-->
