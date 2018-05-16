import { stringify, MetaClass, targetStore, Constructor } from '@tdm/core/tdm';

import { LocalForageAdapter } from './core';
import {
  LocalForageResourceMetadata,
  LocalForageResourceMetadataArgs,
  LocalForageActionMetadata,
  LocalForageActionMetadataArgs // for AOT
} from './metadata';

export const LocalForageAction = MetaClass.decorator(LocalForageActionMetadata);

// FOR AOT
const localForageResource = MetaClass.get(LocalForageResourceMetadata).createResourceDecorator(LocalForageAdapter);

export function LocalForageResource(def?: LocalForageResourceMetadataArgs): (target) => any {
  const t: any = localForageResource(def) as any;
  return t;
}

targetStore.on
  .processType((target: Constructor<any>) => {
    const resource = targetStore.getMetaFor(target, LocalForageResourceMetadata, true);
    if (resource && !resource.identity ) {
      throw new Error(
        `Invalid LocalForageResource "${stringify(target)}" local forage resources must have an identity declared.`
      );
    }
  });
