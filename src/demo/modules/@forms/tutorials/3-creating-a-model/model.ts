import { Model } from '@tdm/ngx-dynamic-forms';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
export class Hero {
  @FormProp({
    render: {
      label: 'Hero ID'
    }
  })
  id: number;

  @FormProp({
    render: {
      label: 'Hero Name'
    }
  })
  name: string;

  @FormProp({
    render: {
      label: 'Super Hero'
    }
  })
  superHero: boolean;
}
