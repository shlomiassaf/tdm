import { ARMixin } from '@tdm/ngx-http-client';
import { Package as Package_ } from './package';


export const Package = ARMixin(Package_);
export type Package = ARMixin<Package_>;
