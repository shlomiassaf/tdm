import { Identity, Prop } from '@tdm/core';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../server/shared-models';

@HttpResource({
  endpoint: 'employees/:id?'
})
class $Employee implements modelContract.Employee {
  @Identity()
  @UrlParam('id')
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

export const Employee = ActiveRecord($Employee);
export type Employee = ActiveRecord<$Employee>;

/* When moving to TS 2.8+
export const Employee: TypeOfActiveRecord<typeof $Employee> = <any> $Employee;
export type Employee = InstanceType<typeof Employee>;
*/
