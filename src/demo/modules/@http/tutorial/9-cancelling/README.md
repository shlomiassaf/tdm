<!--@tdm-example:PART-1-->
# Request Cancelling
Cancelling an in-flight request is done using the `cancel()` method
on the `ResourceControl.

When cancelled the library will emit an **ActionCancel** event which
you can use to track down cancellations.


<!--@tdm-example:PART-1-->

<!--@tdm-example:PART-2-->
<br>
The example above will cancel the request after 500ms. Because our server
has a 1000ms delay time it will result in cancellation.

You can open the DevTools to see the actual response.

<!--@tdm-example:PART-2-->
