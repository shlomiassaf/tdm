import { Prop, Exclude, ExtendAction, ExecuteContext } from '@tdm/core';
import { HttpResource, RestMixin, HttpActionOptions, UrlParam } from '@tdm/angular-http';

import { vehicleMapper } from '../mapper';

@Exclude()
@HttpResource({
  endpoint: 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes',
  urlParams: {
    format: 'json'
  },
  noBuild: true,
  mapper: vehicleMapper
})
export class Make {
  @Prop({
    alias: 'Make_ID'
  })
  makeId: number;

  @Prop({
    alias: 'Make_Name'
  })
  makeName: string;

}

@Exclude()
@HttpResource({
  endpoint: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/:makeId',
  urlParams: {
    format: 'json'
  },
  noBuild: true,
  mapper: vehicleMapper
})
export class Model {
  @Prop({
    alias: 'Make_ID'
  })
  @UrlParam()
  makeId: number;

  @Prop({
    alias: 'Make_Name'
  })
  makeName: string;

  @Prop({
    alias: 'Model_ID'
  })
  modelId: number;

  @Prop({
    alias: 'Model_Name'
  })
  modelName: string;

  @ExtendAction({
    pre: (ctx: ExecuteContext<any>, makeId: number, options?: HttpActionOptions) => {
      if (!options) {
        options = {};
      }
      options.urlParams = Object.assign(options.urlParams || {}, { makeId: makeId });
      return options;
    }
  })
  static query: (makeId: number, options?: HttpActionOptions) => RestMixin<Model>;
}
