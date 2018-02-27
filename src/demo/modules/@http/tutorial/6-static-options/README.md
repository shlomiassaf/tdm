<!--@tdm-example:PART-1-->
# Static Options
In the last chapter we covered **ad-hoc** options, the options we will
provide when we **use** the model. Static options are provided on the
definition process, it is defined once per resource/action and does not
change.

There are 3 places where we can define static options:

  - **Module Level**: What we set the `HttpDefaultConfig` provider in `@NgModule`
  - **Resource Level**: What we set in the metadata in `@HttpResource(/* metadata */)`
  - **Action Level**: When we define actions on a resource class

Resolving an option, the library will see if it is set in the **ad-hoc**
options, if not it will check in the **Action**, then **Resource** and
finally take it from **Module**.

**Ad-hoc** options are set when we **use** the instance of a resource.  
**Static** options are set when we **define** a resource.

<div class="info">
**Action** level options are used in Custom Actions which is not covered
in this chapter.
</div>

## A Set of common options
When a request is processed the final options are set based on all 4
levels (3 static and ad-hoc).

Some options are shared between the levels and some are unique. For 
example it doesn't make sense to share the `endpoint` of a controller
with other levels. **Headers** however, can be set at each level.

There are several options that are valid at all levels, things
like headers, urls parameters, etc...

The `BaseHttpConfig` interface defines all options shared between all 4
levels: module, resource, action and ad-hoc.

## Option resolving rules
Working with 4 levels, it might become difficult to understand what's
going on.  
When 2 levels define the same option what is the outcome?

There is a trade-off between flexibility and complexity, especially
when dealing with objects (key->value).

**When resolving options, the following rules apply:**

  - Between each 2 levels, the most specific one wins (4 being most specific):
     1. Module level options
     2. Resource level options
     3. Action level options.
     4. User provided options (ad-hoc)
     
  - Primitive values always override.
  
  - Objects with a key/value structure will **merge** from ad-hoc
  options (4) into the most specific option found in static levels (1-3)
  
  Working with key/value, there are 2 options, merging or replacing.
    - Merging is more flexible but hard to reason about.
    - Replacing is limiting but easy to understand. 
  
  The library will **replace** (override) matching options in the static
  levels (1-3) and **merge** the same option from the **ad-hoc** level (4)
  onto the resolved static option (1-3) 
  
  For example, `headers` is an option that exists in all 4 levels.
    - **X** is defined as headers at the module level (1)
    - **Y** is defined as headers at the action level (3)
    - **Z** is defined as headers by the user when executing (4)
  
  The library will look at the static levels, it will take **Y** because
  it is more specific. Then it will take **Z** and merge it with **Y**.
  
  When identical keys exist in **Y** and **Z**, the values from **Z**
  will win.

In the following example, we tweaked the `Customer` class and added
some headers and url parameters to it's resource level static
configuration:

```ts
import { HttpResource } from '@tdm/ngx-http-client';
import { Customer as BaseCustomer } from '../../client/models';

@HttpResource({
  endpoint: 'customers/:id?',
  urlParams: {
    id: 'CustomerID',
    test: '123'
  },
  headers: {
    'my-private-header': 'private-header',
    'my-public-header': 'public-header'
  }
})
export class Customer extends BaseCustomer { }
```

We've now provide **ad-hoc** options, some will override some will merge.  

See the `Request` object for the final output.
<!--@tdm-example:PART-1-->
<!--@tdm-example:PART-2-->
## An `HttpClient` perspective
You probably know `HttpClient` well, let's try to explain the various
options through `HttpClient`:

The following is the signature of the `delete` method in `HttpClient`:
```ts
    delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T>;
```

This is just 1 overload out of 15+

We can see that it accepts 2 parameters: **url** and **options**.

**url** is mandatory, it must be set by the user.
In our setup the **url** is a **static option**, it is set by all 3
static level option objects.

**options** is optional, it is equivilent to the **ad-hoc** options.  
When not set or partially set, `HttpClient` will set the mandatory
values internally. In our setup, when not set or partially set the
library will take the missing values from static options. Usually the
**Action** definition has most of the missing options.

Another feature of `HttpClient` is **interceptors**, which we can use
to modify a request before it leaves. Again, a module level or resource
level options object can work here and when more dynamic control is
needed you can always use interceptors.


<!--@tdm-example:PART-2-->
