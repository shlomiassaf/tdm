/* @tdm-example:plain */
import { Model } from '@tdm/core';
/* @tdm-ignore:plain */
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
/* @tdm-ignore:plain */
export class Hero {
  /* @tdm-ignore:plain */
  @FormProp({
    render: {
      label: 'Hero ID'
    }
  })
  /* @tdm-ignore:plain */
  id: number;

  /* @tdm-ignore:plain */
  @FormProp({
    render: {
      label: 'Hero Name'
    }
  })
    /* @tdm-ignore:plain */
  name: string;

  /* @tdm-ignore:plain */
  @FormProp({
    render: {
      label: 'Super Hero'
    }
  })
  /* @tdm-ignore:plain */
  superHero: boolean;
}
/* @tdm-example:plain */
