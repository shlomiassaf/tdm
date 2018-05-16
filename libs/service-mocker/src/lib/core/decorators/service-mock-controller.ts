import { MetaClass, targetStore, processModel } from '@tdm/core/tdm';

import { ServiceMockControllerMetadata, ServiceMockControllerMetadataArgs } from '../metadata';

const serviceMockController = MetaClass.decorator(ServiceMockControllerMetadata, 'class');
export function ServiceMockController(metaArgs?: ServiceMockControllerMetadataArgs): ClassDecorator {
  return (target: any) => {
    target = serviceMockController(metaArgs)(target) || target;
    const metaClass = targetStore.getMetaFor(target, ServiceMockControllerMetadata, true);
    processModel(target, metaClass, metaClass.skip !== true);
  };
}
