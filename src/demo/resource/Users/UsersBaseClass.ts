/**
 * Model usage example - Base class implementation
 *
 * This example demonstrates model creation using 2 concrete classes.
 * A private base class that exposes all of the structure and provides implementation and an exposed empty class.
 * The base class is wrapping an empty class that is used as an export, this class should be left empty.
 *
 * Pros:
 *   - Interfaces exposed for both static and instance
 *   - Single place for concrete implementation
 *   - Exporting a native class and not const + type
 *   - Should support angular DI
 *
 * Cons:
 *   - Having 2 classes, cumbersome.
 *   - Members defined ONLY IN the exposed implementation (i.e. not part of the private class) will
 *     appear as member on the return type of INSTANCE methods that return "this" but WILL NOT
 *     appear on the return type of STATIC methods that return "this" - CONFUSING.
 */


import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, ActiveRecordCollection, Prop, Exclude, ExecuteResponse } from '@tdm/core';
import { RestMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/angular-http';

export class User_ implements   BeforeHook<'bfRef', HttpActionOptions>,
                                AfterHook<'afRef', HttpActionOptions> {

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

}

@HttpResource({
  endpoint: '/api/users/:id?',
  identity: 'id',
  transformStrategy: 'inclusive',
  urlParams: { // there are hard coded params
    limit: '5' // not in path so will go to query string (?param=15)
  },
})
@Injectable()
export class UserBaseClass extends RestMixin(User_) { }


// UserBaseClass.find(2).username__;                                    // OK
// UserBaseClass.find(2).usernam23e;                                    // SHOULD ERROR
// UserBaseClass.num;                                                   // OK
// new UserBaseClass().$refresh().username__;                           // OK
// const user: UserBaseClass = new UserBaseClass();                     // OK
// user.$refresh().username__;                                          // OK
// user.$refresh().abcd;                                                // SHOULD ERROR
// user.$ar.next().then( u => u.id );                                   // OK
// user.$ar.next().then( u => u.f34 );                                  // SHOULD ERROR
// UserBaseClass.query().$ar.next().then(coll => coll.collection );     // OK
// UserBaseClass.query().$ar.next().then(coll => coll.sdfd );           // SHOULD ERROR
