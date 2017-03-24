import { Observable } from 'rxjs/Observable';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { async as asyncScheduler } from 'rxjs/scheduler/async';
import { fromPromise } from 'rxjs/observable/fromPromise';

//TODO: dont add
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { TargetMetadata, isFunction, MapperFactory } from '@tdm/transformation';
import { emitEvent, eventFactory } from '../events';
import { CancellationTokenResourceEvent, ExecuteInitResourceEvent } from '../events/internal';
import { defaultConfig } from '../default-config';
import { findProp, noop  } from '../utils';
import { ActionMetadata, ValidationSchedule } from '../metadata';
import {
  IdentityValueType,
  ExecuteContext,
  ActionOptions,
  Adapter,
  AdapterStatic,
  ExecuteResponse,
  ResourceValidationError,
  ResourceError,
  BaseActiveRecord,
  ARHookableMethods
} from '../fw';

import { ActiveRecordCollection } from '../active-record';
import { getCtrl } from '../resource-control/get-ctrl';

import { TargetAdapterMetadataStore } from '../metadata/target-adapter-metadata-store';

function validateIncoming(validation: ValidationSchedule) {
  return validation === 'incoming' || validation === 'both';
}

function validateOutgoing(validation: ValidationSchedule) {
  return validation === 'outgoing' || validation === 'both';
}

const noopPromise = () => Promise.resolve();

export class ActionController {
  public target: any;

  public adapter: Adapter<ActionMetadata, ActionOptions>;
  public mapper: MapperFactory;

  /**
   * Holds a prototype of collection methods to copy/merge to a new ActiveRecordCollection instance.
   */
  public collectionProto: any = {};
  public dao: any = {};

  constructor(public adapterStore: TargetAdapterMetadataStore, public targetMetadata: TargetMetadata) {
    this.target = targetMetadata.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterStore.adapterClass();
    this.mapper = findProp('mapper', defaultConfig, targetMetadata);
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

        if (action.isCollection && action.collInstance) {
          this.collectionProto[action.name] = function (this: ActiveRecordCollection<any>, ...args: any[]): any {
            this.splice(0, this.length);
            self.execute(this, action, true, ...args);
          }
        }

        this.dao[action.name] = function(...args: any[]) {

        }
        this.target[action.name] = function (this: AdapterStatic<any, any>, ...args: any[]) {
          return self.execute(undefined, action, true, ...args);
        }
      } else {
        this.target.prototype[action.name] = function (this: BaseActiveRecord<any>, ...args: any[]) {
          return self.execute(this, action, true, ...args);
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

  private execute(self: BaseActiveRecord<any> | ActiveRecordCollection<any> | undefined, action: ActionMetadata, async: boolean, ...args: any[]): any {
    const pubCtx = new ExtendedContext(self, this, action);
    const options = isFunction(action.pre) ? action.pre(pubCtx, ...args) : args[0];

    if (!self) {
      self = pubCtx.instance;
    }

    const state = getCtrl(self);
    if (state && state.busy) { // TODO: Should throw or error?
      emitEvent(eventFactory.error(self, new Error('An action is already running')));
      return;
    } else if (!!action.isCollection !== ActiveRecordCollection.instanceOf(self)) {
      emitEvent(eventFactory.error(self, ResourceError.coll_obj(self, action.isCollection)));
      return;
    }

    emitEvent(new ExecuteInitResourceEvent(self, {adapterMeta: this.adapterStore, action, async, args}));
    emitEvent(eventFactory.actionStart(self));



    const validator = action.validation === 'skip'
        ? undefined
        : () => this.targetMetadata.validate(self).then(validationErrors => {
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

    if (action.post) {
      async = true;
    }

    const endingPromise = (resp: ExecuteResponse) => (!action.isCollection && validateIncoming(action.validation) ? validator() : noopPromise())
      .then(() => this.fireHook(action.name as any, 'after', self, options, resp));

    let obs$: Observable<any | void> = fromPromise(startingPromise)
      .switchMap(() => this.adapter.execute(pubCtx, options))
      .do( response => {
        if (!action.post || !action.post.skipDeserialize) {
          pubCtx.deserialize(response.data);
        }
        if (action.post) {
          action.post.handler.apply(self, [response, options])
        }
      })
      .switchMap(resp => fromPromise<void>(endingPromise(resp)));

    const subs = subscribeOn.call(obs$, async ? asyncScheduler : null).subscribe(
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

    return pubCtx.instance;
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
  constructor(private data: BaseActiveRecord<any> | ActiveRecordCollection<any>,
              private readonly ac: ActionController,
              public readonly action: ActionMetadata) {
  }

  get adapterStore(): TargetAdapterMetadataStore {
    return this.ac.adapterStore;
  }

  get instance(): BaseActiveRecord<any> | ActiveRecordCollection<any> {
    if (!this.data) {
      this.data = this.ac.targetMetadata.factory(this.action.isCollection);

      if (ActiveRecordCollection.instanceOf(this.data)) {
        Object.assign(this.data, this.ac.collectionProto);
      }
    }

    return this.data;
  }

  set instance(value: BaseActiveRecord<any> | ActiveRecordCollection<any>) {
    if (this.data) {
      throw new Error('Instance exists');
    }

    if (!ActiveRecordCollection.instanceOf(this.data) && !(value instanceof this.ac.target) ) {
      throw new Error('Instance does not match type');
    }

    this.data = value;
  }

  getIdentity(): IdentityValueType {
    return this.instance[this.adapterStore.identity];
  }

  setIdentity(identity: IdentityValueType): void {
    this.instance[this.adapterStore.identity] = identity;
  }

  serialize(): any {
    return this.adapterStore.parent.serialize(this.ac.mapper.serializer(this.instance));
  }

  deserialize(data: any): void {
    if (data) { // only if exists (false, 0, '' and all falsy's === not exists)
      const mapper = this.ac.mapper.deserializer(data, this.adapterStore.target);
      const isColl = !!this.action.isCollection;

      if (mapper.isCollection !== isColl) {
        throw ResourceError.coll_obj(this.instance, isColl);
      }

      this.adapterStore.parent
        .deserialize(mapper, this.instance);
    }
  }
}
