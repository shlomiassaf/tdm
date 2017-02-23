import { Observable } from 'rxjs/Observable';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { asap } from 'rxjs/scheduler/asap';
import { fromPromise } from 'rxjs/observable/fromPromise';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { emitEvent, eventFactory } from '../events';
import { CancellationTokenResourceEvent } from '../events/internal';
import { defaultConfig } from '../default-config';
import { findProp, noop, isFunction } from '../utils';
import { ActionMetadata, ValidationSchedule } from '../metadata';
import {
  ExecuteContext, DeserializerFactory, ActionOptions, Adapter,
  AdapterStatic, ExecuteResponse
} from './interfaces';
import {
  ActiveRecordCollection,
  BaseActiveRecord,
  ARHookableMethods
} from '../active-record';
import { internalMetadataStore } from '../metadata/reflection/internal-metadata-store';
import { TargetAdapterMetadataStore } from '../metadata/reflection/target-adapter-metadata-store';
import { TargetMetadataStore } from '../metadata/reflection/target-metadata-store';

import { ResourceValidationError, ResourceError } from './errors';
import { MapperFactory } from '../mapping/mapper';

function validateIncoming(validation: ValidationSchedule) {
  return validation === 'incoming' || validation === 'both';
}

function validateOutgoing(validation: ValidationSchedule) {
  return validation === 'outgoing' || validation === 'both';
}

const noopPromise = () => Promise.resolve();

export class ActionController {
  private target: any;

  deserializer: DeserializerFactory;

  private adapter: Adapter<ActionMetadata, ActionOptions>;
  private mapper: MapperFactory;

  constructor(private adapterStore: TargetAdapterMetadataStore, private targetStore: TargetMetadataStore) {
    this.deserializer = adapterStore.adapterMeta.deserializerFactory;
    this.target = adapterStore.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterStore.adapterClass();
    this.mapper = findProp('mapper', defaultConfig, adapterStore.resource);
  }

  commit(): void {

  }

  registerAction(action: ActionMetadata, override: boolean = false): void {
    if (override || !this.hasMethod(action.name)) {

      // ACTION VALIDATION
      // TODO: move to separate function, add more assertions, create unique error class
      if (action.isCollection && !action.decoratorInfo.isStatic) {
        throw new Error('An action with a collection response must be a static level member');
      }

      const self = this;

      if (action.decoratorInfo.isStatic) {
        this.target[action.name] = function (this: AdapterStatic<any, any>, ...args: any[]) {
          const instance = action.isCollection
              ? self.targetStore.targetController.createCollection()
              : self.targetStore.targetController.create()
            ;
          self.execute(instance, action, true, ...args);
          return instance;
        }
      } else {
        this.target.prototype[action.name] = function (this: BaseActiveRecord<any>, ...args: any[]) {
          self.execute(this, action, true, ...args);
          return this;
        }
      }
    }
  }

  createExecFactory<T extends BaseActiveRecord<any>>(action: ActionMetadata): (self: T, async: boolean, ...args: any[]) => T {
    return (self: T, async: boolean, ...args: any[]) => {
      this.execute(self, action, async, ...args);
      return self;
    };
  }

  hasMethod(name: PropertyKey): boolean {
    return isFunction(this.target.prototype[name]);
  }

