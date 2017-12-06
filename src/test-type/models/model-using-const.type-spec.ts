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
 *
 * Cons:
 *   - Requires manual type creation (https://github.com/Microsoft/TypeScript/issues/6606)
 *
 *   - For multiple mixins need to create type without ARMixin<> help.
 *     https://github.com/Microsoft/TypeScript/issues/13798
 *
 *   - Won't work with angular DI + AOT (https://github.com/angular/angular/issues/14128)
 *
 *   - Instance members defined in a class that extends ARMixin<BASE> will not reflect on types returned from
 *     static methods defined in ARMixin which return the instance.
 *     i.e.: Invoking a static method on the derived class that returns an instance of that class will not refelect
 *     member defined on the derived class.
 *     This does not apply to instance types returned from methods on the instance itself - CONFUSING.
 */
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

  @HttpAction({
    method: HttpActionMethodType.Delete,
    endpoint: '/path/:somewhere',
    pre(ctx: ExecuteContext<any>, fromSomeWhere: string, options?: HttpActionOptions) {
      if (!options) {
        options = {} as any;
      }
      if (!options.urlParams) {
        options.urlParams = {};
      }
      options.urlParams.somewhere = fromSomeWhere;
      return options;
    }
  })
  getSomething: (fromSomeWhere: string, options?: HttpActionOptions) => this;

  static num: number;

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, category: 'CatA' | 'CatB', options?: HttpActionOptions) => {
      return options;
    }
  })
  static find: (id: 'CatA' | 'CatB', options?: HttpActionOptions) => ARMixin<User_>;
}

export const UserConst = ARMixin(User_);
export type UserConst = ARMixin<User_>;

UserConst.findById(2).username;
UserConst.num;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserConst.findById(2).username as number;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserConst.num as string;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 23
 */
UserConst.findById(2).usernam23e;

new UserConst().$refresh().username;

const user: UserConst = new UserConst();

user.$refresh().username;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 17
 */
user.$refresh().abcd;

/**
 * Keep type information in promise chain - property
 */
user.$rc.next().then( u => u.id );

/**
 * Keep type information in promise chain - non existing property
 * @tssert
 * @tsError 2339
 * @loc 30
 */
user.$rc.next().then( u => u.f34 );

/**
 * Keep type information in promise chain - method
 */
user.$rc.next().then( u => u.method(15) );

/**
 * @tssert
 * @tsError 2345
 * @loc 37
 */
user.$rc.next().then( u => u.method('dd') );

/**
 * Keep type information in promise chain - active record method
 * @tssert
 * @tsType Promise<ARMixin<User_>>
 * @loc 16
 */
user.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tssert
 * @tsType Promise<ARMixin<User_>>
 * @loc 37
 */
user.getSomething('value').$rc.next();

UserConst.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tssert
 * @tsError 2339
 * @loc 48
 */
UserConst.query().$rc.next().then(coll => coll.sdfd );

UserConst.query().query().findById(15);
UserConst.query().query();

/**
 * @tssert
 * @tsError 2554
 * @loc 1
 */
UserConst.query().find();

/**
 * @tssert
 * @tsError 2322
 * @loc 2:23
 */
UserConst.findOne(null).$rc.next()
  .then( u => { const x: UserConst = ''; });

/**
 * @tssert
 * @tsError 2339
 * @loc 19
 */
UserConst.query().erer();

UserConst.findAll().findOne(null);
UserConst.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method(15));

/**
 * @tssert
 * @tsError 2345
 * @loc 6:24
 */
UserConst.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

UserConst.find('CatA');
UserConst.find({ urlParams: { } });

/**
 * @tssert
 * @tsError 2353
 * @loc 18
 */
UserConst.find({ urlParams123: { } });

/**
 * @tssert extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 16
 */
UserConst.find('dfdf');

// inheritance

@HttpResource({
  endpoint: '/ext-path'
})
export class UserConstExt extends UserConst {
  valueOnDerived: number;

  extMmethod(value: number): string {
    return '';
  }
}

UserConstExt.findById(2).username;

/**
 * This shows the limitation of not being able to reflect instance members of classes deriving from ARMixin<Base...>
 * when the type is returned from a static member.
 *
 * @tssert keep property type information.
 * @tsError 2339
 * @tsErrorMsg Property 'valueOnDerived' does not exist on type 'ARMixin<User_>'.
 * @loc 26
 */
UserConstExt.findById(2).valueOnDerived;

UserConstExt.num;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserConstExt.findById(2).username as number;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserConstExt.num as string;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 26
 */
UserConstExt.findById(2).usernam23e;

new UserConstExt().$refresh().username;

const userExt: UserConstExt = new UserConstExt();

userExt.$refresh().username;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 20
 */
userExt.$refresh().abcd;

/**
 * Keep type information in promise chain - property
 */
userExt.$rc.next().then( u => u.id );

/**
 * Keep type information in promise chain - non existing property
 * @tssert
 * @tsError 2339
 * @loc 33
 */
userExt.$rc.next().then( u => u.f34 );

/**
 * Keep type information in promise chain - method
 */
userExt.$rc.next().then( u => u.method(15) );

/**
 * @tssert
 * @tsError 2345
 * @loc 40
 */
userExt.$rc.next().then( u => u.method('dd') );

/**
 * Keep type information in promise chain - active record method
 * @tssert
 * @tsType Promise<UserConstExt & User_>
 * @loc 19
 */
userExt.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tsType Promise<UserConstExt & User_>
 * @loc 40
 */
userExt.getSomething('value').$rc.next();

UserConstExt.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tssert
 * @tsError 2339
 * @loc 51
 */
UserConstExt.query().$rc.next().then(coll => coll.sdfd );

UserConstExt.query().query().findById(15);
UserConstExt.query().query();

/**
 * @tssert
 * @tsError 2554
 * @loc 1
 */
UserConstExt.query().find();

/**
 * @tssert
 * @tsError 2322
 * @loc 2:23
 */
UserConstExt.findOne(null).$rc.next()
  .then( u => { const x: UserConstExt = ''; });

/**
 * @tssert
 * @tsError 2339
 * @loc 22
 */
UserConstExt.query().erer();

UserConstExt.findAll().findOne(null);
UserConstExt.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method(15));

/**
 * @tssert
 * @tsError 2345
 * @loc 6:24
 */
UserConstExt.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

UserConstExt.find('CatA');
UserConstExt.find({ urlParams: { } });

/**
 * @tssert
 * @tsError 2353
 * @loc 21
 */
UserConstExt.find({ urlParams123: { } });

/**
 * @tssert extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 19
 */
UserConstExt.find('dfdf');

