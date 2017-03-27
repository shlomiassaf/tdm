import { Observable } from 'rxjs/Observable';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { async as asyncScheduler } from 'rxjs/scheduler/async';
import { fromPromise } from 'rxjs/observable/fromPromise';

//TODO: dont add
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { TargetMetadata, isFunction, MapperFactory, Constructor } from '@tdm/transformation';
import { emitEvent, eventFactory } from '../events';
import { CancellationTokenResourceEvent, ExecuteInitResourceEvent } from '../events/internal';
import { defaultConfig } from '../default-config';
import { findProp, noop  } from '../utils';
import { ActionMetadata, ValidationSchedule } from '../metadata';
import {
  ActionOptions,
  Adapter,
  AdapterStatic,
  ExecuteResponse,
  ResourceValidationError,
  ResourceError,
  BaseActiveRecord,
  ARHookableMethods
} from '../fw';

import { ActiveRecordCollection, collectionClassFactory } from '../active-record';
import { DS } from '../ds';
import { TargetAdapterMetadataStore } from '../metadata/target-adapter-metadata-store';
import { ExtendedContext, ExecuteParams } from './execute-context';

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


  constructor(public adapterStore: TargetAdapterMetadataStore, public targetMetadata: TargetMetadata) {
    this.target = targetMetadata.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterStore.adapterClass();
    this.mapper = findProp('mapper', defaultConfig, targetMetadata);
  }

  commit(): void {
    this.registerDAO();
  }

  registerDAO() {
    const daoClass = this.adapterStore.adapterMeta.daoClass;
    const actions = this.adapterStore.adapterMeta.getActions(daoClass);

    const runtimeDAO = class RuntimeDAO extends (daoClass as Constructor<{}>) {};

    // creating DAO for this target
    // TODO: each RuntimeDAO creates a new handler for global daoClass handlers.
    // find a way to register once, then provide targetMeta every time.

    actions.forEach(action => {
      if (action.decoratorInfo.isStatic) {
        throw new Error('DAO can define static actions.');
      }

      const ctx = new ExtendedContext(this.targetMetadata, action);
      const self = this;

      runtimeDAO.prototype[action.name] = function (this: BaseActiveRecord<any>, ...args: any[]) {
        return self.execute(ctx.clone(), { async: true, args }, 'obs$');
      };
    });

    this.targetMetadata.daoClass = runtimeDAO;
  }

  createExecFactory<T>(action: ActionMetadata, ret: 'obs$'): (self: T, async: boolean, ...args: any[]) => Observable<T>;
  createExecFactory<T>(action: ActionMetadata, ret?: 'instance'): (self: T, async: boolean, ...args: any[]) => T;
  createExecFactory<T>(action: ActionMetadata, ret?: any): (self: T, async: boolean, ...args: any[]) => T | Observable<T> {
    const ac = this;
    return function (self: T, async: boolean, ...args: any[]) {
      return ac.execute(this.clone(self), {async,  args}, ret);
    }.bind(new ExtendedContext(this.targetMetadata, action));
  }

  execute(ctx: ExtendedContext, params: ExecuteParams, ret: 'obs$'): Observable<any>;
  execute(ctx: ExtendedContext, params: ExecuteParams, ret?: 'instance'): any;
  execute(ctx: ExtendedContext, params: ExecuteParams, ret?: 'instance' | 'obs$'): any {
    const action = ctx.action;
    const args = params.args || [];
    let async = params.async;

    const options = isFunction(action.pre) ? action.pre(ctx, ...args) : args[0];

    const state = DS.getCtrl && DS.getCtrl(ctx.instance);
    if (state && state.busy) { // TODO: Should throw or error?
      emitEvent(eventFactory.error(ctx.instance, new Error('An action is already running')));
      return;
    } else if (!!action.isCollection !== ActiveRecordCollection.instanceOf(ctx.instance)) {
      emitEvent(eventFactory.error(ctx.instance, ResourceError.coll_obj(ctx.instance, action.isCollection)));
      return;
    }

    emitEvent(new ExecuteInitResourceEvent(ctx.instance, {adapterMeta: this.adapterStore, action, async, args}));
    emitEvent(eventFactory.actionStart(ctx.instance));

    const validator = action.validation === 'skip'
        ? undefined
        : () => this.targetMetadata.validate(ctx.instance).then( (validationErrors: any) => {
          if (validationErrors.length > 0) {
            throw new ResourceValidationError(ctx.instance, validationErrors);
          }
        })
      ;

    // TODO:  fireEvent uses member name as Hook matcher, this requires member name to be one of
    //        "ARHookableMethods", let user set the action method in ActionMetadata or something
    //        - Also applied to fireEvent "after" below.
    const startingPromise = this.fireHook(action.name as any, 'before', ctx.instance, options)
      .then(validateOutgoing(action.validation) ? validator : noopPromise);

    if (action.post) {
      async = true;
    }

    const endingPromise = (resp: ExecuteResponse) => (!action.isCollection && validateIncoming(action.validation) ? validator() : noopPromise())
      .then(() => this.fireHook(action.name as any, 'after', ctx.instance, options, resp));

    let obs$: Observable<any | void> = fromPromise(startingPromise)
      .switchMap(() => this.adapter.execute(ctx, options))
      .do( response => {
        if (!action.post || !action.post.skipDeserialize) {
          ctx.deserialize(response.data);
        }
        if (action.post) {
          action.post.handler.apply(ctx.instance, [response, options])
        }
      })
      .switchMap(resp => fromPromise<void>(endingPromise(resp)));

    obs$ = subscribeOn.call(obs$, async ? asyncScheduler : null);

    let response: any;
    if (ret === 'obs$') {
      obs$ = obs$.share();
      response = obs$.first().map( () => ctx.instance)
    } else {
      response = ctx.instance;
    }

    const subs = obs$.subscribe(
      _ => emitEvent(eventFactory.success(ctx.instance)),
      err => emitEvent(eventFactory.error(ctx.instance, err)),
      () => emitEvent(eventFactory.actionEnd(ctx.instance, 'success'))
      // TODO: protect from never ending observables in this chain?
      // maybe first()? take()? are there handlers that emit multiple values?
    );

    const subscription = Object.create(subs);
    subscription.unsubscribe = () => {
      subs.unsubscribe();
      emitEvent(eventFactory.cancel(ctx.instance));
      emitEvent(eventFactory.actionEnd(ctx.instance, 'cancel'));
    };

    emitEvent(new CancellationTokenResourceEvent(ctx.instance, subscription));

    return response;
  }

  private fireHook(action: ARHookableMethods, event: 'before' | 'after', self: any, options: ActionOptions, ...args: any[]): Promise<void> {
    const hookMetadata = this.adapterStore.findHookEvent(action, event);

    const fn = hookMetadata
      ? hookMetadata.decoratorInfo.isStatic ? this.target[hookMetadata.name] : self[hookMetadata.name]
      : noop;

    return Promise.resolve(fn.apply(self, [options, ...args]));
  }
}
