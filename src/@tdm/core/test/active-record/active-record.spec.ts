import 'rxjs';
import { activeRecordClassFactory, ActiveRecordState } from '../../src/active-record';


describe('CORE', () => {
  describe('Active Record', () => {
    it('should return the original name when calling toString()', () => {
      const User = activeRecordClassFactory(class User { });
      expect(new User().toString()).toEqual('User');
    });

    it('should have an active record state', () => {
      const User = activeRecordClassFactory(class User { });
      const user = new User();
      expect(user['$ar'] instanceof ActiveRecordState).toBe(true);
    });


    it('should pass ctor arguments to the base class', () => {
      const User = activeRecordClassFactory(class User {
        constructor(value: string) {
          expect(value).toBe('value');
        }
      });
      const user = new User('value');
    });
  });
});
