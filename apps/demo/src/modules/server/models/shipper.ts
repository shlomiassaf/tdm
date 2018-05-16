import { Identity, Prop } from '@tdm/core';
import { LocalForageResource } from '@tdm/local-forage';
import * as modelContract from '../shared-models';

@LocalForageResource({
  resName: 'shippers'
})
export class Shipper implements modelContract.Shipper {
  @Identity()
  @Prop()
  ShipperID: number;

  @Prop()
  CompanyName: string;

  @Prop()
  Phone: string;
}
