import 'rxjs';
import '@tdm/core/add/active-record-state';
import '@tdm/core/add/active-record-state/next';
import { MockMixin, MockResource, MockDeserializer, bucketFactory } from '@tdm/core/testing';
import { ActiveRecord, ActionEndResourceEvent, ResourceEvent, ResourceEventType } from "@tdm/core";
import { ARMethods,  } from '@tdm/core/active-record';
import { MockActionOptions } from "@tdm/core/testing";
import { ActionErrorResourceEvent } from '@tdm/core/active-record/active-record-events';

const localMockDeserializer = new MockDeserializer();

class User_ {
  id: number;
  username: string;
}

@MockResource({
  endpoint: '/api/users/:id?',
  deserializer: () => localMockDeserializer
})
class User extends MockMixin(User_) { }


/**
 *
 * @param events
 * @param ar
 * @param done
 * @param options loose: if true will invoke the callback when array consumed, otherwise waits for timeout. (so no extra events are fired) }
 * @returns {T}
 */
function consumeEvents<T extends ActiveRecord<any, any>>(events: string[], ar: T, done: () => void, options?: {  timeout?: number; loose?: boolean }): T {
  options = Object.assign({ timeout: 500, loose: false }, options || {});

  const timeoutRef = setTimeout(() => {
    expect(events.join(', ')).toBe('');
    subs.unsubscribe();
    done();
  }, options.timeout);

  const subs = ar['$ar'].events$.subscribe( event => {
    expect(events.length).toBeGreaterThan(0);
    expect(event.type).toBe(events.shift());

    if (options.loose && events.length === 0) {
      clearTimeout(timeoutRef);
      subs.unsubscribe();
      done();
    }
  });

  return ar;
}

function collectEvents<T extends ActiveRecord<any, any>>(ar: T, cmd: keyof typeof ARMethods, options?: { cmdData?: MockActionOptions, eventCount?: number, timeout?: number; }): Promise<ResourceEvent[]> {
  let resolve: (result: ResourceEvent[]) => void;
  let reject: (error: any) => void;
  let promise: Promise<ResourceEvent[]> = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  options = Object.assign({ eventCount: 0 }, options || {});

  let hasTimeout = true;
  if (!options.hasOwnProperty('timeout')) {
    hasTimeout = false;
    options.timeout = 500;
  }

  const events = [];

  const subs = ar['$ar'].events$.subscribe( event => {
    events.push(event);
    if (options.eventCount > 0) {
      if (events.length < options.eventCount || hasTimeout) {
        return;
      } else  if (events.length === options.eventCount) {
        resolve(events);
      } else if (events.length > options.eventCount) {
        reject(events);
      }
      clearTimeout(timeoutRef);
      subs.unsubscribe();
    }
  });

  const timeoutRef = setTimeout(() => {
    subs.unsubscribe();
    if (options.eventCount > 0 && !hasTimeout) {
      reject(events);
    } else {
      resolve(events);
    }
  }, options.timeout);

  ar[cmd](options.cmdData);

  return promise;
}

function matchEvents(events: ResourceEvent[], ...shouldBeArr: (keyof typeof ResourceEventType)[]): void {
  expect(events.length).toBe(shouldBeArr.length);
  for (let i=0; i<events.length; i++) {
    expect(events[i].type).toBe(shouldBeArr[i]);
  }
}

function getEvents(spied: jasmine.Spy | any): ResourceEvent[] {
  return spied.calls.argsFor(0)[0] as any;
}

