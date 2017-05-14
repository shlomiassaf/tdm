import { Http } from '@angular/http';

let ngHttpService: Http;

export function getHttp(): Http {
  if (!ngHttpService) {
    throw new Error('Http service not present. Make sure you registered the provider and you are not invoking actions before angular bootstrapped.');
  } else {
    return ngHttpService;
  }
}


export function runAfterBootstrap(http: Http): any {
  ngHttpService = http;
  return () => {};
}

