import { TixinFree } from '@tdm/tixin';
import { MapperFactory } from '@tdm/core/tdm';
import { autoSerialize, autoDeserialize, directMapper, errors, TDMCollection, TDMModelBase } from '@tdm/core';
import { ActionErrorResourceEvent, ResourceControl, ResourceControlToken } from '@tdm/data';

/**
 *
 * ## Observables and `ActiveRecordState`
 * `ActiveRecordState` notification mechanism is based on observables.
 * This is great for UI interfaces but requires implementing tear down logic, that is unsubscribing
 * from stream. To help with that, all of the streams in `ActiveRecordState` are shared & lazy, they will only
 * register if accessed to and automatically disconnect when the number of subscribers is 0.
 *
 * You can also call `ActiveRecordState.disconnect()` to clear all subscriptions.
 *
 * When using an observable aware UI framework subscriptions managed by the framework so as long as
 * you don't manually subscribe you are safe. e.g: In Angular using the `async` pipe (`|`) will also
 * unsubscribe when the component get disposed.
 */
export class ResourceControlFlow<T> extends ResourceControl<T> {

  get hasSnapshot(): boolean {
    return !!this.snapshot;
  }

  protected snapshot: any;

  /**
   * Reply the last operation.
   * Busy state must be false and the resource should have been executed at least once (any action)
   */
  replay(): ResourceControl<T> {
    if ( this.busy ) {
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if ( !this.lastExecute ) {
      errors.throw.model(this.parent, `No replay data`);
    }

    const last = this.lastExecute;
    if ( TDMCollection.instanceOf(this.parent) ) {
      this.parent.splice(0, this.parent.length);
    }

    const result = last.ac
      .createExecFactory(last.action)(this._mode === 'instance' ? this.parent : undefined, last.params);
    return result === this.parent ? this : <any> ResourceControl.get(result);
  }

  /**
   * Reply the last operation after the provided resources finish their current operation.
   * This method will not invoke a `replay` for the provided resources, they are assumed in-flight or post-flight.
   *
   * For the current resource, the same rules that apply on `replay()` apply on `replayAfter`, i.e. the busy state must
   * be false and the resource should have been executed at least once.
   * @param resources
   * @param ignoreError Whether to reply or not if an error is thrown from some or all of the resources.
   * always: Always execute the reply operation
   * some: Execute the reply operation if at least one item did not throw.
   * never: Don't execute the reply operation if at least one item threw.
   */
  replayAfter(resources: ResourceControlToken | ResourceControlToken[],
              ignoreError: 'always' | 'some' | 'never' = 'never'): void {
    if ( this.busy ) {
      errors.throw.model(this.parent, `Can not replay while busy.`);
    }

    if ( !this.lastExecute ) {
      errors.throw.model(this.parent, `No replay data`);
    }

    this.set('busy', true);

    const arr: ResourceControlToken[] = Array.isArray(resources) ? resources.slice() : [ resources ];

    let catcher: (err?: Error) => any | void;

    switch ( ignoreError ) {
      case 'always':
        catcher = () => { }; // tslint:disable-line
        break;
      case 'some':
        catcher = err => {
          arr.pop();
          if ( arr.length === 0 ) {
            throw err;
          }
        };
        break;
      default:
        catcher = err => {
          throw err;
        };
        break;
    }

    const flowControl = resource => {
      const rc = ResourceControl.get(resource);
      return rc.busy ? rc.next().catch(catcher) : Promise.resolve() ;
    };

    Promise.all(arr.map(flowControl))
      .then(() => {
        this.set('busy', false);
        this.replay();
      })
      .catch(err => {
        this.set('busy', false);
        ResourceControl.emitEvent( new ActionErrorResourceEvent(this.parent, err));
      });
  }

  /**
   * Creates a snapshot of the current instance and stores it.
   * Only one snapshot is stored per instance, if a new one is created the previous snapshot is overwriten.
   * This snapshot is created using serialization which means that all `@Model()` and `@Prop()` rules apply.
   *
   * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
   * [[directMapper]] if not set.
   */
  createSnapshot(mapperFactory: MapperFactory = directMapper): void {
    this.snapshot = autoSerialize(this.parent, mapperFactory);
  }

  /**
   * Restores a previously created snapshot into the current instance (merge).
   * If a snapshot does not exist it will not restore, nothing is thrown. (use hasSnapshot to check)
   * Snapshot is removed after restoring.
   * This snapshot is restored using deserialization which means that all `@Model()` and `@Prop()` rules apply.
   *
   * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
   * [[directMapper]] if not set.
   */
  restoreSnapshot(mapperFactory: MapperFactory = directMapper): void {
    if ( this.hasSnapshot ) {
      autoDeserialize(this.snapshot, <any> this.parent.constructor, this.parent, mapperFactory);
      this.snapshot = undefined;
    }
  }

  /**
   * Clone's (deep) the resource.
   * This is a deep clone done using serialization -> deserialization, which means that all `@Model()` and `@Prop()`
   * rules apply.
   *
   * @param mapperFactory An optional [[MapperFactory]] to use, defaults to the mapper set for the model or
   * [[directMapper]] if not set.
   */
  clone(mapperFactory: MapperFactory = directMapper): T {
    return TDMModelBase.clone(this.parent, mapperFactory);
  }

}

export function init(): void {
  TixinFree(ResourceControl, ResourceControlFlow, 'proto');
}
