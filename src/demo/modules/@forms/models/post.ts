import { Prop, Relation, Identity, Model } from '@tdm/core';
import { Validators } from '@angular/forms';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

import { User } from './user';

@Model({
  form: undefined
})
export class Post {

  @Identity()
  @FormProp({
    required: true,
    render: {
      ordinal: 1,
      type: 'number',
      label: 'Post ID',
      data: { min: 1 }
    }
  })
  id: number;

  @FormProp({
    required: true,
    render: {
      ordinal: 5,
      type: 'text',
      label: 'Post Content'
    }
  })
  content: string;

  @Prop({
    form: {
      required: true,
      render: {
        ordinal: 3,
        type: 'text',
        label: 'Post Title'
      }
    }
  })
  title: string;

  @Prop({
    form: {
      render: {
        ordinal: 4,
        type: 'text',
        label: 'Post Summery'
      }
    }
  })
  tldr: string;

  @FormProp({
    render: {
      ordinal: 6,
      type: 'slider',
      label: 'Level',
      data: { min: 1, max: 5}
    }
  })
  level: number;

  @FormProp({
    render: {
      ordinal: 6,
      type: 'radio',
      label: 'Audience',
      data: { options: [ { value: 'Adult' }, { value: 'Teenage' }, { value: 'Kids' }] }
    }
  })
  audience: 'Adult' | 'Teenage' | 'Kids';

  @Prop()
  @Relation()
  @FormProp({
    required: true,
    childForm: true,
    render: {
      ordinal: 2,
      label: 'Post Author'
    }
  })
  author: User;
}
