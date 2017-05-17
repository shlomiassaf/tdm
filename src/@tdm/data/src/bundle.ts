export * from './index';

import { plugins } from './fw/plugin';
import './plugin/active-record';
import './plugin/active-record/$rc';

// import './plugin/resource-control';
// plugins.RxResourceControl.init();

plugins.ActiveRecord.init({ resourceControl: '$rc' });


