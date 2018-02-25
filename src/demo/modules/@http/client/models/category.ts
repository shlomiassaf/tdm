import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'categories/:id?'
})
class $Category implements modelContract.Category {
  @Identity()
  @UrlParam('id')
  @Prop()
  CategoryID: number;

  @Prop()
  CategoryName: string;

  @Prop()
  Description: string;

  @Prop()
  Picture: string;
}

export const Category = ActiveRecord($Category);
export type Category = ActiveRecord<$Category>;
