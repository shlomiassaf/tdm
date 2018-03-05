import { PluginStore, ResourceControl, ResourceControlToken } from '@tdm/data';
import { MapperFactory } from '@tdm/core/tdm';

import { init } from './rc-ext';

declare module '@tdm/data/src/resource-control' {
  interface ResourceControl<T> {
    readonly hasSnapshot: boolean;
    /**
     * Reply the last operation.
     * Busy state must be false and the resource should have been executed at least once (any action)
     */
    replay(): ResourceControl<T>;

    /**
     * Reply the last operation after the provided resources finish their current operation.
     * This method will not invoke a `replay` for the provided resources, they are assumed in-flight or post-flight.
     *
     * For the current resource, the same rules that apply on `replay()` apply on `replayAfter`, i.e. the busy state
     * must be false and the resource should have been executed at least once.
     * @param resources
     * @param ignoreError Whether to reply or not if an error is thrown from some or all of the resources.
     * always: Always execute the reply operation
     * some: Execute the reply operation if at least one item did not throw.
     * never: Don't execute the reply operation if at least one item threw.
     */
    replayAfter(resources: ResourceControlToken | ResourceControlToken[],
                ignoreError?: 'always' | 'some' | 'never'): void;

    /**
     * Creates a snapshot of the current instance and stores it.
     * Only one snapshot is stored per instance, if a new one is created the previous snapshot is overwriten.
     * This snapshot is created using serialization which means that all `@Model()` and `@Prop()` rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    createSnapshot(mapperFactory?: MapperFactory): void;

    /**
     * Restores a previously created snapshot into the current instance (merge).
     * If a snapshot does not exist it will not restore, nothing is thrown. (use hasSnapshot to check)
     * Snapshot is removed after restoring.
     * This snapshot is restored using deserialization which means that all `@Model()` and `@Prop()` rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    restoreSnapshot(mapperFactory?: MapperFactory): void;

    /**
     * Clone's (deep) the resource.
     * This is a deep clone done using serialization -> deserialization, which means that all `@Model()` and `@Prop()`
     * rules apply.
     *
     * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
     * [[directMapper]] if not set.
     */
    clone(mapperFactory?: MapperFactory): T;
  }
}

export class ResourceControlFlowPlugin {
  /**
   * Init the plugin
   * @param propertyName {string} ['@ar'] Optional, the property name to attach to the each model
   */
  init(): void {
    init();
  }
}

PluginStore.register('ResourceControlFlow', ResourceControlFlowPlugin);

declare module '@tdm/data/src/fw/plugin' {
  interface PluginStore {
    /**
     * @extension '@tdm/data/plugin/rx-resource-control'
     */
    readonly ResourceControlFlow: ResourceControlFlowPlugin;
  }
}
