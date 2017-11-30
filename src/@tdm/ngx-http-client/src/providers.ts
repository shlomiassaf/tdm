import { HttpClient } from '@angular/common/http';

let ngHttpService: HttpClient;

export function getHttp(): HttpClient {
  if (!ngHttpService) {
    throw new Error('Http service not present. Make sure you registered the provider and you are not invoking actions before angular bootstrapped.');
  } else {
    return ngHttpService;
  }
}

export function runAfterBootstrap(http: HttpClient): any {
  ngHttpService = http;
  return () => {};
}
