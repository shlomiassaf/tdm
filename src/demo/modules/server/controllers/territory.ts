import { ServiceMockController } from '@tdm/service-mocker';

import { Territory } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/territories'
})
export class TerritoryController extends BaseController<Territory> {
  modelClass = Territory;
}
