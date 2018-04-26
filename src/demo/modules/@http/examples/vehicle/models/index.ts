import { ActiveRecord } from '@tdm/ngx-http-client';
import * as models from './models';


export const Make = ActiveRecord(models.Make);
export type Make = ActiveRecord<models.Make>;

export const Model = ActiveRecord(models.Model);
export type Model = ActiveRecord<models.Model>;
