/**
 * Model usage example - Interfaces
 *
 * This example demonstrates model creation using 1 concrete class and 2 interfaces.
 * The interfaces provides the structure for both the static and instance shape, the concrete class
 * provides implementation and it is exposed.
 *
 * Pros:
 *   - Design fits I in SOLID
 *   - single concrete implementation
 *   - Exporting a native class and not const + type
 *   - Should support angular DI
 *
 * Cons:
 *   - Double the work, a lot of boilerplate
 *   - Writing interfaces for instance & static, cumbersome
 *   - Members defined ONLY IN the concrete implementation (i.e. not part of the interface) will
 *     appear as member on the return type of INSTANCE methods that return "this" but WILL NOT
 *     appear on the return type of STATIC methods that return "this" - CONFUSING.
 */

import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, ActiveRecord, TDMCollection, Constructor, Prop, Exclude, ExecuteResponse, Identity } from '@tdm/data';
import { ARMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/ngx-http';


export interface IUserInterfaceStatic extends Constructor<IUserInterface> {
  bfQuery(this: TDMCollection<ARMixin<IUserInterface>>);
  afQuery(this: TDMCollection<ARMixin<IUserInterface>>);
}

export interface IUserInterface extends ActiveRecord<IUserInterface, HttpActionOptions> {
  id: number;
  username__: string;
  _motto_: string;

  rawDeserialized: (options?: HttpActionOptions) => ARMixin<IUserInterface>;
  raw: (options?: HttpActionOptions) => ARMixin<IUserInterface>;
}

@HttpResource({
  endpoint: '/api/users/:id?',
  urlParams: { // there are hard coded params
    limit: '5' // not in path so will go to query string (?param=15)
  },
  headers: {} // set custom headers for this resource
  // more... setting the transformer (incoming result to object), security etc...\
})
@Injectable()
export class UsersInterface extends ARMixin<IUserInterface, IUserInterfaceStatic>()
                            implements  IUserInterface,
                                        BeforeHook<'bfRef', HttpActionOptions>,
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


  @BeforeHook('$refresh')
  bfRef() {
    console.log('BeforeRefresh');
  }

  @AfterHook('$refresh')
  afRef() {
    console.log('AfterRefresh');
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    post: UsersInterface.prototype.postDeserializedHandler
  })
  postDeserialized: (options?: HttpActionOptions) => ARMixin<UsersInterface>;
  private postDeserializedHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  @HttpAction({
    method: HttpActionMethodType.Get,
    post: {
      handler: UsersInterface.prototype.postHandler,
      skipDeserialize: true
    }
  })
  raw: (options?: HttpActionOptions) => ARMixin<UsersInterface>;
  private postHandler(resp: ExecuteResponse, options?: HttpActionOptions) {
  }

  static num: number;

  @Hook({event: 'before', action: 'query'})
  static bfQuery(this: TDMCollection<ARMixin<UsersInterface>>) {
    this.$rc.next()
      .then( coll => {
        console.log(`BeforeQuery-AfterQuery: got ${coll.length}`)
      });
    console.log('BeforeQuery');
  }

  @Hook({event: 'after', action: 'query'})
  static afQuery(this: TDMCollection<ARMixin<UsersInterface>>) {
    console.log('AfterQuery');
    console.log(`AfterQuery: got ${this.length}`)
  }
}

// UsersInterface.find(2).username__;                                   // OK
// UsersInterface.find(2).usernam23e;                                   // SHOULD ERROR
// UsersInterface.num;                                                  // OK
// new UsersInterface().$refresh().username__;                          // OK
// const user: UsersInterface = new UsersInterface();                   // OK
// user.$refresh().username__;                                          // OK
// user.$refresh().abcd;                                                // SHOULD ERROR
// user.$rc.next().then( u => u.id );                                   // OK
// user.$rc.next().then( u => u.f34 );                                  // SHOULD ERROR
// UsersInterface.query().$rc.next().then( coll => coll );   // OK
// UsersInterface.query().$rc.next().then( coll => coll.sdfd );         // SHOULD ERROR

