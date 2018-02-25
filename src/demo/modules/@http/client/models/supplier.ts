import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'suppliers/:id?'
})
class $Supplier implements modelContract.Supplier {
  @Identity()
  @UrlParam('id')
  @Prop()
  SupplierID: number;

  @Prop()
  CompanyName: string;

  @Prop()
  ContactName: string;

  @Prop()
  ContactTitle: string;

  @Prop()
  Address: string;

  @Prop()
  City: string;

  @Prop()
  Region: string;

  @Prop()
  PostalCode: string;

  @Prop()
  Country: string;

  @Prop()
  Phone: string;

  @Prop()
  Fax: string;

  @Prop()
  HomePage: string;

}

export const Supplier = ActiveRecord($Supplier);
export type Supplier = ActiveRecord<$Supplier>;

/* When moving to TS 2.8+
export const Supplier: TypeOfActiveRecord<typeof $Supplier> = <any> $Supplier;
export type Supplier = InstanceType<typeof Supplier>;
*/
