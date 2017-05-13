// adding the active record plugin, this will give the models the ability to perform CRUD operations on themselves.
// This adds the runtime logic to register actions on a type.
// To add design time TypeScript support and declare target actions use an adapter specific mixin
// for example: ARMixin from @tdm/ngx-http
import '@tdm/data/plugin/active-record';

// adding a resource controller, an object that allows resource instance management.
// Event stream, self$ stream, promise for next result, replay last action, cancellation and more.
// The resource control instance is available via a getter on the DAO: DAO.getCtrl(instance)
import '@tdm/data/plugin/resource-control';

/**
 * Design time information added to models/collection to get the resource control instance.
 * This has no logical implication, just a property on the model/collection instances to easily get the resource control instance.
 */
import '@tdm/data/plugin/resource-control/$ar';

import { plugins } from '@tdm/data';

// initializing the plugins.

// attachToResource() set's a getter on every model/collection instance
// and should be set with `import '@tdm/data/plugin/resource-control/$ar';` or typescript will complain.
// it accepts a string value, the property name that defaults to '$ar'.
// if a different property is set a different implementation of `import '@tdm/data/plugin/resource-control/$ar';` is required.
plugins.ResourceControl.init();


plugins.ActiveRecord.init();
