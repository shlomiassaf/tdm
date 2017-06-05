import 'rxjs';

import { MockMixin, MockResource, bucketFactory, eventConsumer } from '@tdm/data/testing';
import { ActionEndResourceEvent } from "@tdm/data";
import { ARMethods } from '@tdm/data/active-record';
import { ActionErrorResourceEvent } from '@tdm/data/active-record/active-record-events';

class User_ {
  id: number;
  username: string;
}

@MockResource({
  endpoint: '/api/users/:id?'
})
class User extends MockMixin(User_) { }

describe('@tdm/data', () => {
  describe('Active Record State', () => {
    const bucket = bucketFactory();

    afterEach( () => bucket.clear() );

    it('should emit events', () => {
      return eventConsumer(bucket.create(User))
        .events('ActionStart', 'ActionSuccess', 'ActionEnd')
        .timeout(100)
        .run( ec => ec.ar.$refresh() );
    });

    it('should not emit error, only error event', () => {
      return eventConsumer(bucket.create(User))
        .events('ActionStart', 'ActionError')
        .timeout(100)
        .run( ec => ec.ar.$refresh({ throwError: new Error('testError') }) )
        .then( events => expect((<any>events[1]).error.toString()).toBe('Error: testError') );
    });

    it('should resolve the next action result', () => {
      return bucket.create(User).$refresh({ returnValue: {username: 'test'} }).$rc.next()
        .then( instance => expect(instance.username).toBe('test') )
    });

    it('should reject the next action if no action is running', () => {
      return bucket.create(User).$rc.next()
        .catch( err => expect(err.message).toEqual('Model Error [User]: Call to next() while not in an active action.') );
    });

    it('should reject the next action on error', () => {
      return bucket.create(User).$refresh({ throwError: new Error('testError') }).$rc.next()
        .catch(err => expect(err.toString()).toEqual('Error: testError') );
    });

    it('should reflect busy status', () => {
      const user = bucket.create(User);

      expect(user.$rc.busy).toBe(false);

      return eventConsumer(user)
        .events('ActionStart', 'ActionSuccess', 'ActionEnd')
        .loose(true)
        .onEvent( event => {
          switch(event.type) {
            case 'ActionStart':
              expect(user.$rc.busy).toBe(true);
              break;
            case 'ActionEnd':
              expect(user.$rc.busy).toBe(false);
              break;
          }
        })
        .run( ec => ec.ar.$refresh() )
        .then( () => {
          return eventConsumer(user)
            .events('ActionStart', 'ActionCancel', 'ActionEnd')
            .loose(true)
            .onEvent( event => {
              switch(event.type) {
                case 'ActionStart':
                  expect(user.$rc.busy).toBe(true);
                  break;
                case 'ActionCancel':
                  expect(user.$rc.busy).toBe(false);
                  break;
                case 'ActionEnd':
                  expect( (event as ActionEndResourceEvent).result).toBe('cancel');
                  expect(user.$rc.busy).toBe(false);
                  break;
              }
            })
            .run( ec => {
              ec.ar.$refresh({ timeout: 100 });
              setTimeout(() => ec.ar.$rc.cancel(), 20);
            });
        });
    });


    it('should emit busy$', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(class {}) { }
      const user = bucket.create(User);
      const busyStates = [true, false];


      user.$refresh().$rc.busy$.subscribe(
        busy => {
          expect(typeof busy).toBe('boolean');
          expect(busy).toBe(busyStates.shift());
          if (busyStates.length === 0) {
            done();
          }
        },
        err => done.fail(err)
      );

    });

    it('should reflect result in action end event', () => {
      const user = bucket.create(User);

      return eventConsumer(user)
        .events('ActionStart', 'ActionSuccess', 'ActionEnd')
        .loose(true)
        .onEvent( event => {
          switch(event.type) {
            case 'ActionEnd':
              expect( (event as ActionEndResourceEvent).result).toBe('success');
              break;
          }
        })
        .run( ec => ec.ar.$refresh() )
        .then( () => {
          return eventConsumer(user)
            .events('ActionStart', 'ActionCancel', 'ActionEnd')
            .loose(true)
            .onEvent( event => {
              switch(event.type) {
                case 'ActionEnd':
                  expect( (event as ActionEndResourceEvent).result).toBe('cancel');
                  break;
              }
            })
            .run( ec => {
              ec.ar.$refresh({ timeout: 100 });
              setTimeout(() => ec.ar.$rc.cancel(), 20);
            });
        })
        .then( () => {
          return eventConsumer(user)
            .events('ActionStart', 'ActionError')
            .loose(true)
            .onEvent( event => {
              switch(event.type) {
                case 'ActionError':
                  expect((<any>event).error.toString()).toEqual('Error: testError');
                  break;
              }
            })
            .run( ec => ec.ar.$refresh({ throwError: new Error('testError') }) );
        });
    });

    it('busy status should update even if events not subscribed.', () => {
      const user = bucket.create(User);
      expect(user.$rc.busy).toBe(false);
      expect(user.$refresh().$rc.busy).toBe(true);
    });

    it('should apply the response', () => {
      const user = bucket.create(User);
      return eventConsumer(user)
        .events('ActionStart', 'ActionSuccess', 'ActionEnd')
        .loose(true)
        .run( ec => ec.ar.$refresh({ returnValue: { username: 'test' } }) )
        .then( () => expect(user.username).toBe('test') );
    });

    it('should cancel', () => {
      const user = bucket.create(User);

      return eventConsumer(user)
        .events('ActionStart', 'ActionCancel', 'ActionEnd')
        .loose(true)
        .onEvent( event => {
          switch(event.type) {
            case 'ActionEnd':
              expect( (event as ActionEndResourceEvent).result).toBe('cancel');
              break;
          }
        })
        .run( ec => {
          ec.ar.$refresh({ returnValue: { username: 'test' }, timeout: 100 });
          setTimeout(() => ec.ar.$rc.cancel(), 20);
        })
        .then( () => expect(user.username).toBeUndefined() );
    });

    it('should disconnect but emit next()', () => {
      const user = bucket.create(User);

      let count = 0;
      let next: Promise<User>;
      user.$rc.self$.subscribe( () => count++ );

      return eventConsumer(user)
        .events('ActionStart')
        .loose(true)
        .onEvent( event => {
          switch(event.type) {
            case 'ActionStart':
              user.$rc.disconnect();
              expect(count).toEqual(1);
              break;
            default:
              expect(count).toEqual(1);
              break;
          }
        })
        .run( ec => {
          ec.ar.$refresh({ returnValue: { username: 'test' } });
          next = ec.ar.$rc.next();
        })
        .then( () => next )
        .then( data => {
          expect(user.username).toBe('test');
          expect(user).toBe(data);
        })
    });

    it('should allow reconnect to busy$ after disconnect', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?'
      })
      class User extends MockMixin(class {}) { }
      const user = bucket.create(User);

      const run = (onDone: (err?: any) => void) => {
        const busyStates = [true, false];
        user.$refresh().$rc.busy$.subscribe(
          busy => {
            expect(typeof busy).toBe('boolean');
            expect(busy).toBe(busyStates.shift());
            if (busyStates.length === 0) {
              onDone();
            }
          },
          err => onDone(err)
        );
      };

      run((err) => {
        if (err) {
          return done.fail(err);
        }
        user.$rc.disconnect();
        run((err1) => err1 ? done.fail(err1) : done() );
      });
    });
  });
});
