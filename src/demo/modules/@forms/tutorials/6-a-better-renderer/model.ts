import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Model({
  form: true
})
export class Hero {
  @Prop({
    form: {
      render: {
        type: 'number',
        label: 'Hero ID'
      }
    }
  })
  id: number;

  @Prop({
    form: {
      render: {
        type: 'text',
        label: 'Hero Name'
      }
    }
  })
  name: string;

  @Prop({
    form: {
      render: {
        type: 'boolean',
        label: 'Has Tracking Device'
      }
    }
  })
  hasTracking: boolean;

  @Prop({
    form: {
      render: {
        type: 'slideToggle',
        label: 'Double Agent'
      }
    }
  })
  doubleAgent: boolean;

  @Prop({
    form: {
      render: {
        type: 'slider',
        label: 'BMI Index',
        data: { min: 1, max: 35 }
      }
    }
  })
  bmi: number;

  @Prop({
    form: {
      render: {
        type: 'select',
        label: 'Super Power',
        data: { options: [
          { value: 'selfHealing', label: 'Self Healing' },
          { value: 'flying', label: 'Flying' },
          { value: 'cloaking', label: 'Cloaking' },
          { value: 'cloning', label: 'Cloaning' },
          { value: 'invisibility', label: 'Invisibility' }
        ]}
      }
    }
  })
  superPower: 'selfHealing' | 'flying' | 'cloaking' | 'cloning' | 'invisibility';
}
