# renderState Event

Event fired when the rendering of form control is deferred and again
when the rendering complete.

The **renderState** event is best for:
 - Updating the UI when an async operation start/end

The value emitted by the event represent the rendering status of the
form. **true** means the form is rendering (not ready), **false** means
the form is not rendering, idle.

This event is linked directly to the **(beforeRender)** event. When the
rendering state is **true** it means that the **beforeRender** event
was fired and an handler triggered an async operation.
 
In the following example we are using the same scenario we used in the
**(beforeRender)** chapter but we now we register to get notifications
from **(renderState)** which allows us to block the form's UI area and
show a spinner.

This implementation does not involve TS code, only template code.