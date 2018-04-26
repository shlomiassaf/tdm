import 'rxjs';
import { Injectable, Injector } from '@angular/core';

import { TestBed, async, inject,  } from '@angular/core/testing';
import { ActiveRecord, HttpResource } from '@tdm/ngx-http';

describe('NG-HTTP', () => {
  describe('Angular integration', () => {
    @Injectable()
    class MyInjectable {
      readonly test: string = 'test';
    }

    @Injectable()
    @HttpResource({
      endpoint: '/api/users'
    })
    class User_ {
      constructor(public myInjectable: MyInjectable) {

      }
      id: number;
    }
    const User = ActiveRecord(User_);
    type User = ActiveRecord<User_>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          MyInjectable,
          User
        ]
      });
    });


    it('should work with angulars DI', inject([User], (user: User) => {
      expect(user instanceof User).toBe(true);
      expect(user.myInjectable.test).toBe('test');
    }));
  });
});
