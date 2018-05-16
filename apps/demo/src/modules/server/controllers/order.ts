import { ServiceMockController } from '@tdm/service-mocker';

import { Order } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/orders'
})
export class OrderController extends BaseController<Order> {
  modelClass = Order;
}
