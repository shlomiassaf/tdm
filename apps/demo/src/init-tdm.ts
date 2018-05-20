// adding the active record plugin, this will give the models the ability to perform CRUD operations on themselves.
// This adds the runtime logic to register actions on a type.
// To add design time TypeScript support and declare target actions use an adapter specific mixin
// for example: ActiveRecord from @tdm/ngx--client-http
import '@tdm/data/plugin/active-record';
import '@tdm/data/plugin/control-flow';

// adding a resource controller, an object that allows resource instance management.
// Event stream, self$ stream, promise for next result, replay last action, cancellation and more.
// The resource control instance is available via a getter on the ResourceControl: ResourceControl.get(instance)
import '@tdm/data/plugin/rx-resource-control';

/**
 * Design time information added to models/collection to get the resource control instance.
 * This has no logical implication, just a property on the model/collection instances to easily get the resource control instance.
 */
import './init-tdm-$rc';

import { plugins } from '@tdm/data';

// initializing the plugins.
plugins.RxResourceControl.init();
plugins.ActiveRecord.init({ resourceControl: '$rc' });
plugins.ResourceControlFlow.init();
