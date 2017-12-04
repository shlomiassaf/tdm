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
import { ARMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/ngx-http-client';

export interface IUserInterfaceStatic extends Constructor<IUserInterface> {
  num: number;
}
export interface IUserInterface extends ActiveRecord<IUserInterface, HttpActionOptions> {
  id: number;
  username: string;
}

@HttpResource({
  endpoint: '/path'
})
@Injectable()
export class UsersInterface extends ARMixin<IUserInterface, IUserInterfaceStatic>() implements  IUserInterface {
  @Identity()
  id: number;
  username: string;
  static num: number;
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

