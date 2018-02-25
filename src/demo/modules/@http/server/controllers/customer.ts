import { ServiceMockController } from '@tdm/service-mocker';

import { Customer } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/customers'
})
export class CustomerController extends BaseController<Customer> {
  modelClass = Customer;
}
