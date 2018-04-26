import { ServiceMockController } from '@tdm/service-mocker';

import { Shipper } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/shippers'
})
export class ShipperController extends BaseController<Shipper> {
  modelClass = Shipper;
}
