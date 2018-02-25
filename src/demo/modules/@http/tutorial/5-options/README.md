# Options
When we talk about *Options* we talk about:

  - Library specific request options
  - XHR request options

The common for both is that they both refer to a **request**,
i.e. options are request specific.

Starting with an example, we want to find a `Customer` by **id**:

```ts
this.ngDao.get(Customer).findById('ALFKI');
```

Which will send a `GET` call to:
```
/api/customers/ALFKI
```


Now, same thing but we want to add a query string parameter of some
sort...

To add query string parameters we need to provide **ad-hoc** options
object with the url parameters we want to include:
 
```ts
this.ngDao.get(Customer).findById('ALFKI', { /* SPECIFIC OPTIONS */
  urlParams: {
    someQueryKey: 'someQueryValue'
  }  
});
```

Which will send a `GET` call to:
```
/api/customers/ALFKI?someQueryKey=someQueryValue
```

Each of the methods in the DAO accepts an optional **ad-hoc** options
object.

The library will merge **ad-hoc** options with **static** options and
use the resolved options object.

**ad-hoc** options have top-most priority, they will override any other
predefined values.

**ad-hoc** options are best used for call specific parameters, things
like query strings, search API integration etc...

### Static options
Beside **ad-hoc** options, there are **static options** set at 3 levels:

  - Module Level
  What we set in `HttpDefaultConfig`
  - Resource Level
  What we set in the metadata in `@HttpResource(/* metadata */)`
  - Action Level

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
There are several options that are valid to all calls, these are things
like headers, urls parameters, etc...

They can be set on ad-hoc or static options, at any level.

The `BaseHttpConfig` interface holds the definitions for a call we can
define at all of the levels: module, resource, action and ad-hoc.

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