describe('CORE', () => {
  describe('Active Record State', () => {
    const bucket = bucketFactory();

    afterEach( () => bucket.clear() );

    it('should emit events', (done) => {
      const spies = {
        streamCb: () => {},
        errCb: () => {}
      };

      spyOn(spies, 'streamCb').and.callThrough();
      spyOn(spies, 'errCb');

      collectEvents(bucket.create(User), '$refresh', { eventCount: 3, timeout: 100 })
        .then( spies.streamCb )
        .catch( spies.errCb )
        .then( () => {
          expect(spies.streamCb).toHaveBeenCalledTimes(1);
          expect(spies.errCb).toHaveBeenCalledTimes(0);
          matchEvents(getEvents(spies.streamCb), 'ActionStart', 'ActionSuccess', 'ActionEnd');
          done();
        })

    });

    it('should not emit error, only error event', (done) => {
      const spies = {
        streamCb: () => {},
        errCb: () => {}
      };

      spyOn(spies, 'streamCb').and.callThrough();
      spyOn(spies, 'errCb');

      collectEvents(bucket.create(User), '$refresh', { cmdData: { throwError: new Error('testError') }, eventCount: 3, timeout: 100 })
        .then( spies.streamCb )
        .catch( spies.errCb )
        .then( () => {
          expect(spies.streamCb).toHaveBeenCalledTimes(1);
          expect(spies.errCb).toHaveBeenCalledTimes(0);
          matchEvents(getEvents(spies.streamCb), 'ActionStart', 'ActionError');

          const error: ActionErrorResourceEvent = <any>getEvents(spies.streamCb)[1];
          expect(error.error.toString()).toBe('Error: testError');
          done();
        });

    });

    it('should resolve the next action result', (done) => {
      const events = [
        'ActionStart',
        'ActionSuccess',
        'ActionEnd'
      ];

      const spies = {
        streamCb: data => expect(data.username).toBe('test')
      };

      spyOn(spies, 'streamCb').and.callThrough();

      const myDone = () => {
        setTimeout(() => {
          expect(spies.streamCb).toHaveBeenCalledTimes(1);
          done();
        }, 0);

      };

      consumeEvents(events, bucket.create(User), myDone, { loose: true } )
        .$refresh({ returnValue: {username: 'test'} })
        .$ar.next().then(spies.streamCb);

    });

    it('should reject the next action if no action is running', (done) => {

      const spies = {
        streamCb: () => {},
        errCb: err => expect(err.toString()).toBe('Error: Call to next() while not in an active action.')
      };

      spyOn(spies, 'streamCb');
      spyOn(spies, 'errCb').and.callThrough();

      const myDone = () => {
        setTimeout(() => {
          expect(spies.streamCb).toHaveBeenCalledTimes(0);
          expect(spies.errCb).toHaveBeenCalledTimes(1);
          done();
        }, 0);
      };

      bucket.create(User).$ar.next()
        .then(spies.streamCb)
        .catch(spies.errCb)
        .then(myDone);
    });

    it('should reject the next action on error', (done) => {
      const events = [
        'ActionStart',
        'ActionError'
      ];

      let error: Error;
      const spies = {
        streamCb: event => {
          if (event.type === 'ActionError') {
            error = event.error;
          }
        },
        errCb: err => {},
        resolveCb: () => {},
        rejectCb: err => expect(err.toString()).toBe('Error: testError')
      };

      spyOn(spies, 'streamCb').and.callThrough();
      spyOn(spies, 'errCb');
      spyOn(spies, 'resolveCb');
      spyOn(spies, 'rejectCb').and.callThrough();

      const myDone1 = () => {
        expect(spies.streamCb).toHaveBeenCalledTimes(2);
        expect(spies.errCb).toHaveBeenCalledTimes(0);
        expect(error.toString()).toBe('Error: testError');
      };

      const myDone2 = () => {
        expect(spies.resolveCb).toHaveBeenCalledTimes(0);
        expect(spies.rejectCb).toHaveBeenCalledTimes(1);
        done();
      };

      const user = bucket.create(User);
      user.$ar.events$.subscribe(spies.streamCb, spies.errCb);

      consumeEvents(events, user, myDone1, {loose: true})
        .$refresh({ throwError: new Error('testError') })
        .$ar.next()
        .then(spies.resolveCb)
        .catch(spies.rejectCb)
        .then(myDone2);
    });

    it('should reflect busy status', (done) => {
      const events = [
        'ActionStart',
        'ActionSuccess',
        'ActionEnd'
      ];

      let hits = 0;
      const user = consumeEvents(events, bucket.create(User), done, {loose: true});

      user.$ar.events$.subscribe( event => {
        switch(event.type) {
          case 'ActionStart':
            expect(user.$ar.busy).toBe(true);
            break;

          case 'ActionEnd':
            expect(user.$ar.busy).toBe(false);

            if (hits === 0) {
              hits = 1;

              // to test cancellation we fire the action again and cancel right away.
              // to make sure we hit case 'ActionCancel' we also check for event consumption.
              consumeEvents(['ActionStart', 'ActionCancel', 'ActionEnd'], user, done);
              user.$refresh().$ar.cancel();
            }
            break;

          case 'ActionCancel':
            expect(hits).toBe(1);
            expect(user.$ar.busy).toBe(false);
            break;

          default:
            expect(user.$ar.busy).toBe(true);
            break;
        }
      });

      user.$refresh();
    });


    it('should emit busy$', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?',
        deserializer: () => localMockDeserializer,
      })
      class User extends MockMixin(class {}) { }
      const user = bucket.create(User);
      const busyStates = [true, false];


      user.$refresh().$ar.busy$.subscribe(
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

    it('should reflect result in action end event', (done) => {
      let events = [];

      let hits = 0;
      const user = bucket.create(User);
      user.$ar.events$.subscribe( event => {
        events.push(event.type);

        switch(event.type) {
          case 'ActionEnd':
            expect(events[0]).toBe('ActionStart');
            expect(events[2]).toBe('ActionEnd');

            if (hits === 0) {
              hits = 1;
              expect( (event as ActionEndResourceEvent).result).toBe('success');
              expect(events[1]).toBe('ActionSuccess');
              events = [];
              user.$refresh().$ar.cancel();
            } else if (hits === 1) {
              hits = 2;
              expect( (event as ActionEndResourceEvent).result).toBe('cancel');
              expect(events[1]).toBe('ActionCancel');
              events = [];
              user.$refresh({
                throwError: new Error('')
              });
            } else {
              expect(hits).toBe(3);

            }
            break;

          case 'ActionCancel':
            expect(hits).toBe(1);
            break;

          case 'ActionError':
            expect(events[1]).toBe('ActionError');
            expect(hits).toBe(2);
            done();
            break;

          default:
            break;
        }
      });

      user.$refresh();
    });

    it('busy status should update even if events not subscribed.', () => {
      const user = bucket.create(User);
      expect(user.$ar.busy).toBe(false);
      expect(user.$refresh().$ar.busy).toBe(true);
    });

    it('should apply the response', (done) => {
      const events = [
        'ActionStart',
        'ActionSuccess',
        'ActionEnd'
      ];

      const myDone = () => {
        expect(user.username).toBe('test');
        done();
      };

      const user = consumeEvents(events, bucket.create(User), myDone, {loose: true}).$refresh({
        returnValue: { username: 'test' }
      });

    });

    it('should cancel', (done) => {
      const events = [
        'ActionStart',
        'ActionCancel',
        'ActionEnd'
      ];

      // cancelling means the result will not apply...
      const myDone = () => {
        expect(user.username).toBeUndefined();
        done();
      };

      const user = consumeEvents(events, bucket.create(User), myDone).$refresh({
        returnValue: { username: 'test' }
      });

      user.$ar.cancel();
    });

    it('should disconnect', (done) => {
      const events = [
        'ActionStart'
      ];

      // disconnecting is not cancelling, operation should finish
      const myDone = () => {
        expect(user.username).toBe('test');
        done();
      };

      const user = consumeEvents(events, bucket.create(User), myDone).$refresh({
        returnValue: { username: 'test' }
      });

      user.$ar.disconnect();
    });

    it('should disconnect', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?',
        deserializer: () => localMockDeserializer,
      })
      class User extends MockMixin(class {}) { }
      const user = bucket.create(User);

      const busyStates = [true, false];
      user.$refresh().$ar.busy$.subscribe(
        busy => {
          expect(typeof busy).toBe('boolean');
          expect(busy).toBe(busyStates.shift());
          if (busyStates.length === 0) {
            user.$ar.disconnect();
          }
        },
        err => done.fail(err),
        () => done()
      );

    });

    it('should allow reconnect to busy$ after disconnect', (done) => {
      @MockResource({
        endpoint: '/api/users/:id?',
        deserializer: () => localMockDeserializer,
      })
      class User extends MockMixin(class {}) { }
      const user = bucket.create(User);

      const run = (onDone: (err?: any) => void) => {
        const busyStates = [true, false];
        user.$refresh().$ar.busy$.subscribe(
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
        user.$ar.disconnect();
        run((err1) => err1 ? done.fail(err1) : done() );
      });
    });
  });
});
