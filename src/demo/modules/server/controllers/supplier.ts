import { ServiceMockController } from '@tdm/service-mocker';

import { Supplier } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/suppliers'
})
export class SupplierController extends BaseController<Supplier> {
  modelClass = Supplier;
}
