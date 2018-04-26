import { Identity, Prop, Constructor } from '@tdm/data';
import { ActiveRecord, HttpResource, UrlParam } from '@tdm/ngx-http-client';
import * as modelContract from '../../../server/shared-models';

@HttpResource({
  endpoint: 'employeeTerritories/:id?'
})
class $EmployeeTerritory implements modelContract.EmployeeTerritory {
  @Identity()
  @UrlParam('id')
  @Prop()
  EmployeeTerritory: number;

  @Prop()
  EmployeeID: number;

  @Prop()
  TerritoryID: number;

}

export const EmployeeTerritory = ActiveRecord($EmployeeTerritory);
export type EmployeeTerritory = ActiveRecord<$EmployeeTerritory>;

/* When moving to TS 2.8+
export const EmployeeTerritory: TypeOfActiveRecord<typeof $EmployeeTerritory> = <any> $EmployeeTerritory;
export type EmployeeTerritory = InstanceType<typeof EmployeeTerritory>;
*/
