import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'products/:id?'
})
class $Product implements modelContract.Product {
  @Identity()
  @UrlParam('id')
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

export const Product = ActiveRecord($Product);
export type Product = ActiveRecord<$Product>;

/* When moving to TS 2.8+
export const Product: TypeOfActiveRecord<typeof $Product> = <any> $Product;
export type Product = InstanceType<typeof Product>;
*/
