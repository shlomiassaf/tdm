import { MetaClass } from '@tdm/core/tdm';

import {
  HttpCodeMetadata,
  ForwardMetadata,
  DelayMetadata
} from '../metadata';

export const HttpCode = MetaClass.decorator(HttpCodeMetadata);
export const Forward = MetaClass.decorator(ForwardMetadata);
export const Delay = MetaClass.decorator(DelayMetadata);
