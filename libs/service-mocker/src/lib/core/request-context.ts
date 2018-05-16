import { MockerRequest, MockerResponse } from 'service-mocker/server';
import { ServiceMockMethodExtensionsHost } from './metadata/method-extensions';

export interface RequestContext {
  instance: () => any;
  method: Partial<ServiceMockMethodExtensionsHost>;
  req: MockerRequest;
  res: MockerResponse;
}
