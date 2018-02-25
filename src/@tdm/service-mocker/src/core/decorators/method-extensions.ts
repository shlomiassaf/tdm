import { MetaClass } from '@tdm/core/tdm';

import {
  HttpCodeMetadata,
  ForwardMetadata
} from '../metadata';

export const HttpCode = MetaClass.decorator(HttpCodeMetadata);
export const Forward = MetaClass.decorator(ForwardMetadata);
