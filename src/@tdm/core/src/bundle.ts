export * from './index';

import { plugins } from '@tdm/core';
import './plugin/active-record';
import './plugin/resource-control';
import './plugin/resource-control/$ar';

plugins.ResourceControl.attachToResource().init();
plugins.ActiveRecord.init();


