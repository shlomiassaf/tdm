import { Injectable } from '@angular/core';
import { Hook, BeforeHook, AfterHook, ActiveRecordCollection, Prop, Exclude, ExecuteResponse, ExtendAction, ExecuteContext, IdentityValueType, Identity } from '@tdm/core';
import { RestMixin, HttpResource, HttpAction, UrlParam, HttpActionOptions, HttpActionMethodType } from '@tdm/angular-http';

import { BaseRestResource } from '../../../angular-http/src/base-http-resource';
import { ActionOptions } from "@tdm/core/fw";

@HttpResource({
  endpoint: '/api/users/:id?',
  urlParams: {
    limit: '5'
  },
  noBuild: true
})
@Injectable()
class User {
  @Identity()
  @UrlParam() id: number = 2; // this will go into the "endpoint" from the instance!
  @Prop({
    alias: 'username',
  })
  username__: string;


  @Prop({
    alias: 'motto'
  })
  @Exclude()
  _motto_: string;

  constructor() { }
}

class DAO {
  @HttpAction({
    method: HttpActionMethodType.Post,
    validation: 'both' as 'both',
    sendBody: true,
    pre: (ctx: ExecuteContext<HttpActionMetadata>, data: any, options: HttpActionOptions) => {
      // TODO: use directMapper here, this will choose the user defined mapper
      ctx.deserialize(data);
      return options;
    }
  })

  create: (data: any, options?: ActionOptions) => any;

}
