import { Model } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class User {
  @FormProp({
    required: true,
    render: {
      vType: 'text',
      label: 'User Name'
    }
  })
  name: string;

  @FormProp({
    render: {
      vType: 'text',
      label: 'User Email Address'
    }
  })
  email: string;

  @FormProp({
    flatten: {
      street: {
        required: true,
        render: {
          vType: 'text',
          label: 'Street'
        }
      },
      city: {
        required: true,
        render: {
          vType: 'text',
          label: 'City'
        }
      },
      zip: {
        render: {
          vType: 'number',
          label: 'ZIP'
        }
      },
      state: {
        defaultValue: 'CA',
        render: {
          label: 'State',
          vType: 'select',
          data: {
            options: [
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
