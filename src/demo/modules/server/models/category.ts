import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'categories'
})
export class Category implements modelContract.Category {
  @Identity()
  @Prop()
  CategoryID: number;
  @Prop()
  CategoryName: string;
  @Prop()
  Description: string;
  @Prop()
  Picture: string;
}
