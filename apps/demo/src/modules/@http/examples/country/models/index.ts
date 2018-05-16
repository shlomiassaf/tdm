import { ActiveRecord } from '@tdm/ngx-http-client';
import { Country as Country_ } from './country';

export { CountryCollection } from './country';
export const Country = ActiveRecord(Country_);
export type Country = ActiveRecord<Country_>;
