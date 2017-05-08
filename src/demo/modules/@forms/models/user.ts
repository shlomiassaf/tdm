import { Prop, Identity, Resource } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Resource({ })
@FormModel()
export class User {

  @Identity()
  @FormProp({
    render: {
      type: 'number',
      label: 'User ID',
      required: true
    }
  })
  id: number;

  @FormProp({
    render: {
      type: 'text',
      label: 'User Name',
      required: true
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


