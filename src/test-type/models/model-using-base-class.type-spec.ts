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

@HttpResource({
  endpoint: '/path'
})
export class UserBaseClass extends ARMixin(User_) {
  valueOnDerived: number;

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
}

UserBaseClass.findById(2).username;

/**
 * This shows the limitation of not being able to reflect instance members of classes deriving from ARMixin<Base...>
 * when the type is returned from a static member.
 *
 * @typeTest
 * @tsError 2339
 * @tsErrorMsg Property 'valueOnDerived' does not exist on type 'ARMixin<User_>'.
 * @loc 27
 */
UserBaseClass.findById(2).valueOnDerived;

UserBaseClass.num;

/**
 * @typeTest keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserBaseClass.findById(2).username as number;

/**
 * @typeTest keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserBaseClass.num as string;

/**
 * @typeTest not cast to any
 * @tsError 2339
 * @loc 27
 */
UserBaseClass.findById(2).usernam23e;

new UserBaseClass().$refresh().username;

const user: UserBaseClass = new UserBaseClass();

user.$refresh().username;

/**
 * @typeTest not cast to any
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
 * @tsError 2339
 * @loc 30
 */
user.$rc.next().then( u => u.f34 );

/**
 * Keep type information in promise chain - method
 */
user.$rc.next().then( u => u.method(15) );

/**
 * @typeTest
 * @tsError 2345
 * @loc 37
 */
user.$rc.next().then( u => u.method('dd') );

/**
 * Keep type information in promise chain - active record method
 * @tsType Promise<UserBaseClass & User_>
 * @loc 16
 */
user.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tsType Promise<UserBaseClass & User_>
 * @loc 37
 */
user.getSomething('value').$rc.next();

UserBaseClass.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tsError 2339
 * @loc 52
 */
UserBaseClass.query().$rc.next().then(coll => coll.sdfd );

UserBaseClass.query().query().findById(15);
UserBaseClass.query().query();

/**
 * @typeTest
 * @tsError 2554
 * @loc 1
 */
UserBaseClass.query().find();

/**
 * @typeTest
 * @tsError 2322
 * @loc 2:23
 */
UserBaseClass.findOne(null).$rc.next()
  .then( u => { const x: UserBaseClass = ''; });

/**
 * @typeTest
 * @tsError 2339
 * @loc 23
 */
UserBaseClass.query().erer();

UserBaseClass.findAll().findOne(null);
UserBaseClass.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method(15));

/**
 * @typeTest
 * @tsError 2345
 * @loc 6:24
 */
UserBaseClass.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

UserBaseClass.find('CatA');
UserBaseClass.find({ urlParams: { } });

/**
 * @typeTest
 * @tsError 2353
 * @loc 22
 */
UserBaseClass.find({ urlParams123: { } });

/**
 * @typeTest extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 20
 */
UserBaseClass.find('dfdf');

// inheritance

@HttpResource({
  endpoint: '/ext-path'
})
export class UserBaseClassExt extends UserBaseClass {
  valueOnDerivedExt: number;
  extMmethod(value: number): string {
    return '';
  }

}

UserBaseClassExt.findById(2).username;

/**
 * This shows the limitation of not being able to reflect instance members of classes deriving from ARMixin<Base...>
 * when the type is returned from a static member.
 *
 * @typeTest
 * @tsError 2339
 * @tsErrorMsg Property 'valueOnDerived' does not exist on type 'ARMixin<User_>'.
 * @loc 30
 */
UserBaseClassExt.findById(2).valueOnDerived;

/**
 * This shows the limitation of not being able to reflect instance members of classes deriving from ARMixin<Base...>
 * when the type is returned from a static member.
 *
 * @typeTest
 * @tsError 2339
 * @tsErrorMsg Property 'valueOnDerivedExt' does not exist on type 'ARMixin<User_>'.
 * @loc 30
 */
UserBaseClassExt.findById(2).valueOnDerivedExt;

UserBaseClassExt.num;

/**
 * @typeTest keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserBaseClassExt.findById(2).username as number;

/**
 * @typeTest keep property type information.
 * @tsError 2352
 * @loc 1
 */
UserBaseClassExt.num as string;

/**
 * @typeTest not cast to any
 * @tsError 2339
 * @loc 30
 */
UserBaseClassExt.findById(2).usernam23e;

new UserBaseClassExt().$refresh().username;

const userExt: UserBaseClassExt = new UserBaseClassExt();

userExt.$refresh().username;

/**
 * @typeTest not cast to any
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
 * @tsError 2339
 * @loc 33
 */
userExt.$rc.next().then( u => u.f34 );

/**
 * Keep type information in promise chain - method
 */
userExt.$rc.next().then( u => u.method(15) );

/**
 * @typeTest
 * @tsError 2345
 * @loc 40
 */
userExt.$rc.next().then( u => u.method('dd') );

/**
 * Keep type information in promise chain - active record method
 * @tsType Promise<UserBaseClassExt & User_>
 * @loc 19
 */
userExt.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tsType Promise<UserBaseClassExt & User_>
 * @loc 40
 */
userExt.getSomething('value').$rc.next();

UserBaseClassExt.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tsError 2339
 * @loc 55
 */
UserBaseClassExt.query().$rc.next().then(coll => coll.sdfd );

UserBaseClassExt.query().query().findById(15);
UserBaseClassExt.query().query();

/**
 * @typeTest
 * @tsError 2554
 * @loc 1
 */
UserBaseClassExt.query().find();

/**
 * @typeTest
 * @tsError 2322
 * @loc 2:23
 */
UserBaseClassExt.findOne(null).$rc.next()
  .then( u => { const x: UserBaseClassExt = ''; });

/**
 * @typeTest
 * @tsError 2339
 * @loc 26
 */
UserBaseClassExt.query().erer();

UserBaseClassExt.findAll().findOne(null);
UserBaseClassExt.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method(15));

/**
 * @typeTest
 * @tsError 2345
 * @loc 6:24
 */
UserBaseClassExt.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

UserBaseClassExt.find('CatA');
UserBaseClassExt.find({ urlParams: { } });

/**
 * @typeTest
 * @tsError 2353
 * @loc 25
 */
UserBaseClassExt.find({ urlParams123: { } });

/**
 * @typeTest extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 23
 */
UserBaseClassExt.find('dfdf');

