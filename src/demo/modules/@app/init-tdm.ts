import '@tdm/core/plugin/active-record';
import '@tdm/core/plugin/resource-control';
import '@tdm/core/plugin/resource-control/$ar';

import { plugins } from '@tdm/core';
plugins.ResourceControl.attachToResource().init();
plugins.ActiveRecord.init();
