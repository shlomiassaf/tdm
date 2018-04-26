import { MetaClass, Omit } from '@tdm/core/tdm';

import {
  ServiceMockMethodMetadata,
  ServiceMockMethodMetadataArgs,
  ServiceMockMethodType
} from '../metadata';

export const ServiceMockMethod = MetaClass.decorator(ServiceMockMethodMetadata);

function createMethodDecorator(method: keyof ServiceMockMethodType) {
  return (metaArgs?: Omit<ServiceMockMethodMetadataArgs, 'method'>) => {
    return ServiceMockMethod(<any> Object.assign({}, metaArgs || {}, { method }));
  };
}

export const ServiceMockGet = createMethodDecorator('get');
export const ServiceMockPost = createMethodDecorator('post');
export const ServiceMockPut = createMethodDecorator('put');
export const ServiceMockPatch = createMethodDecorator('patch');
export const ServiceMockDelete = createMethodDecorator('delete');
export const ServiceMockHead = createMethodDecorator('head');
