import 'rxjs';

import { ActiveRecord, MockResource, MockActionOptions, MockAction, bucketFactory } from '@tdm/data/testing';
import { Hook, TDMCollection, ActionMethodType, ExecuteResponse } from '@tdm/data';

class User_ {
  id: number;
  username: string;

  @Hook({event: 'before', action: '$get'})
  beforeRefresh() { }

  @Hook({event: 'after', action: '$get'})
  afterRefresh() { }

  @MockAction({
    method: ActionMethodType.READ,
    post: User_.prototype.rawDeserializedHandler
  })
  rawDeserialized: (options?: MockActionOptions) => ActiveRecord<User_>;
  rawDeserializedHandler(resp: ExecuteResponse, options?: MockActionOptions) {
  }

  @MockAction({
    method: ActionMethodType.READ,
    post: {
      handler: User_.prototype.rawHandler,
    }
  })
  raw: (options?: MockActionOptions) => ActiveRecord<User_>;
  rawHandler(resp: ExecuteResponse, options?: MockActionOptions) {
  }


  @Hook({event: 'before', action: 'query'})
  static beforeQuery(this: TDMCollection<ActiveRecord<User_>>) { }

  @Hook({event: 'after', action: 'query'})
  static afterQuery(this: TDMCollection<ActiveRecord<User_>>) { }

}

@MockResource({
  endpoint: '/api/users/:id?'
})
class User extends ActiveRecord(User_) { }

type Spify<T> = { [P in keyof T]: jasmine.Spy}

describe('@tdm/data', () => {
  const PUser: Spify<User> = <any>User.prototype;
  const SUser: Spify<typeof User> = User as any;


  describe('Action Controller', () => {
    const bucket = bucketFactory();

    beforeEach(() => {
      spyOn(PUser, 'beforeRefresh');
      spyOn(PUser, 'afterRefresh');
      spyOn(PUser, 'rawDeserializedHandler');
      spyOn(PUser, 'rawHandler');
      spyOn(SUser, 'beforeQuery');
      spyOn(SUser, 'afterQuery');
    });

    afterEach(() => {
      bucket.clear();
      PUser.beforeRefresh.calls.reset();
      PUser.afterRefresh.calls.reset();
      PUser.rawHandler.calls.reset();
      PUser.rawDeserializedHandler.calls.reset();
      SUser.beforeQuery.calls.reset();
      SUser.afterQuery.calls.reset();
    });


    it('should call instance level hooks', () => {
      const user = bucket.create(User);
      return user.$get().next()
        .then( data => {
          expect(PUser.beforeRefresh).toHaveBeenCalledTimes(1);
          expect(PUser.afterRefresh).toHaveBeenCalledTimes(1);
          expect(PUser.beforeRefresh.calls.mostRecent().object).toBe(user);
          expect(PUser.afterRefresh.calls.mostRecent().object).toBe(user);
        });
    });

    it('should call static level hooks', () => {
      return User.query({ returnValue: [ { username: '1' }, { username: '2' }, { username: '3' } ] }).$rc.next()
        .then( data => {
          bucket.bucket.push(data)
          expect(SUser.beforeQuery).toHaveBeenCalledTimes(1);
          expect(SUser.afterQuery).toHaveBeenCalledTimes(1);
          expect(SUser.beforeQuery.calls.mostRecent().object instanceof TDMCollection).toBe(true);
          expect(SUser.afterQuery.calls.mostRecent().object instanceof TDMCollection).toBe(true);

          expect(data).toBe(SUser.afterQuery.calls.mostRecent().object);

          SUser.afterQuery.calls.mostRecent().object.forEach( (value, idx) => {
            expect(value.username).toBe(String(idx +1))
          });
        });
    });
  });
});
