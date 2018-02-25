import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'regions'
})
export class Region implements modelContract.Region {
  @Identity()
  @Prop()
  RegionID: number;

  @Prop()
  RegionDescription: string;
}
