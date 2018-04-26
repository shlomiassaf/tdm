import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../../server/shared-models';

@HttpResource({
  endpoint: 'shippers/:id?'
})
class $Shipper implements modelContract.Shipper {
  @Identity()
  @UrlParam('id')
  @Prop()
  ShipperID: number;

  @Prop()
  CompanyName: string;

  @Prop()
  Phone: string;

}

export const Shipper = ActiveRecord($Shipper);
export type Shipper = ActiveRecord<$Shipper>;

/* When moving to TS 2.8+
export const Shipper: TypeOfActiveRecord<typeof $Shipper> = <any> $Shipper;
export type Shipper = InstanceType<typeof Shipper>;
*/
