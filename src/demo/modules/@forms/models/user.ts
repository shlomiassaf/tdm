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
}
