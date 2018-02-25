import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'orders'
})
export class Order implements modelContract.Order {
  @Identity()
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
