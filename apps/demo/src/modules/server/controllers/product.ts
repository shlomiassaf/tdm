import { ServiceMockController } from '@tdm/service-mocker';

import { Product } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/products'
})
export class ProductController extends BaseController<Product> {
  modelClass = Product;
}
