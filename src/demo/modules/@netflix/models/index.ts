import { ARMixin } from '@tdm/angular-http';
import { Title as Title_ } from './title';

export { TitleCollection } from './title';
export const Title = ARMixin(Title_);
export type Title = ARMixin<Title_>;
