import 'rxjs';

import { TDMModelBase } from '@tdm/core';
import { ResourceControl } from '@tdm/data/plugin/resource-control/resource-control';

describe('CORE', () => {
  describe('Active Record', () => {


    it('should return the original name when calling toString()', () => {
      const User = TDMModelBase.factory(class User { });
      expect(new User().toString()).toEqual('User');
    });

    it('should have an active record state', () => {
      const User = TDMModelBase.factory(class User { });
      const user = new User();
      expect(user['$ar'] instanceof ResourceControl).toBe(true);
    });


    it('should pass ctor arguments to the base class', () => {
      const User = TDMModelBase.factory(class User {
        constructor(value: string) {
          expect(value).toBe('value');
        }
      });
      const user = new User('value');
    });
  });
});
