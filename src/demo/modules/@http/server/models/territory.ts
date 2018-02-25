import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'territories'
})
export class Territory implements modelContract.Territory {
  @Identity()
  @Prop()
  TerritoryID: number;

  @Prop()
  TerritoryDescription: string;

  @Prop()
  RegionID: number;
}
