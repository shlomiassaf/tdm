import { RestMixin } from '@tdm/angular-http';
import * as models from './models';


export const Make = RestMixin(models.Make);
export type Make = RestMixin<models.Make>;

export const Model = RestMixin(models.Model);
export type Model = RestMixin<models.Model>;

