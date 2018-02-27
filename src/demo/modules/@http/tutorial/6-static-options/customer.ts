import { HttpResource } from '@tdm/ngx-http-client';
import { Customer as BaseCustomer } from '../../client/models';

@HttpResource({
  endpoint: 'customers/:id?',
  urlParams: {
    id: 'CustomerID',
    test: '123'
  },
  headers: {
    'my-private-header': 'private-header',
    'my-public-header': 'public-header'
  }
})
export class Customer extends BaseCustomer { }
