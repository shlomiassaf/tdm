export * from './index';

import { plugins } from './fw/plugin';
import './plugin/active-record';
import './plugin/resource-control';
import './plugin/resource-control/$ar';

plugins.ResourceControl.init();
plugins.ActiveRecord.init();


