import { RestMixin } from '@tdm/angular-http';
import { Title as Title_ } from './title';


export const Title = RestMixin(Title_);
export type Title = RestMixin<Title_>;
