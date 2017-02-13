import 'rxjs';
import { MockMixin, MockResource, MockDeserializer } from '@tdm/core/testing';
import { Hook, ActiveRecordCollection, ExecuteResponse } from '@tdm/core';

import { MockActionOptions } from "../../testing/mock-adapter/core/interfaces";
import { MockAction } from "../../testing/mock-adapter/metadata";
import { ActionMethodType } from "../../src/metadata/meta-types/action";

const localMockDeserializer = new MockDeserializer();

class User_ {
  id: number;
  username: string;

  @Hook({event: 'before', action: '$refresh'})
  beforeRefresh() { }

  @Hook({event: 'after', action: '$refresh'})
  afterRefresh() { }

  @MockAction({
    method: ActionMethodType.READ,
    raw: {
      handler: User_.prototype.rawDeserializedHandler,
      deserialize: true
    }
  })
  rawDeserialized: (options?: MockActionOptions) => MockMixin<User_>;
  rawDeserializedHandler(resp: ExecuteResponse, options?: MockActionOptions) {
  }

  @MockAction({
    method: ActionMethodType.READ,
    raw: User_.prototype.rawHandler
  })
  raw: (options?: MockActionOptions) => MockMixin<User_>;
  rawHandler(resp: ExecuteResponse, options?: MockActionOptions) {
  }


  @Hook({event: 'before', action: 'query'})
  static beforeQuery(this: ActiveRecordCollection<MockMixin<User_>>) { }

  @Hook({event: 'after', action: 'query'})
  static afterQuery(this: ActiveRecordCollection<MockMixin<User_>>) { }

}

@MockResource({
  endpoint: '/api/users/:id?',
  identity: 'id',
  deserializer: () => localMockDeserializer
})
class User extends MockMixin(User_) { }

type Spify<T> = { [P in keyof T]: jasmine.Spy}

describe('CORE', () => {
  const PUser: Spify<User> = <any>User.prototype;
  const SUser: Spify<typeof User> = User as any;


  describe('Action Controller', () => {
    beforeEach(() => {
      spyOn(PUser, 'beforeRefresh');
      spyOn(PUser, 'afterRefresh');
      spyOn(PUser, 'rawDeserializedHandler');
      spyOn(PUser, 'rawHandler');
      spyOn(SUser, 'beforeQuery');
      spyOn(SUser, 'afterQuery');
    });

    afterEach(() => {
      PUser.beforeRefresh.calls.reset();
      PUser.afterRefresh.calls.reset();
      PUser.rawHandler.calls.reset();
      PUser.rawDeserializedHandler.calls.reset();
      SUser.beforeQuery.calls.reset();
      SUser.afterQuery.calls.reset();
    });


    it('should call instance level hooks', (done) => {
      const user = new User();
      user.$refresh().$ar.next()
        .then( data => {
          expect(PUser.beforeRefresh).toHaveBeenCalledTimes(1);
          expect(PUser.afterRefresh).toHaveBeenCalledTimes(1);
          expect(PUser.beforeRefresh.calls.mostRecent().object).toBe(user);
          expect(PUser.afterRefresh.calls.mostRecent().object).toBe(user);
          done();
        })
        .catch( err => done.fail(err) );
    });

    it('should call static level hooks', (done) => {
      User.query({ returnValue: [ { username: '1' }, { username: '2' }, { username: '3' } ] }).$ar.next()
        .then( data => {
          expect(SUser.beforeQuery).toHaveBeenCalledTimes(1);
          expect(SUser.afterQuery).toHaveBeenCalledTimes(1);
          expect(SUser.beforeQuery.calls.mostRecent().object instanceof ActiveRecordCollection).toBe(true);
          expect(SUser.afterQuery.calls.mostRecent().object instanceof ActiveRecordCollection).toBe(true);

          expect(data).toBe(SUser.afterQuery.calls.mostRecent().object);

          SUser.afterQuery.calls.mostRecent().object.collection.forEach( (value, idx) => {
            expect(value.username).toBe(String(idx +1))
          });
          done();
        })
        .catch( err => done.fail(err) );
    });
  });
});
