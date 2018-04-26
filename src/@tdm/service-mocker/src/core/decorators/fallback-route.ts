import { MetaClass } from '@tdm/core/tdm';

import { FallbackRouteMetadata } from '../metadata';

export const FallbackRoute = MetaClass.decorator(FallbackRouteMetadata, true);
