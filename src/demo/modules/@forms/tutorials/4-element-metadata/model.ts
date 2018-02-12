import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Model({
  form: true
})
export class Hero {
  @Prop({
    form: {
      render: {
        vType: 'number',
        label: 'Hero ID'
      }
    }
  })
  id: number;

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Hero Name'
      }
    }
  })
  name: string;

  @Prop({
    form: {
      render: {
        vType: 'date',
        label: 'Hero Birth'
      }
    }
  })
  birth: string;

  @Prop({
    form: {
      render: {
        vType: 'boolean',
        label: 'Has Tracking Device'
      }
    }
  })
  hasTracking: boolean;

  @Prop({
    form: {
      render: {
        vType: 'slideToggle',
        label: 'Double Agent'
      }
    }
  })
  doubleAgent: boolean;

  @Prop({
    form: {
      render: {
        vType: 'slider',
        label: 'BMI Index',
        data: { min: 1, max: 35 }
      }
    }
  })
  bmi: number;

  @Prop({
    form: {
      render: {
        vType: 'select',
        label: 'Super Power',
        data: {
          options: [
            { value: 'selfHealing', label: 'Self Healing' },
            { value: 'flying', label: 'Flying' },
            { value: 'cloaking', label: 'Cloaking' },
            { value: 'cloning', label: 'Cloning' },
            { value: 'invisibility', label: 'Invisibility' }
          ]
        }
      }
    }
  })
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'textarea',
        label: 'Bio',
        data: {
          autoSize: false,
          minRows: 3,
          maxRows: 5
        }
      }
    }
  })
  bio: string;
}
