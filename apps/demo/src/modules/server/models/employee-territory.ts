import { AutoIdentity, Prop } from '@tdm/data';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'employeeTerritories'
})
export class EmployeeTerritory implements modelContract.EmployeeTerritory {
  @AutoIdentity()
  @Prop()
  EmployeeTerritory: number;

  @Prop()
  EmployeeID: number;

  @Prop()
  TerritoryID: number;
}
