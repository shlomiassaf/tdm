import { Identity, Prop } from '@tdm/core';
import { BelongsTo } from '@tdm/data';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';
import { Customer } from './customer';
import { Employee } from './employee';

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
  @BelongsTo({ foreignKey: 'CustomerID' })
  Customer: Customer;

  @Prop()
  EmployeeID: number;

  @Prop()
  @BelongsTo({ foreignKey: 'EmployeeID' })
  Employee: Employee;

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
