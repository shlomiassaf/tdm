import { ServiceMockController } from '@tdm/service-mocker';

import { OrderDetail } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/orderDetails'
})
export class OrderDetailController extends BaseController<OrderDetail> {
  modelClass = OrderDetail;
}
