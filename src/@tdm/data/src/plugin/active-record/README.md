A plugin for `@tdm/data` that adds the active record pattern to models.

> When using `active-record` with `resource-control` the umd bundle does not patch the type system nor comes with one.
Patch must be done in the application, based on the resource-control property name.

For example, using `$rc` as **ResourceControl** property name:
```ts
import { TDMModel, TDMCollection } from '@tdm/core';
import { ResourceControl } from '@tdm/data';

declare module '@tdm/core/model/tdm-model' {
  interface TDMModel<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<T>;
  }

  interface TDMModelBase<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<T>;
  }
}


export interface StatefulActiveRecordCollection<T> extends TDMCollection<T>, TDMModel<StatefulActiveRecordCollection<T>> { }

declare module '@tdm/core/model/tdm-collection' {
  interface TDMCollection<T> {
    /**
     * @extension '@tdm/data/plugin/active-record'
     */
    readonly $rc: ResourceControl<StatefulActiveRecordCollection<T>>;
  }
}
```