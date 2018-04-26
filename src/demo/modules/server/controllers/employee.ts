import { ServiceMockController } from '@tdm/service-mocker';

import { Employee } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/employees'
})
export class EmployeeController extends BaseController<Employee> {
  modelClass = Employee;
}
