import { ActiveRecord } from '@tdm/ngx-http-client';
import { Package as Package_ } from './package';


export const Package = ActiveRecord(Package_);
export type Package = ActiveRecord<Package_>;
