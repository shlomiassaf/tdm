<!--@tdm-example:PART-1-->
# Next
Next refers to the "next response", it is a method on the `ResourceControl` that return's a promise to the next result.

At this point it doesn't seem to have much use, as we already get a promise when calling each of the DAO API methods. It
is used more frequently with the Active Record pattern (plugin). 

<div class="info">
When an error occurs, the promise returned from `next()` will reject.
</div>
 
## Next is strict
Before calling `next()`, make sure a request is in-flight but verifying that the `busy` property is set to true. Calling
`next()` when not in-flight will reject the promise.

In the following example, next is used to resolve the request, once resolved it is called again (next).
Because the 2nd time is executed after the request has finished (busy is false) an error is thrown.

We catch that error and display it, you should see an error message below, once the request ends.
<!--@tdm-example:PART-1-->

<!--@tdm-example:PART-2-->
<br>

<!--@tdm-example:PART-2-->
