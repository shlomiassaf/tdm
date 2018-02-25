import {
  targetStore,
  isFunction,
  errors,
  TDMCollection,
  TargetMetadata
} from '@tdm/core/tdm';

import { dispatchEvent, eventFactory, CancellationTokenResourceEvent, ExecuteInitResourceEvent } from '../events';
import { noop } from '../utils';
import { AdapterMetadata, ActionMetadata, ValidationSchedule } from '../metadata';
import {
  AdapterStatic,
  ActionOptions,
  Adapter,
  ExecuteResponse,
  ARHookableMethods
} from '../fw';

import { ResourceControl } from '../resource-control';
import { ExecuteContext, ExecuteParams } from './execute-context';

interface ExecuteState {
  id?: any;
  cancelled?: boolean;
}

export class ActionController<T = any, Z = any> {
  public target: Z;
  public adapter: Adapter<ActionMetadata, ActionOptions>;
  readonly adapterMeta: AdapterMetadata;

  constructor(public targetMetadata: TargetMetadata<T, Z>, public adapterClass: AdapterStatic<any, any>) {
    this.target = targetMetadata.target;
    // TODO: adapter can be shared for all targets
    this.adapter = new adapterClass();

    this.adapterMeta = targetStore.getAdapter(adapterClass);
  }

  createExecFactory<T>(action: ActionMetadata, ret: 'promise'): (self: T, params: ExecuteParams) => Promise<T>;
  createExecFactory<T>(action: ActionMetadata, ret?: 'instance'): (self: T, params: ExecuteParams) => T;
  createExecFactory<T>(action: ActionMetadata,
                       ret?: 'instance' | 'promise'): (self: T, params: ExecuteParams) => T | Promise<T> {
    const ac = this;
    return function (self: T, params: ExecuteParams) {
      return ac.execute(this.clone(self), params, <any> ret);
    }.bind(new ExecuteContext(this.targetMetadata, action));
  }

  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret: 'promise'): Promise<any>;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance'): any;
  execute(ctx: ExecuteContext<any>, params: ExecuteParams, ret?: 'instance' | 'promise'): any {
    const action = ctx.action;
    const args = params.args || [];

    if (args.length < action.paramHint) {
      args[action.paramHint - 1] = {};
    }

    const options = isFunction(action.pre) ? action.pre(ctx, ...args) : args[0];

    if (!ctx.instance) {
      ctx.setInstance();
    }

    const keepAliveResourceControl = ret !== 'promise';

    if (action.post && action.post.returns) {
      ret = 'promise';
    }

    const eState: ExecuteState = {};
    let state: ResourceControl<any>;
    let wasBusy: boolean;
    if (ret !== 'promise') {
      state = ResourceControl.get(ctx.instance);
      wasBusy = state.busy;
      state.set('busy', true);
    }

    // TODO: move this to be part of the promise flow
    const doFinally = () => {
      if (state) {
        state.set('busy', false);
      }
    };

    let postReturnsResult: any;
    // TODO:  fireEvent uses member name as Hook matcher, this requires member name to be one of
    //        "ARHookableMethods", let user set the action method in ActionMetadata or something
    //        - Also applied to fireEvent "after" below.
    const promise = new Promise( resolve => setTimeout(resolve, 5) )
      .then( () => {
        if (!!action.isCollection !== TDMCollection.instanceOf(ctx.instance)) {
          throw errors.modelSingleCol(ctx.instance, action.isCollection);
        } else if (wasBusy) {
          throw new Error('An action is already running');
        }

        dispatchEvent(eventFactory.actionStart(ctx.instance));

        if (this.adapter.supports.cancel) {
          dispatchEvent(new CancellationTokenResourceEvent(ctx.instance, () => this.cancel(eState, ctx)));
        }
      })
      .then( () => this.fireHook(action.name as any, 'before', ctx.instance, options) )
      .then( () => this.validate('outgoing', action.validation, ctx) )
      .then(() => {
        if (eState.cancelled === true) {
          // this error will be omitted, its here to skip all the then's.
          throw new Error('Cancelled');
        }

        const adapterResponse = this.adapter.execute(ctx, options,  params);

        eState.id = adapterResponse.id;

        // TODO: If user cancelled and the adapter does not throw an error on cancellation
        //       this means that the promise chain will continue, need to fix it.
        //       Need to create a promise flow where steps can be skipped
        //       this also applies on the first 2 steps
        return adapterResponse.response
          .then((response: ExecuteResponse) => {
            if (response.skipDeserialize !== true || !action.post || !action.post.returns) {
              ctx.deserialize(response.data);
            }
            if (action.post) {
              postReturnsResult = action.post.handler.apply(ctx.instance, [response, options]);
            }

            return (action.isCollection ? Promise.resolve() : this.validate('incoming', action.validation, ctx))
              .then( () => this.fireHook(action.name as any, 'after', ctx.instance, options, response) );
          });
      })
      .then(() => dispatchEvent(eventFactory.success(ctx.instance)))
      .then(() => doFinally() )
      .then(() => dispatchEvent(eventFactory.actionEnd(ctx.instance, 'success')))
      .then(() => action.post && action.post.returns ? postReturnsResult : ctx.instance )
      .catch(error => {
        if (eState.cancelled !== true) {
          dispatchEvent(eventFactory.error(ctx.instance, error));
          if (ret === 'promise') { // rethrow if the user handles the promise
            doFinally();
            throw error;
          }
        }
        doFinally();
      });

    // fired before the promise is returned to the user (the last param, async, is not set)
    // this is important, because we must register the instance/promise for lookup's before the user can
    // do ResourceControl.get(...)
    dispatchEvent(new ExecuteInitResourceEvent(
      ctx.instance,
      {ac: this, action, params},
      promise,
      keepAliveResourceControl
    ));

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

  private validate(type: 'incoming' | 'outgoing',
                   validation: ValidationSchedule,
                   ctx: ExecuteContext<any>): Promise<void> {
    if (type === validation || validation === 'both') {
      return this.targetMetadata.validate(ctx.instance)
        .then((validationErrors: any) => {
          if (validationErrors.length > 0) {
            errors.throw.validation(ctx.instance, validationErrors);
          }
        });
    } else {
      return Promise.resolve();
    }
  }

  private fireHook(action: ARHookableMethods, event: 'before' | 'after',
                   self: any, options: ActionOptions,
                   ...args: any[]): Promise<void> {
    const hookMetadata = this.targetMetadata.findHookEvent(action, event);

    const fn = hookMetadata
      ? hookMetadata.decoratorInfo.isStatic ? this.target[hookMetadata.name] : self[hookMetadata.name]
      : noop;

    return Promise.resolve(fn.apply(self, [options, ...args]));
  }
}
