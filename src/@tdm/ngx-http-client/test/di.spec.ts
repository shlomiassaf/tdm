import 'rxjs';
import { Injectable } from '@angular/core';

import { TestBed, inject,  } from '@angular/core/testing';
import { ARMixin, HttpResource } from '@tdm/ngx-http-client';

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
    const User = ARMixin(User_);
    type User = ARMixin<User_>;

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
