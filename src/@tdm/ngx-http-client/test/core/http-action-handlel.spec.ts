import 'rxjs';

import { Identity } from '@tdm/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ARMixin, HttpResource, UrlParam, HttpClientResourceModule, HttpActionMethodType } from '@tdm/ngx-http-client';
import { bucketFactory, eventConsumer } from '@tdm/data/testing';

describe('NG-HTTP', () => {
  describe('HTTP Resource Action Handler', () => {
    const bucket = bucketFactory();
    afterEach(() => bucket.clear() );

    it('should throw if Http service not set (or action invoked before ng bootstrapped)', () => {
      @HttpResource({
        endpoint: '/api/users/:id?'
      })
      class User extends ARMixin(class { id: number; }) { }

      return eventConsumer(new User())
        .events('ActionStart', 'ActionError')
        .loose(true)
        .onEvent( event => {
          if (event.type === 'ActionError') {
            expect(event['error'].toString()).toEqual('Error: Http service not present. Make sure you registered the provider and you are not invoking actions before angular bootstrapped.');
          }
        })
        .run( ec => ec.ar.$refresh() );
    });


    describe('URL Parsing', () => {
      let httpMock: HttpTestingController;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [ HttpClientTestingModule, HttpClientResourceModule.forRoot() ]
        });
        httpMock = TestBed.get(HttpTestingController);
      });

      const bucket = bucketFactory();
      afterEach(() => bucket.clear() );

      it('should strip trailing slashes', fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users/',
          trailingSlashes: 'strip'
        })
        class User extends ARMixin(class { id: number; }) { }

        bucket.bucket.push(User.query());
        tick(10);

        const req = httpMock.expectOne('/api/users');
        req.flush([]);
        httpMock.verify();
      }));

      it('should force trailing slashes',  fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users',
          trailingSlashes: 'force'
        })
        class User extends ARMixin(class { id: number; }) { }

        bucket.bucket.push(User.query());
        tick(10);
        const req = httpMock.expectOne('/api/users/');
        req.flush( []);
        httpMock.verify();
      }));

      it('should build resource with default param ',  fakeAsync(() => {
        class UserBase {
          @Identity()
          @UrlParam() id: number;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:param',
          urlParams: { param: '99' }
        })
        class User extends ARMixin(UserBase) { }

        bucket.bucket.push(User.findById(15));
        tick(10);
        const req = httpMock.expectOne('/api/users/15/99');
        req.flush( []);
        httpMock.verify();
      }));


      it('should replace http on each call', fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users'
        })
        class User extends ARMixin(class {
          @Identity()
          @UrlParam() id: number;
        }) { }

        bucket.bucket.push(User.findById(15));
        tick(10);
        const req = httpMock.expectOne('/api/users');
        req.flush( []);
        httpMock.verify();
      }));


      it('should throw if id not supplied and not optional', fakeAsync(() => {
        @HttpResource({
          endpoint: '/api/users/:id'
        })
        class User extends ARMixin(class {
          @Identity()
          @UrlParam() id: number;
        }) { }

        const EVENTS = ['ActionStart', 'ActionError'];

        const unsub = new User().$refresh().$rc.events$.subscribe( event => {
          expect(event.type).toEqual(EVENTS.shift());
          if (event.type === 'ActionError') {
            expect(event['error'].toString()).toEqual('Error: URL Parameter Error in HttpAdapter: Expected "id" to be defined');
            unsub.unsubscribe();
          }
        });
        tick(10);
      }));

      it('should build resource with bound param', fakeAsync(() => {
        class User_ {
          @Identity()
          @UrlParam() id: number;
          @UrlParam() param: number = 99;
        }

        @HttpResource({
          endpoint: '/api/users/:id/:param',
          urlParams: { param: '15' }
        })
        class User extends ARMixin(User_) { }

        bucket.bucket.push(User.findById(15));
        tick(10);
        const req = httpMock.expectOne('/api/users/15/99');
        req.flush( []);
        httpMock.verify();
      }));

      it('should use urlTemplateParamName, if defined',  fakeAsync(() => {
        class User_ {
          @Identity()
          @UrlParam() id: number;

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
          endpoint: '/api/users/:id/:myId/:myId2'
        })
        class User extends ARMixin(User_) { }

        bucket.bucket.push(User.findById(15));
        tick(10);
        const req = httpMock.expectOne('/api/users/15/1/4?onQS=2&onQS2=8');
        req.flush( []);
        httpMock.verify();
      }));

      it('should apply method filter, if set.',  fakeAsync(() => {
        class User_ {
          @Identity()
          @UrlParam() id: number;

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
          }
        })
        class User extends ARMixin(User_) { }

        bucket.bucket.push(User.findById(15));
        tick(10);
        const req = httpMock.expectOne('/api/users/15/5/55?onQS=4&onQS3=99');
        req.flush( []);
        httpMock.verify();
      }));

      it('should set non path param as query string',  fakeAsync(() => {
        class User_ {
          @UrlParam() qs1 = 1;
        }

        @HttpResource({
          endpoint: '/api/users'
        })
        class User extends ARMixin(User_) { }

        bucket.bucket.push(User.findById(15, { urlParams: { qs2: '2'} }));
        tick(10);
        const req = httpMock.expectOne('/api/users?qs1=1&qs2=2');
        req.flush( []);
        httpMock.verify();
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
          }
        })
        class User extends ARMixin(User_) { }

        bucket.bucket.push(User.find({ urlParams: { qs2: 'param2-adhoc'} }));
        tick(10);
        const req = httpMock.expectOne('/api/users?qs1=param1-instance&qs2=param2-adhoc');
        req.flush( []);
        httpMock.verify();
      }));
    });
  });
});
