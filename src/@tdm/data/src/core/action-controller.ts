import { targetStore, TargetMetadata, isFunction, MapperFactory, TDMCollection } from '@tdm/core';
import { dispatchEvent, eventFactory, CancellationTokenResourceEvent, ExecuteInitResourceEvent } from '../events';
import { defaultConfig } from '../default-config';
import { findProp, noop } from '../utils';
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

import { ResourceControl } from '../resource-control';
import { ExecuteContext, ExecuteParams } from './execute-context';

interface ExecuteState {
  id?: any;
  cancelled?: boolean;
}

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


  createExecFactory<T>(action: ActionMetadata, ret: 'promise'): (self: T, async: boolean, ...args: any[]) => Promise<T>;
  createExecFactory<T>(action: ActionMetadata, ret?: 'instance'): (self: T, async: boolean, ...args: any[]) => T;
  createExecFactory<T>(action: ActionMetadata, ret?: 'instance' | 'promise'): (self: T, async: boolean, ...args: any[]) => T | Promise<T> {
    const ac = this;
    return function (self: T, async: boolean, ...args: any[]) {
      return ac.execute(this.clone(self), {async, args}, <any>ret);
    }.bind(new ExecuteContext(this.targetMetadata, action));
  }

  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret: 'promise'): Promise<any>;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance'): any;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance' | 'promise'): any {
    const action = ctx.action;
    const args = params.args || [];
    let async = params.async;

    if (args.length < action.paramHint) {
      args[action.paramHint -1] = {};
    }

    const options = isFunction(action.pre) ? action.pre(ctx, ...args) : args[0];

    if (!ctx.instance) {
      ctx.setInstance();
    }

    const state = ResourceControl.get(ctx.instance);

    if (state && state.busy) {
      const err = eventFactory.error(ctx.instance, new Error('An action is already running'));
      return ret === 'promise' ? Promise.reject(err) : dispatchEvent(err);
    } else if (!!action.isCollection !== TDMCollection.instanceOf(ctx.instance)) {
      const err = eventFactory.error(ctx.instance, ResourceError.coll_obj(ctx.instance, action.isCollection));
      return ret === 'promise' ? Promise.reject(err) : dispatchEvent(err);
    }

    state.set('busy', true);

    dispatchEvent(new ExecuteInitResourceEvent(ctx.instance, {ac: this, action, async, args}));
    dispatchEvent(eventFactory.actionStart(ctx.instance));

    const eState: ExecuteState = {};

    if (this.adapter.supports.cancel) {
      dispatchEvent(new CancellationTokenResourceEvent(ctx.instance, () => this.cancel(eState, ctx)))
    }

    // TODO: move this to be part of the promise flow
    const doFinally = () => {
      state.set('busy', false);
    };

    // TODO:  fireEvent uses member name as Hook matcher, this requires member name to be one of
    //        "ARHookableMethods", let user set the action method in ActionMetadata or something
    //        - Also applied to fireEvent "after" below.
    const promise = new Promise( resolve => setTimeout(resolve, 5) )
      .then( () => this.fireHook(action.name as any, 'before', ctx.instance, options) )
      .then( () => this.validate('outgoing', action.validation, ctx) )
      .then(() => {
        if (eState.cancelled === true) {
          // this error will be omitted, its here to skip all the then's.
          throw new Error('Cancelled');
        }

        const adapterResponse = this.adapter.execute(ctx, options, args);

        eState.id = adapterResponse.id;

        if (action.post) {
          async = true;
        }

        // TODO: If user cancelled and the adapter does not throw an error on cancellation
        //       this means that the promise chain will continue, need to fix it.
        //       Need to create a promise flow where steps can be skipped
        //       this also applies on the first 2 steps
        return adapterResponse.response
          .then((response: ExecuteResponse) => {
            if (!action.post || !action.post.skipDeserialize) {
              ctx.deserialize(response.data);
            }
            if (action.post) {
              action.post.handler.apply(ctx.instance, [response, options])
            }

            return (action.isCollection ? Promise.resolve() : this.validate('incoming', action.validation, ctx))
              .then( () => this.fireHook(action.name as any, 'after', ctx.instance, options, response) )
          });
      })
      .then(() => dispatchEvent(eventFactory.success(ctx.instance)))
      .then(() => doFinally() )
      .then(() => dispatchEvent(eventFactory.actionEnd(ctx.instance, 'success')))
      .then(() => ctx.instance )
      .catch(err => {
        if (eState.cancelled !== true) {
          dispatchEvent(eventFactory.error(ctx.instance, err));
          if (ret === 'promise') { // rethrow if the user handles the promise
            doFinally();
            throw err;
          }
        }
        doFinally();
      });

    // TODO: implement timeout to protect from stale promises?

    return ret === 'promise' ? promise : ctx.instance;
  }

  private cancel(eState: ExecuteState, ctx: ExecuteContext<any>): void {
    if (!eState.cancelled) {
      eState.cancelled = true;
      dispatchEvent(eventFactory.cancel(ctx.instance));
      if (eState.id) {
        this.adapter.cancel(eState.id);
      }
      dispatchEvent(eventFactory.actionEnd(ctx.instance, 'cancel'));
    }
  }

  private validate(type: 'incoming' | 'outgoing', validation: ValidationSchedule, ctx: ExecuteContext<any>): Promise<void> {
    if (type === validation || validation === 'both') {
      return this.targetMetadata.validate(ctx.instance)
        .then((validationErrors: any) => {
          if (validationErrors.length > 0) {
            throw new ResourceValidationError(ctx.instance, validationErrors);
          }
        });
    } else {
      return Promise.resolve();
    }
  }

  private fireHook(action: ARHookableMethods, event: 'before' | 'after', self: any, options: ActionOptions, ...args: any[]): Promise<void> {
    const hookMetadata = this.targetMetadata.findHookEvent(action, event);

    const fn = hookMetadata
      ? hookMetadata.decoratorInfo.isStatic ? this.target[hookMetadata.name] : self[hookMetadata.name]
      : noop;

    return Promise.resolve(fn.apply(self, [options, ...args]));
  }
}
