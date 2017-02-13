import 'rxjs';
import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { URLSearchParams } from '@angular/http';

import { RestMixin, HttpResource, HttpAction, UrlParam, HttpResourceModule, HttpActionMethodType } from '@tdm/angular-http';

describe('NG-HTTP', () => {
  describe('HTTP Resource Action Handler', () => {
    it('should throw if Http service not set (or action invoked before ng bootstrapped)', () => {
      @HttpResource({
        endpoint: '/api/users/:id?',
        identity: 'id'
      })
      class User extends RestMixin(class { id: number; }) { }

      const user = new User();
      user.id = 20;

      let event;
      new User().$refresh().$ar.events$.first().subscribe( e => event = e, null, () => {
        expect(event).toBeTruthy;
        expect(event.type).toEqual('ActionError');
        expect(event['error'].toString()).toEqual('Error: Http service not preset. Make sure you registered the provider and you are not invoking actions before angular bootstrapped.');
      });
    });


    describe('URL Parsing', () => {
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpModule, HttpResourceModule.forRoot()],
          providers: [
            {
              provide: Http,
              useFactory: (mockBackend, options) => {
                return new Http(mockBackend, options);
              },
              deps: [MockBackend, BaseRequestOptions]
            },
            MockBackend,
            BaseRequestOptions
          ]
        });
      });

      let mockBackend: MockBackend;
      beforeEach(inject([MockBackend], m => mockBackend = m));

      it('should strip trailing slashes', fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users/',
          identity: 'id',
          trailingSlashes: 'strip'
        })
        class User extends RestMixin(class { id: number; }) { }

        mockBackend.connections.subscribe( conn => {
          expect(conn.request.url).toBe('/api/users');
        });

        User.query();
      }));

      it('should force trailing slashes',  fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users',
          identity: 'id',
          trailingSlashes: 'force'
        })
        class User extends RestMixin(class { id: number; }) { }

        mockBackend.connections.subscribe( conn => {
          expect(conn.request.url).toBe('/api/users/');
        });

        User.query();
      }));

      it('should build resource with default param ',  fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users/:id/:param',
          urlParams: { param: '99' },
          identity: 'id'
        })
        class User extends RestMixin(class { id: number; }) { }

        mockBackend.connections.subscribe( conn => {
          expect(conn.request.url).toBe('/api/users/15/99');
        });

        User.find(15);
      }));


      it('should replace http on each call', fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users',
          identity: 'id'
        })
        class User extends RestMixin(class { id: number; }) { }

        mockBackend.connections.subscribe( conn => {
          expect(conn.request.url).toBe('/api/users');
        });

        User.query();
      }));


      it('should throw if id not supplied and not optional',  fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users/:id',
          identity: 'id'
        })
        class User extends RestMixin(class { id: number; }) { }

        let event;
        new User().$refresh().$ar.events$.first().subscribe( e => event = e, null, () => {
          expect(event).toBeTruthy;
          expect(event.type).toEqual('ActionError');
          expect(event['error'].toString()).toEqual('Error: URL Parameter Error in HttpAdapter: Expected "id" to be defined');
        });
      }));

      it('should build resource with bound param',  fakeAsync(() => {
        class User_ {
          id: number;
          @UrlParam() param: number = 99;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:param',
          urlParams: { param: '15' },
          identity: 'id'
        })
        class User extends RestMixin(User_) { }

        mockBackend.connections.subscribe( conn => {
          expect(conn.request.url).toBe('/api/users/15/99');
        });

        User.find(15);
      }));

      it('should use urlTemplateParamName, if defined',  fakeAsync(() => {
        class User_ {
          id: number;

          @UrlParam('myId') someId = 1;
          @UrlParam('onQS') qs1 = 2;

          @UrlParam({
            urlTemplateParamName: 'myId2'
          }) id2 = 4;

          @UrlParam({
            urlTemplateParamName: 'onQS2'
          }) qs2 = 8;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:myId/:myId2',
          identity: 'id'
        })
        class User extends RestMixin(User_) { }

        mockBackend.connections.subscribe( conn => {
          const [path, qs] = conn.request.url.split('?');

          expect(path).toBe('/api/users/15/1/4');
          expect(qs).toBeDefined();

          const search = new URLSearchParams(qs);
          expect(search.get('onQS')).toEqual('2');
          expect(search.get('onQS2')).toEqual('8');
        });

        User.find(15);
      }));

      it('should apply method filter, if set.',  fakeAsync(() => {
        class User_ {
          id: number;

          @UrlParam({
            urlTemplateParamName: 'myId',
            methods: [HttpActionMethodType.Post]
          }) someId = 1;

          @UrlParam({
            urlTemplateParamName: 'myId2',
            methods: [HttpActionMethodType.Post]
          }) id2 = 78;

          @UrlParam({
            urlTemplateParamName: 'myId2',
            methods: [HttpActionMethodType.Delete, HttpActionMethodType.Get]
          }) id3 = 55;

          @UrlParam({
            urlTemplateParamName: 'onQS',
            methods: [HttpActionMethodType.Post, HttpActionMethodType.Get]
          }) id4 = 4;

          @UrlParam({
            urlTemplateParamName: 'onQS2',
            methods: [HttpActionMethodType.Post, HttpActionMethodType.Delete]
          }) id5 = 9;

          @UrlParam({
            urlTemplateParamName: 'onQS3',
            methods: HttpActionMethodType.Get
          }) id6 = 99;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:myId/:myId2',
          urlParams: {
            myId: '5'
          },
          identity: 'id'
        })
        class User extends RestMixin(User_) { }

        mockBackend.connections.subscribe( conn => {
          const [path, qs] = conn.request.url.split('?');

          expect(path).toBe('/api/users/15/5/55');
          expect(qs).toBeDefined();

          const search = new URLSearchParams(qs);
          expect(search.get('onQS')).toEqual('4');
          expect(search.get('onQS2')).toBeNull();
          expect(search.get('onQS3')).toEqual('99');

        });

        User.find(15);
      }));

      it('should set non path param as query string',  fakeAsync(() => {
        class User_ {
          @UrlParam() qs1 = 1;
        }

        @HttpResource({
          endpoint: '/api/users',
          identity: 'id'
        })
        class User extends RestMixin(User_) { }

        mockBackend.connections.subscribe( conn => {
          const qs = conn.request.url.split('?')[1];
          expect(qs).toBeDefined();

          const search = new URLSearchParams(qs);
          expect(search.get('qs1')).toEqual('1');
          expect(search.get('qs2')).toEqual('2');

        });

        User.find(15, { urlParams: { qs2: '2'} });
      }));

      it('should override ', fakeAsync(() => {
        class User_ {
          @UrlParam() qs1 = 'param1-instance';
          @UrlParam() qs2 = 'param2-instance';
        }

        @HttpResource({
          endpoint: '/api/users',
          urlParams: {
            qs1: 'param1',
            qs2: 'param2',
          },
          identity: 'id'
        })
        class User extends RestMixin(User_) { }

        mockBackend.connections.subscribe( conn => {
          const qs = conn.request.url.split('?')[1];
          expect(qs).toBeDefined();

          const search = new URLSearchParams(qs);
          expect(search.get('qs1')).toEqual('param1-instance');
          expect(search.get('qs2')).toEqual('param2-adhoc');

        });

        User.find(15, { urlParams: { qs2: 'param2-adhoc'} });
      }));
    });
  });
});

