import { Model } from '@tdm/ngx-dynamic-forms';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class Hero {
  @FormProp({
    render: {
      vType: 'number',
      label: 'Hero ID'
    }
  })
  id: number;

  @FormProp({
    render: {
      vType: 'text',
      label: 'Hero Name'
    }
  })
  name: string;

  @FormProp({
    render: {
      vType: 'boolean',
      label: 'Super Hero'
    }
  })
  superHero: boolean;
}
