import { Observable } from 'rxjs/Observable';
import { asap } from 'rxjs/scheduler/asap';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';

import { findProp, noop, isFunction } from '../utils';
import { ActionMetadata, ValidationSchedule } from '../metadata';
import {
  ExecuteContext, DeserializerFactory, Deserializer, ActionOptions, Adapter,
  AdapterStatic, ExecuteResponse
} from './interfaces';
import { ActiveRecordCollection, BaseActiveRecord, emitEvent, eventFactory, CancellationTokenResourceEvent, ARHookableMethods } from '../active-record';
import { TargetAdapterMetadataStore } from '../metadata/reflection/target-adapter-metadata-store';

import { ResourceValidationError } from './errors';

function validateIncoming (validation: ValidationSchedule)  {
  return validation === 'incoming' || validation === 'both';
}

function validateOutgoing (validation: ValidationSchedule)  {
  return validation === 'outgoing' || validation === 'both';
}

const noopPromise = () => Promise.resolve();

export class ActionController {
  private target: any;

  deserializer: DeserializerFactory;

  private adapter: Adapter<ActionMetadata, ActionOptions>;

  constructor(private adapterStore: TargetAdapterMetadataStore) {
    this.deserializer = adapterStore.adapterMeta.deserializerFactory;
    this.target = adapterStore.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterStore.adapterClass();
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

      const ctx = this.createContext(action);
      const self = this;

      if (action.decoratorInfo.isStatic) {
        this.target[action.name] = function(this: AdapterStatic<any, any>, ...args: any[]) {
          const instance = action.isCollection
            ? ctx.adapterStore.targetController.createCollection()
            : ctx.adapterStore.targetController.create()
          ;
          self.execute(instance, ctx, true, ...args);
          return instance;
        }
      } else {
        this.target.prototype[action.name] = function(this: BaseActiveRecord<any>, ...args: any[]) {
          self.execute(this, ctx, true, ...args);
          return this;
        }
      }
    }
  }

  createExecFactory<T extends BaseActiveRecord<any>>(action: ActionMetadata): (self: T, async: boolean, ...args: any[]) => T {
    const ctx = this.createContext(action);
    return (self: T, async: boolean, ...args: any[]) => {
      this.execute(self, ctx, async, ...args);
      return self;
    };
  }

  hasMethod(name: PropertyKey): boolean {
    return isFunction(this.target.prototype[name]);
  }

  private createContext(action: ActionMetadata): ExtendedContext {
    return new ExtendedContext(this.adapterStore, action, findProp('deserializer', this, this.adapterStore.resource, action));
  }


  private execute(self: BaseActiveRecord<any> | ActiveRecordCollection<any>, ctx: ExtendedContext, async: boolean, ...args: any[]): void {
    if (self.$ar.busy) { // TODO: Should throw or error?
      emitEvent(eventFactory.error(self, new Error('An action is already running')));
      return;
    }

    emitEvent(eventFactory.actionStart(self));

    const targetController = this.adapterStore.targetController;
    const action = ctx.action;
    const pubCtx = ctx.pubCtx(self);

    const options = isFunction(action.pre) ? action.pre(pubCtx, ...args) : args[0];

    const validator = action.validation === 'skip'
        ? undefined
        : () => targetController.validate(self).then( validationErrors => {
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

    let obs$: Observable<any | void> = Observable.fromPromise(startingPromise)
      .switchMap( () => this.adapter.execute(pubCtx, options) )
      .switchMap( resp => {
        let p = !action.raw || action.raw.deserialize
            ? ctx.deserialize(resp.response).then( data => { resp.deserialized = data; return resp; } )
            : Promise.resolve(resp)
          ;

        return Observable.fromPromise(p);
      });

    if (!action.raw) {
      const endingPromise = (resp: ExecuteResponse) => (!action.isCollection && validateIncoming(action.validation) ? validator() : noopPromise())
        .then( () => this.fireHook(action.name as any, 'after', self, options, resp) );

      obs$ = obs$
        .do( ({deserialized}) => targetController.deserialize(deserialized, self, action.isCollection) )
        .switchMap( resp => Observable.fromPromise<void>(endingPromise(resp)) );
    } else {
      async = true;
      obs$ = obs$.do( resp => action.raw.handler.apply(self, [resp, options]) );
    }

    const subs = obs$.subscribeOn(async ? asap : null).subscribe(
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

class ExtendedContext implements Deserializer<any> {
  private deserializer: Deserializer<any>;

  constructor(public readonly adapterStore: TargetAdapterMetadataStore, public readonly action: ActionMetadata, private deserializerFactory: DeserializerFactory) {
  }

  deserialize(response: any): Promise<any> {
    if (!this.deserializer) {
      this.deserializer = this.deserializerFactory();
    }
    return Promise.resolve(this.deserializer.deserialize(response));
  }

  pubCtx(data: any): ExecuteContext<any> {
    return {
      adapterStore: this.adapterStore,
      action: this.action,
      data
    }
  }
}
