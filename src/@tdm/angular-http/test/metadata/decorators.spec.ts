import { RestMixin, HttpResource, HttpAction, UrlParam } from '@tdm/angular-http';

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
