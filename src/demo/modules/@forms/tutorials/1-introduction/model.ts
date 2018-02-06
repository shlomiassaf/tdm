/* @tdm-example:DEMO-2 */
import { Validators } from '@angular/forms';
import { Model } from '@tdm/core';
import { FormModel, FormProp } from '@tdm/ngx-dynamic-forms';

@Model()
@FormModel()
/* @tdm-example:DEMO-1 */
export class UIDeveloper {
  /* @tdm-ignore:DEMO-1 */
  @FormProp({
    required: true,
    render: {
      vType: 'text',
      label: 'Developer Name'
    }
  })
  /* @tdm-ignore:DEMO-1 */
  name: string;

  /* @tdm-ignore:DEMO-1 */
  @FormProp({
    required: true,
    render: {
      vType: 'number',
      label: 'Year Of Birth'
    },
    validators: Validators.compose([Validators.min(1900), Validators.max(new Date().getFullYear())])
  })
  /* @tdm-ignore:DEMO-1 */
  yearOfBirth: number;

  /* @tdm-ignore:DEMO-1 */
  @FormProp({
    required: true,
    render: {
      vType: 'radio',
      label: 'Gender',
      data: {
        options: [
          { value: 'male', label: 'MALE' },
          { value: 'female', label: 'FEMALE' },
          { value: 'other', label: 'OTHER' },
        ]
      }
    }
  })
  /* @tdm-ignore:DEMO-1 */
  gender: 'male' | 'female' | 'other';

  /* @tdm-ignore:DEMO-1 */
  @FormProp({
    render: {
      vType: 'select',
      label: 'Framework',
      data: {
        options: [
          { value: 'angular' },
          { value: 'react' },
          { value: 'vue' },
          { value: 'ember' },
          { value: 'knockout' },
          { value: 'other' }
        ]
      }
    }
  })
  /* @tdm-ignore:DEMO-1 */
  framework: 'angular' | 'react' | 'vue' | 'ember' | 'knockout' | 'other';
}
/* @tdm-example:DEMO-1 */
/* @tdm-example:DEMO-2 */
