import { Observable } from 'rxjs/Observable';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { async as asyncScheduler } from 'rxjs/scheduler/async';
import { fromPromise } from 'rxjs/observable/fromPromise';

//TODO: dont add
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { targetStore, TargetMetadata, isFunction, MapperFactory, TDMCollection } from '@tdm/core';
import { emitEvent, eventFactory } from '../events';
import { CancellationTokenResourceEvent, ExecuteInitResourceEvent } from '../events/internal';
import { defaultConfig } from '../default-config';
import { findProp, noop  } from '../utils';
import { AdapterMetadata, ActionMetadata, ValidationSchedule } from '../metadata';
import {
  AdapterStatic,
  ActionOptions,
  Adapter,
  ExecuteResponse,
  ResourceValidationError,
  ResourceError,
  ARHookableMethods
} from '../fw';

import { DAO } from '../dao';
import { ExecuteContext, ExecuteParams } from './execute-context';

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
  readonly adapterMeta: AdapterMetadata;

  constructor(public targetMetadata: TargetMetadata, public adapterClass: AdapterStatic<any, any>) {
    this.target = targetMetadata.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterClass();
    this.mapper = findProp('mapper', defaultConfig, targetMetadata);

    this.adapterMeta = targetStore.getAdapter(adapterClass);
  }


  createExecFactory<T>(action: ActionMetadata, ret: 'obs$'): (self: T, async: boolean, ...args: any[]) => Observable<T>;
  createExecFactory<T>(action: ActionMetadata, ret?: 'instance'): (self: T, async: boolean, ...args: any[]) => T;
  createExecFactory<T>(action: ActionMetadata, ret?: any): (self: T, async: boolean, ...args: any[]) => T | Observable<T> {
    const ac = this;
    return function (self: T, async: boolean, ...args: any[]) {
      return ac.execute(this.clone(self), {async,  args}, ret);
    }.bind(new ExecuteContext(this.targetMetadata, action));
  }

  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret: 'obs$'): Observable<any>;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance'): any;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance' | 'obs$'): any {
    const action = ctx.action;
    const args = params.args || [];
    let async = params.async;

    const options = isFunction(action.pre) ? action.pre(ctx, ...args) : args[0];

    if (!ctx.instance) {
      ctx.setInstance();
    }

    // TODO:  this state.busy test is part of "resource-control" plugin, need to create mechanism to
    //        send pre-init event and get reflect exception from that. this will allow handling the busy check in resource-control
    const state = (<any>DAO).getCtrl && (<any>DAO).getCtrl(ctx.instance);
    if (state && state.busy) { // TODO: Should throw or error?
      emitEvent(eventFactory.error(ctx.instance, new Error('An action is already running')));
      return;
    } else if (!!action.isCollection !== TDMCollection.instanceOf(ctx.instance)) {
      emitEvent(eventFactory.error(ctx.instance, ResourceError.coll_obj(ctx.instance, action.isCollection)));
      return;
    }

    emitEvent(new ExecuteInitResourceEvent(ctx.instance, {ac: this, action, async, args}));
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
    const hookMetadata = this.targetMetadata.findHookEvent(action, event);

    const fn = hookMetadata
      ? hookMetadata.decoratorInfo.isStatic ? this.target[hookMetadata.name] : self[hookMetadata.name]
      : noop;

    return Promise.resolve(fn.apply(self, [options, ...args]));
  }
}
