import { ServiceMockController } from '@tdm/service-mocker';

import { EmployeeTerritory } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/employeeTerritories'
})
export class EmployeeTerritoryController extends BaseController<EmployeeTerritory> {
  modelClass = EmployeeTerritory;
}
