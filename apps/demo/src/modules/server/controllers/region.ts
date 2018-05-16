import { ServiceMockController } from '@tdm/service-mocker';

import { Region } from '../models';
import { BaseController } from './base-controller';

@ServiceMockController({
  path: '/regions'
})
export class RegionController extends BaseController<Region> {
  modelClass = Region;
}
