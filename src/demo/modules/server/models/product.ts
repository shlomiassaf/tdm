import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'products'
})
export class Product implements modelContract.Product {
  @Identity()
  @Prop()
  ProductID: number;

  @Prop()
  ProductName: string;

  @Prop()
  SupplierID: number;

  @Prop()
  CategoryID: number;

  @Prop()
  QuantityPerUnit: string;

  @Prop()
  UnitPrice: number;

  @Prop()
  UnitsInStock: number;

  @Prop()
  UnitsOnOrder: number;

  @Prop()
  ReorderLevel: number;

  @Prop()
  Discontinued: number;
}
