import { HttpResource } from '@tdm/ngx-http-client';

describe('NG-HTTP', () => {
  describe('Decorators', () => {
    it('should throw when endpoint is missing in HttpResource', () => {
      expect(() => {
        @HttpResource({
          endpoint: undefined
        })
        class User_ {}
      }).toThrowError('Resource endpoint is mandatory.');
    });
  });
});
