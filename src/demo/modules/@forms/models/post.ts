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
      vType: 'number',
      label: 'Post ID'
    }
  })
  id: number;

  @FormProp({
    required: true,
    render: {
      ordinal: 5,
      vType: 'radio',
      label: 'Post Content'
    }
  })
  content: string;

  @Prop({
    form: {
      required: true,
      render: {
        ordinal: 3,
        vType: 'text',
        label: 'Post Title'
      }
    }
  })
  title: string;

  @Prop({
    form: {
      render: {
        ordinal: 4,
        vType: 'text',
        label: 'Post Summery'
      }
    }
  })
  tldr: string;

  @FormProp({
    render: {
      ordinal: 6,
      vType: 'slider',
      label: 'Level',
      data: { min: 1, max: 5}
    }
  })
  level: number;

  @FormProp({
    render: {
      ordinal: 6,
      vType: 'radio',
      label: 'Audience',
      data: {
        options: [ { value: 'Adult' }, { value: 'Teenage' }, { value: 'Kids' }]
      }
    }
  })
  audience: 'Adult' | 'Teenage' | 'Kids';

  @Prop()
  @Relation()
  @FormProp({
    required: true,
    childForm: true,
    render: {
      vType: 'none',
      ordinal: 2,
      label: 'Post Author'
    }
  })
  author: User;
}
