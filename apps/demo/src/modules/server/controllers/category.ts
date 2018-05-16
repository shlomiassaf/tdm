import { ServiceMockController } from '@tdm/service-mocker';

import { Category } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/categories'
})
export class CategoryController extends BaseController<Category> {
  modelClass = Category;
}
