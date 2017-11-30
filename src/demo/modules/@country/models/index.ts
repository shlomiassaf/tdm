import { ARMixin } from '@tdm/ngx-http';
import { Country as Country_ } from './country';

export { CountryCollection } from './country';
export const Country = ARMixin(Country_);
export type Country = ARMixin<Country_>;
