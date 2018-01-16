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
 *
 *   - Instance members defined in a class that extends ARMixin<BASE> will not reflect on types returned from
 *     static methods defined in ARMixin which return the instance.
 *     i.e.: Invoking a static method on the derived class that returns an instance of that class will not refelect
 *     member defined on the derived class.
 *     This does not apply to instance types returned from methods on the instance itself - CONFUSING.
 */
import { TDMModel } from '@tdm/core';
import { Identity, ExtendAction, ExecuteContext } from '@tdm/data';
import { ARMixin, HttpResource, HttpActionOptions, HttpAction, HttpActionMethodType } from '@tdm/ngx-http-client';
import './init-tdm';

@HttpResource({
  endpoint: '/path',
  skip: true
})
class User_ {
  @Identity()
  id: number;
  username: string;

  method(value: number): string {
    return '';
  }
  static num: number;

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, category: 'CatA' | 'CatB', options?: HttpActionOptions) => {
      return options;
    }
  })
  static find: (id: 'CatA' | 'CatB', options?: HttpActionOptions) => ARMixin<User_>;
}

export const User = ARMixin(User_);
export type User = ARMixin<User_>;

const user1: User & TDMModel<User> = new User().$rc.clone();
const user2: TDMModel<User> = new User().$rc.clone();
new User().$refresh().$rc.next().then( value => {
  const user3: User & TDMModel<User> = value;
});

/**
 * @tssert
 * @tsError 2322
 * @tsErrorMsg Type 'TDMModel<ARMixin<User_>> & User_ & TDMModel<User_> & HttpActiveRecord' is not assignable to type 'string'.
 * @loc 2:9
 */
new User().$refresh().$rc.next().then( value => {
  const user4: string = value;
});

class X<T extends TDMModel<T>> {
  user: T;
}
class Y extends X<User> {
  constructor(user: User) {
    super();
    this.user = user;
    this.user.$refresh();
    const user1: User & TDMModel<User> = this.user.$rc.clone();
    this.user.$refresh().$rc.self$.subscribe( value => {
      this.user = value;
    });
  }
}
