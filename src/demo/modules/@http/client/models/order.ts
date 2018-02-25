import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'orders/:id?'
})
class $Order implements modelContract.Order {
  @Identity()
  @UrlParam('id')
  @Prop()
  OrderID: number;

  @Prop()
  CustomerID: string;

  @Prop()
  EmployeeID: number;

  @Prop()
  OrderDate: string;

  @Prop()
  RequiredDate: string;

  @Prop()
  ShippedDate: string;

  @Prop()
  ShipVia: number;

  @Prop()
  Freight: number;

  @Prop()
  ShipName: string;

  @Prop()
  ShipAddress: string;

  @Prop()
  ShipCity: string;

  @Prop()
  ShipRegion: string;

  @Prop()
  ShipPostalCode: string;

  @Prop()
  ShipCountry: string;

}

export const Order = ActiveRecord($Order);
export type Order = ActiveRecord<$Order>;

/* When moving to TS 2.8+
export const Order: TypeOfActiveRecord<typeof $Order> = <any> $Order;
export type Order = InstanceType<typeof Order>;
*/
