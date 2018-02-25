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

import { Identity, ExtendAction, ExecuteContext, Constructor, ARInterface } from '@tdm/data';
import { ActiveRecord, HttpResource, HttpActionOptions, HttpAction, HttpActionMethodType } from '@tdm/ngx-http-client';
import './init-tdm';

export interface IUserInterfaceStatic extends Constructor<IUserInterface> {
  num: number;
  // find: (id: 'CatA' | 'CatB', options?: HttpActionOptions) => ActiveRecord<IUserInterface>;
}

export interface IUserInterface extends ARInterface<IUserInterface, HttpActionOptions> {
  id: number;
  username: string;

  method(value: number): string;
  getSomething: (fromSomeWhere: string, options?: HttpActionOptions) => this;
}

@HttpResource({
  endpoint: '/path'
})
export class UsersInterface extends ActiveRecord<IUserInterface, IUserInterfaceStatic>() implements IUserInterface {
  @Identity()
  id: number;
  username: string;
  static num: number;

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

  // @ExtendAction({
  //   pre: (ctx: ExecuteContext<any>, category: 'CatA' | 'CatB', options?: HttpActionOptions) => {
  //     return options;
  //   }
  // })
  // static find: (id: 'CatA' | 'CatB', options?: HttpActionOptions) => ActiveRecord<UsersInterface>;
}

UsersInterface.findById(2).username;
UsersInterface.num;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UsersInterface.findById(2).username as number;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UsersInterface.num as string;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 28
 */
UsersInterface.findById(2).usernam23e;

new UsersInterface().$refresh().username;

const user: UsersInterface = new UsersInterface();

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
 * @tsType Promise<IUserInterface>
 * @loc 16
 */
user.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tssert
 * @tsType Promise<TDMModel<UsersInterface & IUserInterface> & UsersInterface & IUserInterface>
 * @loc 37
 */
user.getSomething('value').$rc.next();

UsersInterface.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tssert
 * @tsError 2339
 * @loc 53
 */
UsersInterface.query().$rc.next().then(coll => coll.sdfd );

UsersInterface.query().query().findById(15);
UsersInterface.query().query();

/**
 * @tssert
 * @tsError 2554
 * @loc 1
 */
UsersInterface.query().find();

/**
 * @tssert
 * @tsError 2322
 * @loc 2:23
 */
UsersInterface.findOne(null).$rc.next()
  .then( u => { const x: UsersInterface = ''; });

/**
 * @tssert
 * @tsError 2339
 * @loc 24
 */
UsersInterface.query().erer();

UsersInterface.findAll().findOne(null);
UsersInterface.findOne(null)
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
UsersInterface.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

// UsersInterface.find('CatA');
UsersInterface.find({ urlParams: { } });

/**
 * @tssert
 * @tsError 2353
 * @loc 23
 */
UsersInterface.find({ urlParams123: { } });

/**
 * @tssert extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 21
 */
UsersInterface.find('dfdf');

// inheritance

@HttpResource({
  endpoint: '/ext-path'
})
export class UsersInterfaceExt extends UsersInterface {
  valueOnDerived: number;

  extMmethod(value: number): string {
    return '';
  }

}

UsersInterfaceExt.findById(2).username;

/**
 * This shows the limitation of not being able to reflect instance members of classes deriving from ActiveRecord<Base...>
 * when the type is returned from a static member.
 *
 * @tssert keep property type information.
 * @tsError 2339
 * @tsErrorMsg Property 'valueOnDerived' does not exist on type 'IUserInterface & TDMModel<IUserInterface> & HttpActiveRecord'.
 * @loc 31
 */
UsersInterfaceExt.findById(2).valueOnDerived;

UsersInterfaceExt.num;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UsersInterfaceExt.findById(2).username as number;

/**
 * @tssert keep property type information.
 * @tsError 2352
 * @loc 1
 */
UsersInterfaceExt.num as string;

/**
 * @tssert not cast to any
 * @tsError 2339
 * @loc 31
 */
UsersInterfaceExt.findById(2).usernam23e;

new UsersInterfaceExt().$refresh().username;

const userExt: UsersInterfaceExt = new UsersInterfaceExt();

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
 * @tsType Promise<IUserInterface>
 * @loc 19
 */
userExt.$rc.next().then( u => u.$remove() );

/**
 * Keep type information in promise chain - active record method
 * @tssert
 * @tsType Promise<TDMModel<UsersInterfaceExt & IUserInterface> & UsersInterfaceExt & IUserInterface>
 * @loc 40
 */
userExt.getSomething('value').$rc.next();

UsersInterfaceExt.query().$rc.next().then(coll => coll.push );

/**
 * Keep type information in promise chain - collection - non existing property
 * @tssert
 * @tsError 2339
 * @loc 56
 */
UsersInterfaceExt.query().$rc.next().then(coll => coll.sdfd );

UsersInterfaceExt.query().query().findById(15);
UsersInterfaceExt.query().query();

/**
 * @tssert
 * @tsError 2554
 * @loc 1
 */
UsersInterfaceExt.query().find();

/**
 * @tssert
 * @tsError 2322
 * @loc 2:23
 */
UsersInterfaceExt.findOne(null).$rc.next()
  .then( u => { const x: UsersInterfaceExt = ''; });

/**
 * @tssert
 * @tsError 2339
 * @loc 27
 */
UsersInterfaceExt.query().erer();

UsersInterfaceExt.findAll().findOne(null);
UsersInterfaceExt.findOne(null)
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
UsersInterfaceExt.findOne(null)
  .$remove()
  .$refresh()
  .$rc.next()
  .then( u => u.$remove().$refresh() )
  .then( u => u.method('XX'));

// UsersInterfaceExt.find('CatA');
UsersInterfaceExt.find({ urlParams: { } });

/**
 * @tssert
 * @tsError 2353
 * @loc 26
 */
UsersInterfaceExt.find({ urlParams123: { } });

/**
 * @tssert extend action
 * @tsError 2559
 * @tsErrorMsg Type '"dfdf"' has no properties in common with type 'HttpActionOptions'.
 * @loc 24
 */
UsersInterfaceExt.find('dfdf');

