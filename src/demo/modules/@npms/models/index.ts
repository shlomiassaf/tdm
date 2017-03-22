import { RestMixin } from '@tdm/angular-http';
import { Package as Package_ } from './package';


export const Package = RestMixin(Package_);
export type Package = RestMixin<Package_>;
