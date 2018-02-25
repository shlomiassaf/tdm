import { Identity, Prop, Constructor } from '@tdm/data';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'orderDetails/:id?'
})
class $OrderDetail implements modelContract.OrderDetail {
  @Identity()
  @UrlParam('id')
  @Prop()
  OrderDetailID: string;

  @Prop()
  OrderID: number;

  @Prop()
  ProductID: string;

  @Prop()
  UnitPrice: string;

  @Prop()
  Quantity: string;

  @Prop()
  Discount: string;

}

export const OrderDetail = ActiveRecord($OrderDetail);
export type OrderDetail = ActiveRecord<$OrderDetail>;

/* When moving to TS 2.8+
export const OrderDetail: TypeOfActiveRecord<typeof $OrderDetail> = <any> $OrderDetail;
export type OrderDetail = InstanceType<typeof OrderDetail>;
*/
