/**
 * Model usage example - Base class implementation
 *
 * This example demonstrates model creation using 2 concrete classes.
 * A private base class that exposes all of the structure and provides implementation and an exposed empty class.
 * The base class is wrapping an empty class that is used as an export, this class should be left empty.
 *
 * Pros:
 *   - Single class, no interface, all in one place
 *   - Single place for concrete implementation
 *   - Can't make mistakes of implementing public API in wrong place.
 *   - Allows inheritance
 *
 * Cons:
 *   - Requires manual type creation (https://github.com/Microsoft/TypeScript/issues/6606)
 *   - For multiple mixins need to create type without ARMixin<> help.
 *     https://github.com/Microsoft/TypeScript/issues/13798
 *   - Won't work with angular DI + AOT (https://github.com/angular/angular/issues/14128)
 */


import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, TDMCollection, Prop, Exclude, ExecuteResponse, ExtendAction, ExecuteContext, IdentityValueType, Identity } from '@tdm/data';
import { ARMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/ngx-http';

@HttpResource({
  endpoint: '/api/users/:id?',
  urlParams: {
    limit: '5'
  }
})
@Injectable()
export class UserDAO implements  BeforeHook<'bfRef', HttpActionOptions>,
                        AfterHook<'afRef', HttpActionOptions> {

  @Identity()
  @UrlParam() id: number = 2; // this will go into the "endpoint" from the instance!

  @Prop({
    alias: 'username'
  })
  username__: string;


  @Prop({
    alias: 'motto'
  })
  @Exclude()
  _motto_: string;

  constructor() { }

  @Hook({event: 'before', action: '$refresh'})
  bfRef() {
    console.log('BeforeRefresh');
  }

  @Hook({event: 'after', action: '$refresh'})
  afRef() {
    console.log('AfterRefresh');
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    post: UserDAO.prototype.postDeserializedHandler
  })
  postDeserialized: (options?: HttpActionOptions) => ARMixin<UserDAO>;
  private postDeserializedHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    post: {
      handler: UserDAO.prototype.postHandler,
      skipDeserialize: true
    }
  })
  raw: (options?: HttpActionOptions) => ARMixin<UserDAO>;
  private postHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  static num: number;

  @Hook({event: 'before', action: 'query'})
  static bfQuery(this: TDMCollection<ARMixin<UserDAO>>) {
    this.$ar.next()
      .then( coll => {
        console.log(`BeforeQuery-AfterQuery: got ${coll.length}`)
      });
    console.log('BeforeQuery');
  }

  @Hook({event: 'after', action: 'query'})
  static afQuery(this: TDMCollection<ARMixin<UserDAO>>) {
    console.log('AfterQuery');
    console.log(`AfterQuery: got ${this.length}`)
  }

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, id: IdentityValueType, a:number, b: number, options: HttpActionOptions) => {
      ctx.setIdentity(id);
      return options;
    }
  })
  static find: (id: IdentityValueType, a:number, b: number, options?: HttpActionOptions) => ARMixin<UserDAO>;
}
