import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../../server/shared-models';

@HttpResource({
  endpoint: 'territories/:id?'
})
class $Territory implements modelContract.Territory {
  @Identity()
  @UrlParam('id')
  @Prop()
  TerritoryID: number;

  @Prop()
  TerritoryDescription: string;

  @Prop()
  RegionID: number;

}

export const Territory = ActiveRecord($Territory);
export type Territory = ActiveRecord<$Territory>;

/* When moving to TS 2.8+
export const Territory: TypeOfActiveRecord<typeof $Territory> = <any> $Territory;
export type Territory = InstanceType<typeof Territory>;
*/
