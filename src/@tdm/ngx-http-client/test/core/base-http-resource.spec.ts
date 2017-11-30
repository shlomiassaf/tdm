import { ARMixin, HttpResource } from '@tdm/ngx-http-client';

class User_ {
  id: number;
  username: string;
  motto: string;
}

@HttpResource({
  endpoint: '/api/users/:id?'
})
class User extends ARMixin(User_) { }


describe('NG-HTTP', () => {
  describe('Base HTTP Resource', () => {
    it('should build static resource actions', () => {
      expect(typeof User.find).toBe('function');
      expect(typeof User.query).toBe('function');
      expect(typeof User.create).toBe('function');
      expect(typeof User.update).toBe('function');
      expect(typeof User.remove).toBe('function');
    });

    it('should build resource actions', () => {
      expect(typeof User.prototype.$refresh).toBe('function');
      expect(typeof User.prototype.$remove).toBe('function');
      expect(typeof User.prototype.$create).toBe('function');
      expect(typeof User.prototype.$update).toBe('function');
    });
  });

});
