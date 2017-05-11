import { ARMixin } from '@tdm/ngx-http';
import * as models from './models';


export const Make = ARMixin(models.Make);
export type Make = ARMixin<models.Make>;

export const Model = ARMixin(models.Model);
export type Model = ARMixin<models.Model>;

