import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, TypeOfActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'customers/:id?'
})
class $Customer extends ActiveRecord() implements modelContract.Customer {
  @Identity()
  @UrlParam('id')
  @Prop()
  CustomerID: string;

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
}

export const Customer: TypeOfActiveRecord<$Customer, typeof $Customer> = <any> $Customer;
export type Customer = ActiveRecord<$Customer>;
