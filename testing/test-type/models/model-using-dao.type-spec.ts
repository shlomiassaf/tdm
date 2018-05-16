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
 *   - For multiple mixins need to create type without ActiveRecord<> help.
 *     https://github.com/Microsoft/TypeScript/issues/13798
 *
 *   - Won't work with angular DI + AOT (https://github.com/angular/angular/issues/14128)
 *
 *   - Instance members defined in a class that extends ActiveRecord<BASE> will not reflect on types returned from
 *     static methods defined in ActiveRecord which return the instance.
 *     i.e.: Invoking a static method on the derived class that returns an instance of that class will not refelect
 *     member defined on the derived class.
 *     This does not apply to instance types returned from methods on the instance itself - CONFUSING.
 */
import { Identity } from '@tdm/data';
import { NgDAO, HttpResource } from '@tdm/ngx-http-client';
import './init-tdm';

@HttpResource({
  endpoint: '/path'
})
class User {
  @Identity()
  id: number;
  username: string;

  method(value: number): string {
    return '';
  }

  static num: number;
}

const ngDao = new NgDAO(null, null);
/**
 * @tssert
 * @tsType HttpDao<User>
 * @loc 5
 */
/**
 * @tssert
 * @tsType Promise<User>
 * @loc 23
 */
ngDao.get(User).findById(15);
