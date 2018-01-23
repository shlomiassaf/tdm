import { Model } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class User {
  @FormProp({
    required: true,
    render: {
      type: 'text',
      label: 'User Name'
    }
  })
  name: string;

  @FormProp({
    render: {
      type: 'text',
      label: 'User Email Address'
    }
  })
  email: string;

  @FormProp({
    flatten: {
      street: {
        required: true,
        render: {
          type: 'text',
          label: 'Street'
        }
      },
      city: {
        required: true,
        render: {
          type: 'text',
          label: 'City'
        }
      },
      zip: {
        render: {
          type: 'number',
          label: 'ZIP'
        }
      },
      state: {
        defaultValue: 'CA',
        render: {
          label: 'State',
          type: 'select',
          data: {
            selections: [
              { value: 'CA', label: 'California' },
              { value: 'NY', label: 'New York' },
              { value: 'WA', label: 'Washington' },
              { value: 'NJ', label: 'New Jersey' }
            ]
          }
        }
      }
    }
  })
  address: {
    street: string;
    city: string;
    zip: number;
    state: 'CA' | 'NY' | 'GA' | 'WY';
  };
}
