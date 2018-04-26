import 'jest-preset-angular';

const mock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

import '@tdm/core';
import '@tdm/core/tdm';
import { plugins } from '@tdm/data';
import '@tdm/data/plugin/active-record';
import '@tdm/data/plugin/rx-resource-control';
import '@tdm/data/plugin/active-record/src/$rc';

plugins.ActiveRecord.init({ resourceControl: '$rc' });
plugins.RxResourceControl.init();
