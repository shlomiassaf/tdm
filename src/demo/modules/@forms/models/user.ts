import { Identity, Model } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class User {

  @Identity()
  @FormProp({
    required: true,
    render: {
      type: 'number',
      label: 'User ID'
    }
  })
  id: number;

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
    required: true,
    render: {
      type: 'text',
      label: 'Alias'
    }
  })
  alias: string[];

  @FormProp({
    required: true,
    render: {
      label: 'Movies'
    },
    flatten: {
      name: {
        required: true,
        render: {
          type: 'text',
          label: 'Movie Name'
        }
      },
      year: {
        required: true,
        render: {
          type: 'number',
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
          type: 'text',
          label: 'STREET'
        }
      },
      city: {
        required: true,
        render: {
          type: 'text',
          label: 'CITY'
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
          label: 'STATE',
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
      },
      nested: {
        flatten: {
          nested1: {
            required: true,
            render: {
              type: 'text',
              label: 'Nested 1 - Required'
            }
          },
          nested2: {
            render: {
              type: 'number',
              label: 'Nested 2'
            }
          },
          nested3: {
            render: {
              type: 'number',
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
