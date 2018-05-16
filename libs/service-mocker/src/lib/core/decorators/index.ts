import { Constructor, targetStore } from '@tdm/core/tdm';

import { ServiceMockControllerMetadata } from '../metadata';
import { initExtensions } from '../metadata/method-extensions';

export { Server } from './server';
export { OnMessage, OnMessageHandler, OnMessageHandlerDecorator } from './on-message';
export * from './service-mock-method';
export * from './fallback-route';
export * from './method-extensions';
export {
  createRouteHandlerParamDecorator,
  MethodParamInjections,
  ParameterMetadataInfo,
  ParamInjectionHandler
} from './route-handler-param';
export { ServiceMockController } from './service-mock-controller';

targetStore.on
  .processType((target: Constructor<any>) => {
    const controllerMeta = targetStore.getMetaFor(target, ServiceMockControllerMetadata, true);
    if (controllerMeta) {
      initExtensions(target);
    }
  });
