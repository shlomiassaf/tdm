import { Model, Prop } from '@tdm/ngx-dynamic-forms';

@Model({
  form: true
})
export class HeroAddress {
  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Street',
      }
    }
  })
  street: string;

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'City',
      }
    }
  })
  city: string;

  @Prop({
    form: {
      required: true,
      render: {
        vType: 'text',
        label: 'Zip',
      }
    }
  })
  zip: string;
}

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
              { value: 'cloning', label: 'Cloaning' },
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
        vType: 'form',
        label: 'Address'
      },
      childForm: true
    }
  })
  address: HeroAddress;
}
