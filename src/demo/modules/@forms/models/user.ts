import { Identity, Model } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class User {

  @Identity()
  @FormProp({
    required: true,
    render: {
      vType: 'number',
      label: 'User ID'
    }
  })
  id: number;

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
    required: true,
    render: {
      vType: 'text',
      label: 'Alias'
    }
  })
  alias: string[];

  @FormProp({
    required: true,
    render: {
      vType: 'none',
      label: 'Movies'
    },
    flatten: {
      name: {
        required: true,
        render: {
          vType: 'text',
          label: 'Movie Name'
        }
      },
      year: {
        required: true,
        render: {
          vType: 'number',
          label: 'Movie Year'
        }
      },
    }
  })
  movies: Array<{ name: string; year: number; }>;

  @FormProp({
    flatten: {
      street: {
        required: true,
        render: {
          vType: 'text',
          label: 'STREET'
        }
      },
      city: {
        required: true,
        render: {
          vType: 'text',
          label: 'CITY'
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
          label: 'STATE',
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
      },
      nested: {
        flatten: {
          nested1: {
            required: true,
            render: {
              vType: 'text',
              label: 'Nested 1 - Required'
            }
          },
          nested2: {
            render: {
              vType: 'number',
              label: 'Nested 2'
            }
          },
          nested3: {
            render: {
              vType: 'number',
              label: 'Nested 3'
            }
          },
        }
      }
    }
  })
  address: {
    street: string;
    city: string;
    zip: number;
    state: 'CA' | 'NY' | 'GA' | 'WY';
    nested: {
      nested1: string;
      nested2: number;
      nested3: number;
    }
  };
}
