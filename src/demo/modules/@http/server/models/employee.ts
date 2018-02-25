import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'employees'
})
export class Employee implements modelContract.Employee {
  @Identity()
  @Prop()
  EmployeeID: number;

  @Prop()
  LastName: string;

  @Prop()
  FirstName: string;

  @Prop()
  Title: string;

  @Prop()
  TitleOfCourtesy: string;

  @Prop()
  BirthDate: string;

  @Prop()
  HireDate: string;

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
  HomePhone: string;

  @Prop()
  Extension: number;

  @Prop()
  Photo: any;

  @Prop()
  Notes: string;

  @Prop()
  ReportsTo: number;

  @Prop()
  PhotoPath: string;
}
