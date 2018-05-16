import 'jest-preset-angular';
import './jest-global-mocks';

import '@tdm/core';
import '@tdm/core/tdm';
import { plugins } from '@tdm/data';
import '@tdm/data/plugin/active-record';
import '@tdm/data/plugin/control-flow';
import '@tdm/data/plugin/rx-resource-control';
import '@tdm/data/plugin/active-record/lib/$rc';

plugins.ActiveRecord.init({ resourceControl: '$rc' });
plugins.ResourceControlFlow.init();
plugins.RxResourceControl.init();

