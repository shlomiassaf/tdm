import '@tdm/core';
import '@tdm/core/tdm';
import { plugins } from '@tdm/data';

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
import '@tdm/data/plugin/active-record/lib/$rc';

plugins.ActiveRecord.init({ resourceControl: '$rc' });
plugins.ResourceControlFlow.init();
plugins.RxResourceControl.init();

export * from './Users';
