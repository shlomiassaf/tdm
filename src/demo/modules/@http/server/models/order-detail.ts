import { AutoIdentity, Prop } from '@tdm/data';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'orderDetails'
})
export class OrderDetail implements modelContract.OrderDetail {
  @AutoIdentity()
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