  private execute(self: BaseActiveRecord<any> | ActiveRecordCollection<any>, action: ActionMetadata, async: boolean, ...args: any[]): void {
    // TODO: $ar is not promised to be the active record property name, need to publish that for usage
    if (self.$ar && self.$ar.busy) { // TODO: Should throw or error?
      emitEvent(eventFactory.error(self, new Error('An action is already running')));
      return;
    } else if (!!action.isCollection !== self instanceof ActiveRecordCollection) {
      emitEvent(eventFactory.error(self, ResourceError.coll_obj(self, action.isCollection)));
      return;
    }

    emitEvent(eventFactory.actionStart(self));

    const targetController = this.targetStore.targetController;
    const pubCtx = new ExtendedContext(self, this.adapterStore, action, this.mapper);

    const options = isFunction(action.pre) ? action.pre(pubCtx, ...args) : args[0];

    const validator = action.validation === 'skip'
        ? undefined
        : () => targetController.validate(self).then(validationErrors => {
          if (validationErrors.length > 0) {
            throw new ResourceValidationError(self, validationErrors);
          }
        })
      ;

    // TODO:  fireEvent uses member name as Hook matcher, this requires member name to be one of
    //        "ARHookableMethods", let user set the action method in ActionMetadata or something
    //        - Also applied to fireEvent "after" below.
    const startingPromise = this.fireHook(action.name as any, 'before', self, options)
      .then(validateOutgoing(action.validation) ? validator : noopPromise);

    let obs$: Observable<any | void> = fromPromise(startingPromise)
      .switchMap(() => this.adapter.execute(pubCtx, options))
      .switchMap(resp => {
        // TODO: Refactor this to lazy
        const toPlain = findProp('deserializer', this, this.adapterStore.resource, action)();
        let p = !action.raw || action.raw.deserialize
            ? Promise.resolve(toPlain.deserialize(resp.response)).then(data => {
              resp.deserialized = data;
              return resp;
            })
            : Promise.resolve(resp)
          ;

        return fromPromise(p);
      });

    if (!action.raw) {
      const endingPromise = (resp: ExecuteResponse) => (!action.isCollection && validateIncoming(action.validation) ? validator() : noopPromise())
        .then(() => this.fireHook(action.name as any, 'after', self, options, resp));

      obs$ = obs$
        .do(({deserialized}) => {
          pubCtx.deserialize(deserialized);
        })
        .switchMap(resp => fromPromise<void>(endingPromise(resp)));
    } else {
      async = true;
      obs$ = obs$.do(resp => action.raw.handler.apply(self, [resp, options]));
    }

    const subs = subscribeOn.call(obs$, async ? asap : null).subscribe(
      _ => emitEvent(eventFactory.success(self)),
      err => emitEvent(eventFactory.error(self, err)),
      () => emitEvent(eventFactory.actionEnd(self, 'success'))
      // TODO: protect from never ending observables in this chain?
      // maybe first()? take()? are there handlers that emit multiple values?
    );

    const subscription = Object.create(subs);
    subscription.unsubscribe = () => {
      subs.unsubscribe();
      emitEvent(eventFactory.cancel(self));
      emitEvent(eventFactory.actionEnd(self, 'cancel'));
    };

    emitEvent(new CancellationTokenResourceEvent(self, subscription));
  }

  private fireHook(action: ARHookableMethods, event: 'before' | 'after', self: any, options: ActionOptions, ...args: any[]): Promise<void> {
    const hookMetadata = this.adapterStore.findHookEvent(action, event);

    const fn = hookMetadata
      ? hookMetadata.decoratorInfo.isStatic ? this.target[hookMetadata.name] : self[hookMetadata.name]
      : noop;

    return Promise.resolve(fn.apply(self, [options, ...args]));
  }
}

class ExtendedContext implements ExecuteContext<any> {
  constructor(public readonly data: BaseActiveRecord<any> | ActiveRecordCollection<any>,
              public readonly adapterStore: TargetAdapterMetadataStore,
              public readonly action: ActionMetadata,
              public readonly mapper: MapperFactory) {
  }

  serialize(): any {
    const mapper = this.data instanceof ActiveRecordCollection
        ? this.mapper.serializer(this.data.collection)
        : this.mapper.serializer(this.data)
      ;

    return internalMetadataStore
      .getTargetStore(this.adapterStore.target, false)
      .targetController
      .serialize(mapper);
  }

  deserialize(data: any): void {
    const mapper = this.mapper.deserializer(data, this.adapterStore.target);
    const isColl = !!this.action.isCollection;

    if (mapper.isCollection !== isColl) {
      throw ResourceError.coll_obj(this.data, isColl);
    }

    internalMetadataStore
      .getTargetStore(this.adapterStore.target, false)
      .targetController
      .deserialize(mapper, isColl ? (this.data as ActiveRecordCollection<any>).collection : this.data);
  }
}
