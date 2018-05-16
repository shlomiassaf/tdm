import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'customers'
})
export class Customer implements modelContract.Customer {
  @Identity()
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
