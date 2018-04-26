import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'suppliers'
})
export class Supplier implements modelContract.Supplier {
  @Identity()
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
