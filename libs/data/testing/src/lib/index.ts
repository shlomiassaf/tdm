// TODO: remove dependency on the plugins within the main test
import '@tdm/data/plugin/active-record/lib/$rc';
import '@tdm/data/plugin/rx-resource-control';

export * from './mock-adapter';
export * from './modifier';
export * from './dispose-bucket';
export * from './events';
