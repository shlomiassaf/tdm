import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../../server/shared-models';

@HttpResource({
  endpoint: 'regions/:id?'
})
class $Region implements modelContract.Region {
  @Identity()
  @UrlParam('id')
  @Prop()
  RegionID: number;

  @Prop()
  RegionDescription: string;

}

export const Region = ActiveRecord($Region);
export type Region = ActiveRecord<$Region>;

/* When moving to TS 2.8+
export const Region: TypeOfActiveRecord<typeof $Region> = <any> $Region;
export type Region = InstanceType<typeof Region>;
*/
