import { Prop, Relation, Identity, Model } from '@tdm/core';
import { Validators } from '@angular/forms';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

import { User } from './user';

@Model()
@FormModel()
export class Post {

  @Identity()
  @FormProp({
    render: {
      ordinal: 1,
      type: 'number',
      label: 'Post ID',
      required: true,
      data: { min: 1 }
    }
  })
  id: number;

  @FormProp({
    render: {
      ordinal: 5,
      type: 'text',
      label: 'Post Content',
      required: true
    }
  })
  content: string;

  @FormProp({
    render: {
      ordinal: 3,
      type: 'text',
      label: 'Post Title',
      required: true
    }
  })
  title: string;

  @FormProp({
    render: {
      ordinal: 4,
      type: 'text',
      label: 'Post Summery'
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
      data: { selections: [ { value: 'Adult' }, { value: 'Teenage' }, { value: 'Kids' }] }
    }
  })
  audience: 'Adult' | 'Teenage' | 'Kids';

  @Prop()
  @Relation()
  @FormProp({
    render: {
      ordinal: 2,
      type: 'childForm',
      label: 'Post Author',
      required: true
    }
  })
  author: User;
}


