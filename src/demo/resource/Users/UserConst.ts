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
 *   - For multiple mixins need to create type without RestMixin<> help.
 *     https://github.com/Microsoft/TypeScript/issues/13798
 *   - Won't work with angular DI + AOT (https://github.com/angular/angular/issues/14128)
 */


import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, ActiveRecordCollection, Prop, Exclude, ExecuteResponse, ExtendAction, ExecuteContext, Identity } from '@tdm/core';
import { RestMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/angular-http';

@HttpResource({
  endpoint: '/api/users/:id?',
  identity: 'id',
  urlParams: {
    limit: '5'
  },
  noBuild: true
})
@Injectable()
class User_ implements  BeforeHook<'bfRef', HttpActionOptions>,
                        AfterHook<'afRef', HttpActionOptions> {

  @UrlParam() id: number = 2; // this will go into the "endpoint" from the instance!

  @Prop({
    alias: 'username',
    validation: {
      name: 'test-validator',
      validate(ctx) {
        return false;
      },
      errorMessage(ctx) {
        return 'validation error';
      }
    }
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
    raw: {
      handler: User_.prototype.rawDeserializedHandler,
      deserialize: true
    }
  })
  rawDeserialized: (options?: HttpActionOptions) => RestMixin<User_>;
  private rawDeserializedHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    raw: User_.prototype.rawHandler
  })
  raw: (options?: HttpActionOptions) => RestMixin<User_>;
  private rawHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  static num: number;

  @Hook({event: 'before', action: 'query'})
  static bfQuery(this: ActiveRecordCollection<RestMixin<User_>>) {
    this.$ar.next()
      .then( coll => {
        console.log(`BeforeQuery-AfterQuery: got ${coll.collection.length}`)
      });
    console.log('BeforeQuery');
  }

  @Hook({event: 'after', action: 'query'})
  static afQuery(this: ActiveRecordCollection<RestMixin<User_>>) {
    console.log('AfterQuery');
    console.log(`AfterQuery: got ${this.collection.length}`)
  }

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, id: Identity, a:number, b: number, options: HttpActionOptions) => {
      ctx.data[ctx.adapterStore.resource.identity] = id;
      return options;
    }
  })
  static find: (id: Identity, a:number, b: number, options?: HttpActionOptions) => RestMixin<User_>;
}

export const UserConst = RestMixin(User_);
export type UserConst = RestMixin<User_>;

// UserConst.find(2).username__;                                    // OK
// UserConst.find(2).usernam23e;                                    // SHOULD ERROR
// UserConst.num;                                                   // OK
// new UserConst().$refresh().username__;                           // OK
// const user: UserConst = new UserConst();                         // OK
// user.$refresh().username__;                                      // OK
// user.$refresh().abcd;                                            // SHOULD ERROR
// user.$ar.next().then( u => u.id );                               // OK
// user.$ar.next().then( u => u.f34 );                              // SHOULD ERROR
// UserConst.query().$ar.next().then(coll => coll.collection );     // OK
// UserConst.query().$ar.next().then(coll => coll.sdfd );           // SHOULD ERROR
